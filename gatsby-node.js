const path = require('path')
const _ = require('lodash')
const gatsbyImage = require('gatsby-image')
const TreeModel = require('tree-model')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

const tree = new TreeModel()
const treeRoot = tree.parse(
  {
    name: 'World', children: [
      {
        name: 'Peru', children: [
          { name: 'Cusco'},
          { name: 'Pisac' }
        ]
      },
      {
        name: 'Canada', children: [
          {name: 'Banff'},
          {name: 'Calgary'}
        ]
      },
      {name: 'Cuba'}
    ]
  }
);

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  let slug
  // Search for MDX filenodes
  if (node.internal.type === 'Mdx') {
    // If the frontmatter has a "slug", use it
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    }
    // If not derive a slug from the "title" in the frontmatter
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    }
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  console.log('create pages')
  const { createPage } = actions

  const projectTemplate = require.resolve('./src/templates/project.js')

  const result = await wrapper(
    graphql(`
      {
        images:allS3Image (filter:{Url:{regex:"/.*places.*/"}}) {
          edges {
            node {
                Url 
                Key
                localFile {
                  childImageSharp {
                      fixed(width: 800, height: 534) {
                          base64
                          width
                          height
                          src
                          srcSet
                      
                      }
                  }
              }
            }
          }
        }
        projects: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fileAbsolutePath
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `)
  )
  const projectPosts = result.data.projects.edges

  projectPosts.forEach((edge, index) => {
    console.log(result.data.projects)
    const next = index === 0 ? null : projectPosts[index - 1].node
    const prev = index === projectPosts.length - 1 ? null : projectPosts[index + 1].node

    createPage({
      path: edge.node.fields.slug,
      component: projectTemplate,
      context: {
        slug: edge.node.fields.slug,
        // Pass the current directory of the project as regex in context so that the GraphQL query can filter by it
        absolutePathRegex: `/^${path.dirname(edge.node.fileAbsolutePath)}/`,
        prev,
        next,
      },
    })
  })

  
  const placeGalleryTemplate = require.resolve('./src/templates/placeGallery.js')

  treeRoot.walk(function (place) {
    const placeName = place.model.name;
    // Halt the traversal by returning false
    console.log('========')
    console.log('walking ...')
    console.log(place.model.name)
    let children = place.all()
    let subplaces = children.map(x => _.get(x,['model', 'name'])) 
    console.log('subplaces')
    console.log(subplaces)
    let placeRegex = '/'+subplaces.join('|')+'/'
    console.log(placeRegex)
    createPage({
            path: placeName,
            component: placeGalleryTemplate,
            context: {
              placeFilter: placeRegex,
              place: placeName,
            }
          })
})
}
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

  const placeGalleryTemplate = require.resolve('./src/templates/placeGallery.js')

  treeRoot.walk(function (place) {
    const placeName = place.model.name;
    let children = place.all()
    let subplaces = children.map(x => _.get(x,['model', 'name'])) 
    let placeRegex = '/'+subplaces.join('|')+'/'
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
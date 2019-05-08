import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Gallery from 'react-photo-gallery';
import { GalleryWithLightBox } from '../components/index'

import { Layout, ProjectHeader, ProjectPagination, SEO } from '../components'

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
  position: relative;
  padding: 2rem 0 0 0;
`

const Content = styled.footer`
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  font-size: 0.9rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${props => props.theme.colors.bg};
`

const OuterWrapper = styled.div`
  padding: 0 ${props => props.theme.contentPadding};
  margin: -10rem auto 0 auto;
`

const InnerWrapper = styled.div`
  position: relative;
  max-width: ${props => `${props.theme.maxWidths.project}px`};
  margin: 0 auto;
`

const PlaceGallery = ({ data: {
    images: { edges }, coverImg
  }, pageContext: {place, placeFilter }
}) => {
    console.log(edges);
    console.log('??')
    console.log(coverImg)
 const images = edges.map((img, id) => {return {src: img.node.localFile.childImageSharp.fixed.src, width: 6, height: 4}} )
console.log(images)
  return (
    <Layout customSEO>
      <BG>
        <Content><h1>{place}</h1>
        <GalleryWithLightBox photos={images} direction='row'/>
        </Content>

      </BG>
    </Layout>
  )
}

export default PlaceGallery

PlaceGallery.propTypes = {
  pageContext: PropTypes.shape({
    place: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    images: PropTypes.object.isRequired,
  }).isRequired,
}

PlaceGallery.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}

export const pageQuery = graphql`
query ($placeFilter: String!) {
images:allS3Image (
    filter: {
        Url: {regex: $placeFilter}  
    }
    ) {
      edges {
        node {
            Url 
            localFile {
              childImageSharp {
                  fixed(width: 800, height: 534) {
                    ...GatsbyImageSharpFixed
                  }
              }
          }
        }
      }
    }
  }
`

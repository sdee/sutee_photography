import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, ProjectHeader, ProjectPagination, SEO } from '../components'
import config from '../../config/site'

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

const PlaceGallery = (props) => {
    console.log(props)
  return (
    <Layout customSEO>
      <BG>
        <Content><h1>{props.pageContext.place}</h1></Content>
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

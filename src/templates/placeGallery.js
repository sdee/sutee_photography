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

const PlaceGallery = ({ pageContext: { place }}) => {

  return (
    <Layout customSEO>
      
      <BG>
        <Content><h1>{place}</h1></Content>
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

  })
}

PlaceGallery.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}

// export const pageQuery = graphql`
 
// query PlaceQuery {
//     places {

//     }
// }
// `

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Card, Header, Layout } from '../components'
import config from '../../config/site'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.theme.gridColumns}, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    position: static !important;
  }
`

const Content = styled.div`
  margin: -6rem auto 0 auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 0 ${props => props.theme.contentPadding} 6rem;
  position: relative;
`

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const Index = (props) => (
  <Layout>
    <BG>
      <Content>
        <Img fixed={props.data.images.edges[0].node.localFile.childImageSharp.fixed} />
      </Content>
    </BG>
  </Layout>
)

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
query IndexQuery {
  images:allS3Image {
    edges {
      node {
          Url
          Key
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
`;


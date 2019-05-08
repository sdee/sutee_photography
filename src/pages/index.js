import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Card, Header, Layout } from '../components'
import config from '../../config/site'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'

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
color: ${props => props.theme.colors.secondary};
text-align: center;
font-size: 0.9rem;
  margin: 0rem auto 0 auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 0 ${props => props.theme.contentPadding} 6rem;
  position: relative;
`

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const Index = ({
  data: {
    images: { edges },
  },
}) => (
  <Layout customSEO>
  <BG>
    <Content>
      <br/>
      <h1>Sutee Dee</h1>
    <Carousel controls={true}>
    {console.log(edges)}
      {edges.map((img, idx) => (
        <Carousel.Item className='text-center'>
          <Img className='img-fluid' fixed={img.node.localFile.childImageSharp.fixed} />
        </Carousel.Item>)

      )}

    </Carousel>
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
  images:allS3Image (filter:{Url:{regex:"/.*Cuba.*/"}}) {
    edges {
      node {
          Url 
          Key
          localFile {
            childImageSharp {
                fixed(width: 1200, height: 800 ) {
                  ...GatsbyImageSharpFixed
                }
            }
        }
      }
    }
  }
}
`;


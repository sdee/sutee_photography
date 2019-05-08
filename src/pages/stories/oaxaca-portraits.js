import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Card, Header, Layout } from '../../components'
import config from '../../../config/site'
import { GalleryWithLightBox } from '../../components/index'
import { shuffle } from 'lodash';
const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
  position: relative;
  padding: 2rem 0 0 0;
`

const Content = styled.footer`
  color: ${props => props.theme.colors.secondary};
  text-align: left;
  font-size: 0.9rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-left: 2rem;
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
const OaxacaPortraits= (props) => { 
  const images = new Map([
    ['stride', props.data.horzStoryImages.edges[0].node.localFile.childImageSharp.fixed],
    ['costume', props.data.horzStoryImages.edges[1].node.localFile.childImageSharp.fixed],
    ['cover', props.data.horzStoryImages.edges[2].node.localFile.childImageSharp.fixed],
    ['procession', props.data.horzStoryImages.edges[3].node.localFile.childImageSharp.fixed],
    ['blue', props.data.horzStoryImages.edges[4].node.localFile.childImageSharp.fixed],
    ['church', props.data.vertStoryImages.edges[0].node.localFile.childImageSharp.fixed],
    ['garlic', props.data.vertStoryImages.edges[1].node.localFile.childImageSharp.fixed]
  ])

  // const coverImage = props.data.coverImage.edges[0].node.localFile.childImageSharp.fluid.src;
  const horzNodes = props.data.horizontalImages.edges.map((img, id) => {return {src: img.node.localFile.childImageSharp.fluid.src, width: 3, height: 2}} )
  const vertNodes = props.data.verticalImages.edges.map((img, id) => {return {src: img.node.localFile.childImageSharp.fluid.src, width: 4, height: 6}} )
  return (
  
  <Layout>
    <BG>
    <Content>
    <h1>Portraits of Oaxaca</h1>
    <Img fixed={images.get('cover')}/>
    <p>One year ago, I hardly took photos of people. I first started dabbling in photography about fifteen years ago in order to take photos of landscape and buildings that I saw while travelling. My idea of a 'perfect photo' back then was one in which there was not a soul there to obscure the famous landmarks that I put so much effort into seeing.</p>
    <p>A 'people to people' trip to Cuba last year got me hooked to photographing people. Now, after a year of photographing cultural events and everyday life in other countries, I feel that a photo without a person in it feels a bit empty.</p>
    <Img fixed={images.get('procession')}/><br/>
    <p>My most recent trip to Mexico my trip overlapped with Semana Santa (holy week). I tried capturing portraits that underscored the emotion and reverence of these events while also taking portraits that captured the overall spirit of Oaxaca. </p>
    <p>A few things that I learned:</p>
    <ul>
    <li>I learned that you can get much closer than you might think is comfortable.</li>
    <br/>
    <Img fixed={images.get('costume')}/><br/>
    <br/>
    <li>With a wide lens, you can get close while still capturing the context.</li>
    <br/>
    <Img fixed={images.get('church')}/><br/>
    <br/>
    <li>The trickest part of photographing people are the eyes. They really tell you whether the subject is comfortable or not.  Sometimes they draw you in and tell the whole story. Other times, they lead you elsewhere.</li>
    <br/>
    <Img fixed={images.get('blue')}/><br/>
    <br/>
    <li>Chase the light. In a bustling place like a market, there are more potential subjects that you can capture. Go where the light is best. </li>
    <br/>
    <Img fixed={images.get('garlic')}/><br/>
    <li>Finally, be ready to capture whatever comes across your way.</li>
    <br/>
    <Img fixed={images.get('stride')}/><br/>
    </ul> 
    </Content>
    </BG>
  </Layout>
)}

export default OaxacaPortraits

export const pageQuery = graphql`
query {
  horzStoryImages:allS3Image (
    filter: {
        Url: {regex: "/DSC00589|DSC01236|DSC00268.jpg|DSC00184|DSC01747/"}  
    },
    sort: {
      fields: [Url],
      order: ASC
    }
    ) {
      edges {
        node {
            Url 
            localFile {
              childImageSharp {
                fixed(width: 800) {
                    ...GatsbyImageSharpFixed 
                }
              }
          }
        }
      }
    }
    vertStoryImages:allS3Image (
      filter: {
          Url: {regex: "/DSC00725|DSC00243/"}  
      },
      sort: {
        fields: [Url],
        order: ASC
      }
      ) {
        edges {
          node {
              Url 
              localFile {
                childImageSharp {
                  fixed(height: 700) {
                      ...GatsbyImageSharpFixed 
                  }
                }
            }
          }
        }
      }
verticalImages:allS3Image (
    filter: {
        Url: {regex: "/\/Oaxaca\/Portraits\/vertical\//"}  
    }
    ) {
      edges {
        node {
            Url 
            localFile {
              childImageSharp {
                fluid(maxHeight: 900) {
                    ...GatsbyImageSharpFluid  
                }
              }
          }
        }
      }
    }
    horizontalImages:allS3Image (
      filter: {
          Url: {regex: "/\/Oaxaca\/Portraits\/horizontal\//"}  
      }
      ) {
        edges {
          node {
              Url 
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                      ...GatsbyImageSharpFluid
                  }
                }
            }
          }
        }
      }
  }
`
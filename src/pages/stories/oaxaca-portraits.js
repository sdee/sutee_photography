import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Card, Header, Layout } from '../../components'
import config from '../../../config/site'


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
const OaxacaPortraits= ({
}) => (
  
  <Layout>
    <BG>
    <Content>
    <h1>Portraits of Oaxaca</h1>
    <p>Just over a year ago, I hardly took photos of people. I first started dabbling in photography about fifteen years ago in order to take photos of landscape and buildings that I saw while travelling. My idea of a 'perfect photo' back then was one in which there was not a soul there to obscure the famous landmark that I put so much effort into seeing.</p>
    <p>A 'people to people' trip to Cuba last year got me hooked to photographing people. Now, after a year of photographing cultural events and everyday life in other countries, I feel that a photo without a person in it feels a bit empty.</p>
    <p>My most recent trip to Mexico my trip overlapped with Semana Santa (holy week). I tried capturing portraits that underscored the emotion and reverence of these events while also taking portraits that captured the overall spirit of Oaxaca. </p>
    <p>Things I learned</p>
    <ul>
    <li>I learned that you can get much closer than you might think is comfortable.</li>
    <li>With a wide lens, you can get close while still capturing the context.</li>
    <li>The trickest part of photographing people are the eyes. They really tell you whether the subject is comfortable or not. When captured properly, they tell the whole story.</li>
    <li>The greatest moments are the ones where the you find the perfect lighting for a subject.</li>
    </ul> 
    </Content>
    </BG>
  </Layout>
)

export default OaxacaPortraits

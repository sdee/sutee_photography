import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Card, Header, Layout } from '../components'
import config from '../../config/site'


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
const About = ({
}) => (
  
  <Layout>
    <BG>
      <Content>
      <h1>About Me</h1>
      <p>I'm Sutee. I like combining things especially things that may not seem to go together at first.</p>
      <p>I think it's easiest to get to know me by following one of these threads and seeing where they lead. However, the best way to really know me is to travel with me, try my food, or see the world through my photos.</p>
      <h3>Sense of Place</h3>
      <p>I think a lot about places. I think about what makes a location a place-what gives it a sense of place, what makes it tick, what makes it work or not work. Mostly, I think where to go next.</p>
      <p>I grew up in Georgia (no, not Atlanta). My parents emigrated from Thailand, and my mom made sure my sister and I maintained a close connection to our people. As a baby, I first visited Bangkok where most of my extended family lives. I do not remember that trip, but I remember many subsequent summer trips. These trips got me used to idea that your life does not have to be confined to one locale.</p>
      <h3>Travel</h3>
      <p>Every time, I tell myself that I'm done traveling, I discover a new way of travel. </p>
      <p>Nowadays, I like to travel to places one or two weeks at a time. I like to stay in a local neighborhood and work when I travel because it helps me develop a routine, even it is a routine that only last a couple of days. </p>
      <p>Lately, I find myself returning to places versus going to new places. </p>
      <h3>Biology and Software</h3>
      <p>I've been interested in combining software and biology since high school and have been lucky that there was a viable career track with the intersection of my interests. </p>
      <h3>Optimization and Adventure</h3>
      <p>The closest thing I have to a life philosophy is my belief that you should optimize the boring things in life to make more room for the interesting things.</p>
      <h3>Food</h3>
      <p>I have a deep interest in food, but I'm more likely to be found eating street food or getting pearls of kitchen wisdom from a grandmother than at a Michelin star restaurant. I rarely find long lines or hard-to-get reservations worth it. Instead, I seek places where there's good food everywhere.</p>
      <h3>Photography</h3>
      <p>I picked up a camera around the same time I started traveling. For many years, I would forget the technical aspects of photography and re-learn them each trip. Then, I spent about a year with my camera a constant companion. When done right, I think having a camera brings you closer to a culture than the other way around. I used to photography landscapes and momuments, waiting for the moment where there were no people. Now, I think people make the photo.</p>
    </Content>
    </BG>
  </Layout>
)

export default About

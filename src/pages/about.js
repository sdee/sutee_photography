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
      <p>I think it's easiest to get to know me by following one of these threads and seeing where they lead:</p>
      <h3>Sense of Place</h3>
      <p>I think a lot about places. I think about what makes a location a place-what gives it a sense of place, what makes it tick, what makes it work or not work. Mostly, I think where to go next. </p>
      <p>I grew up in Georgia (no, not Atlanta). My parents emigrated from Thailand, and my mom made sure my sister and I maintained a close connection to our people. I first visited as a baby. I do not remember that trip, but I remember many subsequent trips. That got me used to idea that your life does not have to be confined to one locale.</p>
      <h3>Travel</h3>
      <p>Every time, I tell myself that I'm done traveling, I discover a new way of travel. </p>
      <p>Nowadays, I like to travel to places one or two weeks at a time. I like to work when I travel because it helps me develop a routine for a place, even it is a routine tht only last a couple of days. </p>
      <p>Lately, I find myself returning to places versus going to new places. </p>
      <h3>Biology and Software</h3>
      <p>I've been interested in combining software and biology since high school and have been lucky that the intersection of my interests formed a viable career track. </p>
      <h3>Optimization and Adventure</h3>
      <p>The closest thing to a life philosopy that I have is my belief that you should optimize the boring things in life to make more room for the interesting things.</p>
      </Content>
    </BG>
  </Layout>
)

export default About

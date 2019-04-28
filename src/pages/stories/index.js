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
const StoriesIndex = ({
}) => (
  
  <Layout>
    <BG>
      <Content>

    </Content>
    </BG>
  </Layout>
)

export default StoriesIndex

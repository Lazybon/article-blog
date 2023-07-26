import React from 'react'
import Content from '../Components/Content/Content'
import Bio from '../Components/Bio/Bio'
import LatestArticles from '../Components/LatestArticles/LatestArticles'

const Home = () => {
  return (
    <Content>
      <Bio />
      <LatestArticles />
    </Content>
  )
}

export default Home

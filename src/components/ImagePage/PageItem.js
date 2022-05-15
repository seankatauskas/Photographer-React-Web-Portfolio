import React from 'react'
import {Link} from 'react-router-dom';
import { ImageContainer, Sub, EmailJR, NumLink } from './PageElements'

function PageItem(props) {
  return (
    <div className='ImageWrapper'>

      <ImageContainer>
      <Link to={props.gallery}>
      <ImageContainer>
      <img src={props.image} />
      </ImageContainer>
      </Link>
      </ImageContainer>

      <Sub>
        <EmailJR>{props.text}</EmailJR>
        <NumLink to={props.back}>Previous</NumLink>
        <NumLink to={props.next}>Next</NumLink>
      </Sub>
    </div>
  )
}

export default PageItem
import React from 'react'
import image from '../Assets/news-image.jpg'

const NewsDetails = (props) => {
  return (
    <div className='container '>
      <img src={props.src ? props.src:image} className='card-img' alt="breaking-news-image" />
      <div className="card-body">
        <h1>{props.author ? props.author :"unknown author"} </h1>
        <h5>{props.title}</h5>
        
        <p style={{color:'#3d3d3d', lineHeight:'1.5', marginBottom:20 , fontSize:20}}>{props.description}</p>
        <a href={props.url} target='_blank' rel='noopener noreferrer' className='btn'>Read More</a>
      </div>
    
    </div>
  )
}

export default NewsDetails;

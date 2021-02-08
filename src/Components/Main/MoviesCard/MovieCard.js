import React from 'react'
import { Card,Button } from "react-bootstrap";
import Rate from '../../Rate';
export const MovieCard = ({movie}) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    
    <Card.Text>
      {/* {movie.rate} */}
     <Rate rating={movie.rate} />

    </Card.Text>
   
  </Card.Body>
</Card>
    </div>
  )
}

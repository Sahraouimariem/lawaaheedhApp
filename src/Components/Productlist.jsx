import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import listproduct from './data';

function Productlist() {
    const [products, setProducts] = useState([])
    
  
   
  return (
          <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
            {listproduct.slice(0,4).map(el=>

            
 <Card style={{ width: '18rem',height:"500px",marginTop:"10px" }}>
      <Card.Img style={{height:"40%"}} variant="top" src={el.image[0]} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title> 
        <Card.Text style={{overflowY:"auto",height:"200px"}}>
        {el.description}
        </Card.Text>
        <Card.Text>
       <b>Price :</b> {el.price}$
        </Card.Text>


        
      </Card.Body>
    </Card>
    )}
    
    </div>
    
  )
}

export default Productlist

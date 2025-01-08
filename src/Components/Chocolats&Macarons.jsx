import React from 'react'
import Card from 'react-bootstrap/Card';
import listproduct from './data';
function ChocolatsMacarons() {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"10px",marginBottom:"30px"}}>
        <img style={{height:"500px",}} src="https://masmoudi.tn/cdn/shop/files/chocolats_2.jpg?v=1708604941" alt="" />

        </div>
        <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
            {listproduct.slice(20,29).map(el=>

            
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
    </div>
  )
}

export default ChocolatsMacarons
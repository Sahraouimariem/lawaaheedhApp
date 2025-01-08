import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import listproduct from "./data";
import { Link } from "react-router-dom";
function Allproducts() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        paddingBottom: "50px",
      }}
    >
      {listproduct.slice(0,19).map(el=> (
        <Link to={"/product/"+el.id} style={{textDecoration:"none"}}>
          <Card style={{ width: "18rem", height: "300px" }}>
          <Card.Img style={{ height: "70%" }} variant="top" src={el.image[0]} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>

            <Card.Text>
              <b>Price :</b> {el.price}$
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      
      ))}
    </div>
  );
}

export default Allproducts;

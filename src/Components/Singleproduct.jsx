import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import listproduct from "./data";

function Singleproduct() {
  const {id}=useParams()
  const [product,setProduct]=useState({})
  useEffect(()=>{
setProduct(listproduct.find(el=>el.id==id))
  },[])
  console.log(id)
  console.log(product)
  console.log(listproduct)
  return (
    <div>
      <div>
      <img src="" alt="" />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Singleproduct
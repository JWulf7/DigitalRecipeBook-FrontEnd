import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const CategoryComponent = () => {


    const { name } = useParams();


  return (
    <>
    <div>{name}</div>
    <div>CategoryComponent</div>
    </>
  )


}

export default CategoryComponent
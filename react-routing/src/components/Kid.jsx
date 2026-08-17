import React from 'react'
import { parsePath, useParams } from 'react-router'

const Kid = () => {

    let params = useParams()
    console.log(params);
    

  return (
    <div>
        <h1>{params.id} Kid's</h1>
    </div>
  )
}

export default Kid
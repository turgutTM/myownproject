import React from 'react'
import {Link,useRouteError} from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h1>Error</h1>
      <Link to="/">back home</Link>
    </div>
  )
}

export default Error

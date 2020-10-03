import React from 'react'


const ToDo = ({ id, text, completed }) => {
  console.log(text, 'iamtext')
  return(
    <li>{text}</li>
  )
}

export default ToDo
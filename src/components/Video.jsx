import React from 'react'

const Video = (props) => {
    const style = {
        color:props.color,
        backgroundColor:props.bgColor
    }
  return (
    <h1 style={style}>Video</h1>
  )
}

export default Video
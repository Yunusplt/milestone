import React from 'react'
import imgNot from "../assets/drawing-2802_512.gif"

const NotFound = () => {
  return (
    <div
      style={{
        backgroundColor: "#FBFDF9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 250,
      }}
    >
      <img src={imgNot} alt='NotFound'/>
    </div>
  );
}

export default NotFound
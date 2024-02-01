import { memo } from "react";
import React from 'react'

function ChildA( learning,count) {
    console.log("child component");
  return (
    <div>
        
    </div>
  )
}

export default  memo(ChildA)

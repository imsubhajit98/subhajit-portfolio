import PropTypes from 'prop-types';
import React from 'react'

const BlurBlob = ({position, size})=> {
    // Destructure position ans size

    const {top,left}=position;
    const {width, height}=size
  return (
    <div className='absolute' 
    style={{
        top:top,
        left:left,
        width:width,
        height:height,
        transform:'transale[-50%, -50%]'
    }}
    >

        <div className='w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob'></div>
      
    </div>
  )
}

// Define Prop Type
BlurBlob.prototypes={
    position:PropTypes.shape({
        top:PropTypes.string,
        left:PropTypes.string
    }),
    size:PropTypes.shape({

    })
}


export default BlurBlob ;
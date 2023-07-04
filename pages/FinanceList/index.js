import React from 'react'
import CardComponent from './CardComponent'

const index = () => {
  return (
    <>
      <div className='body col center-a'>
      <CardComponent/>
      </div>
      <style jsx>
        {`
          .body 
          {
            width: min(1600px, 69%);
            height: 100%;
            position: relative;
            overflow-x: hidden;
            // padding: 4em 2em; 
            margin-top: 9%;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </>
  )
}

export default index

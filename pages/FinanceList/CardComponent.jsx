import React from 'react'

const CardComponent = () => {
  return (
    <>
        <div className='MainCardClass'>
            <h1>Top Performing Tool</h1>
            <div className='cardrowClass'>
                <div className='cdivClass'>div1</div>
                <div className='cdivClass'>div2</div>
                <div className='cdivClass'>div3</div>
            </div>
        </div>
        <style jsx>
            {`
                .MainCardClass
                {
                    width:100%; 
                }
                .cardrowClass
                {
                    
                }
                .cdivClass
                {
                    width:100%;
                }
            `}
        </style>
    </>
  )
}

export default CardComponent

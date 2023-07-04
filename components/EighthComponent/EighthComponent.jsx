import React from 'react'

const EighthComponent = () => {
  return (
    <>
        <div className='row'>
            <h1>Join the Sigilverse Today!</h1>
            <p>Experience REAL YIELD and earn passive income by staking your Sigil tokens!</p>
        </div>

        <style jsx>
        {`
            @media only screen and (max-width:768px)
            {
                .row
                {            
                    width: 100%;
                    min-width: 90%;
                    padding-inline: 10px;
                    
                }
            }
            .row
            {
                margin-top:4%;
                background-color:#006DF8;
                height:260px;
                display: flex;
                flex-direction: column;
                // padding-inline: 35%;
                justify-content: center;
                text-align:center;
                
                
            }
            .row h1
            {
                font-size:44px;
                margin-bottom: -1%;
                // margin-left:5%;
                color:white;
                
            }
            .row p
            {
                color:white;
            }
        `}
        </style>
    </>
  )
}

export default EighthComponent

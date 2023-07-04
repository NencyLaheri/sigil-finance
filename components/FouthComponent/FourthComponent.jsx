import React from 'react'

const FourthComponent = () => {
  return (
    <>
        <div className='row'>
            <h1>How it Works?</h1>
            <p>Sigil Finance is an Ethereum-based platform that brings the multi-trillion dollar industry of mutual funds to DeFi.
                 On our platform, anybody can be a fund manager and you can <span>invest in your community, not Wall Street.</span> 
            </p>
            <p>At the core of Sigil Finance are Sigil pools. These pools operate as a <span>modernized version of a traditional mutual fund.</span>  
                This allows you to have a diverse and profitable portfolio built and managed for you.
            </p>
        </div>
        <style jsx>{`
                .row
                {
                    display: grid;
                    justify-content: center;
                    width: 75%;
                    margin-top:15%;
                    
                    
                }
                .row h1
                {
                    font-size:44px;
                    text-align:center;
                    margin-bottom:5px;
                    // color:#E1E8F0;
                }
                .row p
                {
                    
                    text-align: center;
                    // color:#E1E8F0;
                }
                .row span
                {
                    color:#006DF8;

                }
                
			`}</style>
    </>
  )
}

export default FourthComponent
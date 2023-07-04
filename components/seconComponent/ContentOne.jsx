import React from 'react'

const ContentOne = () => {
  return (
    <>
        <div className="contentOne">     
            <p className='headingOneClass'>Welcome to <span>SigilFinance</span> </p>
            <h1>Defi Made Easy!</h1>
            <p className='text-green-500 sm:text-red-500'>Sigil Finance removes the stress and complexity of managing a portfolio with the power of decentralized mutual funds.</p>
            <p><a href="https://app.sigil.finance"><button className="button primary launch">Launch dApp</button></a></p>
        </div>

        <style jsx>{`


                @media only screen and (max-width:768px)
                {
                    .headingOneClass
                    {
                        width:100%;
                    }
                    .contentOne{
                        width:100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        // margin-top:20%;
                        
                    }
                    p
                    {
                        text-align:center;
                    }
                    h1
                    {
                        text-align:center;
                    }
                }
            

                .contentOne
                {
                    // margin-top:-20%;
                }
                .headingOneClass
                {
                    font-size:30px;
                    margin-bottom:-15px;
                    // color:#E1E8F0;
                }
                h1
                {
                    font-size:73px;
                    margin-bottom:20px;
                    // color:#E1E8F0;
                }
               
                p
                {
                    font-size:16px;
                    // color:#E1E8F0;
                    
                }

                .launch {
                    font-size: 1em;
                    padding: 0.9em 1.8em;
                    border-radius: 30px;
                    margin-top:40px;
                    border:1px solid #006DF8;
                }
                .launch:hover
                {
                    background-color:transparent;
                    border:1px solid #006DF8;
                    color:#006DF8;
                }
                span
                {
                    color:#006DF8;
                }
			`}</style>
    </>
  )
}

export default ContentOne
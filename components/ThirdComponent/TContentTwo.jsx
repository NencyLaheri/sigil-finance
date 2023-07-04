import React from 'react'

const TContentTwo = () => {
  return (
    <>
        <div className='ContentClass'>
            <h1>What is Sigil Finance?</h1>
            <p>Sigil Finance revolutionizes DeFi with the worlds first decentralized marketplace for connecting asset managers and investors.</p>
            <h2>Asset Management</h2>
            <p>Maximize your earnings. With Sigil you have the power to capitalize on your trading expertise and connect with a global investor 
                base, by creating and managing your own Digital Asset Management Systems (DAMS).
            </p>
            <h2>Effortless Investing</h2>
            <p>Say goodbye to the stress of trading digital assets. Find top-performing DAMS that deliver consistent results through our 
                investor analytics suite. Invest hassle-free, with asset managers that align with your goals and risk tolerance.
            </p>
            <h2>Passive Income </h2>
            <p>Experience REAL YIELD and earn passive income by staking your Sigil tokens!
            Shape the future of DeFi and join the Sigil Revolution Today
            </p>
        </div>
        <style jsx>{`
            @media only screen and (max-width:768px)
            {
                .ContentClass
                {
                   
                    margin-left: 0%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    margin-top:19%;
                }
            }
            .ContentClass
            {
                // margin-top:30px;
                // margin-left: 30px;
                
            }
            .ContentClass h1
            {
                font-size:44px;
                // color:#E1E8F0;
                
            }
            .ContentClass h2
            {
                font-size:25px;
                // color:#E1E8F0;
            }
        `}</style>

    </>
  )
}

export default TContentTwo
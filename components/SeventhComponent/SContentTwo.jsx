import React from 'react'

const SContentTwo = ({darkMode}) => {
    const a={
        color:"black",
        background:"transparent",
        border:"1px solid black",
    }
    const b={
        color:"white",
        background:"transparent",
        border:"1px solid white",
    }
    console.log("dark mode in sevent thow component-----------",darkMode)
  return (
    <>
        <div className='contentClass flex items-center'>
            <h1>$SIGIL</h1>
            <p>$SIGIL is the token at the heart of the Sigil Finance. It provides utility to the <br /> platform and <span>rewards its holders </span> , giving the 
                community <br /> something to rally around. <br /> You can stake $SIGIL to <span>earn platform fees </span>  on Sigil.
            </p>
            <div className='buttonClass'>
                <p><a href="https://app.sigil.finance"><button className="button primary launch" style={{padding:'12px'}}>Tokenomics</button></a></p>
                <p><a href="https://app.sigil.finance"><button className="button primary launch" style={{padding:'12px'}}>Buy $SIGIL</button></a></p>
            </div>
        </div>

        <style jsx>
        {`
            @media only screen and (max-width:768px)
            {
            //    .contentClass
            //    {    
            //         display: flex;
            //         flex-direction: column;
            //         justify-content: center;
            //         text-align: center;
            //    }

               .buttonClass{
                display:flex;
               }

               .launch{
                margin-right:10px;
               }
               
            }
          
            .contentClass h1
            {
                font-size:44px;
                margin-bottom:3%;
            }
            .launch {
                // font-size: 1em;
                // padding: 0.9em 1.8em;
                // border-radius: 30px;
                // margin-top:20px;
                // border:1px solid #006DF8;
                margin-right:30px;
                // padding-inline: 18px;
                // padding-block: 18px;
                font-size: 16px;
                border-radius: 30px;
                // padding:30px;
                border: 1px solid ${darkMode? "#006DF8" :"#006DF8"};
            }
            .launch:hover
            {
                background-color:transparent;
                border:1px solid #006DF8;
                color:#006DF8;
            }
            .launch1 {
                // font-size: 1em;
                // padding: 0.9em 1.8em;
                // border-radius: 30px;
                // margin-top:20px;
                // border:1px solid #FFFFFF;
                // background:transparent;
                // padding-inline: 20px;
                // padding-block: 15px;
                font-size: 16px;
                border-radius: 30px;
                margin-right:30px;
                background:transparent;
                // border: 1px solid ${darkMode? "black" :"white"};
                // color:${darkMode? "red" :"white"};
                

            }
            .launch1:hover
            {
                background:transparent;
                border:1px solid black;
                color:black;
            }
            
            
            .buttonClass
            {
                display:flex;
            }
            .contentClass span 
            {
                color:#006DF8;
            }
            
        `}
        </style>
    </>
  )
}

export default SContentTwo

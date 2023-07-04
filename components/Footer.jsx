import React from 'react'

const Footer = ({darkMode}) => {
    const ccc=
    {
        backgroundColor:'#F1F5F9',
        color:"black"
    }
    const ddd=
    {
        backgroundColor:'black',
        color:"#F1F5F9"
    }
  return (
    <>
        <div className="footer row center-m center-a" style={{...(darkMode ? ccc : ddd),}}>
            <p>Copyright © 2023 <span>Sigil Finance</span> . All rights reserved.</p>
        </div>

        <style jsx>{`
            @media only screen and (max-width:768px)
            {
                
            }
            .footer {
                width: 100%;
                height: 4em;
                background:black;
            }
            p
            {
                font-size:14px;
            }
            span
            {
               color: #006DF8;

            }
            
        `}</style>
		</>
  )
}

export default Footer
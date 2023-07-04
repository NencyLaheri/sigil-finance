import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className='sbClass' style={{position:"absolute",paddingTop:"90px"}}>
      <ul>
             <li>
               <a href="#" className="block py-2">Home</a>
             </li>
             <li>
               <a href="#" className="block py-2">Tokenomics</a>
             </li>
             <li>
               <a href="#" className="block py-2">Docs</a>
             </li>
             <li>
               <a href="#" className="block py-2">Launch dApp</a>
             </li>
             <li>
               <a href="#" className="block py-2">Home</a>
             </li>
             <li>
               <a href="#" className="block py-2">Tokenomics</a>
             </li>
             <li>
               <a href="#" className="block py-2">Docs</a>
             </li>
             <li>
               <a href="#" className="block py-2">Launch dApp</a>
             </li>
           </ul>
    </div>
    <style jsx>
        {`

            .sbClass
            {
                padding: 1rem .5rem;
                box-shadow: var(--box-shadow);
                font-size: 1rem;
                width: 15rem;
                border-radius: 1rem;
                background-color: var(--main-bg-color);
                position: absolute;
                padding-top: 90px;
                background-color: grey;
                color:red;
                z-index: 999;
                top: 0;
                height: 100%;
                transition: 'width 0.9s ease-in-out',
                

            }
            
        `}
    </style>
    </>
  )
}

export default Sidebar

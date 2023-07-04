import React from 'react'
import Image from 'next/image';
import CImage from '../../public/renders/scImage.png';

const ContentTwo = () => {
  return (
    <>
        <div className='ImageClass'>
            <Image className="logo" src={CImage} alt="A descriptive text about the image"/>
        </div>
        <style jsx>{`
            .ImageClass
            { 
                
                // margin-left:-25%;
                // margin-top:5%;
                // width:170%;
                // height:170%;
            }

          
          

        `}</style>
    </>
  )
}

export default ContentTwo
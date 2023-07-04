import React from 'react'
import Image from 'next/image';
import simg from '../../public/renders/Img.png';

const SContentOne = () => {
  return (
   <>
        <div className='ImageClass1'>
                <Image className="logo" src={simg} alt="A descriptive text about the image"/>
        </div>
        
    </>
  )
}

export default SContentOne

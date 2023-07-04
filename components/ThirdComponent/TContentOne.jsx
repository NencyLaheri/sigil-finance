import React from 'react'
import Image from 'next/image';
import TC1Image from '../../public/renders/ChartImage.png';

const TContentOne = () => {
  return (
    <>
        <div className='ImageClass'>
                <Image className="logo" src={TC1Image} alt="A descriptive text about the image"/>
        </div>
        <style jsx>{`
        `}</style>

    </>
  )
}

export default TContentOne
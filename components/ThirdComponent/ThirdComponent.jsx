import React from 'react'
import TContentOne from './TContentOne'
import TContentTwo from './TContentTwo'

const ThirdComponent = () => {
  return (
    <>
        <div className='row tviewClass'>
            <div className='row content1 '>
                <TContentOne/>
            </div>
            <div className='row content2 '>
                <TContentTwo/>
            </div>
        </div>
        <style jsx>{`
                @media only screen and (max-width:768px)
                {
                    .tviewClass
                    {
                        display:grid;
                    }
                }
                .row
                {
                    // width:105%;
                    // display:flex;
                    // justify-content:space-between;
                    // margin-top:-10%;
                }
                .tviewClass
                {
                    margin-top:12%;
                }
				.content1 {
					
                    width: 100%;
                    
				}
				.content2 {
					
                    width: 100%;
				}
                
			`}</style>
    </>
  )
}

export default ThirdComponent
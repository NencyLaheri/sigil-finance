import React from 'react'
import SContentOne from './SContentOne'
import SContentTwo from './SContentTwo'

const SeventhComponent = ({darkMode}) => {
  return (
    <>
        <div className='row'>
            <div className='content1 col-6'>
                <SContentOne/>
            </div>
            <div className='content2 col-6'>
                <SContentTwo darkMode={darkMode}/>
            </div>
        </div>
        <style jsx>{`
                 @media only screen and (max-width:768px)
                 {
                     .row
                     {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                     }
                     .content1
                     {
                        width:100%;
                     }
                 }
                .row
                {
                    width:100%;
                    display:flex;
                    justify-content:space-between;
                    margin-top:13%;
                    
                }
				.content1 {
					
                    // width: 50%;
                   
				}
				.content2 {
					
                    // width: 50%;
                    // display: flex;
                    // align-items: center
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
			`}</style>
    </>
  )
}

export default SeventhComponent
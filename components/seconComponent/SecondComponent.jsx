import React from 'react'
import ContentOne from './ContentOne'
import ContentTwo from './ContentTwo'

const SecondComponent = () => {
  return (
    <>
        <div className='row desktopViewClass'>
            <div className='content1 '>
                <ContentOne/>
            </div>
            <div className='content2 '>
                <ContentTwo/>
            </div>
        </div>
        {/* <div className='row mobileViewClass'>
            <div className='row content1 '>
                <ContentOne/>
            </div>
            <div className='row content2 '>
                <ContentTwo/>
            </div>
        </div> */}
        <style jsx>{`
                @media only screen and (max-width:768px)
                {
                    .desktopViewClass 
                    {
                        display:grid;
                        margin-top:2%;
                       
                        
                    }
             
                    .content1
                    {
                        width:100%;
                        display:none;
                        // margin-top:-10%;
                        
                    }
                    .content2
                    {
                        width:100%;
                        // margin-right:15%;
                        margin-block:12%;
                        
                    }
                }
              
                .desktopViewClass
                {
                  
                    margin-top:12%;
                    
                }
				.content1 {
					
                    width: 100%;
                    padding-top:6%;
                    display: flex;
                    justify-content: center;
                    // align-items: center;
                   
				}
				.content2 {
					
                    width: 100%;
                    margin-left:10%;
				}
               
			`}</style>
    </>
  )
}

export default SecondComponent
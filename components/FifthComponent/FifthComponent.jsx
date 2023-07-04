import React from 'react'
import Image from 'next/image';
import icon1Image from '../../public/renders/icon1.png';
import icon2Image from '../../public/renders/icon2.png';
import icon3Image from '../../public/renders/icon3.png';
import lineImage from '../../public/renders/line.png';

const FifthComponent = () => {
  return (
    <>
    <div className="row fifthrowView">
        <div className="col-4 colClass">
            <div>
                <Image className="logo" src={icon1Image} alt="description of image"/>
                {/* <Image className="logo" src={lineImage}/> */}
               
            </div>
            <div>
                <h1 className="headingClass">Select a Sigil pool</h1>
                <p>You can view a pool &apos;s past performance and risk rating to make your decision</p>
               
            </div>
        </div>
        
        <div className="col-4 colClass">
            <div>
                <Image className="logo" src={icon2Image} alt="description of image"/>
            </div>
            <div>
                <h1 className="headingClass">Deposit ETH into the pool</h1>
                <p>On deposit, you will receive a tokenized share in the pool proportionate to the value you put in.</p>
            </div>
        </div>
        <div className="col-4 colClass">
            <div>
                <Image className="logo" src={icon3Image} alt="description of image"/>
            </div>
            <div>
                <h1 className="headingClass">Sit back and relax!</h1>
                <p>Your funds will be traded for you by the pool &apos;s manager</p>
            </div>
        </div>
    </div>
    <style jsx>{`

        @media only screen and (max-width:768px)
        {
            .fifthrowView
            {
                display: flex;
                flex-direction: column;
            }
        }
        .row
        {
            // width:105%;
            margin-top:10%;
            // // display: flex;
            // justify-content: space-between;
        }
        .headingClass
        {
            font-size:34px;
            // color:#FFFFFF;
            font-weight:600;
            margin-top:40px;
        }
        .colClass
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }
    `}

    </style>
    </>
  )
}

export default FifthComponent
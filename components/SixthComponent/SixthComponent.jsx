import React from "react";
import Image from "next/image";
import ERYImage from "../../public/renders/Group 98.png";

const SixthComponent = () => {
  return (
    <>
      <div className="mainclass" style={{width:'100%'}}>
        <div className="earnField">
          <Image className="logo" src={ERYImage} alt="A descriptive text about the image"/>
          <h1>Earn Real Yield!</h1>
        </div>

        <div className="row apyClass">
        
          <div className="col-6 d1" >
            <p>APY</p>
            <h1>3.48%</h1>
          </div>
          <div className="mbv">
            <hr style={{ height: "120px" }} />
          </div>

          <div className="col-6 d1">
            <p>TVL</p>
            <h1>$15,909.65</h1>
          </div>
        </div>
      </div>
      <style jsx>{`

        .d1 {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
        }

      .apyClass{
        display: flex;
        justify-content:center;
        align-items:center;
        margin-top:2rem;
      }

        .earnField {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 5rem;
        }

        @media only screen and (max-width: 768px) {
          
          .d1 {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-block:20px;
          }
          .row
          {
            display: flex;
            flex-direction: column;
          }
          .mbv
          {
            display:none;
          }
         
        }
        .row {
          // width:105%;
          // margin-top: 15%;
          // display: flex;
          // flex-direction: column;
          // text-align: center;
        }
        .row h1 {
          font-size: 44px;
          text-align: center;
          margin-bottom: 5px;
          // color: # e1e8f0;
          margin-top: 5%;
        }
        .rowinside {
          // display: flex;
          // justify-content: space-between;
          // width: 48%;
          // margin-inline: 30%;
          // margin-top:10%;
        }
        .apyClass p {
          font-size: 25px;
        }
        .apyClass h1 {
          font-size: 50px;
        }
       
      `}</style>
    </>
  );
};

export default SixthComponent;

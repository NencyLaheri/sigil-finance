import React from "react";
import logoImg from "../public/renders/logo.png";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from 'react-icons/ai';
import { BsSun } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Head from "next/head";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Sidebar from "./Sidebar/Sidebar";
// import i1 from '../public/renders/Icon 1.png';
// import i2 from '../public/renders/Icon 2.png';
// import i3 from '../public/renders/Icon 3.png';
// import i4 from '../public/renders/Icon 4.png';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { RiBook2Fill } from 'react-icons/ri';
import { BsDroplet } from 'react-icons/bs';
import { TbSettings2 } from 'react-icons/tb';
import { IoMdSwap } from 'react-icons/io';
import { FiBookOpen } from 'react-icons/fi';



const Header = ({ style ,darkMode,setDarkMode}) => {
  
  // const [isOpen, setIsOpen] = useState(false);

  const ilStyle = {
    backgroundColor:"black",
    fill:"white",
    };
  const idStyle = {
    backgroundColor:"white",
    fill:"black",
    };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const sidebarStyle = {
    position: 'fixed',
    top: 90,
    right: 0,
    bottom: 0,
    width: isOpen ? '15rem' : 0,
    backgroundColor: darkMode ? 'white' : 'black',
    transition: 'width 0.5s ease-in-out',
    zIndex: 999,
    overflow: 'hidden',
    padding:"0px",
    
  };  
  const UnableDarkMode=()=>
  {
    console.log("dark mode unable-------------")
    setDarkMode(!darkMode);
  }

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(min-width: 768px)');

  //   const handleResize = () => {
  //     if (mediaQuery.matches && isOpen) {
  //       setIsOpen(false);
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [isOpen]);

  return (
    <>
      <div className="header relative" style={style}>
        <div className="header-content row between w-full">
          <div className="logo-name-container row center-a ">
            <Image className="logo" src={logoImg} alt="A descriptive text about the image" />
            <div className="name title bg-cyan-400">
              <span>SIGIL</span>
              <span style={{ fontWeight: "300" }}>FINANCE</span>{" "}
            </div>
          </div>
         
          <ul className="ulclass">
              <div className="desktopNav">
                <li>
                  <a href="">Home</a>{" "}
                </li>
                <li>
                  <Link href="/FinanceList">
                    <a href="">Tokenomics</a>
                  </Link>
                </li>
                <li>
                  <a href="">Docs</a>
                </li>
                <li className="IconClass">
                  <span onClick={UnableDarkMode}>
                    {darkMode ? <MdDarkMode/> : <BsSun />}
                  </span>
                </li>
                <li className="launchdappClass">
                  <a href="https://app.sigil.finance">
                    <button className="button primary launch">Launch dApp</button>
                  </a>
                </li>
              </div>
              <div className="MenuClass" >
                <span>
                    <HiMenu style={{fontSize:"24px" ,position:"relative"}} onClick={toggleSidebar}/>  
                </span> 
              </div  >
              
              {/* <li className="IconClass" style={{ fontSize: "25px" }}>
                <span>
                  <HiMenu />  
                </span> 
              </li>  */}
          </ul>
           
        </div>
        
        
      </div>
    

      <div className="sidebar" style={sidebarStyle}>
        <div>
        <div className="sbfdivClass">
          <div className="ffdivClass">
            <span style={{width:"25px",marginRight:"10px"}}><Image className="" style={{width:"20px"}} src={logoImg} alt="A descriptive text about the image"/></span>
            <span className="name title bg-cyan-400">SIGIL</span>
          </div>
          <div className="closeIcon">
            <span style={{fontSize:"23px"}}><AiOutlineClose onClick={closeSidebar}/></span>
            {/* <HiMenu style={{fontSize:"24px" ,position:"relative"}} onClick={toggleSidebar}/>  */}
          </div>
        </div>
        {/* <button className="nButtonClass" >Pools</button> */}
        <p className="NavigationClass">Navigation</p>
        <button className="nButtonClass ti" onClick={UnableDarkMode}> <span><BsDroplet style={{marginRight:"10px"}}/></span> 
        <span>Pools</span></button>
        <button className="nButtonClass ti" onClick={UnableDarkMode}> <span><TbSettings2 style={{marginRight:"10px"}}/></span> 
        <span>Stake</span></button>
        <button className="nButtonClass ti" onClick={UnableDarkMode}> <span><IoMdSwap style={{marginRight:"10px"}}/></span> 
        <span>Swap</span></button>
        <button className="nButtonClass ti" onClick={UnableDarkMode}> <span><FiBookOpen style={{marginRight:"10px"}}/></span> 
        <span>Doc</span></button>
        {/* <Link href="/FinanceList" ><button className="nButtonClass" >Stake</button></Link> */}
        {/* <button className="nButtonClass">Swap</button> */}
        {/* <button className="nButtonClass ti" onClick={UnableDarkMode}> <span>{darkMode ? <MdDarkMode style={{marginRight:"10px"}}/> : <BsSun style={{marginRight:"10px"}}/>}</span> 
        <span>Theme</span></button> */}
        {/* <button className="nButtonClass"> <a href="https://app.sigil.finance">Doc</a></button> */}
        </div>  
        {/* <p className="SocialLinksClass">Social Links</p> */}
        <div className='smbvIcons'>
            <span><FaTelegramPlane style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>
            <span><FaFacebookF style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>
            <span><FaTwitter style={{fontSize:"25px",borderRadius:"30px",padding:"5px",background:"#006DF8",fill:"white"}}/></span>
            <span><RiBook2Fill style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>
        </div>  

      </div>
      <div className="sidebar1" style={sidebarStyle}>
        <div>
        <div className="sbfdivClass">
          <div className="ffdivClass">
            <span style={{width:"25px",marginRight:"10px"}}><Image className="" style={{width:"20px"}} src={logoImg} alt="A descriptive text about the image"/></span>
            <span className="name title bg-cyan-400">SIGIL</span>
          </div>
          <div className="closeIcon">
            <span style={{fontSize:"23px"}}><AiOutlineClose onClick={closeSidebar}/></span>
            {/* <HiMenu style={{fontSize:"24px" ,position:"relative"}} onClick={toggleSidebar}/>  */}
          </div>
        </div>
        <button className="nButtonClass" >Home</button>
        <Link href="/FinanceList" ><button className="nButtonClass" >Tokenimcs</button></Link>
        {/* <button className="nButtonClass">Docs</button> */}
        <button className="nButtonClass ti" onClick={UnableDarkMode}> <span>{darkMode ? <MdDarkMode style={{marginRight:"10px"}}/> : <BsSun style={{marginRight:"10px"}}/>}</span> 
        <span>Theme</span></button>
        <button className="nButtonClass"> <a href="https://app.sigil.finance">Launch dApp</a></button>
        <button className="nButtonClass ti" onClick={UnableDarkMode}> <span><BsDroplet style={{marginRight:"10px"}}/></span> 
        <span>Pools</span></button>
        <button className="nButtonClass ti" onClick={UnableDarkMode}> <span><TbSettings2 style={{marginRight:"10px"}}/></span> 
        <span>Stake</span></button>
        <button className="nButtonClass ti" onClick={UnableDarkMode}> <span><IoMdSwap style={{marginRight:"10px"}}/></span> 
        <span>Swap</span></button>
        <button className="nButtonClass ti" onClick={UnableDarkMode}> <span><FiBookOpen style={{marginRight:"10px"}}/></span> 
        <span>Doc</span></button>
        
        </div>
        
        <div className='smbvIcons'>
            <span><FaTelegramPlane style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>
            <span><FaFacebookF style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>
            <span><FaTwitter style={{fontSize:"25px",borderRadius:"30px",padding:"5px",background:"#006DF8",fill:"white"}}/></span>
            <span><RiBook2Fill style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>
        </div>

      </div>

      
      <style jsx>{`
        
        
        .desktopNav{
            display:flex;
            
        }
        .sidebar1 {
            display:none;
         }
        
        @media only screen and (max-width:768px){
            .desktopNav{
                display:none;
            }
            .sidebar {
              display:none;
             }
            .MenuClass
            {
              display:flex;
            }
            .header-content
            {
              min-width: 100%;
            }
            .header
            {
              width:100%;
            }
            .sidebar1
             {
              padding: 1rem 0.5rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
             }
            
             
        }

        
        .header {
          width: 100%;
          padding: 1em 1.5em;
          background-color: transparent;
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: center;
          position: fixed;
          backdrop-filter: blur(6px) saturate(2);
          z-index: 9999;
        }

        .header-content {
          width: min(1600px, 70%);
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .logo-name-container {
          gap: 0.5em;
          height: 2.5em;
        }

        .logo {
          height: 100%;
        }

        .name {
          font-size: 1.7em;
          font-weight: 600;
          position: relative;
          z-index: 9999;
        }

        .page-links {
          gap: 1.5em;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .page-links > a {
          color: var(--light-blue);
          font-size: 1.05em;
        }

        .page-links > a:hover {
          color: var(--white);
        }

        .launch {
          font-size: 1em;
          padding: 0.6em 2em;
          border-radius: 30px;
          border: 1px solid #006df8;
        }
        .launch:hover {
          background-color: transparent;
          border: 1px solid #006df8;
          color:#006DF8;
        }
        .ulclass {
          display: flex;
        }
        .ulclass li {
          padding-inline: 20px;
          list-style-type: none;
          color: #e1e8f0;
        }

        
        .launchdappClass {
          margin-top: -9px;
        }
        .IconClass {
          font-size: 20px;
          margin-top: -4px;
        }
        .IconClass span {
          // color:#616687;
          color: #e1e8f0;
        }
        @font-face {
          font-family: aminaRegular;
          src: url("../public/fonts/Amina-Regular.ttf");
        }


        
        .sidebar {
          padding: 1rem 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        .NavigationClass
        {
          display: flex;
          justify-content: flex-start;
          padding-left: 20px;
          font-weight: 500;
          font-size: 18px;
        } 
        .SocialLinksClass
        {
          // margin-top:180%;
          margin-bottom:-90%;
          display: flex;
          width: 100%;
          justify-content: flex-start;
          padding-left: 20px;
          font-weight: 500;
          font-size: 18px;
        }
        .nButtonClass
        {
          height: 50px;
          font-size: 18px;
          left: 0;
          border-radius: 0px;
          // margin-left: -8px;
          top: 0px;
          width:15rem;
          background:transparent;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-left:20px;
      
        }
        .nButtonClass:hover
        {
          background-color: #006DF8
        }
        // .sidebar .nButtonClass {
        //   color: black;
        // }
        .ti
        {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;

        }
        .sbfdivClass
        {
          display:flex;
          justify-content:space-between;
          padding:20px;
        }
        .ffdivClass
        {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .closeIcon
        {
          display: flex;
          justify-content: center;
          align-items: center;
          
        }
        .smbvIcons
        {
          display: flex;
          justify-content: center;
          margin-bottom:20px;
        }
        .smbvIcons span
        {
          padding-inline:13px;
        }
      `}
      </style>

    </>
  );
};

export default Header;

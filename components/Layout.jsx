import Header from "./Header";
import Footer from "./Footer";
import BGimage from "../public/renders/BG.png";
import Image from "next/image";
import { useState } from "react";

// const Header = ({ style }) => {
// 	return (
// 		<>
// 			<div className="header" style={style}>
// 				<div className="header-content row between">
// 					<div className="logo-name-container row center-a">
// 						<img className="logo" src="/outline-logo.svg" />
// 						<div className="name title">Sigil Finance</div>

// 					</div>

// 					<a href="https://app.sigil.finance"><button className="button primary launch">Launch dApp</button></a>
// 				</div>
// 			</div>

// 			<style jsx>{`
// 				.header {
// 					width: 100%;
// 					padding: 1em 1.5em;
// 					background-color: transparent;
// 					position: relative;
// 					display: flex;
// 					flex-direction: row;
// 					justify-content: center;
// 					position: fixed;
// 					backdrop-filter: blur(6px) saturate(2);
// 					z-index: 9999;
// 				}

// 				.header-content {
// 					width: min(1000px, 100%);
// 					display: flex;
// 					flex-direction: row;
// 					align-items: center;
// 				}

// 				.logo-name-container {
// 					gap: 0.5em;
// 					height: 2.5em;
// 				}

// 				.logo {
// 					height: 100%;
// 				}

// 				.name {
// 					font-size: 1.7em;
// 					font-weight: 600;
// 					position: relative;
// 					z-index: 9999;
// 				}

// 				.page-links {
// 					gap: 1.5em;
// 					position: absolute;
// 					top: 50%;
// 					left: 50%;
// 					transform: translate(-50%, -50%);
// 				}

// 				.page-links > a {
// 					color: var(--light-pink);
// 					font-size: 1.05em;
// 				}

// 				.page-links > a:hover {
// 					color: var(--white);
// 				}

// 				.launch {
// 					font-size: 1em;
// 					padding: 0.5em 1em;
// 				}
// 			`}</style>
// 		</>
// 	)
// }

// const Footer = ({ children }) => {
// 	return (
// 		<>
// 			<div className="footer row center-m center-a">
// 				<div className="socials-container row center-a">
// 					<a target="_blank" href="https://twitter.com/SigilFinance"><i className="fa-brands fa-twitter"></i></a>
// 					<a target="_blank" href="https://t.me/SigilFinance"><i className="fa-brands fa-telegram"></i></a>
// 					<a target="_blank" href="https://medium.com/@hello_87316/sigil-finance-an-introduction-to-innovation-bb16278b1dc0"><i className="fa-brands fa-medium"></i></a>
// 					<a target="_blank" href="https://docs.sigil.finance"><i className="fa-solid fa-book"></i></a>
// 				</div>
// 			</div>

// 			<style jsx>{`
// 				.footer {
// 					width: 100%;
// 					height: 4em;
// 					border-top: 2px solid var(--accent);
// 				}

// 				.socials-container {
// 					font-size: 1.5em;
// 					gap: 1em;
// 				}
// 			`}</style>
// 		</>
// 	)
// }

const Layout = ({ children, darkMode, setDarkMode }) => {
  // const b=`url("./renders/Home2.png")`
  // const imageUrl = './renders/transBack.png';
  const imageUrl = './renders/left1.png';
  
  // const imageUrl = './renders/Home2.png';
  console.log('---------------------',imageUrl)
  const darkModeClasses = 'dark:bg-black dark:text-white';
  const lightModeClasses = 'bg-white text-black';

  // const [darkMode, setDarkMode] = useState(false);
  console.log("Darkmode----------------====",darkMode)
  const containerStyle = {
  //   // backgroundImage: `url(${imageUrl})`,
  //   // background: 'linear-gradient(to right, #003477 0%, #0A192D 12.58%, #040C16 28.48%, #01050A 73.41%, #09182C 90.29%, #023371 100%),url("./renders/transBack.png")',
  //   background: 'linear-gradient(to right, #052855 0%, #0A192D 19.58%, #040C16 28.48%, #01050A 73.41%, #09182C 90.29%, #081d37 100%)',
  //   backgroundImage:`linear-gradient(to right, #052855 0%, #0A192D 19.58%, #040C16 28.48%, #01050A 73.41%, #09182C 90.29%, #081d37 100%),url("./renders/left1.png"),url("./renders/leftcenter.png"),url("./renders/righttop.png"),url("./renders/rightcenter.png"),url("./renders/grid.png")`,
  //   backgroundPosition: 'left 0 top 15%, left 0 top 55%, right 0 top 10%, right 0 top 60%, left 80% top 2%',
  //   backgroundRepeat: 'no-repeat',
  //   // backgroundBlendMode: "normal",
  //   // backgroundSize: "cover",
  //   // backgroundPosition: "center",
  //   // zIndex: 1,
  };
  const lightcontainerStyle=  
  {
    display:"none",
    backgroundColor:"white", 
    // color:`var(--ltext)`,
    color:"black",
  };
  return (
    <>
      {/* <div className="app relative">  */}
       {/* <div className="background-image absolute inset-0"> 
          <Image src={BGimage} layout="fill" objectFit="cover"/>
        </div>   */}
        {/* <Header/>
        <div className="main col center-a relative z-10">
          {children}
        </div>
        <Footer />
        </div>
       */}

       {/* <style jsx>{`
        .app {
         min-height: cover;
         background-image: url("./renders/Home1.png");
         background-size: cover
        //  background-repeat:repeat;
         position: absolute;
         inset: 0;
        //  width: 100%;
        //  object-fit:fill;
         
        }

        .main {
          overflow: auto;
          padding: 0;  
          flex-grow: 1;     
        }
        
      `}</style> */}

    <div className="app relative ">
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      {/* <div className={`background-image ${darkMode ? darkModeClasses : lightModeClasses}`} style={containerStyle}></div> */}
      <div className="background-image" style={{...(darkMode ? lightcontainerStyle : containerStyle),}}></div>
      {/* <Image src={imageUrl} width={2} height={900} ></Image> */}
      <div className="main col center-a relative z-10">
        {children}
      </div>
      <Footer darkMode={darkMode} />
    </div>

    <style jsx>{`
      .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        position: relative;
      }

      @media only screen and (max-width:768px){
        .background-image::before {
          background-image: url("./renders/left1.png"), url("./renders/leftcenter.png"), url("./renders/righttop.png"), url("./renders/rightcenter.png");
          background-position: left 0 top 20%, left 0 top 70%, right 0 top 20%, right 0 top 80%;
          background-repeat: no-repeat;
          background-size: 30% auto, 0% auto, 50% auto, 50% auto;
          // background-size: auto;
        }
      
        .background-image::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: none;  /* Set the background image to none */
        }
  
      }

      // .background-image {
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   right: 0; 
      //   bottom: 0;  
      //   z-index: -1;
      //   // background-image: url("./renders/Home2.png");
      //   // background-image: "" ;
      //   // background-color:"
      //   background-size: cover;
      //   background-position: center;
      // }

      .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
          to right,
          #052855 0%,
          #0A192D 19.58%,
          #040C16 28.48%,
          #01050A 73.41%,
          #09182C 90.29%,
          #081d37 100%
        );
        background-position: left 0 top 15%;
        background-repeat: no-repeat;
        z-index: -1;
      }
      
      .background-image::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("./renders/left1.png"), url("./renders/leftcenter.png"), url("./renders/righttop.png"), url("./renders/rightcenter.png"), url("./renders/grid.png");
        background-position: left 0 top 15%, left 0 top 55%, right 0 top 5%, right 0 top 60%, left 105% top 0%;
        background-size: 18% auto, 18% auto, 50% auto, 50% auto,63% auto;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
      }

      .main {
        overflow: auto;
        padding: 0;
        flex-grow: 1;
      }
    `}</style>

    </>
  );
};

export default Layout;

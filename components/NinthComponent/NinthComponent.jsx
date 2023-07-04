import React from 'react'
import Image from 'next/image';
import flogoImg from '../../public/renders/logo.png';
import i1 from '../../public/renders/Icon 1.png';
import i2 from '../../public/renders/Icon 2.png';
import i3 from '../../public/renders/Icon 3.png';
import i4 from '../../public/renders/Icon 4.png';
import { BsChevronDown } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { RiBook2Fill } from 'react-icons/ri';
import { useState } from 'react';


const NinthComponent = ({darkMode}) => {

const ilStyle = {
    backgroundColor:"black",
    fill:"white",
    };
const idStyle = {
    backgroundColor:"white",
    fill:"black",
    };


const [isOpen, setIsOpen] = useState(false);
const [isOpen1, setIsOpen1] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);
const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
   
  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };
   
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2 );
  };
  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3 );
  };
   
  return (
    <>
        <div className='row deskView'>
            <div className='c1 col-4'>
                <div className='logo-name-container center-a'>
                    <Image className="logo" src={flogoImg} alt="A descriptive text about the image"/>
                    <div className="name title"><span>SIGIL</span><span style={{fontWeight:"300"}}>FINANCE</span> </div>
                </div>
                <p>Building metaverse and NFT products to derive new kinds of value from crypto technology and to
                     apply it to increasingly better use. Advancing our innovations to every part of the world.
                </p>
                <div className='iconsClass'>
                    <span><FaTelegramPlane style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>
                    <span><FaFacebookF style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>
                    <span><FaTwitter style={{fontSize:"25px",borderRadius:"30px",padding:"5px",background:"#006DF8",fill:"white"}}/></span>
                    <span><RiBook2Fill style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>

           
                    {/* <span><a href="https://telegram.org/"><Image src={i1} alt="A descriptive text about the image"/></a></span> */}
                    {/* <span><a href="https://www.facebook.com/"><Image src={i2} alt="A descriptive text about the image"/></a></span> */}
                    {/* <span><a href="https://twitter.com/"><Image src={i3} alt="A descriptive text about the image"/></a></span> */}
                    {/* <span><a href=""><Image src={i4} alt="A descriptive text about the image"/></a></span> */}
                </div>
               
            </div>
            <div className='col-2'>
                <h2>Navigation</h2>
                <li>Browse Pools</li>
                <li>Create a Pool</li>
                <li>Stake $SIGIL</li>
                <li>Portfolio</li>
                <li>Pool Wars</li>
            </div>
            <div className='col-2'>
                <h2>Quick Links</h2>
                <li>Buy $SIGIL</li>
                <li>Documentation</li>
                <li>Trello</li>
            </div>
            <div className='c4 col-4'>
                <h2>Virtual Wallet  on the go with Sigil Finance</h2>
                <p><a href="https://app.sigil.finance"><button className="button primary launch">Connect Wallet</button></a></p>

            </div>
        </div>

        {/* <div className='mbv' id="accordionExample">
            <div
                class=" rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 class="mb-0" id="headingOne">
                <button
                    class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne">
                    Accordion Item #1
                    <span
                    class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div
                id="collapseOne"
                class="!visible"
                data-te-collapse-item
                data-te-collapse-show
                aria-labelledby="headingOne"
                data-te-parent="#accordionExample">
                <div class="px-5 py-4">
                    <strong>This is the first item's accordion body.</strong> It is
                    shown by default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes control
                    the overall appearance, as well as the showing and hiding via CSS
                    transitions. You can modify any of this with custom CSS or
                    overriding our default variables. It's also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>,
                    though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div
                class="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 class="mb-0" id="headingTwo">
                <button
                    class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
                    Accordion Item #2
                    <span
                    class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div
                id="collapseTwo"
                class="!visible hidden"
                data-te-collapse-item
                aria-labelledby="headingTwo"
                data-te-parent="#accordionExample">
                <div class="px-5 py-4">
                    <strong>This is the second item's accordion body.</strong> It is
                    hidden by default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes control
                    the overall appearance, as well as the showing and hiding via CSS
                    transitions. You can modify any of this with custom CSS or
                    overriding our default variables. It's also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>,
                    though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div
                class="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 class="accordion-header mb-0" id="headingThree">
                <button
                    class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree">
                    Accordion Item #3
                    <span
                    class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div
                id="collapseThree"
                class="!visible hidden"
                data-te-collapse-item
                aria-labelledby="headingThree"
                data-te-parent="#accordionExample">
                <div class="px-5 py-4">
                    <strong>This is the third item's accordion body.</strong> It is
                    hidden by default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes control
                    the overall appearance, as well as the showing and hiding via CSS
                    transitions. You can modify any of this with custom CSS or
                    overriding our default variables. It's also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>,
                    though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div> */}

        <div className='rowmbv '>
            <div className='mbvliClass'>
                <div>
                <Image className="logo" src={flogoImg} alt="A descriptive text about the image"/>
                </div>
                {/* <div className='mbvIcons'>
                <span><FaTelegramPlane style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>
                <span><FaFacebookF style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>
                <span><FaTwitter style={{fontSize:"25px",borderRadius:"30px",padding:"5px",background:"#006DF8",fill:"white"}}/></span>
                <span><RiBook2Fill style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>

                </div> */}
            </div>
            <div className="mbv ">
            <button className="acbtn1 w-full p-4 font-bold " onClick={toggleAccordion} style={{display:"flex"}}>
                More About SIGIL FINANACE
                <span className={`btn-icon ${isOpen ? 'rotate-180' : ''}`}><BsChevronDown/></span>
            </button>
            {/* {isOpen && (
                <div className="p-4 bg-gray-100 contentBtn">
                <p>Building metaverse and NFT products to derive new kinds of value from crypto technology and to
                     apply it to increasingly better use. Advancing our innovations to every part of the world.
                </p>
                </div>
            )} */}
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <p>
                Building metaverse and NFT products to derive new kinds of value from crypto technology and to apply it to
                increasingly better use. Advancing our innovations to every part of the world.
                </p>
            </div>
            </div>
            <div className="mbv ">
            <button className="acbtn1  w-full p-4 font-bold " onClick={toggleAccordion1}>
            Navigation
            <span className={`btn-icon ${isOpen1 ? 'rotate-180' : ''}`}><BsChevronDown/></span>
                {/* <span className={`transform transition-transform ${isOpen1 ? 'rotate-180' : ''}`}>
                    &#8964;
                </span> */}
            </button>
            {/* {isOpen1 && (
                <div className="p-4 bg-gray-100">
                <li>Browse Pools</li>
                <li>Create a Pool</li>
                <li>Stake $SIGIL</li>
                <li>Portfolio</li>
                <li>Pool Wars</li>
                </div>
            )} */}
            <div className={`accordion-content ${isOpen1 ? 'open' : ''}`}>
           
                <li>Browse Pools</li>
                <li>Create a Pool</li>
                <li>Stake $SIGIL</li>
                <li>Portfolio</li>
                <li>Pool Wars</li>
                
            </div>
            </div>
            <div className="mbv ">
            <button className="acbtn1  w-full p-4 font-bold " onClick={toggleAccordion2}>
            Quick Links
            <span className={`btn-icon ${isOpen2 ? 'rotate-180' : ''}`}><BsChevronDown/></span>
                {/* <span className={`transform transition-transform ${isOpen2 ? 'rotate-180' : ''}`}>
                    &#8964;
                </span> */}
            </button>
            {/* {isOpen2 && (
                <div className="p-4 bg-gray-100">
                <li>Buy $SIGIL</li>
                <li>Documentation</li>
                <li>Trello</li>
                </div>
            )} */}
            <div className={`accordion-content ${isOpen2 ? 'open' : ''}`}>
           
                <li>Buy $SIGIL</li>
                <li>Documentation</li>
                <li>Trello</li>
                
            </div>
            </div>
            <div className="mbv ">
                <button className="acbtn1  w-full p-4 font-bold " onClick={toggleAccordion3}>
                Virtual Wallet on the go with Sigil Finance
                <span className={`btn-icon ${isOpen3 ? 'rotate-180' : ''}`}><BsChevronDown/></span>
                    {/* <span className={`transform transition-transform ${isOpen3 ? 'rotate-180' : ''}`}>
                        &#8964;
                    </span> */}
                </button>
                {/* {isOpen3 && (
                    <div className="p-4 bg-gray-100">
                    <p><a href="https://app.sigil.finance"><button className="button primary launch">Connect Wallet</button></a></p>

                    </div>
                )} */}
                <div className={`accordion-content ${isOpen3 ? 'open' : ''}`}>
                    <p><a href="https://app.sigil.finance"><button className="button primary launch">Connect Wallet</button></a></p>
               </div>
            </div>
            <div className='mbvIcons'>
                <span><FaTelegramPlane style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>
                <span><FaFacebookF style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>
                <span><FaTwitter style={{fontSize:"25px",borderRadius:"30px",padding:"5px",background:"#006DF8",fill:"white"}}/></span>
                <span><RiBook2Fill style={{fontSize:"25px",borderRadius:"30px",padding:"5px",...(darkMode ? ilStyle : idStyle)}}/></span>

                </div>
        </div>
        
        <style jsx>
        {`  

                .rowmbv{
                    display:none;
                }

                @media only screen and (max-width:768px){
                    .rowmbv{
                        display:block;
                        width:100%;
                        margin-bottom:15%;
                    }
                }

         
            @media only screen and (max-width:768px)
            {

                .deskView
                {
                    display:none;
                }
              
                // .rowmbv
                // {
                //     display:block;
                //     width:100%;    
                //     margin-bottom:15%;
                // }

                .acbtn1
                {
                    width:100%;
                    background-color:transparent;
                    padding-block:10px;   
                    border-radius:0px;
                    font-size:18px;
                    display: flex;
                    align-items: flex-start;
                    flex-direction: row;
                    justify-content: space-between;
                }
                .mbv li
                {
                    color:#6c6c6c;
                }
                .mbv p
                {
                    color:#6c6c6c;
                    
                }
                .mbvIcons
                {
                    margin-top:15px;
                    // margin-bottom:-25px;
                }
                .mbvIcons span
                {
                    margin-right:10px;
                }
                .mbvliClass
                {
                    display:flex;
                    justify-content:space-between;
                    margin-block:15px;
                }
                .rotate-180 
                {
                    transform: rotate(180deg);
                }
                .accordion-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.9s ease;
                  }
                  
                  .accordion-content.open {
                    max-height: 500px;
                    transition: max-height 0.9s ease;
                  }
            }
            
            .deskView
            {
                width:100%;
                // display:flex;
                justify-content:space-between;
                margin-top:1%;
                padding-bottom: 50px;
            }
            .name {
                font-size: 1.5em;
                font-weight: 600;
                position: relative;
                z-index: 9999;
            }
            .logo-name-container {
                gap: 0.3em;
                height: 2.5em;
                display:flex;
                justify-content:flex-start;
            }

            .logo {
                height: 100%;
            }
            .c1
            {
                width:420px;
                margin-block:10px;
            }
            .c1 p
            {
                margin-block:30px;
            }
            .launch {
                font-size: 1em;
                padding: 0.9em 1.8em;
                border-radius: 30px;
                border:1px solid #006DF8;
            }
            .launch:hover
            {
                background-color:transparent;
                border:1px solid #006DF8;
                color:#006DF8;
            }
            .c1 span
            {
                margin-right: 20px;
            }
            .c4
            {
                width:261px;
            }
            li
            {
                list-style-type:none;
                margin-block:15px;
            }
            li:hover
            {
                color:#006DF8;
            }
           
        `}
        </style>
    </>
  )
}

export default NinthComponent

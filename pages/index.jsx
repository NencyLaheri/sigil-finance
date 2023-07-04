import { useState } from 'react'
import BlueGlow from "../public/renders/blue-glow-logo.png"
import Circle from "../public/renders/circle.png"
import Cone from "../public/renders/cone.png"
import BlackCoin from "../public/renders/black-coin.png"
import GoldCoin from "../public/renders/gold-coin.png"
import SecondComponent from '@/components/seconComponent/SecondComponent'
import ThirdComponent from '@/components/ThirdComponent/ThirdComponent'
import FourthComponent from '@/components/FouthComponent/FourthComponent'
import FifthComponent from '@/components/FifthComponent/FifthComponent'
import SixthComponent from '@/components/SixthComponent/SixthComponent'
import SeventhComponent from '@/components/SeventhComponent/SeventhComponent'
import EighthComponent from '@/components/EighthComponent/EighthComponent'
import NinthComponent from '@/components/NinthComponent/NinthComponent'
const img = require("../public/renders/bg.png");

export default function Landing({darkMode}) {
	console.log("in index js page----------",darkMode);
	const cbStyle = {
		backgroundColor:"#F1F5F9",
	  };
	const cbdStyle = {
		backgroundColor:"transparent",
	  };

	return (
		<>
			{/* <div className="body col center-a">
				<div className="hero content col">
					<div className="hero-title">DEFI MADE <br /> <span className="accent-light">EASY</span><span className="accent-heavy">!</span></div>
					<div className="hero-desc">Sigil Finance removes the stress and complexity of managing a portfolio with the power of decentralized mutual funds.</div>
					<a href="https://docs.sigil.finance/" target="_blank" className="button primary hero-action">Read More</a>
				</div>

				<div className="about content col center-a" id='about'>
					<div className="about-title">HOW?</div>
					<div className="about-desc-container row">
						<div className="about-desc">Sigil Finance is an Ethereum-based platform that brings the multi-trillion dollar industry of mutual funds to DeFi. On our platform, anybody can be a fund manager and you can <span className="accent-heavy">invest in your community, not Wall Street.</span></div>
						<div className="about-desc">At the core of Sigil Finance are Sigil pools. These pools operate as a <span className="accent-heavy">modernized version of a traditional mutual fund</span>. This allows you to have a diverse and profitable portfolio built and managed for you.</div>
					</div>
					<div className="about-steps-container col center-a">
						<div className="step-container col center-a card bordered">
							<div className="step-title">1. Select a Sigil pool</div>
							<div className="step-desc">You can view a pool's past performance and risk rating to make your decision</div>
						</div>

						<i className="fa-solid fa-arrow-down step-arrow"></i>

						<div className="step-container col center-a card bordered">
							<div className="step-title">2. Deposit ETH into the pool</div>
							<div className="step-desc">On deposit, you will receive a tokenized share in the pool proportionate to the value you put in.</div>
						</div>

						<i className="fa-solid fa-arrow-down step-arrow"></i>

						<div className="step-container col center-a card bordered">
							<div className="step-title">3. Sit back and relax!</div>
							<div className="step-desc">Your funds will be traded for you by the pool's manager</div>
						</div>
					</div>
				</div>

				<div className="token content col">
					<div className="token-title">$SIGIL</div>
					<div className="token-desc">$SIGIL is the token at the heart of the Sigil Finance. It provides utility to the platform and <span className="accent-heavy">rewards its holders</span>, giving the community something to rally around.</div>
					<div className="token-staking-desc">You can stake $SIGIL to <span className="accent-heavy">earn platform fees</span> on Sigil.</div>
					<div className="token-buttons row">
						<a href="https://docs.sigil.finance/usdsigil-token" target="_blank" className="button token-button primary">Tokenomics</a>
						<a href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xF029Fd6b5ED35C825Dd02B7A02952C30002840E4" target="_blank" className="button token-button primary">Buy $SIGIL</a>
					</div>
				</div>

				<div className="renders">
					<img className="blue-glow-logo render" src={BlueGlow.src}></img>
					<div className="purple-glow-1 render"></div>
					<img className="circle render" src={Circle.src}></img>
					<div className="purple-glow-2 render"></div>
					<img className="cone render" src={Cone.src}></img>
					<div className="purple-glow-3 render"></div>
					<div className="purple-glow-4 render"></div>
					<div className="coins">
						<img className="gold-coin render" src={GoldCoin.src}></img>
						<img className="black-coin render" src={BlackCoin.src}></img>
					</div>
				</div>
			</div>
			<style jsx>{`
				.body {
					width: 100%;
					height: 100%;
					position: relative;
					overflow-x: hidden;
					padding: 4em 2em;
				}

				.body > .content {
					max-width: 1000px;
					width: 100%;
					position: relative;
				}

				.hero {
					padding-top: 10em;
					min-height: 45em;
					height: 100vh;
				}

				.hero-title {
					font-size: 5em;
					font-weight: 900;
				}

				.hero-desc {
					font-size: 1.5em;
					width: 20em;
				}

				.hero-action {
					padding: 0.5em 2em;
					width: fit-content;
					margin-top: 1em;
					font-size: 1.2em;
				}

				.accent-light {
					
				}

				.accent-heavy {
					color: var(--accent)
				}

				.about {
					height: 50em;
				}

				.about-desc-container {
					gap: 1em;
					margin-top: 2em;
				}

				.about-title {
					font-size: 4em;
					font-weight: 900;
					border-bottom: 5px solid var(--accent);
					border-radius: 5px;
				}

				.about-desc {
					font-size: 1.3em;
					line-height: 110%;
				}

				.about-steps-container {
					gap: 1em;
					width: 35em;
					margin-top: 1.5em;
				}

				.step-container {
					padding: 1em;
					gap: 0.5em;
					text-align: center;
					width: 100%;
				}

				.step-title {
					font-size: 1.75em;
					font-weight: 500;
				}

				.step-desc {
					font-size: 1.25em
				}

				.step-arrow {
					font-size: 1.5em;
					color: var(--accent);
				}

				.token {
					align-items: start;
					height: 25em;
				}

				.token-title {
					font-size: 4em;
					font-weight: 900;
					border-bottom: 5px solid var(--accent);
					border-radius: 5px;
				}

				.token-desc {
					margin-top: 1em;
					font-size: 1.5em;
					width: 25em;
				}

				.token-staking-desc {
					margin-top: 0.75em;
					font-size: 1.5em;
					width: 25em;
				}

				.token-buttons {
					margin-top: 1em;
					gap: 1em;
				}

				.token-button {
					font-size: 1.5em;
					padding: 0.5em 1em;
				}

				.renders {
					z-index: -999;
					position: absolute;
					height: 100%;
					width: 100%;
					top: 0;
					left: 0
				}

				.render {
					position: absolute;
				}

				.blue-glow-logo {
					height: 45em;
					top: 1em;
					right: -12.5em;
				}

				.purple-glow-1 {
					height: 0em;
					width: 0em;
					top: 2em;
					right: 2em;
					border-radius: 100%;
					border: 1px solid red;
					box-shadow: 0 0 10em 15em var(--accent);
					opacity: 0.25;
				}

				.circle {
					height: 15em;
					top: calc(max(45em, 100vh) - 8em);
					left: -10em;
				}

				.purple-glow-2 {
					height: 0em;
					width: 0em;
					top: calc(max(45em, 100vh) - 2em);
					left: 2em;
					border-radius: 100%;
					border: 1px solid red;
					box-shadow: 0 0 6em 8em var(--accent);
					opacity: 0.25;
				}

				.cone {
					height: 12.5em;
					top: calc(max(45em, 100vh) + 20em);
					right: -5em;
				}

				.purple-glow-3 {
					height: 0em;
					width: 0em;
					top: calc(max(45em, 100vh) + 28em);
					right: -2em;
					border-radius: 100%;
					border: 1px solid red;
					box-shadow: 0 0 6em 8em var(--accent);
					opacity: 0.25;
				}

				.black-coin {
					height: 25em;
					top: calc(max(45em, 100vh) + 50em + 2em);
					right: -3em;
					backdrop-filter: glow(1px);
				}

				.gold-coin {
					height: 20em;
					top: calc(max(45em, 100vh) + 50em - 2em);
					right: -4em;
				}

				.purple-glow-4 {
					height: 0em;
					width: 0em;
					top: calc(max(45em, 100vh) + 50em + 13em);
					right: 4em;
					border-radius: 100%;
					border: 1px solid red;
					box-shadow: 0 0 16em 16em var(--accent);
					opacity: 0.25;
				}

				@media only screen and (max-width: 900px) {
					.coins {
						opacity: 0.4;
					}
				}

				@media only screen and (max-width: 700px) {

					.hero-title {
						font-size: 4rem;
					}
					
					.blue-glow-logo {
						opacity: 0.4;
					}

					.about-steps-container {
						width: 100%;
					}

					.about-desc-container {
						flex-direction: column;
					}

					.about {
						height: 55em;
					}

					.black-coin {
						top: calc(max(45em, 100vh) + 55em + 2em);
					}

					.gold-coin {
						top: calc(max(45em, 100vh) + 55em - 2em);
					}

					.purple-glow-4 {
						top: calc(max(45em, 100vh) + 55em + 13em);
					}
				}

				@media only screen and (max-width: 600px) {
					
					.hero-desc {
						width: 100%;
					}

					.token-desc, .token-staking-desc {
						width: 100%;
					}

					.token-buttons {
						width: 100%;
						justify-content: center;
					}
				}

				@media only screen and (max-width: 455px) {
					.about {
						height: 65em;
					}

					.black-coin {
						top: calc(max(45em, 100vh) + 65em + 2em);
					}

					.gold-coin {
						top: calc(max(45em, 100vh) + 65em - 2em);
					}

					.purple-glow-4 {
						top: calc(max(45em, 100vh) + 65em + 13em);
					}

					.token-buttons {
						flex-direction: column;
					}

					.token {
						height: 30em;
					}
				}

				@media only screen and (max-width: 400px) {
					.hero-title {
						font-size: 4em;
					}

					.hero-desc {
						font-size: 1.25em;
						margin-top: 0.5em;
					}

					.hero-action {
						font-size: 1.1em;
					}

					.body {
						padding: 4em 1em;
					}
				}

				@media only screen and (max-width: 365px) {
					.hero-title {
						font-size: 3rem;
					}

					.about {
						height: 75em;
					}

					.black-coin {
						top: calc(max(45em, 100vh) + 75em + 2em);
					}

					.gold-coin {
						top: calc(max(45em, 100vh) + 75em - 2em);
					}

					.purple-glow-4 {
						top: calc(max(45em, 100vh) + 75em + 13em);
					}
				}
	  		`}</style> */}

			<div className='body col center-a'>
				<SecondComponent/>
				<ThirdComponent/>
			</div>
			 <div className='fullrowClass' style={{display:"flex",justifyContent:"center",marginTop:"6%",...(darkMode ? cbStyle : cbdStyle)}}>
				<div className='body col center-a' style={{marginTop:"-5%",marginBottom:"6%"}}> 
				<FourthComponent/>
				<FifthComponent/>
				 </div> 
			 </div> 
			<div className='body col center-a' >	
				<SixthComponent/>
				<SeventhComponent darkMode={darkMode}/>
			</div>
			<div className='fullrowClass'>
				<EighthComponent/>
			</div>
			<div className='body col center-a'>
				<NinthComponent darkMode={darkMode}/>
			</div>
			
			<style jsx>{`
				@media only screen and (max-width:768px){
					
					.body{
						min-width: 90%; 
					}
					.fullrowClass
					{
						width:90%;
					}
				}

				.body {
					width: min(1600px, 69%);
					height: 100%;
					position: relative;
					overflow-x: hidden;
					// padding: 4em 2em; 
					margin-top: 50px;
                    background-repeat: no-repeat;
					
				}
				.fullrowClass
				{
					width:100%;
				}
			`}</style>
			
		</>
	)
}

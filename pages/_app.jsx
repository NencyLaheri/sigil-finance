import style from "../config/style.json";
import Layout from "../components/Layout";
import Head from "next/head";
import Error from "next/error";
import BGimage from "../public/renders/bg.png"
import Image from "next/image";
import { useState } from "react";

const Metadata = () => {
  return (
    <Head>
      <meta charSet="UTF-8"></meta>
      <meta name="viewport" content="width=device-width ,initial-scale=1.0"></meta>
      <meta
        name="description"
        content="Sigil Finance is an ethereum based platform that brings mutual funds to DeFi. With decentralized mutual funds, anybody can be a fund manager and you can invest in your community, not Wall Street."
      ></meta>
      <meta property="og:title" content="Sigil Finance"></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:image"
        content="https://sigil.finance/sigil.svg"
      ></meta>
      <meta
        property="og:description"
        content="Sigil Finance is an ethereum based platform that brings mutual funds to DeFi. With decentralized mutual funds, anybody can be a fund manager and you can invest in your community, not Wall Street."
      ></meta>

      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:site" content="@SigilFinance"></meta>
      <meta name="twitter:title" content="Sigil Finance"></meta>
      <meta
        name="twitter:description"
        content="Sigil Finance is an ethereum based platform that brings mutual funds to DeFi. With decentralized mutual funds, anybody can be a fund manager and you can invest in your community, not Wall Street."
      ></meta>
      <meta
        name="twitter:image"
        content="https://sigil.finance/sigil.svg"
      ></meta>
      <meta name="twitter:creator" content="@SigilFinance"></meta>

      <title>Sigil Finance</title>
      <link rel="icon" href="/sigil.svg"></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      />
      {Object.keys(style.fonts)
        .filter((f) => style.fonts[f] == "GOOGLE")
        .map((font) => (
          <>
            <link
              key={font + "0"}
              rel="preconnect"
              href="https://fonts.googleapis.com"
            ></link>
            <link
              key={font + "1"}
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            ></link>
            <link
              key={font + "2"}
              href={`https://fonts.googleapis.com/css2?family=${font}:wght@300;400;500;600;700;900&display=swap`}
              rel="stylesheet"
            ></link>
          </>
        ))}
    </Head>
  );
};

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const [tColor, setTColor]=useState("red");
  if (pageProps.statusCode) {
    return <Error statusCode={pageProps.statusCode}></Error>;
  }

  
  const ThmeTextXColor=()=>
  {
    if(!darkMode)
    {
      setTColor("red");
    }
    {
      setTColor("yello");
    }
  }
  return (
    <>
      <Metadata />
      <Layout darkMode={darkMode} setDarkMode={setDarkMode} className={darkMode ? '' : 'light-theme'}>
	  	{/* <Image src={BGimage} className="relative" /> */}
        <Component {...pageProps} darkMode={darkMode}/>
      </Layout>

      <style jsx global>{`
        
        ${Object.keys(style.fonts)
          .filter((f) => style.fonts[f] !== "GOOGLE")
          .map((f) => {
            return (
              Object.keys(style.fonts[f].normal)
                .map((weight) => {
                  return `
							@font-face {
								font-family: "${f}";
								src: url("/fonts/${style.fonts[f].normal[weight]}") format("${
                    style.fonts[f].normal[weight].split(".")[1] == "ttf"
                      ? "truetype"
                      : style.fonts[f].normal[weight].split(".")[1]
                  }");
								font-weight: ${weight};
							}
						`;
                })
                .join("\n") +
              Object.keys(style.fonts[f].italic)
                .map((weight) => {
                  return `
							@font-face {
								font-family: "${f}";
								src: url("/fonts/${style.fonts[f].normal[weight]}") format("${
                    style.fonts[f].normal[weight].split(".")[1] == "ttf"
                      ? "truetype"
                      : style.fonts[f].normal[weight].split(".")[1]
                  }");
								font-weight: ${weight};
							}
						`;
                })
                .join("\n")
            );
          })
          .join("\n")}

        :root {
          ${Object.entries(style.colors.raw)
            .map((mapping) => `--${mapping[0]}: ${mapping[1]};`)
            .join("")}
          ${Object.entries(style.colors.elements)
            .map((mapping) => `--${mapping[0]}: var(--${mapping[1]});`)
            .join("")}
                    --border-radius: 12px;
        }

          
        * {
          color:red;
          //color: var(--text);
          color: ${darkMode ? 'black' : 'white'} ;
          box-sizing: border-box;
          scrollbar-color: var(--accent);
          scrollbar-width: thin;
          line-height: 1em;
          font-family: "${style.bodyFont}";
          transition: 0.2s background cubic-bezier(0.16, 0.35, 0.35, 0.86),
            0.2s filter cubic-bezier(0.16, 0.35, 0.35, 0.86),
            0.2s color cubic-bezier(0.16, 0.35, 0.35, 0.86),
            0.2s border-color cubic-bezier(0.16, 0.35, 0.35, 0.86),
            0.1s opacity cubic-bezier(0.16, 0.35, 0.35, 0.86);
          
        }

		body {
			margin: 0;
			// background-image: url('./bg.png');
			// background-color: var(--bg);
			background-repeat: no-repeat;
			background-size: cover;
			
		  }
    
        .light-theme {
          color: black; 
        }
        .heading {
          font-family: "${style.headingFont}";
        }

        a {
          text-decoration: initial;
          cursor: pointer;
        }
        a:hover
        {
          color: ${darkMode ? '#006DF8' : '#006DF8'} ;
        }

        button,
        .button {
          cursor: pointer;
          padding: 0;
          border-radius: var(--border-radius);
          border: 2px solid transparent;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: 400;
          font-family: "${style.headingFont}";
          white-space: nowrap;
        }

        button:hover,
        .button:hover {
          filter: brightness(1.2);
        }

        .button.disabled,
        button.disabled {
          opacity: 0.5;
          pointer-events: none;
        }

        .button.primary,
        button.primary {
          color: var(--white);
          background-color: var(--light-blue);
        }

        .button.secondary,
        button.secondary {
          color: var(--text);
          background-color: var(--bg-alt);
          border-color: var(--white);
        }

        .card {
          background-color: var(--bg-alt);
          border-radius: var(--border-radius);
        }

        .rounded {
          border-radius: var(--border-radius);
        }

        .bordered {
          border: 1px solid var(--border-color);
        }

        .row {
          display: flex;
          flex-direction: row;
        }

        .col {
          display: flex;
          flex-direction: column;
        }

        .center-m {
          justify-content: center;
        }

        .center-a {
          align-items: center;
        }

        .evenly {
          justify-content: space-evenly;
        }

        .between {
          justify-content: space-between;
        }

        .underline {
          text-decoration: underline;
        }

        ::-webkit-scrollbar {
          width: 0px;
          height: 0px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: var(--bg-alt);
          filter: saturate(0.8);
          transition: 0.2s background;
          border-radius: 999px;
          width: 4px;
          height: 4px;
          border: 3px solid rgba(0, 0, 0, 0);
          background-clip: padding-box;
        }

        ::-webkit-scrollbar-corner {
          background: rgba(0, 0, 0, 0);
        }
		p
		{
			line-height:23px;
		}
      `}</style>
    </>
  );
}

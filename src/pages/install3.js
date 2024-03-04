// import React, { useState } from "react";
import React from "react";
import useSiteMetadata from "../hooks/SiteMetadata"
// import { StaticImage } from "gatsby-plugin-image"
// import {Link} from "gatsby"
// import styled from "styled-components"
import Layout from "../components/siteLayout"
import { Helmet } from "react-helmet"
// import Intro from "../../static/assets/textual.svg"
// import Intro2 from "../../static/assets/install-intro.svg"
// import Intro3 from "../../static/assets/intro-github.svg"
// import ContactForm from "../components/newssign"
// import useNetlifyIdentity from '../components/useNetlifyIdentity';


function Install2() {
  const { showNav } = useSiteMetadata()

  


  return (


<Layout>
<Helmet>

  
        <body id="body" className="install" />
      </Helmet>

      {showNav ? (
        <div id="top" className="spacer" style={{ height: "0px", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )}

<div className="scroll-container">


{/* <div style={{display:'grid', justifyContent:'start', alignItems:'start', position:'relative', left:'', top:'', cursor:''}}> */}
  
{/* <Intro style={{height:'100vh', width:'100vw', position:'fixed', zIndex:'-1', top:'', objectFit:'cover',}} /> */}

{/* <section style={{height:''}}>
<Intro2 style={{height:'100vh', width:'100vw', position:'relative', zIndex:'1', top:'', objectFit:'cover',}} />
  </section> */}
  {/* </div> */}


<section style={{ height:'', maxHeight:'', margin:'0 auto', padding:'0 0 0 0', position:'relative',
 alignContent:'center', display:'grid', placeContent:'center', verticalAlign:'center',
  color:'#fff',
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  textShadow:'0 2px 7px #000',
  textAlign:'center'
}}>

<h3>STEP TWO (3 of 3)</h3>



<ul className="bulletlist">
  <li><strong>CHECK YOUR EMAIL</strong> and respond to create your GitHub</li>
  <li>Everything is completely FREE and only take 3-4 minutes</li>
</ul>
<br />



In a few minutes your web app will be ready to login.
<br />
Simply follow the prompts and ignore the scary jargon
<br /><br />
<strong>Don't worry - we handle all the hard stuff for you!</strong>

<br />

{/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="KFH49DVS9AFQS" />
  <input type="hidden" name="currency_code" value="USD" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribe_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Subscribe" />
</form> */}


{/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="99GULJ7R9T68W" />
  <input type="hidden" name="currency_code" value="USD" />
  <button className="button" type="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" >Get Pirate Plus</button>
</form> */}


{/* <Link className="button" state={{modal: true}} to="/install3" rel="nofollow">
Continue with Free
</Link>
<br /> */}


{/* <br />Setup Account and Create YOUR Website<br />



<ul className="bulletlist">
  <li>You will need a valid email address to create your GitHub</li>
  <li>Everything is completely FREE and only take 3-4 minutes</li>
</ul>
<br />

Simply follow the prompts and ignore the scary jargon
<br />
<br />
<strong>Don't worry - we handle all the hard stuff for you!</strong>
<br /> */}
{/* <a style={{display:'grid', placeContent:'center', margin:'0 auto 0 auto'}} class="button" href="https://app.netlify.com/start/deploy?repository=https://github.com/piratesocial/piratesocial&amp;stack=cms&amp;SITE_LOGO=https://https://piratesocial.org/assets/logo.svg" target="_blank" rel="nofollow">
Setup Account
</a> */}




{/* <ContactForm /> */}

<a className="button" href="https://app.netlify.com/start/deploy?repository=https://github.com/piratesocial/pirate&amp;stack=cms&amp;SITE_LOGO=https://https://piratesocial.org/assets/logo.svg" target="_blank" rel="noreferrer">
Setup GitHub &amp; Build Your Web App
</a>

{/* <Link style={{display:'grid', placeContent:'center', margin:'0 auto 0 auto'}} state={{modal: true}} className="button" to="/contact">Tell us about yourself</Link> */}
</section>










</div>

{/* <div className="scroll-container1" style={{display:'flex', justifyContent:'start', maxWidth:'', height:'calc(100vh - 70px)', margin:'0 auto 0 auto', position:'relative', left:'0', right:'0', top:'0'}}>
<iframe title="Pirate Frame" id="youtube2" className="blog-video1" width="100%" height="400" src="https://app.netlify.com/start/deploy?repository=https://github.com/completeweb-site/base&amp;stack=cms&amp;SITE_LOGO=https://completeweb.site/assets/logo.svg" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'calc(100vh - 70px)', minHeight:'', border:'0px solid yellow', borderRadius:'0', padding:'0 0 0 0' }} />
</div> */}





</Layout>




  );
}

export default Install2;
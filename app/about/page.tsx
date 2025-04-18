/*export default function About() {
    return (
      <div className="">
        Ma page welcome      
      </div>
    );
  }
  
 import React from 'react'*/

import Link from "next/link"

 
 const AboutPage = () => {
   return (
     <div>
       <h1>Ma page about</h1>  
       <Link href="/">Accueil</Link>  
     </div>
   )
 }
 
 export default AboutPage
 
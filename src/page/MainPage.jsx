import { useState, useEffect } from "react"
import { clsx } from "clsx"

export const MainPage = () => {
  const [mouseEnterW, setMouseEnterW] = useState(false)
  const [mouseEnterA, setMouseEnterA] = useState(false)
  const [mouseEnterC, setMouseEnterC] = useState(false)
 const [showContent, setShowContent] = useState(false);


  useEffect(()=>{
    setTimeout(()=>{
        setShowContent(true)
      },700)
  },[])
  

  return (
    <>
    <div className="container">
      <div className="header-area">
        <div className={showContent ? "header-link show":"header-link"}>
          <a className="header-link-li" href="https://www.linkedin.com/in/claire-huang-312b601a5">LINKEDIN</a>
          <a className="header-link-github" href="https://github.com/clairehuang77777">GITHUB</a>
          <a className="header-link-email" href="mailto:clairehuang77777@gmail.com">EMAIL</a>
        </div>
        <div className="line"></div>
        <div className=""></div>
      </div>
      <div className={showContent ? "intro-area show" : "intro-area"}>
        <div className="intro">
          <div className="intro-name">WANJU HUANG</div>
          <div className="intro-pro-1"> Frontend Developer With Background <br></br>in Product & User Experience </div>
          <div className="intro-pro-2"> Currently Seeking for Opportunity<br/>Feel free to connect!</div>
        </div>
      </div>
      <div className="link-area">
        <div className={showContent ?"link-area-center show":"link-area-center"}>
          <div className={clsx("",{"animate__animated animate__headShake":mouseEnterW})} onMouseEnter={()=>setMouseEnterW(true)} onMouseLeave={()=>setMouseEnterW(false)}>
            <a href="/project">WORK</a>
            </div>
          <div className={clsx("",{"animate__animated animate__headShake":mouseEnterA})} onMouseEnter={()=>setMouseEnterA(true)} onMouseLeave={()=>setMouseEnterA(false)}>
            <a href="/about">ABOUT</a>
          </div>
          <div className={clsx("",{"animate__animated animate__headShake":mouseEnterC})} onMouseEnter={()=>setMouseEnterC(true)} onMouseLeave={()=>setMouseEnterC(false)}>
             <a href="/contact">CONTACT</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
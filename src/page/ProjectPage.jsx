import { useState } from "react"
import { clsx } from "clsx"

export const ProjectPage = () => {
  const [mouseEnterGO1, setMouseEnterGO1] = useState(false)
  const [mouseEnterGO2, setMouseEnterGO2] = useState(false)
  const [mouseEnterGO3, setMouseEnterGO3] = useState(false)
  const [mouseEnterGO4, setMouseEnterGO4] = useState(false)


  return (
    <>
    <div className="container-2">
      <div className="header-area-2">
        <div className="header-link-home">
          <a className="header-link-home" href="/">HOME</a>
        </div>
        <div className="line"></div>
        <div className=""></div>
      </div>
      <div className="project-area">
        <div className="project1">
          <div className="project1-photo">
            <img className="project1-photo-img" src="/p1.png"></img>
            <a href="https://cancer-screening-helper-1.onrender.com/" className={clsx("go-btn-1",{"animate__animated animate__pulse":mouseEnterGO1})} onMouseEnter={()=>setMouseEnterGO1(true)} onMouseLeave={()=>setMouseEnterGO1(false)}>GO</a>
            </div>
          <div className="project1-description">
             <div className="project1-title"> HEALTH-CHECK MAP</div>
             <div className="project1-detail">Show the qualified health check area that you can do by filling your gender and age, also show the nearest clinic to do the health check by getting your position. </div>
          </div>
        </div>
        <div className="project2">
          <div className="project2-photo">
            <img className="project2-photo-img" src="/p2.png"></img>
            <a href="https://clairehuang77777.github.io/Alpha-Tweet/" className={clsx("go-btn-2",{"animate__animated animate__pulse":mouseEnterGO2})} onMouseEnter={()=>setMouseEnterGO2(true)} onMouseLeave={()=>setMouseEnterGO2(false)}>GO</a>
          </div>
          <div className="project2-description"><div className="project2-title"> ALPHA TWITTER</div>
             <div className="project2-detail">It's a twitter-like social media website, where you can post, press like and reply to other. Support RWD and darkmode. Use this test account: claire/abc123 to login. </div></div>
        </div>
        <div className="project3">
          <div className="project3-photo">
            <img className="project3-photo-img" src="/p3.png"></img>
            <a href="https://oysho-ec.onrender.com/" className={clsx("go-btn-3",{"animate__animated animate__pulse":mouseEnterGO3})} onMouseEnter={()=>setMouseEnterGO3(true)} onMouseLeave={()=>setMouseEnterGO3(false)}>GO</a>
          </div>
          <div className="project3-description"><div className="project3-title"> OYSHO</div>
             <div className="project3-detail">It's a E-commerce website, where you can browse product, add to cart and search product. </div></div>
        </div>
        <div className="project4">
          <div className="project4-photo">
            <img className="project4-photo-img" src="/p4.png"></img>
            <a href="https://mychat-b570.onrender.com/" className={clsx("go-btn-4",{"animate__animated animate__pulse":mouseEnterGO3})} onMouseEnter={()=>setMouseEnterGO4(true)} onMouseLeave={()=>setMouseEnterGO4(false)}>GO</a>
          </div>
          <div className="project4-description"><div className="project4-title"> Group Chat</div>
             <div className="project4-detail">Group Chat Website can see the group chat list and see each chat room, reply as a chat manage and press reaction button. </div></div>
        </div>
      </div>
      </div>
    </>
  )
}

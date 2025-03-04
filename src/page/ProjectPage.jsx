import { useState } from "react"
import { clsx } from "clsx"

export const ProjectPage = () => {
  const [mouseEnterGO1, setMouseEnterGO1] = useState(false)
  const [mouseEnterGO2, setMouseEnterGO2] = useState(false)

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
            <a href="https://cancer-screening-helper-1.onrender.com/" className={clsx("go-btn-1",{"animate__pulse":mouseEnterGO1})} onMouseEnter={()=>setMouseEnterGO1(true)} onMouseLeave={()=>setMouseEnterGO1(false)}>GO</a>
            </div>
          <div className="project1-description">
             <div className="project1-title"> HEALTH-CHECK MAP</div>
             <div className="project1-detail">Fill in your age and gender, it will show the qualified health check area that you can do. and also show the nearest clinic to do the health check by getting your position. </div>
          </div>
        </div>
        <div className="project2">
          <div className="project2-photo">
            <img className="project2-photo-img" src="/p2.png"></img>
            <a href="https://clairehuang77777.github.io/Alpha-Tweet/" className={clsx("go-btn-2",{"animate__pulse":mouseEnterGO2})} onMouseEnter={()=>setMouseEnterGO2(true)} onMouseLeave={()=>setMouseEnterGO2(false)}>GO</a>
          </div>
          <div className="project2-description"><div className="project2-title"> ALPHA TWITTER</div>
             <div className="project2-detail">It's a social media website, where you can post, press like and reply to other. It's support RWD & darkmode. You can use this test account: claire/abc123 to login. </div></div>
        </div>
      </div>
      </div>
    </>
  )
}

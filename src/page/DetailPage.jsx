export const DetailPage = () => {
  return (
    <div className="container-2">
      <div className="header-area-2">
        <div className="header-link-home">
          <a className="header-link-home" href="/">HOME</a>
        </div>
        <div className="line"></div>
        <div className=""></div>
      </div>
      <div className="about-area">
        <div className="project-area-text">
          <div className="project-area-title"> LINE Booking <br></br>Automation System</div>
          <div className="project-area-text-about-detail">Background</div>
          <div
          className="project-area-text-detail">In running a guesthouse, reservation messages often come from multiple sources, and manually recording them on paper frequently leads to errors or omissions.
          <br></br>
          To reduce administrative workload, I built an automated reservation system using LINE Webhook and Make, which directly logs confirmed bookings into Google Calendar.
          Now the host can simply check Google Calendar to view upcoming reservations at a glance.</div>
          <div className="project-area-text-about-detail">System Architecture Diagram</div>
          <div
          className="project-area-text-detail">
            Integrating LINE Webhook with Google Calendar for Reservation Management
          </div>
          <img className="structure-photo-img" src="/structure.png"></img>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="project-area-text-about-detail">Tech stack</div>
          <div
          className="project-area-text-detail">
            <li>LINE Messaging API (Webhook integration)</li>
            <li>Make : Modules – Text Parser, Filter, Scenario Scheduling, Error Handler</li>
            <li>Google Calendar API</li>
            <li>Fully automated workflow execution with live monitoring and error management</li>
          </div>
          <div className="project-area-text-about-detail">ScreenShot</div>
          <div
          className="project-area-text-detail"></div>
          <img className="line-auto-video" src="/line_auto.gif"></img>
        </div>
      </div>
    </div>
    
  )
}
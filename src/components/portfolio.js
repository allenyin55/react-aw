import React from 'react';

export default class Portfolio extends React.Component {

  render() {

    return (
      <div style={{textAlign: "center", paddingTop: 6 + "rem"}} id="portfolio">
        <h2>Portfolio</h2>
        <div className="container">
          <div className="row a-item">
            <div className="col" style={{textAlign: "left"}}>
              <h3 className="project-title">Reading with Annie</h3>
              <ul className="tech-used">
                <li>react.js, </li>
                <li>redux, </li>
                <li>node.js, </li>
                <li>postgreSQL, </li>
                <li>express.js</li>
              </ul>
              <p className="project-description">
                Reading with Annie is a website built for sharing reading experience.
                Right now it's only a rough prototype, but the idea is for users to share
                their notes with each other as well as their reviews on the book they read.
                It's like a combination of goodreads, evernote and facebook.
              </p>
              <div className="button-group">
                <a  className="btn btn-primary"
                    href="https://readingwithannie.herokuapp.com"
                    target="_blank"
                >
                  Check it out
                </a>
                <a href="https://github.com/allenyin55/reading_with_Annie"
                   target="_blank"
                   style={{position: "relative", left: 300+"px", color:"black"}}>
                  <i className="fa fa-github fa-3x the-icons"
                     style={{verticalAlign: "middle"}} />
                </a>
              </div>
            </div>
            <div className="col">
              <image src="images/rwa3.png" className="port-img"/>
            </div>
          </div>
          <div className="row a-item">
            <div className="col">
              <image src="images/anba.png" className="port-img"/>
            </div>
            <div className="col" style={{textAlign: "left"}}>
              <h3 className="project-title">Allen NBA</h3>
              <ul className="tech-used">
                <li>react.js, </li>
                <li>redux, </li>
                <li>node.js, </li>
                <li>mongodb, </li>
                <li>express.js</li>
              </ul>
              <p className="project-description">
                Allen NBA is a webiste I built for viewing basic NBA stats.
                It also has a neat feature of searching of comparing players.
              </p>
              <div className="button-group">
                <a  className="btn btn-primary"
                    href="https://allen-nba.herokuapp.com"
                    target="_blank"
                >
                  Check it out
                </a>
                <a href="https://github.com/allenyin55/allen-nba"
                   target="_blank"
                   style={{position: "relative", left: 300+"px", color:"black"}}>
                  <i className="fa fa-github fa-3x the-icons"
                     style={{verticalAlign: "middle"}} />
                </a>
              </div>
            </div>
          </div>
          <div className="row a-item">
            <div className="col" style={{textAlign: "left"}}>
              <h3 className="project-title">I love Melissa</h3>
              <ul className="tech-used">
                <li>html, </li>
                <li>css, </li>
                <li>bootstrap</li>
              </ul>
              <p className="project-description">
                This is a website I made as a chrismas gift to world's greatest mom.
              </p>
              <div className="button-group">
                <a  className="btn btn-primary"
                    href="http://www.ilovemelissahardy.com"
                    target="_blank"
                >
                  Check it out
                </a>
                <a href="https://github.com/allenyin55/IloveMelissaHardy"
                   target="_blank"
                   style={{position: "relative", left: 300+"px", color:"black"}}>
                  <i className="fa fa-github fa-3x the-icons"
                     style={{verticalAlign: "middle"}} />
                </a>
              </div>
            </div>
            <div className="col">
              <image src="images/loveMelis.png" className="port-img"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
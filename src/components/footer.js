import React from 'react';
import ReactTooltip from 'react-tooltip'

export default () =>
  <div id="contact" style={{textAlign: "center", paddingTop: 4+"rem"}}>
    <h3>Contact</h3>
    <div className="icon-group" style={{margin: 80+"px auto "+40+"px"}}>
      <a href="https://github.com/allenyin55"
         target="_blank"
         style={{position: "relative",color:"black"}}>
        <i className="fa fa-github-alt fa-3x the-icons"
           style={{verticalAlign: "middle", margin: 15+"px"}} />
      </a>
      <a href="https://www.facebook.com/yinhaonan96"
         target="_blank"
         style={{position: "relative", color:"black"}}>
        <i className="fa fa-facebook fa-3x the-icons"
           style={{verticalAlign: "middle",  margin: 15+"px"}} />
      </a>
      <a data-tip data-for='email'
         style={{position: "relative",color:"black"}}>
        <i className="fa fa-envelope fa-3x the-icons"
           style={{verticalAlign: "middle",  margin: 15+"px"}} />
      </a>
      <ReactTooltip id='email'>
        <span>yinhaonan55@gmail.com</span>
      </ReactTooltip>
    </div>
  </div>
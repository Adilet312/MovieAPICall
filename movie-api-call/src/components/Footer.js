import React from 'react';
const Footer = () => {


  return(<div className = 'footer-box'>
          <div className = 'first-columns'></div>
          <div className = 'second-columns'><i className = 'fas fa-map-marker-alt fa-5x'> </i><div id="mapmark">122 NE 23th Street,Seattle</div></div>
          <div className = 'third-columns'> <i className = "fas fa-phone-alt"> </i></div>
          <div className = 'fourth-columns'><i className = "far fa-envelope fa-5x"> </i><div>adiletm@hotmail.com</div></div>
          <div className = 'fifth-columns'>
            <div>
              <i class="fab fa-facebook-square fa-3x"></i>
              <i class="fab fa-instagram fa-3x"></i>
              <i class="fab fa-twitter-square fa-3x"></i>
              <i class="fab fa-linkedin fa-3x"></i>
          </div>
          <div id = 'copyrightId'>Copyright &copy; 2020.All rights reserved</div>
        </div>
        <div className = 'sixth-columns'></div>
        </div>);
}
export default Footer;

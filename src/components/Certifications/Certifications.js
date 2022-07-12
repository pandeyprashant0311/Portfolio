import React from "react";
import "./Certifications.css";
import web from "../../images/web.png";
import dsa from "../../images/dsa.png";
import nda from "../../images/nda.png";
import photoshop from "../../images/photoshop.png";
import geeta from "../../images/geeta.png";
import digital from "../../images/digital.png";
import book from "../../images/book.png";
import times from "../../images/times.png";
import epic from "../../images/vov.png";
function Certifications() {
  return (
    <div className="certifications" id="certifications">
      <svg
        className="custom-shape-divider-top-1622640486"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
          className="shape-fill"
        ></path>
      </svg>
      <h2 style={{ color: "#02040f" }}>Certifications</h2>
      <div data-aos="fade-down" data-aos-duration="1000" className="container arrange row" >
        <div>
          <div class="card">
            <img src={web} width="30px" height="30px" />
            <div class="container">
              <p>
                <b>
                  <a href="https://drive.google.com/file/d/123xCIQ1w8AE5v1gzyO2-rvzR2pk1Rs3b/view?usp=sharing" target="_blank">Web Development</a>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            
            <img src={dsa} width="30px" height="30px" />
            <div class="container">
              <p>
                <b>
                  <a href="https://drive.google.com/file/d/1bNJVQG52XQ-a-lD7CUB8jyY69iwb6Stn/view?usp=sharing" target="_blank">Data-Structures & Algorithms</a>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            
            <img src={nda} width="30px" height="30px" />
            <div class="container">
              <p>
                <b>
                  <a href="https://drive.google.com/file/d/1qspWNEMMgZce9sRSGAVvBTb-ok1APvRP/view?usp=sharing" target="_blank">NDA</a>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            
            <img src={photoshop} width="30px" height="30px" />
            <div class="container">
              <p>
                <b>
                  <a href="https://drive.google.com/file/d/1R1O5WlTaYlTvX5LSeFaRDQNVTagPOzPA/view?usp=sharing" target="_blank">Photoshop</a>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            
            <img src={geeta} width="30px" height="30px" />
            <div class="container">
              <p>
                <b>
                  <a href="https://drive.google.com/file/d/12VI-JHmUzEi9ygW6WxcKahpFHFQTj6FX/view?usp=sharing" target="_blank">Geeta Saar</a>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            
            <img src={digital} width="30px" height="30px" />
            <div class="container">
              <p>
                <b>
                  <a href="https://drive.google.com/file/d/1qZ9zMcUy_AEhCj34MjvYZHnqXMYIs_9_/view?usp=sharing" target="_blank">Digital Marketing</a>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            
            <img src={book} width="30px" height="30px" />
            <div class="container">
              <p>
                <b>
                  <a href="https://drive.google.com/file/d/1lhFwQTKFt0tZyJ9ag__HVviD2Ztm6WPY/view?usp=sharing" target="_blank">Book Writing</a>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            
            <img src={times} width="30px" height="30px" />
            <div class="container">
              <p>
                <b>
                  <a href="https://drive.google.com/file/d/1U3bv5TkO8nJJGD2p_3pn5_v3csuaG5iK/view?usp=sharing" target="_blank">Times Of India</a>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div>
          </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Certifications;

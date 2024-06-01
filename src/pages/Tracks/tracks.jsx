import React from "react";
import "./tracks.css";
import { GiCyberEye } from "react-icons/gi";
import { GrThreats } from "react-icons/gr";
import { FaHackerrank } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Cyberimg from "../../assets/cyber.jpg"
import UIUXimg from "../../assets/UIUX.jpg"
import { FaTabletAlt } from "react-icons/fa";
import { PiTestTubeThin } from "react-icons/pi";
import { GrUserExpert } from "react-icons/gr";
import { SiPeakdesign } from "react-icons/si";
import webdevimg from "../../assets/webdev.jpg"
import { CgWebsite} from "react-icons/cg";
import { FaCss3Alt } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import appimg from "../../assets/App.jpg"
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { GrAppsRounded } from "react-icons/gr";


function Tracks() {
  return (
    <div className="tracs-section">
      <div className="bannerSection">
        <h1 className="OurTracks">Our Tracks</h1>
        <p className="qualified">View Our Tracks</p>
      </div>

      <div className="tracks">
        <div className="tracks1">
          <div className="Tracks-title">
            <h3 className="title">Cyber Security</h3>
          </div>
          <div className="Tracks-description">
            <div className="trackimg">
              <img src={Cyberimg} alt="cyber" />
            </div>
            <div className="tracRight">
              <div className="icon">
                <GiCyberEye />
              </div>
              <div className="tracPara">
                <p className="para">
                  {" "}
                  <GrThreats />   system Protection
                </p>
                <p className="para">
                  {" "}
                  <FaHackerrank />
                      Ethical Hacking
                </p>
                <p className="para">
                  {" "}
                  <GrUserExpert />
                  Enhance User Experience
                </p>
                <p className="para"> You will have a chance to engage in hands on projects and real world scenario.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tracks1">
          <div className="Tracks-title">
            <h3 className="title">UI/UX Design</h3>
          </div>
          <div className="Tracks-description">
            <div className="trackimg">
              <img src={UIUXimg} alt="UIUXimg" />
            </div>
            <div className="tracRight">
              <div className="icon">
                <SiPeakdesign />
              </div>
              <div className="tracPara">
                <p className="para">
                  {" "}
                  <FaTabletAlt />  Protyping & Wireframing
                </p>
                <p className="para">
                  {" "}
                  <PiTestTubeThin />
                  Usabilty Test
                </p>
                <p className="para">
                  {" "}
                  <AiFillSafetyCertificate />
                  Safeguard Digital Environments
                </p>
                <p className="para"> You will gain proficiency in using industrial desing tools.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tracks1">
          <div className="Tracks-title">
            <h3 className="title">Web Development</h3>
          </div>
          <div className="Tracks-description">
            <div className="trackimg">
              <img src={webdevimg} alt="webdevimg one" />
            </div>
            <div className="tracRight">
              <div className="icon">
                <CgWebsite />
              </div>
              <div className="tracPara">
                <p className="para">
                  {" "}
                  <FaHtml5 /> Html Frontend development
                </p>
                <p className="para">
                  {" "}
                  <FaNodeJs />
                      Backend Development,Nodejs
                </p>
                <p className="para">
                  {" "}
                  <FaCss3Alt />
                  CSS for styling.
                </p>
                <p className="para"> You will gain capability to develop a full-stack web App and scalable webs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tracks1">
          <div className="Tracks-title">
            <h3 className="title">Mobile Apps Development</h3>
          </div>
          <div className="Tracks-description">
            <div className="trackimg">
              <img src={appimg } alt="cyber" />
            </div>
            <div className="tracRight">
              <div className="icon">
                <FaAppStoreIos/>
              </div>
              <div className="tracPara">
                <p className="para">
                  {" "}
                  <IoLogoAndroid  />   Android and I
                </p>
                <p className="para">
                  {" "}
                  <FaJava/>
                      Java, Kotlin, Swift & Dart
                </p>
                <p className="para">
                  {" "}
                  <GrAppsRounded />
                  user Friendly Apps
                </p>
                <p className="para"> You will be able to test and deploy mobile apps ready to deliver high performance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tracks1">
          <div className="Tracks-title">
            <h3 className="title">Cloud computing</h3>
          </div>
          <div className="Tracks-description">
            <div className="trackimg">
              <img src={appimg } alt="cyber" />
            </div>
            <div className="tracRight">
              <div className="icon">
                <FaAppStoreIos/>
              </div>
              <div className="tracPara">
                <p className="para">
                  {" "}
                  <IoLogoAndroid  />   Android and I
                </p>
                <p className="para">
                  {" "}
                  <FaJava/>
                      Java, Kotlin, Swift & Dart
                </p>
                <p className="para">
                  {" "}
                  <GrAppsRounded />
                  user Friendly Apps
                </p>
                <p className="para"> You will be able to test and deploy mobile apps ready to deliver high performance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tracks1">
          <div className="Tracks-title">
            <h3 className="title">Mobile Apps Development</h3>
          </div>
          <div className="Tracks-description">
            <div className="trackimg">
              <img src={appimg } alt="cyber" />
            </div>
            <div className="tracRight">
              <div className="icon">
                <FaAppStoreIos/>
              </div>
              <div className="tracPara">
                <p className="para">
                  {" "}
                  <IoLogoAndroid  />   Android and I
                </p>
                <p className="para">
                  {" "}
                  <FaJava/>
                      Java, Kotlin, Swift & Dart
                </p>
                <p className="para">
                  {" "}
                  <GrAppsRounded />
                  user Friendly Apps
                </p>
                <p className="para"> You will be able to test and deploy mobile apps ready to deliver high performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracks;

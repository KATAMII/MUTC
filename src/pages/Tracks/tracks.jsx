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
import Cloud from "../../assets/cloud.jpg"
import powerimg from "../../assets/power.jpeg"
import { TbCloudComputing } from "react-icons/tb";
import { FaAws } from "react-icons/fa6";
import { SiGooglecloud } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiPowerapps } from "react-icons/si";
import { SiPowerautomate } from "react-icons/si";
import { SiChatbot } from "react-icons/si";
import { SiMicrosoftteams } from "react-icons/si";
import techclubimg from "../../assets/tech club.png"



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
                  <IoLogoAndroid  />   Android and IOS
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
              <img src={Cloud} alt="cyber" />
            </div>
            <div className="tracRight">
              <div className="icon">
                <TbCloudComputing/>
              </div>
              <div className="tracPara">
                <p className="para">
                  {" "}
                  <FaAws />   AWS
                </p>
                <p className="para">
                  {" "}
                  <SiGooglecloud/>
                      Google Cloud
                </p>
                <p className="para">
                  {" "}
                  <SiMicrosoftazure  />
                  Microsoft Azure
                </p>
                <p className="para"> You will be able to understand how to design ,deploy and manage secure cloud infrastracture..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tracks1">
          <div className="Tracks-title">
            <h3 className="title">Power Platform</h3>
          </div>
          <div className="Tracks-description">
            <div className="trackimg">
              <img src={powerimg } alt="cyber" />
            </div>
            <div className="tracRight">
              <div className="icon">
                <SiPowerapps/>
              </div>
              <div className="tracPara">
                <p className="para">
                  {" "}
                  <SiPowerautomate  />   Power Automate
                </p>
                <p className="para">
                  {" "}
                  <SiChatbot/>
                      chatbots built with minimal code.
                </p>
                <p className="para">
                  {" "}
                  <SiMicrosoftteams />
                  Microsoft teams
                </p>
                <p className="para"> You will be proficient in developing integrated solutions using the power platforms. .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="register">
        <div className="registerimgsection">
          <img src={techclubimg} alt="register" />
        </div>
        <div className="registersection">
           <h1 className="register-title">Register</h1>
          <form className="registerform">
            <div className="register-names">
              <label htmlFor="fullNme">Full name</label>
              <input type="text" id="fullNme" placeholder="full name"required/>
            </div>
            <div className="register-names">
              <label htmlFor="email">Email</label>
              <input type="Email" id="email" placeholder=" Email@example.com" required/>
            </div>
            <div className="register-names">
              <label htmlFor="course">Curent course</label>
              <input type="text" id="course" placeholder="eg.Software Engineering"/>
            </div>
            <div className="register-names">
              <label htmlFor="year">Year of study</label>
              <input type="text" id="year" placeholder="Year of Study"/>
            </div>
            <div className="register-names">
              <label htmlFor="tracs">Disired  Track</label>
              <select name="" id="tracs">
                <option value="Tracs">Select Tracs</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="UI/UX Design">UI/UX Design"</option>
                <option value="Web development">Web development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Cloud Engineering">Cloud Engineering</option>
                <option value="Power Platforms">Power Platforms</option>
              </select>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tracks;

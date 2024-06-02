import React from "react";
import "./events.css";
import { MdOutlineSecurity } from "react-icons/md";
import { GrAppsRounded } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { GrCloudComputer } from "react-icons/gr";
import { FaAws } from "react-icons/fa";

function Events() {
  return (
    <div className="eventssection">
      <div className="bannerSection">
        <h1 className="Ourleaders">Weekly Events</h1>
        <p className="qualified">View Our Events </p>
      </div>
      <div className="ourevents">
        <div className="event">
          <p className="eventicon">
            <MdOutlineSecurity />
          </p>
          <p className="eventdesc">Cyber Security</p>
          <h3 className="eventtitle">
            <FaRegCalendarAlt /> Monday 4pm to 7pm
          </h3>
          <h3 className="eventtitle"> Computer Lab F04</h3>
          <p className="lead">Lead: Webster Ifedha</p>
        </div>
        <div className="event">
          <p className="eventicon">
            <GrAppsRounded />
          </p>
          <p className="eventdesc">UI/UX Design</p>
          <h3 className="eventtitle">
            <FaRegCalendarAlt /> Tuesday 5pm to 8pm
          </h3>
          <h3 className="eventtitle"> Computer Lab F04</h3>

          <p className="lead">Lead: Manase Gunga</p>
        </div>
        <div className="event">
          <p className="eventicon">
            <CgWebsite />
          </p>
          <p className="eventdesc">Web Development</p>
          <h3 className="eventtitle">
            <FaRegCalendarAlt /> Wednesday 6pm to 9pm
          </h3>
          <h3 className="eventtitle"> Computer Lab F04</h3>
          <p className="lead">Lead: Carolyne Githenduka</p>
        </div>
        <div className="event">
          <p className="eventicon">
            <GrAppsRounded />
          </p>
          <p className="eventdesc">Mobile App Development</p>
          <h3 className="eventtitle">
            <FaRegCalendarAlt /> Thursday 4pm to 7pm
          </h3>
          <h3 className="eventtitle"> Computer Lab F04</h3>
          <p className="lead">Lead: Stanely Amunze</p>
        </div>
        <div className="event">
          <p className="eventicon">
            <GrCloudComputer />
          </p>
          <p className="eventdesc"> Cloud Engineering</p>
          <h3 className="eventtitle">
            <FaRegCalendarAlt /> Friday 3pm to 6pm
          </h3>
          <h3 className="eventtitle"> Computer Lab F04</h3>
          <p className="lead">Lead: Paul Karanja</p>
        </div>
        <div className="event">
          <p className="eventicon">
            <FaAws />
          </p>
          <p className="eventdesc">Cloud Engineering</p>
          <h3 className="eventtitle">
            <FaRegCalendarAlt /> Saturday 1pm to 4pm
          </h3>
          <h3 className="eventtitle"> Computer Lab F04</h3>
          <p className="lead">Lead: Evyonne Mbithe</p>
        </div>
      </div>
    </div>
  );
}

export default Events;

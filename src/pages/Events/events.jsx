import React from "react";
import './events.css'
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
          <p className="eventicon">< MdOutlineSecurity/></p>
          <h3 className="eventtitle"><FaRegCalendarAlt/> Monday 4pm to 7pm</h3>
          <p className="eventdesc">Cyber Security</p>
          <p className="lead">Lead: Webster Ifedha</p>
        </div>
        <div className="event">
          <p className="eventicon">< MdOutlineSecurity/></p>
          <h3 className="eventtitle"><FaRegCalendarAlt/> Monday 4pm to 7pm</h3>
          <p className="eventdesc">Cyber Security</p>
          <p className="lead">Lead: Webster Ifedha</p>
        </div>
        <div className="event">
          <p className="eventicon">< MdOutlineSecurity/></p>
          <h3 className="eventtitle"><FaRegCalendarAlt/> Monday 4pm to 7pm</h3>
          <p className="eventdesc">Cyber Security</p>
          <p className="lead">Lead: Webster Ifedha</p>
        </div>
        <div className="event">
          <p className="eventicon">< MdOutlineSecurity/></p>
          <h3 className="eventtitle"><FaRegCalendarAlt/> Monday 4pm to 7pm</h3>
          <p className="eventdesc">Cyber Security</p>
          <p className="lead">Lead: Webster Ifedha</p>
        </div>
        <div className="event">
          <p className="eventicon">< MdOutlineSecurity/></p>
          <h3 className="eventtitle"><FaRegCalendarAlt/> Monday 4pm to 7pm</h3>
          <p className="eventdesc">Cyber Security</p>
          <p className="lead">Lead: Webster Ifedha</p>
        </div>
        <div className="event">
          <p className="eventicon">< MdOutlineSecurity/></p>
          <h3 className="eventtitle"><FaRegCalendarAlt/> Monday 4pm to 7pm</h3>
          <p className="eventdesc">Cyber Security</p>
          <p className="lead">Lead: Webster Ifedha</p>
        </div>
      </div>

    </div>
  );
}

export default Events;

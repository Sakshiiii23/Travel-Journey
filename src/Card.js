import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
{
  /* <FontAwesomeIcon icon="fa-solid fa-location-dot" /> */
}

export default function Card(props) {
  return (
    <div className="container">
      <div className="title-image">
        <img src={props.img} className="imgSrc" alt="" />
      </div>
      <div className="properties">
        <span>
          <img src="../location.jpg" className="location-img" />
          {props.loc}&nbsp;&nbsp;&nbsp;
          <a href={props.Maps} className="maps-link">
            View on Google maps
          </a>
        </span>
        <h1 className="title">{props.title}</h1>
        <p>
          <b>
            {props.startDate}-{props.endDate}
          </b>
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

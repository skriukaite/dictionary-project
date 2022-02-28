import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          {props.photos.map(function (photo, index) {
            return (
              <div className="text-center" key={index}>
                <img
                  src={photo.src.landscape}
                  alt="pexels"
                  className="img-fluid"
                />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}

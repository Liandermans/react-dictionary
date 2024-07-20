import React from "react";
import PhotoObject from "./PhotoObject";
import "./Images.css";

export default function Images(props) {
  if (props.images === null) {
    return null;
  } else {
    return (
      <section className="Images">
        <div className="row gallery-row">
          {props.images.photos.map(function (photoObject, index) {
            return (
              <div className="col-4" key={index}>
                <PhotoObject photoObject={photoObject} />
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

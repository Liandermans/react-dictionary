import React from "react";

export default function PhotoObject(props) {
  let landscapeUrl = props.photoObject.src.landscape;
  let alt = props.photoObject.alt;
  let srcUrl = props.photoObject.src.original;
  let photographer = props.photoObject.photographer;
  let copyright = `Copyright by ${photographer}`;

  return (
    <div>
      <a href={srcUrl} target="_blank" rel="noreferrer">
        <img
          className="img-fluid gallery"
          src={landscapeUrl}
          alt={alt}
          title={copyright}
        ></img>
      </a>
    </div>
  );
}

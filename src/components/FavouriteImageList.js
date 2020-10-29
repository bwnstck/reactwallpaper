import "./FavouriteImageList.css";

import React from "react";
import ImageFavourite from "./ImageFavourite";

export default function FavouriteImages({ photoIds, setFavouriteImages }) {
  return (
    <div className={"favouriteImages"}>
      {photoIds.map((favImage) => (
        <ImageFavourite
          photoId={favImage.id}
          key={favImage.alt_description}
          imgSrc={favImage.urls.regular}
          imgAlt={favImage.alt_description}
          handleOnClick={() => {
            console.log("ivebeenclicked");

            const arrayWithoutImage = photoIds.filter(
              (favouriteImage) => favouriteImage.id !== favImage.id
            );
            setFavouriteImages(arrayWithoutImage);
            localStorage.setItem(
              "favorites",
              JSON.stringify(arrayWithoutImage)
            );
          }}
        ></ImageFavourite>
      ))}
    </div>
  );
}

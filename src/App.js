import { useEffect, useState } from "react";
import Button from "./components/Button";
import DownloadForm from "./components/DownloadForm";
import FavouriteImages from "./components/FavouriteImages";
import ImageFavourite from "./components/ImageFavourite";
import LikeButton from "./components/LikeButton";
import Wallpaper from "./components/Wallpaper";
import { searchNewPicture } from "./utils/api";

function App() {
  const API_ENABLE = true;
  const [wallpaper, setWallpaper] = useState(null);
  const [imgObj, setImgObj] = useState(null);
  const [favouriteImages, setFavouriteImages] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    if (API_ENABLE) {
      async function doFetch() {
        const imgObj = await getImageObj();
        setImgObj(imgObj);
        setWallpaper(imgObj.urls.regular);
      }
      doFetch();
    }
  }, []);

  async function getImageObj() {
    const randomimageObj = await searchNewPicture();
    return randomimageObj;
  }
  // const imgSrc = "https://source.unsplash.com/random";

  // const imgAlt = imgObj.urls.regular;

  return (
    <div className="container">
      {wallpaper && <Wallpaper imgSrc={imgObj.urls.regular} />}
      <LikeButton
        handleOnClick={() => {
          try {
            console.log("favImages", favouriteImages);
            if (
              favouriteImages.some(
                (favouriteImage) => favouriteImage.id === imgObj.id
              )
            ) {
              const popImage = favouriteImages.filter(
                (favouriteImage) => favouriteImage.id === imgObj.id
              );
              console.log(popImage);
              const arrayWithoutImage = favouriteImages.filter(
                (favouriteImage) => favouriteImage.id !== imgObj.id
              );
              setFavouriteImages(arrayWithoutImage);
              localStorage.setItem(
                "favorites",
                JSON.stringify(arrayWithoutImage)
              );
              // Remove Item from local storage and update array
            } else {
              // Add to local Favs and to localStorage
              const newFavsArray = [...favouriteImages, imgObj];
              setFavouriteImages(newFavsArray);
              localStorage.setItem("favorites", JSON.stringify(newFavsArray));
            }
          } catch (error) {
            console.error("error", error);
          }
        }}
      />
      <Button
        className="searchButton"
        buttonText={"Search"}
        onClick={async (event) => {
          event.stopPropagation();
          console.log("click");
          setImgObj(await getImageObj());
        }}
      />
      {imgObj && (
        <DownloadForm href={imgObj.urls.regular}>
          {imgObj.urls.regular && (
            <Button
              buttonText={"Download"}
              className={"downloadButton"}
              type={"submit"}
            />
          )}
        </DownloadForm>
      )}

      {favouriteImages.length > 0 && (
        <FavouriteImages>
          <ImageFavourite
            imgSrc={favouriteImages[0].urls.regular}
            imgAlt={favouriteImages[0].alt_description}
          ></ImageFavourite>
        </FavouriteImages>
      )}
    </div>
  );
}

export default App;

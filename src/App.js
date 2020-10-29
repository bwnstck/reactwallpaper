import { useEffect, useState } from "react";
import Button from "./components/Button";
import DownloadForm from "./components/DownloadForm";
import FavouriteImageList from "./components/FavouriteImageList";
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

  useEffect(() => {
    centerScrollbar();
  }, [favouriteImages]);

  async function getImageObj() {
    const randomimageObj = await searchNewPicture();
    return randomimageObj;
  }

  function centerScrollbar() {
    const element = document.querySelector(".favouriteImages");
    element &&
      (element.scrollLeft = (element?.scrollWidth - element?.clientWidth) / 2);
  }

  return (
    <div className="container">
      {wallpaper && <Wallpaper imgSrc={imgObj.urls.regular} />}

      <Button
        className="searchButton"
        buttonText={"Search"}
        onClick={async (event) => {
          event.stopPropagation();
          console.log("click");
          setImgObj(await getImageObj());
        }}
      />
      <LikeButton
        liked={
          imgObj &&
          favouriteImages.some(
            (favouriteImage) => favouriteImage.id === imgObj.id
          )
        }
        handleOnClick={() => {
          try {
            if (
              favouriteImages.some(
                (favouriteImage) => favouriteImage.id === imgObj.id
              )
            ) {
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
      {imgObj && (
        <DownloadForm href={imgObj.links.download} target="_blank">
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
        <FavouriteImageList
          photoIds={favouriteImages}
          setFavouriteImages={setFavouriteImages}
        />
      )}
    </div>
  );
}

export default App;

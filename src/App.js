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
  const favouriteImages = JSON.parse(localStorage.getItem("favorites")) || [];

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
      {wallpaper && (
        <Wallpaper imgSrc={imgObj.urls.regular}>
          <LikeButton
            handleOnClick={() => {
              try {
                console.log("he tried");
                if (
                  favouriteImages.some(
                    (favouriteImage) => favouriteImage.id === imgObj.id
                  )
                ) {
                  console.log("click like");
                } else {
                  localStorage.setItem("favorites", JSON.stringify([imgObj]));
                }
              } catch (error) {
                console.error("error", error);
              }
            }}
          />
        </Wallpaper>
      )}
      <Button
        className="searchButton"
        buttonText={"Search"}
        onClick={async (event) => {
          event.stopPropagation();
          console.log("click");
          await getImageObj();
        }}
      />
      <DownloadForm href={wallpaper}>
        {wallpaper && (
          <Button
            buttonText={"Download"}
            className={"downloadButton"}
            type={"submit"}
          />
        )}
      </DownloadForm>

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

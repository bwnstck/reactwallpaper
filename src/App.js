import { useEffect, useState } from "react";
import Button from "./components/Button";
import DownloadForm from "./components/DownloadForm";
import FavouriteImages from "./components/FavouriteImages";
import LikeButton from "./components/LikeButton";
import Wallpaper from "./components/Wallpaper";
import { searchNewPicture } from "./utils/api";

function App() {
  const API_ENABLE = true;
  const [wallpaper, setWallpaper] = useState(null);
  const [imgObj, setImgObj] = useState(null);
  const favouriteImages = JSON.parse(localStorage.getItem("favorites")) || [];

  console.log(favouriteImages ? true : false);

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
  console.log("IMGOBJ", imgObj);
  async function getImageObj() {
    const randomimageObj = await searchNewPicture();
    return randomimageObj;
  }
  // const imgSrc = "https://source.unsplash.com/random";

  // const imgAlt = imgObj.urls.regular;
  let imgSrc = imgObj.urls.regular;
  return (
    <div className="container">
      {wallpaper && (
        <Wallpaper imgSrc={imgSrc}>
          <LikeButton
            handleOnClick={() => {
              try {
                if (favouriteImages.include(wallpaper))
                  console.log("click like");
                localStorage.setItem("favorites", JSON.stringify(imgObj));
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
          <div>Favourite Images</div>
        </FavouriteImages>
      )}
    </div>
  );
}

export default App;

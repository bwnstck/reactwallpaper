import { useState } from "react";
import Button from "./components/Button";
import DownloadForm from "./components/DownloadForm";
import Wallpaper from "./components/Wallpaper";
import { searchNewPicture } from "./utils/api";

function App() {
  const [wallpaper, setWallpaper] = useState(null);

  async function getImage() {
    const randomimage = await searchNewPicture();
    setWallpaper(randomimage.urls.regular);
  }

  return (
    <div className="container">
      {wallpaper && <Wallpaper imgSrc={wallpaper} />}
      <Button
        className="searchButton"
        buttonText={"Search"}
        onClick={async (event) => {
          event.stopPropagation();
          console.log("click");
          await getImage();
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
    </div>
  );
}

export default App;

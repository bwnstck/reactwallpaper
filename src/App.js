import { useState } from "react";
import Button from "./components/Button";
import Wallpaper from "./components/Wallpaper";
import { searchNewPicture } from "./utils/api";

function App() {
  const [wallpaper, setWallpaper] = useState(
    "https://source.unsplash.com/random"
  );

  async function getImage() {
    const randomimage = await searchNewPicture();
    setWallpaper(randomimage.urls.regular);
  }

  return (
    <div className="container">
      <Wallpaper imgSrc={wallpaper} />
      <Button
        className="searchButton"
        buttonText={"Search"}
        onClick={async () => {
          console.log("click");
          await getImage();
        }}
      />
      <Button
        buttonText={"Download"}
        href={wallpaper}
        className={"downloadButton"}
      />
    </div>
  );
}

export default App;

import Button from "./components/Button";
import Wallpaper from "./components/Wallpaper";
import { searchNewPicture } from "./utils/api";

function App() {
  async function getImage() {
    const randomimage = await searchNewPicture();
    Wallpaper.imgSrc = randomimage.urls.regular;
    return randomimage.urls.regular;
  }

  const imgUrl = "https://source.unsplash.com/random";
  return (
    <div className="container">
      <Wallpaper imgSrc={imgUrl} />
      <Button
        className="searchButton"
        buttonText={"Search"}
        onClick={async () => {
          console.log("click");
          await getImage();
        }}
      />
      <Button buttonText={"Download"} className={"downloadButton"} />
    </div>
  );
}

export default App;

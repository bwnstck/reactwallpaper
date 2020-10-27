import Button from "./components/Button";
import Wallpaper from "./components/Wallpaper";
import { searchNewPicture } from "./utils/api";

function App() {
  const pictureObj = searchNewPicture();

  return (
    <div className="container">
      <Wallpaper imgSrc={pictureObj.urls.regular} />
      <Button
        className="searchButton"
        buttonText={"Search"}
        onClick={() => {
          console.log("click");
          searchNewPicture();
        }}
      />
      <Button buttonText={"Download"} className={"downloadButton"} />
    </div>
  );
}

export default App;

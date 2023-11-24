import { Button } from "./Button/Button";
import { GlobalStyle } from "./GlobalStyle";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Search/Searchbar";
// import { Modal } from "./Modal/Modal"
// import {Loader} from "./Loader/Loader"

export const App = () => {
  return (
    <div>
      <Searchbar></Searchbar>
      
      <ImageGallery></ImageGallery>
      <Button></Button>
      
       <GlobalStyle />
    </div>
  );
};

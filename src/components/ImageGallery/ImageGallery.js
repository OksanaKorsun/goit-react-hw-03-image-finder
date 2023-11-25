import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
export const ImageGallery = ({ images }) => {
  return (
      <List>{images.map(item => {
          const { webformatURL, id, tags } = item;
          return (<ImageGalleryItem image={webformatURL} key={id} tags={tags}></ImageGalleryItem>)
    })}
         
    </List>
  );
};

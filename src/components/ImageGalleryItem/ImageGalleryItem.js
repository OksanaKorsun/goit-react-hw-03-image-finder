// import { Component } from 'react';

import { Item, Image} from "./ImageGalleryItem.styled";

// import { Modal } from "./Modal/Modal"
// export class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };
//   toggleModal = () => {
//     this.setState(prevState => ({
//       isModalOpen: !prevState.isModalOpen,
//     }));
//   };
//   openModal = () => {
//     this.setState({
//       isModalOpen: true,
//     });
//   };

//   closeModal = () => {
//     this.setState({
//       isModalOpen: false,
//     });
//   };

//   render() {
//     const { isModalOpen } = this.state;
//     return (
//       <li onClick={this.toggleModal}>
//         <img src="" alt="" />
//         {isModalOpen && <h1>Modal!!!</h1>}
//       </li>
//     );
//   }
// }
// largeImageURL 
export const ImageGalleryItem = ({ image, tags }) => (
  <Item>
    <Image src={image} alt={tags} />
  </Item>
);

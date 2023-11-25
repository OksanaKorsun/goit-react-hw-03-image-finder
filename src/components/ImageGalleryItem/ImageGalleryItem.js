import { Component } from 'react';

import { Item, Image } from './ImageGalleryItem.styled';
import { ImgModal } from 'components/Modal/Modal';
// import Modal from 'react-modal';
// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };
// Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  // toggleModal = () => {
  //   this.setState(prevState => ({
  //     isModalOpen: !prevState.isModalOpen,
  //   }));
  // };
  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { image, tags, largeImage } = this.props;

    return (
      <Item onClick={this.openModal}>
        <Image src={image} alt={tags} />
        <ImgModal
          isOpen={isModalOpen}
          onClose={this.closeModal}
          tags={tags}
          image={largeImage}
        />
      </Item>
    );
  }
}
// largeImageURL
// export const ImageGalleryItem = ({ image, tags }) => (
//   <Item>
//     <Image src={image} alt={tags} />
//   </Item>

// );

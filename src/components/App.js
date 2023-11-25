import { Component } from 'react';
import { Button } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Search/Searchbar';
import { fetchImages } from 'services/api';
import { Container } from './App.styled';
import { Loader } from "./Loader/Loader";

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalPages: null,
    isLoading: false,
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        const timeId = Date.now();
        const { query, page } = this.state;
        const searchQwery = query.slice(String(timeId).length + 1);
        this.setState({ isLoading: true, error: false });
        const findImages = await fetchImages(searchQwery, page);
        this.setState({
          images: findImages.hits,
          totalPages: Math.ceil(findImages.totalHits / 12),
        });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  handleSubmit = newQuery => {
    const timeId = Date.now();
    this.setState({
      query: `${timeId}/${newQuery}`,
      page: 1,
      images: [],
      totalPages: null,
    });
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader/>}
        {images.length > 0 && <ImageGallery images={images}></ImageGallery>}

        {images.length > 0 && <Button onClick={this.handleLoadMore}></Button>}
        <GlobalStyle />
      </Container>
    );
  }
}

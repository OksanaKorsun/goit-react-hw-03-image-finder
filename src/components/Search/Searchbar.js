import { Component } from 'react';
import { SearchHeader, SearchForm, SearchButton, SearchIcon, SearchInput } from './Searchbar.styled';
export class Searchbar extends Component {
  state = {
    searchImage: '',
  };
   searchValueChange = event => {
    this.setState({ searchImage: event.currentTarget.value.toLowerCase() });
    
  };

  handleSubmit = event => {
    event.preventDefault();
    // if (this.state.searchImgName.trim() === '') {
    //   return toast.error('Write name for search');
    // }
    this.props.onSubmit(this.state.searchImage);
    this.setState({ searchImage: '' });
     
  };
  render() {
    const { searchImage } = this.state;
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchIcon>Search</SearchIcon>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.searchValueChange}
            name="searchImage"
            value={searchImage}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}
// import { Formik } from 'formik';
// import{Form, Field, SearchButton } from './Searchbar.styled'

// export const Searchbar = ({ onSubmit }) => {
//   return (
//     <Formik
//       initialValues={{
//         searchImage: '',
//       }}
//       onSubmit={(values, actions) => {
//         onSubmit(values);
//         actions.resetForm();
//       }}
//     >
//       <Form>
//         <SearchButton type="submit"></SearchButton>
//         <Field
//           name="searchImage"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </Form>
//     </Formik>
//   );
// };

import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    value: '',
  };

  onSubmitClick = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
  };

  handleChange = ({ target }) => {
    console.log(target.value);
    this.setState({ value: target.value });
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.onSubmitClick}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          onChange={this.handleChange}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          value={this.state.value}
        />
      </SearchFormStyled>
    );
  }
}

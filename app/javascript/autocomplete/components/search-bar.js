import React, { Component } from 'react';

const url = 'https://wagon-dictionary.herokuapp.com/autocomplete/ruby'


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''}
  }


  render() {
    return (
      <div className='eight column'>
        <label>Autocomplete</label>
        <input
          type='search'
          className='u-full-width'
          value={this.state.term}
          onChange={event => this.onInputChange(event)}
          />
       </div>

      );
  };

  onInputChange(event) {
    this.setState({term: event.target.value})
    this.props.onSearchTermChange(event.target.value)
  };
}


export default SearchBar;




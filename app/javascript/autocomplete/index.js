import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeachBar from './components/search-bar';
import Words from './components/words';

const url = 'https://wagon-dictionary.herokuapp.com/autocomplete/'

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {words: []}
  }


  wordSearch = (term) => {
    const url = `https://wagon-dictionary.herokuapp.com/autocomplete/${term}`
    axios.get(url)
      .then(function (response) {
        console.log(response);
      })
    // fetch(url).then(response => response.json().then((data) => {this.setState({words: data.words})}))
    // this.setState({words: ['apple', 'orange']})
  }


  render() {
    const wordSearch = _.debounce((term) => {this.wordSearch(term)}, 300)
    return(
      <div>
        <SeachBar onSearchTermChange={wordSearch} />
        <Words words={this.state.words} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'))



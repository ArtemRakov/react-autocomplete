import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeachBar from './components/search-bar';
import Words from './components/words';
import Results from './components/count-results';

const url = 'https://wagon-dictionary.herokuapp.com/autocomplete/'

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      words: [],
      results: 0
    }
  }


  wordSearch = (term) => {
    const url = `https://wagon-dictionary.herokuapp.com/autocomplete/${term}`
    fetch(url).then(response => response.json().then((data) => {this.setState({words: data.words, results: data.count})}))
  }


  render() {
    return(
      <div className="row">
        <SeachBar onSearchTermChange={this.wordSearch} />
        <Results count={this.state.results}/>
        <Words words={this.state.words} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.autocomplete'))



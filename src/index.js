// import is ES6 version of require
import React from 'react'; // base React library includes create/manage components
import ReactDOM from 'react-dom'; // React DOM to manipulate browser elements
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

// class is new in ES6: below is same as var App = React.createClass({}); in ES5.
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs : [
        {
          id: 1,
          url: 'http://fakeimg.pl/300/'
        },
        {
          id: 2,
          url: 'http://fakeimg.pl/300/'
        },
        {
          id: 3,
          url: 'http://fakeimg.pl/300/'
        }
      ]
    }
  }

  handleTermChange(term) {
    console.log(term);
  }

  render() { // render function outputs JSX.
    /*for e.g. JSX like the folowwing will be output:
    return (
      <div className="greeting">
        <p className="greetingtext">Hello World!</p>
      </div>
    )
    for the equivalent of the following javascript:
     return React.createElement(
         "div",
         { "class": "greeting"},
         React.createElement(
            "p",
            { "class" : "greetingtext"},
            "Hello World!"
          )
     );
    */
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}

// links the App component with he empty < div id="app"></div> in index.html
ReactDOM.render(<App />, document.getElementById('app')
);

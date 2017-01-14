// import is ES6 version of require
import React from 'react'; // base React library includes create/manage components
import ReactDOM from 'react-dom'; // React DOM to manipulate browser elements
import SearchBar from './components/SearchBar';

// class is new in ES6: below is ssame as var App = React.createClass({}); in ES5.
class App extends React.Component {
  render() { // output JSX
    /* Below JSX is equivalent of the following javascript:
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
      </div>
    );
  }

  handleTermChange(term) {
    console.log(term);
  }
}

// links the App component with he empty < div id="app"></div> in index.html
ReactDOM.render(<App />, document.getElementById('app')
);

import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props); //props are properties passed down from parent class
        this.state = { term: ''}
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term); //props allows passing data to parent component App
    }

    render () {
        return (
            <div className="search">
                {/*
                 fat-arrow function e=> this.onInputChange(e.target.value) is shortcut for function(e) {this.onInputChange(e.target.value)}
                */}
                <input onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }
}

// export is similar to module.export in ES5
// export makes SearchBar available for import by other pieces
// default means this module exports one value
export default SearchBar; 
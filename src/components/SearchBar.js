import React from 'react';

class SearchBar extends React.Component {
    render () {
        return (
            <div>
                <h1> Search! </h1>
            </div>
        );
    }
}

// export is similar to module.export in ES5
// export makes SearchBar available for import by other pieces
// default means this module exports one value
export default SearchBar; 
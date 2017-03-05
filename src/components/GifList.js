import React from 'react';
import GifItem from './GifItem';

/*
Instead of class GifList extends React.Component, we use  const.
GifList is a stateless, functional component
*/
const GifList = (props) => {
    const gifItems = props.gifs.map((image) => {
        return <GifItem key={image.id} gif={image} />
    });

    return (
        <ul> {gifItems}</ul>
    );
};

export default GifList;
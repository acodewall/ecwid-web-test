import React from 'react';

const Img = (props) => {
    return (
        <div className="gallery__item" key={props.index}>
            <img src={props.item.url} alt=""/>
            <button onClick={props.deleteImage}>Удалить</button>
        </div>
    );
};

export default Img;
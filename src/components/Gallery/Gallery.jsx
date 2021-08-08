import React from 'react';
import Img from '../Img/Img';

const Gallery = (props) => {
    return (
        <div className="gallery">
            {props.items.map((item, index) => {
                return <Img item={item} index={index} deleteImage={props.deleteImage}/>;
            }).reverse()}
        </div>
    );
};

export default Gallery;
import React, {useEffect, useState} from 'react';
import './index.scss';
import AddPicture from './components/AddPicture/AddPicture';
import Gallery from './components/Gallery/Gallery';

const App = () => {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');

    const onSubmit = (data) => {
        setItems([...items, data]);
        setText('');
    };

    useEffect(() => {
        fetch('https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json')
            .then(res => res.json())
            .then(data => setItems(data.galleryImages));
    }, []);

    const deleteImage = (e) => {
        const currentUrl = e.target.previousSibling.currentSrc;
        setItems(items.filter(item => {
            return item.url !== currentUrl;
        }));
    };


    return (
        <div className="appWrapper">
            <AddPicture onSubmit={onSubmit} text={text} setText={setText}/>
            <Gallery items={items} deleteImage={deleteImage}/>
        </div>
    );
};

export default App;
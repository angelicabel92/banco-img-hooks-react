import React from 'react';
import ItemImageComponent from './ItemImageComponent';

const ImagesListComponent = ({images}) => {
    if (images.length === 0) return null;
    return ( 
        <div className="col-md-12 p-5 row">
            {images.map(image => (
                <ItemImageComponent key={image.id} image={image}/>
            ))}
        </div>
     );
}
 
export default ImagesListComponent;

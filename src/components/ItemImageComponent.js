import React from 'react';

const ItemImageComponent = ({image}) => {
    return ( 
        <div className="col-12 col-sm-12 col-md-4 col-lg-2 mb-4">
            <div className="card">
                <div className="img_max">
                    <img className="card-img-top" src={image.previewURL} alt={image.tags}/>
                </div>
                <div className="card-body">
                    <p className="card-text">{image.likes} Likes</p>
                    <p className="card-text">{image.views} Views</p>
                </div>
                <div className="card-footer">
                    <a href={image.largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                        Ver Imagen 
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default ItemImageComponent;

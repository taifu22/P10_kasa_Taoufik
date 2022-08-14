import React, { useState } from 'react';

function Lightbox(props) {

    const [dataImage, setDataImage] = useState(props.data[0])
    const [indexImage, setindexImage] = useState(0)

    function nextImage() {
        if (indexImage === props.data.length -1) {
            setindexImage(0);
            setDataImage(props.data[0]);
        } else {
            setDataImage(props.data[indexImage+1]);
            setindexImage(indexImage+1);
        }
    }
    function previousImage() {
        if (indexImage === 0) {
            setDataImage(props.data[props.data.length -1]);
            setindexImage(props.data.length -1);
        } else {
            setDataImage(props.data[indexImage-1]);
            setindexImage(indexImage-1);
        }
    }
    
    return (
        <div className='div-lightbox'>
            <img src={dataImage}></img>
            {props.data.length > 1 ? 
            <div>
                <i onClick={previousImage} className="fa fa-solid fa-angle-left"></i> 
                <i onClick={nextImage} className ="fa fa-solid fa-angle-right"></i>
            </div> : ''}
            <p>{indexImage+1}/{props.data.length}</p>
        </div>
    );
}

export default Lightbox;
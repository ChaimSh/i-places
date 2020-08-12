import React {useRef} from 'react';

import './Map.css';

const Map = props => {
   const map = new window.google.maps.Map();


    return <div className={`map ${props.className}`} style={props.style}></div>  
};

export default Map
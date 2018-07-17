import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onDetect}) => {
  return (
    <div>
     <div className="center">
        <div className="form center pa4 br3 shadow-5">
         <input className="f3 pa2 br2 w-100 center black" type="text" onChange={onInputChange} placeholder={'Insert image url to detect'} />
         <button className="w-30 grow br2 f3 link ph3 pv2 dib brown bg-light-purple center" onClick={onDetect} >Detect</button>
        </div>
     </div>
   </div>
  )
}

export default ImageLinkForm;

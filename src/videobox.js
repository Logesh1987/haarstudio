import React from 'react';


export default (props) => (
  <div className="videoPopup">
    <div>
      <a href="#" className="btnClose" onClick={props.close}>&times;</a>
      <iframe src={`${props.src}?rel=0&amp;showinfo=0;autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    </div>
  </div>
)

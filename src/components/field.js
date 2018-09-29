// Dependencies
import React from 'react';


// Stateless component / Functional component
const Field = (props) => (
  <div className={props.cls}>
    {props.textarea ?
      <textarea rows={props.rows} placeholder={props.label} onChange={props.onChange} value={props.value} ></textarea>:
      <input
        placeholder={props.label}
        onChange={props.onChange}
        type={props.textarea ? 'textarea' : 'text'}
        value={props.value}
      /> 
    }
  </div>
);

Field.defaultProps = {
  textarea: false,
};

export default Field;
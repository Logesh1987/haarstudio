// Dependencies
import React from 'react';


// Stateless component / Functional component
const Select = (props) => (
  <div>
      <select onChange={props.onChange} value={props.value}>
          <option value="" disabled defaultValue>Betreff</option>
          <option value="Lob">Lob</option>
          <option value="Kritik">Kritik</option>
          <option value="Anregungen">Anregungen</option>
      </select>
  </div>
);

export default Select;
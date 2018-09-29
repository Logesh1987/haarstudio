// Dependencies
import React, { Component } from 'react';
// Externals
import Field from './components/field';
import Button from './components/button';
import Select from './components/select';
import Smiley from './components/smiley';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '5',
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div className="formPopup">
        <div className="formBox">
          <a href="#" className="btnClose" onClick={this.props.close}>&times;</a>
          <div className="txtCnt">
            <h2>Wir freuen uns auf ihr feedback</h2>
            <img src={require("./img/form-img.png")} />
            <p>Nunc ornare, justo eget volutpat porttitor, massa felis rhoncus dui, eu convallis enim lectus vel velit. Nam ac aliquam ligula, ultrices blandit leo. Suspendisse sed semper libero. Integer bibendum orci non mauris pharetra scelerisque. Nunc vitae tempor augue, in condimentum mi. In eu velit hendrerit, tempor tortor at, hendrerit erat. Donec feugiat tristique turpis non sagittis. Donec pharetra hendrerit vulputate.</p>
          </div>
          <div className="frmCnt">
            <h2>Senden sie uns ihre meinung</h2>
            <div className="formGrp">
              {/* Smiley field */}
              <Smiley 
                onChange={(event) => this.updateField('rating', event.target.value)}
                value={this.state.rating}
              />
              {/* Name field */}
              <Field cls="half"
                label="Name"
                onChange={(event) => this.updateField('name', event.target.value)}
                value={this.state.name}
              />
              {/* Email field */}
              <Field cls="half"
                label="Email"
                onChange={(event) => this.updateField('email', event.target.value)}
                value={this.state.email}
              />
              {/* Subject field */}
              <Select
                label="Subject"
                onChange={(event) => this.updateField('subject', event.target.value)}
                value={this.state.subject}
              />
              {/* Message textarea */}
              <Field
                label="Nachricht" rows="5"
                onChange={(event) => this.updateField('message', event.target.value)}
                /* This should be written like 'textarea' */
                textarea={true}
                value={this.state.message}
              />
              {/* Submit button */}
              <div className="CTA">                
                <Button
                  email="lokeshasguru@gmail.com"
                  formValues={this.state}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
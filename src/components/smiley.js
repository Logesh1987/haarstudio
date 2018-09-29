// Dependencies
import React from "react";

class Smiley extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      rating: this.props.value
    };
    this.setRating = this.setRating.bind(this);
  }

  setRating(e) {
    this.setState({
      rating: e.target.value
    });
  }

  render() {
    const { rating } = this.state;
    return (
      <div className="smileyBox">
        <label htmlFor="sm_5">
          <input id="sm_5"
            name="smiley"
            type="radio"
            checked={rating == "5"}
            onClick={this.setRating}
            value="5"
          />
          <i></i>
        </label>
        <label htmlFor="sm_4">
          <input id="sm_4"
            name="smiley"
            type="radio"
            checked={rating == "4"}
            onClick={this.setRating}
            value="4"
          />
          <i></i>
        </label>
        <label htmlFor="sm_3">
          <input id="sm_3"
            name="smiley"
            type="radio"
            checked={rating == "3"}
            onClick={this.setRating}
            value="3"
          />
          <i></i>
        </label>
        <label htmlFor="sm_2">
          <input id="sm_2"
            name="smiley"
            type="radio"
            checked={rating == "2"}
            onClick={this.setRating}
            value="2"
          />
          <i></i>
        </label>
        <label htmlFor="sm_1">
          <input id="sm_1"
            name="smiley"
            type="radio"
            checked={rating == "1"}
            onClick={this.setRating}
            value="1"
          />
          <i></i>
        </label>
      </div>
    );
  }
}

export default Smiley;

import React, { Component } from "react";
import fire from "./fire";
import "./styles/admin.less";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      poster_image: "",
      video_url: "",
      page_type: "1",
      data: null,
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);

    console.log(this.state);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({loading: true });
    const btn = document.querySelector("#formButton");
    const message = document.querySelector(".message");
    const _this = this;

    btn.innerHTML = "Adding...";

    let db = fire.firestore();
    db.settings({ timestampsInSnapshots: true });

    db.collection("data")
      .add({
        title: this.state.title,
        description: this.state.description,
        poster_image: this.state.poster_image,
        video_url: this.state.video_url,
        page_type: this.state.page_type
      })
      .then(function(docRef) {
        message.innerHTML = `Video added with reference : ${docRef.id}`;
        btn.innerHTML = "Submit";

        _this.fetchData();
        _this.setState({loading: false });

        setTimeout(() => {
          message.innerHTML = "";
        }, 1500);
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

    this.setState({
      title: "",
      description: "",
      poster_image: "",
      video_url: "",
      page_type: "1"
    });
  };
  fetchData() {
    this.setState({loading: true });
    let data = [];
    let initialData = fire.firestore();
    initialData.settings({
      timestampsInSnapshots: true
    });
    initialData
      .collection("data")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(item => {
          const detail = item.data();
          const id = item.id;
          data.push({ id, ...detail });
        });
        this.setState({ data, loading: false });
      });
  }
  handleDelete(e) {
    e.preventDefault();
    const target = e.target.getAttribute('data-target');
    let db = fire.firestore();
    let _this = this;

    db.collection("data")
      .doc(target)
      .delete()
      .then(function() {
        _this.fetchData();
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    const {data, loading} = this.state;
    return (
      <div>
        {loading && <div className="loading"><i></i></div>}
        <div className="formWrapper">
          <form onSubmit={this.handleSubmit}>
            <ul>
              <li>
                <label>Title</label>
                <input
                  id="title"
                  placeholder="Title of Video"
                  className="form-input"
                  name="title"
                  type="text"
                  required
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </li>
              <li>
                <label>Description</label>
                <input
                  id="description"
                  placeholder="Video Description"
                  className="form-input"
                  name="description"
                  type="text"
                  required
                  onChange={this.handleChange}
                  value={this.state.description}
                />
              </li>
              <li>
                <label>Poster Image</label>
                <input
                  id="poster_image"
                  placeholder="Video Thumbnail"
                  className="form-input"
                  name="poster_image"
                  type="text"
                  required
                  onChange={this.handleChange}
                  value={this.state.poster_image}
                />
              </li>
              <li>
                <label>Video Url</label>
                <input
                  id="video_url"
                  placeholder="Video embed URL"
                  className="form-input"
                  name="video_url"
                  type="text"
                  required
                  onChange={this.handleChange}
                  value={this.state.video_url}
                />
              </li>
              <li>
                <label>Page Type</label>
                <select
                  id="page_type"
                  onChange={this.handleChange}
                  value={this.state.page_type}
                  name="page_type"
                >
                  <option value="1">Home</option>
                  <option value="2">Kinderfilme</option>
                </select>
              </li>
              <li className="btn">
                <button id="formButton" type="submit">
                  Submit
                </button>
                <small className="message" />
              </li>
            </ul>
          </form>
        </div>
        <div className="listWrapper">
          <ul>
            {data &&
              data.map(item => (
                <li>
                  <img src={item.poster_image} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.video_url} className="videoUrl" target="_blank">
                    {item.video_url}
                  </a>
                  <small>
                    {item.page_type === "1" ? "Home" : "Kinderfilme"}
                  </small>
                  <a
                    href="#"
                    className="delete"
                    onClick={this.handleDelete.bind(this)}
                    data-target={item.id}
                  >
                    Delete
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Admin;

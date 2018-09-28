import React from 'react';
import { Link } from 'react-router-dom';
import Videobox from './videobox';
import aData from './mock-data/data.json';

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      selected: null,
      popup: false
    }
  }
  fetchData() {
    let data = aData.filter(item => {
      if(item.page_type === '1')
        return item
    })

    this.setState({ data })
  }
  handlePopup(e) {
    let selected = e.currentTarget.getAttribute('data-src');

    this.setState({
      selected,
      popup: true
    })
  }
  closePopup(e) {
    e.preventDefault();
    this.setState({popup: false})
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    const {data, selected, popup} = this.state
    return (
      <div className="pageWrapper">
        <section>
          <div className="listContainer">
            <h2><span>Kategorien</span><small> {data.length} Videos</small></h2>
            <ul>
              {data &&
                data.map((item, index) => (
                <li key={index} data-src={item.video_url} onClick={this.handlePopup.bind(this)}>
                  <figure><img src={item.poster_image}/></figure>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <aside>
          <Link  className="kinder" to="/kinderfilme">
            <span>Kinderfilme</span>
          </Link>
          <a href="#" className="linkIcon">
            <i className="iconForm"></i>
            <span>Feedback</span>
          </a>
        </aside>
        {popup && <Videobox src={selected} close={this.closePopup.bind(this)} />}
      </div>
    )
  }
}

export default Home;

import React from "react";
import axios from "axios";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
    };
  }

  componentDidMount() {
    axios({
      url: "https://http-5212-webdevlab2-api.herokuapp.com/api/works",
      method: "GET",
    }).then((res) => {
      // if work data exists, set the data to the props
      if (res.data) {
        // console.log(res.data);
        this.setState({
          works: res.data,
        });
      }
    });
  }

  render() {
    const { works } = this.state;

    return (
      <div className="objects-container">
        {works.map((w) => (
          <div className="object-item" key={w.id}>
            <img src={w.image} alt={w.title} width="390" />

            <h3 className="object-title">{w.title}</h3>
            <h4 className="object-subtitle">
              {w.company_name} in {w.location}
            </h4>

            <div className="object-date-container">
              <div className="object-date">{w.start_date}</div>
              <div className="object-date">{w.end_date}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Work;

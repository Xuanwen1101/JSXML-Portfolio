import React from "react";
import axios from "axios";

class School extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
    };
  }

  componentDidMount() {
    axios({
      url: "https://http-5212-webdevlab2-api.herokuapp.com/api/schools",
      method: "GET",
    }).then((res) => {
      // if school data exists, set the data to the props
      if (res.data) {
        // console.log(res.data);
        this.setState({
          schools: res.data,
        });
      }
    });
  }

  render() {
    const { schools } = this.state;

    return (
      <div className="objects-container">
        {schools.map((s) => (
          <div className="object-item" key={s.id}>
            <img src={s.image} alt={s.school} width="390" />

            <h3 className="object-title">{s.school}</h3>
            <h4 className="object-subtitle">{s.degree}</h4>

            <div className="object-date-container">
              <div className="object-date">{s.start_date}</div>
              <div className="object-date">{s.end_date}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default School;

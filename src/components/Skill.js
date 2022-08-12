import React from "react";
import axios from "axios";

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
    };
  }

  componentDidMount() {
    axios({
      url: "https://http-5212-webdevlab2-api.herokuapp.com/api/skills",
      method: "GET",
    }).then((res) => {
      // if skill data exists, set the data to the props
      if (res.data) {
        // console.log(res.data);
        this.setState({
          skills: res.data,
        });
      }
    });
  }

  render() {
    const { skills } = this.state;

    return (
      <div className="skills-container">
        {skills.map((s) => (
          <div className="skill-item" key={s.id}>
            <img src={s.image} alt={s.title} width="150" />

            <h3 className="skill-title">{s.title}</h3>
          </div>
        ))}
      </div>
    );
  }
}
export default Skill;

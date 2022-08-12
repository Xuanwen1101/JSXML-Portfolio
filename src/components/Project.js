import React from "react";
import axios from "axios";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    axios({
      url: "https://http-5212-webdevlab2-api.herokuapp.com/api/projects",
      method: "GET",
    }).then((res) => {
      // if project data exists, set the data to the props
      if (res.data) {
        // console.log(res.data);
        this.setState({
          projects: res.data,
        });
      }
    });
  }

  render() {
    const { projects } = this.state;

    return (
      <div className="objects-container">
        {projects.map((p) => (
          <div className="object-item" key={p.id}>
            <img src={p.image} alt={p.title} width="390" />

            <h2 className="object-title"><a href={p.url}>{p.title}</a></h2>
            <h3 className="object-subtitle">{p.type.title}</h3>

            <div className="object-content">
              {p.content.split("\n").map((paragraph, index) => {
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Project;

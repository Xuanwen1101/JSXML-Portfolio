import React from "react";
import axios from "axios";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    axios({
      url: "https://http-5212-webdevlab2-api.herokuapp.com/api/blogs",
      method: "GET",
    }).then((res) => {
      // if blog data exists, set the data to the props
      if (res.data) {
        // console.log(res.data);
        this.setState({
          blogs: res.data,
        });
      }
    });
  }

  render() {
    const { blogs } = this.state;

    return (
      <div className="objects-container">
        {blogs.map((b) => (
          <div className="object-item" key={b.id}>
            <img src={b.image} alt={b.title} width="390" />

            <h2 className="object-title">{b.title}</h2>

            <div className="object-content">
              {b.content.split("\n").map((paragraph, index) => {
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Blog;

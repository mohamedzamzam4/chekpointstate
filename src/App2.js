import React, { Component } from "react";

export default class App2 extends Component {
  state = {
    person: {
      fullName: "Mohamed Zemzem",
      bio: "computer programmer",
      imgSrc:
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
      profession: "student",
    },
    timer: 0,
  };
  componentDidMount = () => {
    setInterval(() => {
      console.log(this.state.timer);
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>Timer :</h1>
        <h2> {this.state.timer}</h2>
        <h1>{this.state.person.fullName}</h1>
        <h2>{this.state.person.bio}</h2>
        <img
          style={{ width: "200px", height: "250px" }}
          src={this.state.person.imgSrc}
          alt="dada"
        />
        <h1>{this.state.person.profession}</h1>
      </div>
    );
  }
}

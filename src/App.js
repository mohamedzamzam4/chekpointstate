import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    person: {
      fullName: "Mohamed Zemzem",
      bio: "computer programmer",
      imgSrc:
        "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/417686369_3618049175119003_5338353122488753003_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KusFG46jXtAQ7kNvgG5PWsu&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AE8nAoDUCJzujotwm9ndwKi&oh=00_AYBZKNTO-Y2OdGN_Ks3RA0_OcZWPxlU8KSTkcjLN-O7MRQ&oe=66ED280B",
      profession: "student",
    },
    shows: false,
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
      <div className="App">
        <header className="App-header">
          <h1>{this.state.timer}</h1>
          <button
            onClick={() => {
              if (this.state.shows == true) {
                this.setState({ shows: false });
              } else {
                this.setState({ shows: true });
              }
              console.log(this.state.shows);
            }}
          >
            SHOW
          </button>

          {this.state.shows ? (
            <div>
              <h1>{this.state.person.fullName}</h1>
              <h2>{this.state.person.bio}</h2>
              <img
                style={{ width: "200px", height: "250px" }}
                src={this.state.person.imgSrc}
                alt="dada"
              />
              <h1>{this.state.person.profession}</h1>
            </div>
          ) : null}
        </header>
      </div>
    );
  }
}

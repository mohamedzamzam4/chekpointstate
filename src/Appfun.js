import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const Appfun = () => {
  const [person, setPerson] = useState({
    fullName: "Mohamed Zemzem",
    bio: "computer programmer",
    imgSrc:
      "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/417686369_3618049175119003_5338353122488753003_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KusFG46jXtAQ7kNvgG5PWsu&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AE8nAoDUCJzujotwm9ndwKi&oh=00_AYBZKNTO-Y2OdGN_Ks3RA0_OcZWPxlU8KSTkcjLN-O7MRQ&oe=66ED280B",
    profession: "student",
  });
  const [shows, setShows] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <button
          variant="outline-warning"
          onClick={() => {
            if (shows == true) {
              setShows(false);
            } else {
              setShows(true);
            }
            console.log(shows);
          }}
        >
          show
        </button>
        {shows ? (
          <div>
            <h1>
              {person.fullName} / {person.profession} / {person.bio}
            </h1>
            <img
              style={{ Width: "200px", height: "300px" }}
              src={person.imgSrc}
            />
          </div>
        ) : null}
      </header>
    </div>
  );
};

export default Appfun;

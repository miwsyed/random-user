import axios from "axios";
import React, { useState, useCallback, memo, useEffect, Fragment } from "react";
import "./images.css";

const Home = () => {
  const [profile, setProfile] = useState([]);
  const [activeProfile, setActiveProfile] = useState(false);
  const [activeLink, SetActivelink] = useState(0);

  const GetData = useCallback(async () => {
    SetActivelink(0);
    axios
      .get("https://randomuser.me/api")
      .then((res) => {
        setProfile(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setActiveProfile(true);
      });
  }, []);

  useEffect(() => {
    GetData();
  }, []);

  const icons = [
    "fas fa-user fa-2x",
    "fas fa-envelope fa-2x",
    "fas fa-calendar-alt fa-2x",
    "fas fa-map-marker fa-2x",
    "fas fa-phone fa-2x",
    "fas fa-lock fa-2x",
  ];

  const TextArray = ({ user }) => {
    const phrases = [
      `Hi, my name is `,
      `Hi my emaid address is `,
      `Hi my birthday is  `,
      `Hi my adress is `,
      `Hi my phone number is `,
      `Hi my password is `,
    ];

    return <h2>{phrases[activeLink]}</h2>;
  };

  const DataArray = ({ user }) => {
    const phrases = [
      `${user.name.first} ${user.name.first}`,
      ` ${user.email}`,
      ` ${user.dob.date}`,
      ` ${user.location.street.number} ${user.location.street.name}`,
      ` ${user.phone}`,
      `${user.login.password}`,
    ];

    return <h2>{phrases[activeLink]}</h2>;
  };

  const ActiveLinkHandler = (index) => {
    SetActivelink(index);
  };

  return (
    <div className="main">
      <div className="container">
        {profile.map((user, index) => {
          return (
            <Fragment key={user.cell}>
              <div className="card">
                <img src={user.picture.large} alt="images"></img>
                <p className="top">
                  <TextArray user={user} />
                </p>
                <p class="bottom">
                  <DataArray user={user} />
                </p>
                <div className="icons">
                  {icons.map((icon, index) => {
                    return (
                      <i
                        className={icon}
                        key={index}
                        style={
                          activeLink === index
                            ? { color: "green" }
                            : { color: "grey" }
                        }
                        onMouseEnter={() => ActiveLinkHandler(index)}
                      ></i>
                    );
                  })}
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Home);

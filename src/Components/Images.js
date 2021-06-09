import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";
import "./images.css";

const Images = (props) => {
  const gender = props.results.gender;
  const fname = props.results.name.first;
  const lname = props.results.name.last;
  const email = props.results.email;
  const dob = props.results.dob.date;
  const streetNumber = props.results.location.street.number;
  const streetName = props.results.location.street.name;
  const phone = props.results.phone;
  const picture = props.results.picture.medium;
  const password = props.results.login.password;

  console.log(
    gender,
    fname,
    lname,
    email,
    dob,
    streetNumber,
    streetName,
    phone,
    picture,
    password
  );

  return (
    <div>
      <div className="card">
        <img src="img_avatar.png" alt="Avatar" style="width:100%" />
        <div classNAme="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect And Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Images;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function Form() {
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
    confirmPassword: "",
    toRemember: false,
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(formData);
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log("Logged In!");
    console.log(formData);

    formData.toRemember
      ? console.log("Thank you for subscribing to the news letter!")
      : console.log("I'm sad");
    if (formData.Password === formData.confirmPassword) {
      console.log("Passwords match");
    } else {
      console.log("Passwords do not match!");
    }
  }

  return (
    <div>
      <form className="form" autoComplete="off">
        <input
          type="text"
          className="form--username"
          placeholder="Username"
          name="Username"
          onChange={handleChange}
          value={formData.Username}
        />
        <input
          type="password"
          className="form--password"
          placeholder="Password"
          name="Password"
          onChange={handleChange}
          value={formData.Password}
        />
        <input
          type="password"
          className="form--password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />

        <button className="login--button" onClick={onSubmit}>
          {" "}
          <FontAwesomeIcon icon={faCheck} className="check" />
        </button>
        <div className="form--check">
          <input
            type="checkbox"
            id="toRemember"
            checked={formData.toRemember}
            onChange={handleChange}
            name="toRemember"
          />
          <label htmlFor="toRemember">Sign Up to news letter?</label>
        </div>
      </form>
    </div>
  );
}

export default Form;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function Form() {
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
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
        <button className="login--button">
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
          <label htmlFor="toRemember">Remember me</label>
        </div>
      </form>
    </div>
  );
}

export default Form;

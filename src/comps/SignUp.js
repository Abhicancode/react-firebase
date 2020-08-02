import React from "react";

const Form = () => {
  return (
    <form class="form">
      <h1>Not a member? Feel free to sign up!</h1>

      <div class="input-container">
        <i class="fas fa-at icon"></i>
        <input
          type="text"
          class="input-field"
          name="email"
          placeholder="Email"
        />
      </div>
      <div class="input-container">
        <i class="fas fa-key icon"></i>
        <input
          type="text"
          class="input-field"
          name="password"
          placeholder="Password"
        />
      </div>
      <div class="input-container">
        <i class="fas fa-lock icon"></i>
        <input
          type="text"
          class="input-field"
          name="conf-psw"
          placeholder="Re-enter Passwod"
        />
      </div>
      <button class="btn submit-btn" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default Form;

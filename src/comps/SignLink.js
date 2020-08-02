import React from "react";
import { Link } from "react-router-dom";

const SignLink = () => {
  return (
    <div>
      <Link to="/sign-up">
        <button type="button" className="link-btn">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default SignLink;

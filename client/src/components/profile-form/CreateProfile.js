import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CreateProfile = props => {
  // Form Fields
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  // Destructure for variables
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  return <div />;
};

CreateProfile.propTypes = {};

export default connect()(CreateProfile);

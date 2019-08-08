import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddEducation = props => {
  return <div />;
};

AddEducation.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { addExperience }
)(AddEducation);

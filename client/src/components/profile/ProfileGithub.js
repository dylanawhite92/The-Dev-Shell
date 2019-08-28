import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Spinner } from "../layout";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  return <div></div>;
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  repos: state.profiles.repos
});

export default connect(
  mapStateToProps,
  { getGithubRepos }
)(ProfileGithub);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Spinner } from "../layout";
import { getProfileById } from "../../actions/profile";
import PropTypes from "prop-types";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

  return <>{profile === null || loading ? <Spinner /> : <>profile</>}</>;
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(Profile);
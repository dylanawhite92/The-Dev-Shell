import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <div className="profile-about bg-light p-2">
      <h2 className="text-primary">John's Bio</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam libero
        praesentium quidem animi, voluptates earum sit possimus quo voluptatem
        exercitationem.
      </p>

      <div className="line"></div>

      <h2 className="text-primary">Skill Set</h2>
      <div className="skills">
        <div className="p-1">
          <i className="fas fa-check"></i>HTML5
        </div>
        <div className="p-1">
          <i className="fas fa-check"></i>CSS3
        </div>
        <div className="p-1">
          <i className="fas fa-check"></i>JavaScript
        </div>
        <div className="p-1">
          <i className="fas fa-check"></i>Python
        </div>
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;

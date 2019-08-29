import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => (
  <div class="post bg-white my-1 p-1">
    <div>
      <a href="profile.html">
        <img
          class="round-img"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          alt="John Doe"
        />
        <h4>John Doe</h4>
      </a>
    </div>

    <div>
      <p class="my-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi at, ex,
        deleniti molestiae ratione omnis inventore veniam fuga, nobis
        perspiciatis molestias numquam praesentium vitae eius dignissimos saepe
        optio et dolor.
      </p>

      <p class="post-date">Posted on 06/04/2019</p>

      <button class="btn">
        <i class="fas fa-thumbs-up"></i> <span>4</span>
      </button>
      <button class="btn">
        <i class="fas fa-thumbs-down"></i>
      </button>

      <a href="post.html" class="btn btn-primary">
        Discussion <span class="comment-count">2</span>
      </a>

      <button class="btn btn-danger">
        <i className="fas fa-times"></i>
      </button>
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(PostItem);

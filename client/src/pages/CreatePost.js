import React from "react";

const CreatePost = () => {
  return (
    <div className="card input-field create-post">
      <input type="text" placeholder="title" />
      <input type="text" placeholder="body" />
      <input type="text" placeholder="title" />
      <div className="file-field input-field">
        <div className="btn #42a5f5 blue lighten-1">
          <span>Upload Picture</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className="btn waves-effect waves-light #42a5f5 blue lighten-1">
        Post
      </button>
    </div>
  );
};

export default CreatePost;

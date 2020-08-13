import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import M from "materialize-css";

import { createPost } from "../redux/action-creator/post";

const CreatePost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error } = useSelector((state) => state.post);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };
  // const handleImageChange = (event) => {
  //   setImage(event.target.files[0]);
  // };

  const handlePostClick = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "camap_project");
    data.append("cloud_name", "josephine19001");
    fetch("https://api.cloudinary.com/v1_1/josephine19001/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (url) {
      dispatch(createPost({ title, body, url }, history));
    }
  }, [url]);

  return (
    <div className="card input-field create-post">
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="body"
        value={body}
        onChange={handleBodyChange}
      />
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue darken-1">
          <span>Uplaod Image</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" value={image} />
        </div>
      </div>
      <button
        className="btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick={() => handlePostClick()}
      >
        Submit post
      </button>
    </div>
  );
};

export default CreatePost;

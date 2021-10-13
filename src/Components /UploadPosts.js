import React, { useState } from "react";

export default function UploadPosts() {
  const [formData, setFormData] = useState({
    file: {},
    caption: ""
  });
  const handleFileChange = e => {
    //still need to figure this out
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <form>
        <input onChange={handleFileChange} name="file" type="file"></input>
        <br />
        <input name="caption" type="text" placeholder="Caption"></input>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

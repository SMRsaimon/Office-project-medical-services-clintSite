import React from "react";
import "./ArticalBlog.css"

const ArticalBlog = ({ artical }) => {
  const { title, description } = artical;
  return (
    <div className="col-md-4 mb-3 ">
      <div className="card p-3 shadow card-container" >
          <div className="card-title">
          <h4>{title}</h4>

          </div>
       
        <div style={{padding:"0px"}} className="card-body">
          <p>{description.slice(0, 100)} <button className="btn blog-btn mt-2">Continue reading..</button></p>
        </div>
      </div>
    </div>
  );
};

export default ArticalBlog;

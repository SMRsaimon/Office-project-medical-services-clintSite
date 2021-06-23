import React from 'react';
import "./Video.css"
import { useForm } from "react-hook-form";
const Video = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
         <div className="row pt-5 mt-5">
      <div className="col-md-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group" >
          <label for="exampleFormControlInput1">Put your Video Link  </label>
          <input
          {...register("link", { required: true })}
         
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="https://www.youtube.com/"
          />
        </div>

     
        <button type="submit" class="btn btn-primary mb-2">
         Add Video 
        </button>
      </form>
    </div>
    </div>
            
        </>
    );
};

export default Video;
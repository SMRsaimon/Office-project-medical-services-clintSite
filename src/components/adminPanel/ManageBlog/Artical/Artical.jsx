import React from "react";
import "./Artical.css";
import { useForm } from "react-hook-form";

const Artical = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="row pt-5 mt-5">
      <div className="col-md-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group" >
          <label for="exampleFormControlInput1">Enter Blog Title </label>
          <input
          {...register("title", { required: true })}
         
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Desceiption</label>
          <textarea
           {...register("description", { required: true })}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary mb-2">
         Add Post
        </button>
      </form>
    </div>
    </div>
  );
};

export default Artical;

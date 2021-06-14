import React from 'react';
import "./About.css"
import aboutImg from "../../../resurce/aboutImg.png"


const About = () => {
    return (
        <div className="col-lg-12 mt-5 order-2 order-lg-1">
        <div className="row">
          <div className="col-md-6">
            <h2 className="d-inline-block ">WELCOME TO </h2> &nbsp; <h2 className="d-inline-block brand-color">MENSA MEDICAL CENTER</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit in modi repellat voluptas culpa, quos hic nemo voluptate quae
              velit tenetur labore, adipisci voluptatibus. Vero impedit commodi reiciendis! Optio error aliquid ex, omnis mollitia dolor fugit
              vitae excepturi explicabo modi quaerat atque natus culpa doloribus voluptatem quasi in ad quae!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consectetur ducimus ipsa quis ab, itaque voluptas numquam sunt, reprehenderit vel aperiam. Nemo vel qui deleniti repellat! Suscipit perferendis alias voluptas magnam tempore incidunt obcaecati ut cumque earum voluptatibus veniam facilis in sunt voluptate tempora eaque, officia cupiditate eum libero! Architecto ullam cumque recusandae repellendus dolorum? Nisi deleniti alias et numquam, doloribus quisquam temporibus. Incidunt nam totam magnam ex fugit laboriosam asperiores porro modi ab, illum quas ipsam tenetur natus molestias atque fuga, rem error. Asperiores architecto nulla veritatis sapiente, enim tenetur, minus obcaecati cupiditate tempora quo et corporis eos exercitationem ipsum recusandae dolor, illum autem vitae adipisci accusantium hic soluta fuga possimus suscipit! Repellat corrupti debitis cusamus exercitationem rem rerum culpa in eveniet soluta ullam vitae ad.
            </p>
          </div>
          <div className="col-md-6">
            <div className="img-container">
              <img className="img-fluid about-img" src={aboutImg} alt="" />
            </div>
          </div>
  
          
              
       
        </div>
      </div>
    );
};

export default About;
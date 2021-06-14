import React from 'react';
import ArticalBlog from './ArticalBlog/ArticalBlog';
import VideoBlog from './VideoBlog/VideoBlog';

const Blog = () => {

    const artical=[{id:1, title:"This is First Blog Title Heading", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempore voluptatum architecto sapiente voluptatibus consequatur aut, dolores vel quas eius provident temporibus nisi reprehenderit dolorem voluptates ipsam. Deserunt autem distinctio possimus minus pariatur sit dolorum tempore accusantium optio, et iure, ratione recusandae tempora sunt quam, iusto commodi cumque. Eum et exercitationem nisi velit asperiores eveniet neque dolorum, fugit repudiandae ab?"}, {id:2, title:"This is Second Blog Title Heading", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempore voluptatum architecto sapiente voluptatibus consequatur aut, dolores vel quas eius provident temporibus nisi reprehenderit dolorem voluptates ipsam. Deserunt autem distinctio possimus minus pariatur sit dolorum tempore accusantium optio, et iure, ratione recusandae tempora sunt quam, iusto commodi cumque. Eum et exercitationem nisi velit asperiores eveniet neque dolorum, fugit repudiandae ab?"},{id:3, title:"This is third  Blog Title Heading", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempore voluptatum architecto sapiente voluptatibus consequatur aut, dolores vel quas eius provident temporibus nisi reprehenderit dolorem voluptates ipsam. Deserunt autem distinctio possimus minus pariatur sit dolorum tempore accusantium optio, et iure, ratione recusandae tempora sunt quam, iusto commodi cumque. Eum et exercitationem nisi velit asperiores eveniet neque dolorum, fugit repudiandae ab?"}]



    return (
       <div className="container mb-5">
           <div className="row">
               <div className="col-12 text-center pt-5 pb-5">
                   <h1>Our latest Blog </h1>
               </div>
               {
                   artical.map(x=><ArticalBlog key={x.id} artical={x} />)
               }
               
           </div>
           <div className="row">
               <div className="col-12">
                   <h1 className="text-center pt-5 pb-5" >Our latest Video </h1>
               </div>
               <div className="col-md-4">
                   <div className="video-container">
                   <iframe title="First Video " width="500" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                   </div>
                

              
               </div>
               <div className="col-md-4 offset-md-2">
                   <div className="video-container">
                   <iframe title="First Video " width="500" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                   </div>
                

              
               </div>
           </div>


       </div>
    );
};

export default Blog;
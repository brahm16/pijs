import { NavLink } from "react-router-dom";

const Places=()=>{
    const style2 = {
        backgroundImage: "url('img/zagh/0.jpg')",
      };
    return (
        <div class="blog blog-section last-section" style={style2}>
           <div class="wrap">
               <div class="wrap_float">
                   <div class="top_part">
                      
                       <h2 class="section_title">
                           Travel Places
                       </h2>
                       <div class="section_description">
                           Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
                       </div>
                   </div>
                   <div class="section_content">
                       <a href="blog-single.html" class="blog_item">
                           <div class="blog_item_img">
                               <img src="img/zagh/IMG4.jpg" alt="" />
                           </div>
                           <div class="blog_item_date">
                               JUNE 6/2019 | UNCATEGORIZED
                           </div>
                           <h3 class="blog_item_title">
                               Pack wisely before traveling
                           </h3>
                           <p class="blog_item_text">
                               A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                           </p>
                       </a>
                       <a href="blog-single.html" class="blog_item">
                           <div class="blog_item_img">
                               <img src="img/zagh/IMG8.jpg" alt="" />
                           </div>
                           <div class="blog_item_date">
                               JUNE 6/2019 | UNCATEGORIZED
                           </div>
                           <h3 class="blog_item_title">
                               Pack wisely before traveling
                           </h3>
                           <p class="blog_item_text">
                               A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                           </p>
                       </a>
                   </div>
                   <div class="show-more">
                   <NavLink className="btn" to="/allPlaces"><span>View all </span></NavLink>

                      
                   </div>
               </div>
           </div>
       </div>
    )
}
export default Places;
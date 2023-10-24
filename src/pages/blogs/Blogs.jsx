import React, { useState } from 'react';
import "./blogs.css";
import {Link} from "react-router-dom";
import havingfun from "../../images/havingfun.jpg"
import Header from "../../components/Header"
import Blog from "../../components/Blog";
import {blogdata} from "../../blogdata";
import {FaSkull} from "react-icons/fa";
const Blogs = () => {
  //getts the search value input from the user
const [searchTerm,setSearchTerm] = useState('');
const [filteredBlogs,setFilteredBlogs] = useState(blogdata);


//function to handle search input from the user
function handleSearch(event){
const value = event.target.value.toLowerCase();
setSearchTerm(value);

//filter the blogs to return a blog that only matches the search term
const filtered = blogdata.filter(function(blog){

   const title = blog.title ? blog.title.toLowerCase() : ""; //checks to see if the title is true else it sets it to null
  const category =  blog.category ?  blog.category.toLowerCase() : ""; // check to see if the category is true else it sets to null
    return title.includes(value) || category.includes(value);
});

//filter the blogs in descending order in order to know the latest blogs
const sortedFilteredBlogs = filtered.sort(function(first,last){
return(
  new Date(last.date) - new Date(first.date)
);
});
setFilteredBlogs(sortedFilteredBlogs);
};

//check to see whether a blog has a title or category
const hasTitle = filteredBlogs.some(function(blog){
return(blog.title)
})

const hasCategory = filteredBlogs.some(function(blog){
  return(blog.category)
})


  return (
    <>
      <Header title="This is our blog Section" image={havingfun}>
        morbi blandit cursus risus. Gravida in fermentum et sollicitudin
        ac orci phasellus. Nisi porta lorem mollis aliquam ut. Scelerisque eu
        ultrices vitae auctor eu. Elit eget gravida cum sociis natoque
      </Header>

      <div className='search-container'>
        <input type='text' placeholder='search title/category' className='search-input' onChange={handleSearch}  value={searchTerm}></input>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {filteredBlogs.map(({date, title, author, avatar, description,category,id}) => {
          return <div key={id}> 
          <Link to={`/blogs/${id}`} className='blog'>
          <Blog date={date} title={title} author={author} thumbnail={avatar} description={description}  category={category}/>
          </Link>
          </div>
        })
        }
        {/* if the search property is not present then this message is displayed */}
          {!hasTitle && !hasCategory &&
          <div className='error_message'>
          <div>
            <p> <FaSkull /> </p>
          </div>
          <p>Oops! Category or title not found</p>
          </div> 
         
        }

      </div>
    </>
  )
}

export default Blogs;
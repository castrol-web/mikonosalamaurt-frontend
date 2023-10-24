import React from 'react'
//getting id from a url we use useparams
import { Link, useParams } from 'react-router-dom';
import { blogdata } from '../blogdata';
import "../pages/blogs/blogs.css";
function BlogDetail() {
  // getting the blog id from the individual blog
  const { id } = useParams();
  const blog = blogdata.find((blog) => blog.id.toString() === id);
  return (
    <div className='blogdetails' >

      <div className='blog_title'>
        <h1>{blog.title}</h1>
      </div>
      <div className='blog__contents'>
        <div className='blog_description'>
          <p>{blog.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus
            laoreet non curabitur gravida arcu ac tortor dignissim. Nec feugiat nisl pretium fusce id velit ut tortor.
            Sit amet justo donec enim diam vulputate ut. Vitae nunc sed velit dignissim sodales ut. At tempor commodo ullamcorper
            a lacus vestibulum. Id diam vel quam elementum pulvinar etiam non quam. Odio aenean sed adipiscing diam donec adipiscing tristique risus.
            Nulla aliquet porttitor lacus luctus accumsan tortor. At urna condimentum mattis pellentesque id nibh tortor id. Aliquam nulla facilisi
            cras fermentum odio eu.
            Velit aliquet sagittis id consectetur. Venenatis a condimentum vitae sapien pellentesque habitant. Non diam phasellus vestibulum
            lorem sed. Urna cursus eget nunc scelerisque viverra. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Ultrices
            tincidunt arcu non sodales neque sodales ut etiam sit. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing.
            Ornare aenean euismod elementum nisi quis eleifend quam. Duis at consectetur lorem donec massa. Consectetur adipiscing elit pellentesque habitant morbi.
            Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Ut etiam sit amet nisl. Turpis in eu mi bibendum neque egestas.
            Elementum nibh tellus molestie nunc non. Scelerisque eleifend donec pretium vulputate sapien nec. Erat pellentesque adipiscing commodo elit a
            t imperdiet dui. Donec enim diam vulputate ut pharetra. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. At augue eget arcu dictum
            varius duis at consectetur. In est ante in nibh mauris. A cras semper auctor neque vitae tempus quam pellentesque. Eu sem integer vitae justo eget magna
            fermentum iaculis. Cursus mattis molestie a iaculis at erat pellentesque. Eu sem integer vitae justo eget magna fermentum iaculis. Platea dictumst vestibulum
            rhoncus est pellentesque elit ullamcorper dignissim. Quisque egestas diam in arcu cursus euismod quis viverra. Non curabitur gravida arcu ac tortor dignissim.
            Interdum velit laoreet id donec.</p>
        </div>
        <div className='blog__avatar'>
          <img src={blog.avatar} alt='blog avatar' id='blog_img'></img>
        </div>
      </div>
      <div className='blog__authoranddate'>
        <div>
          <p><small>By:{blog.author}</small></p>
        </div>
        <div className='post_date'>
          <p><small>Posted on:{blog.date}</small></p>
        </div>

      </div>
      <div className='blog__navigations'>
        <div className='homepage_btn'>
          <Link to="/" className='btn btn-secondary'>Go Home</Link>
        </div>

        <div className='blog_btn'>
          <Link to="/blogs" className='btn btn-warning'>Back to Blogs</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
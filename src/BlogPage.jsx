import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Images
import arrow from "/public/arrow-right-s-line.png";
import Footer from "./Footer";

const BlogPage = () => {

   
  
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Door_to_Mountains/Blogs.json") 
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="text-center text-gray-500">Loading...</h2>;

  const blog = blogs.find((b) => b.id === blogId);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="max-w-7xl p-6 w-full min-h-screen flex flex-col items-center">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-[#263D47] text-white rounded-full flex items-center self-start"
        >
          <img src={arrow} alt="Go Back" className="rotate-180 h-6 w-6" />
        </button>

        {/* Blog Content */}
        {blog ? (
          <>
            <h2 className=" text-3xl font-bold text-center mt-4">
              {blog.title}
            </h2>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full max-w-3xl h-64 object-cover mt-4 rounded-lg shadow-2xl shadow-black"
            />
            <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl text-justify">
              {blog.content}
            </p>
            <h2 className="text-3xl font-bold text-center mt-4">
              Things to do
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl text-justify">
              {blog.things_to_do}
            </p>
            <h2 className="text-3xl font-bold text-center mt-4">
              Best time to visit
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl text-justify">
              {blog.best_time}
            </p>
          </>
        ) : (
          <h2 className="text-red-500 text-2xl mt-8">⚠ Blog not found</h2>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default BlogPage;

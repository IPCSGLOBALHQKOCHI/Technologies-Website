import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Links } from "react-router-dom";
import HeroSection from "../Blogs/Herosection.jsx";

const AllBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://blog.ipcstechnologies.com/wp-json/wp/v2/posts/")
      .then((res) => {
        // console.log("Fetched posts:", res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://blog.ipcstechnologies.com/wp-json/wp/v2/categories"
        );
        setCategories(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <HeroSection />
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 md:py-16 min-h-screen overflow-y-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-light text-white mb-10 md:mb-16">
          Blogs
        </h1>

        {loading ? (
          <p className="text-white">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-white">No blog posts found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {posts.map((post) => {
              const image = post?.yoast_head_json?.og_image?.[0]?.url;
              const author = post?.yoast_head_json?.author;
              const date = new Date(post.date).toLocaleDateString();
              const title = post?.yoast_head_json?.og_title;
              const category = categories.find(
                (cat) => cat.id === post.categories?.[0]
              );

              return (
                <div key={post.id} className="overflow-hidden p-1">
                  {image && (
                    <Link to={`/blog/${post.id}`}>
                      <img
                        src={image}
                        alt="Post Thumbnail"
                        className="w-full h-52 object-cover"
                      />
                    </Link>
                  )}
                  <div className="mt-4">
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white hover:underline">
                        {title}
                      </h2>
                    </Link>
                    {category?.name && (
                      <p className="text-sm text-white/80 mt-1">
                        {category.name}
                      </p>
                    )}
                    <div className="flex justify-between mt-4 text-white/60 text-sm sm:text-base">
                      <p>By {author}</p>
                      <p>{date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default AllBlogs;

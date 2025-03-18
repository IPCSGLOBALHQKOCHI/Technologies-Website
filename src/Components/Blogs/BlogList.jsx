// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/blogs").then((response) => {
//       setBlogs(response.data);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogs.length > 0 ? (
//           blogs.map((blog) => (
//             <div key={blog.id} className="bg-white p-4 rounded-lg shadow-md">
//               {blog.image && (
//                 <img
//                   src={`http://localhost:5000/uploads/${blog.image}`}
//                   alt="Blog Cover"
//                   className="w-full h-40 object-cover rounded-md mb-4"
//                 />
//               )}
//               <h3 className="text-xl font-semibold">{blog.title}</h3>
//               <div
//                 className="text-gray-600 mt-2"
//                 dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + "..." }}
//               />
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No blogs found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogList;

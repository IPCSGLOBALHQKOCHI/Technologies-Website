// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import axios from "axios";

// const CreateBlogs = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   // Handle Image Upload Preview
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setPreview(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle Form Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("content", content);
//     formData.append("image", image);

//     await axios.post("http://localhost:5000/api/create-blogs", formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
// console.log(formData);

//     alert("Blog Posted Successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
//       <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Create a Blog</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Title Input */}
//           <div>
//             <label className="block text-gray-700 font-medium">Title</label>
//             <input
//               type="text"
//               placeholder="Enter blog title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Image Upload */}
//           <div>
//             <label className="block text-gray-700 font-medium">Upload Cover Image</label>
//             <input type="file" onChange={handleImageChange} className="w-full border border-gray-300 rounded p-2" />
//             {preview && <img src={preview} alt="Preview" className="mt-3 w-full h-48 object-cover rounded-lg shadow-md" />}
//           </div>

//           {/* Text Editor (ReactQuill) */}
//           <div>
//             <label className="block text-gray-700 font-medium">Content</label>
//             <div className="border border-gray-300 rounded">
//               <ReactQuill
//                 theme="snow"
//                 value={content}
//                 onChange={setContent}
//                 className="bg-white"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
//           >
//             Post Blog
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateBlogs;

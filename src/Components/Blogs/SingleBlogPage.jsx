import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBlogPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://blog.ipcstechnologies.com/wp-json/wp/v2/posts/${id}?_embed=true`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!post) return <div className="text-black text-3xl font-400">Loading...</div>;

  const {
    title: { rendered: title },
    content: { rendered: rawContent },
    _embedded,
  } = post;

  const featuredImage = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  // Modify content without DOMPurify
  let modifiedContent = rawContent;
  modifiedContent = modifiedContent.replace(/WordToReplace/g, "NewWord");
  modifiedContent = modifiedContent.replace(/<img[^>]*>/g, "");
  console.log(modifiedContent);
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <div className="py-32 px-72">
        <h1
          className="text-5xl font-400 my-12"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {featuredImage && (
          <img src={featuredImage} alt="Featured" className="mb-12 w-full h-full object-cover" />
        )}
<div
  className="prose prose-xl max-w-none 
    prose-headings:text-darkBlue 
    prose-h1:text-5xl prose-h1:font-500
    prose-h2:text-4xl prose-h2:font-400
    prose-h3:text-2xl prose-h3:font-300
    prose-p:text-black/80 prose-p:leading-normal prose-p:mt-0
    prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800
    prose-ul:list-disc prose-ol:list-decimal
    prose-li:marker:text-darkRose
    prose-img:rounded-lg prose-img:shadow-md
    prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4
    prose-code:bg-black/80 prose-code:px-2 prose-code:py-1 prose-code:rounded
    prose-pre:bg-gray-800 prose-pre:text-gray-100"
  dangerouslySetInnerHTML={{ __html: modifiedContent }}
/>
      </div>
    </div>
  );
}

export default SingleBlogPage;

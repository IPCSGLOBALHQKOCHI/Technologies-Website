import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
function SingleBlogPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `https://blog.ipcstechnologies.com/wp-json/wp/v2/posts?slug=${slug}`
        );
        setPost(res.data[0]);
        // console.log(post);
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  if (!post)
    return (
      <div className="text-black text-3xl font-400 px-4 py-16">Loading...</div>
    );

  const {
    title: { rendered: title },
    content: { rendered: rawContent },
    _embedded,
  } = post;
  const image = post?.yoast_head_json?.og_image?.[0]?.url;
  console.log(image);

  let modifiedContent = rawContent;
  modifiedContent = modifiedContent.replace(/WordToReplace/g, "NewWord");
  modifiedContent = modifiedContent.replace(/<img[^>]*>/g, "");

  return (
    <>
      <Helmet>
        <title>{`${title}`}</title>
        <meta
          name="description"
          content={post?.excerpt?.rendered
            ?.replace(/<[^>]+>/g, "")
            .slice(0, 160)}
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={post?.excerpt?.rendered
            ?.replace(/<[^>]+>/g, "")
            .slice(0, 160)}
        />
        <meta property="og:image" content={image} />
        <meta
          property="og:url"
          content={`https://ipcstechnologies.com/blog/${slug}`}
        />
        <link
          rel="canonical"
          href={`https://ipcstechnologies.com/blog/${slug}`}
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-72 py-24 sm:py-28">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-400 my-8 sm:my-10"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {image && (
            <img
              src={image}
              alt="Featured"
              className="mb-10 sm:mb-12 w-full h-auto object-cover rounded-lg shadow"
            />
          )}
          <div
            className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none 
          prose-headings:text-darkBlue 
          prose-h1:text-5xl sm:prose-h1:text-5xl prose-h1:font-500
          prose-h2:text-4xl sm:prose-h2:text-4xl prose-h2:font-400
          prose-h3:text-2xl sm:prose-h3:text-2xl prose-h3:font-300
          prose-p:text-black/80 prose-p:leading-relaxed prose-p:mt-0 prose-p:text-lg
          prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800
          prose-ul:list-disc prose-ol:list-decimal 
          prose-ul:text-xl prose-ol:text-3xl 
        prose-li:text-black/80 prose-li:text-2xl 
          prose-li:leading-relaxed prose-li:my-2 
          prose-li:marker:text-darkRose
          prose-li > p:text-base sm:prose-li > p:text-lg
          prose-li > h4:text-xl sm:prose-li > h4:text-2xl
          prose-img:rounded-lg prose-img:shadow-md
          prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4
          prose-code:bg-black/80 prose-code:px-2 prose-code:py-1 prose-code:rounded
          prose-pre:bg-gray-800 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: modifiedContent }}
          />
        </div>
      </div>
    </>
  );
}

export default SingleBlogPage;

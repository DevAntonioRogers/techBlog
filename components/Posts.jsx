"use client";

import { useState } from "react";
import PostsCard from "./PostsCard";
import PostFilter from "./PostFilter";
const Posts = () => {
  const [activeCategory, setActiveCategory] =
    useState("all");
  const [filtered, setFiltered] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts(
      (prevVisiblePosts) => prevVisiblePosts + 4
    );
  };
  return (
    <div className="w-full h-fit">
      <div className="wrapper">
        <PostFilter
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {filtered
            .slice(0, visiblePosts)
            .map((post, index) => (
              <PostsCard post={post} />
            ))}
        </div>
        <div className="py-10">
          {visiblePosts < filtered.length && (
            <div className="text-center mt-4">
              <button
                onClick={loadMorePosts}
                className="bg-sky-400 hover:bg-sky-200 py-2 px-4 text-white rounded-md"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;

import { getAllPosts } from "@/utils/features";
import React from "react";

const page = async () => {
  const posts = await getAllPosts();
  return (
    <div className="flex col ">
      {posts?.map((i) => (
        <h5 key={i.id}>{i.title}</h5>
      ))}
    </div>
  );
};

export default page;

import { getUserPost } from "@/utils/features";
import React from "react";

const posts = async ({ id }) => {
  const posts =  await getUserPost(id);

  return (
    <div>
      {posts?.map((i) => (
        <h3 key={i.id}>{i.title}</h3>
      ))}
    </div>
  );
};

export default posts;

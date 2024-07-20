import { getUserDetail } from "@/utils/features";
import React, { Suspense } from "react";
import Posts from "./posts";
import { notFound } from "next/navigation";

// export const dynamicParams = false; //by default it is set to true and true means SSR and everything is SSR by default but become SSG after build command

// making these pages SSG
export const generateStaticParams = () => {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
  ];
};

export const generateMetadata = async ({ params }) => {
  const user = await getUserDetail(params.id);

  return {
    title: `${user.name}'s Profile`,
  };
};

const page = async ({ params }) => {
  console.log(params.id);

  const user = await getUserDetail(params.id);
  const { name, email } = user;
  if(!user.id){
    return notFound();
  }
  
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>

      <Suspense fallback={<div>posts....</div>}>
        <Posts id={params.id} />
      </Suspense>
    </>
  );
};

export default page;

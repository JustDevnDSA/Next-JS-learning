import React from "react";
import { getAllUsers } from "@/utils/features";
import Link from "next/link";


const page = async () => {
  const users = await getAllUsers();
  // console.log(users);

  return (
    <div className="flex col gp-4">
      {users?.map((i) => (
        <Link key={i.id} href={`/user/${i.id}`}>{i.name}</Link>
      ))}
    </div>
  );
};

export default page;

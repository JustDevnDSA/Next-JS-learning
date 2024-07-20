import React from "react";
import Contact from "./contact";
import ServerComponent from "@/components/servers/ServerComponent";

const page = () => {
  return (
    <Contact value={"Subscribe Now"}>
      <ServerComponent />
    </Contact>
  );
};

export default page;

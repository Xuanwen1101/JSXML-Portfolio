import React from "react";
import Blog from "../components/Blog";

function Blogs() {
  return(
    <main className="main">
      <h1 className="title">Blogs</h1>
      {/* call Blog component to display blogs info */}
      <Blog />
    </main>
  )
}
export default Blogs;
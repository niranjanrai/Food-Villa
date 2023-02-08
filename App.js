import React from "react";
import ReactDOM from "react-dom/client";

const div = React.createElement("h1", { id: "title" }, "hello world");
const div2 = React.createElement("h2", { id: "title2" }, "hello world2");
const mainDiv = React.createElement("div", { id: "title3" }, [div, div2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainDiv);

/**
 * Bundlers : vite, webpack, parcel
 * Parcel
 * Hot module reloading (HMR)
 * File watcher algorithm (written in C++ )
 * Minify
 * Removing console.log
 * Dev and production build
 * Super fast build algorithm
 * Image optimizations
 * Cashing while developments
 * Compression
 * compatible with older version of browser ( Polyfilling )
 * HTTPS on devs
 * port numbers
 * 
 * 
 * 
 * 


 */


const express = require("express");
const app = express();
const port=8080;
const path =require("path");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
let blogdata = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    author: "Jane Doe",
    date: "2025-05-10",
    summary: "A beginner-friendly guide to understanding closures in JavaScript.",
    content: `Closures are a fundamental concept in JavaScript that allow functions to access variables from an outer scope even after the outer function has finished executing...`,
    tags: ["JavaScript", "Programming", "Closures"],
    image: "https://example.com/images/js-closures.png"
  },
  {
    id: 2,
    title: "How to Build a REST API with Node.js",
    author: "John Smith",
    date: "2025-04-25",
    summary: "Step-by-step tutorial on building a RESTful API using Node.js and Express.",
    content: `In this tutorial, we'll build a simple REST API using Node.js and Express. We'll cover routing, middleware, and connecting to a database...`,
    tags: ["Node.js", "API", "Backend"],
    image: "https://example.com/images/node-api.png"
  },
  {
    id: 3,
    title: "CSS Grid Layout: A Complete Guide",
    author: "Emma Brown",
    date: "2025-03-30",
    summary: "Learn everything about CSS Grid layout and how to use it to create responsive designs.",
    content: `CSS Grid is a powerful layout system available in CSS. It allows developers to create complex responsive web layouts easily...`,
    tags: ["CSS", "Web Design", "Grid"],
    image: "https://example.com/images/css-grid.png"
  },
  {
    id: 4,
    title: "Mastering React Hooks",
    author: "Michael Lee",
    date: "2025-05-01",
    summary: "An in-depth look at React Hooks and how to use them to write cleaner functional components.",
    content: `React Hooks revolutionized how we write React components by enabling state and side effects in functional components...`,
    tags: ["React", "JavaScript", "Hooks"],
    image: "https://example.com/images/react-hooks.png"
  },
  {
    id: 5,
    title: "Getting Started with MongoDB",
    author: "Sara Wilson",
    date: "2025-04-15",
    summary: "A beginner's guide to setting up and using MongoDB for your applications.",
    content: `MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. This guide will help you get started...`,
    tags: ["MongoDB", "Database", "NoSQL"],
    image: "https://example.com/images/mongodb.png"
  },
  {
    id: 6,
    title: "TypeScript for JavaScript Developers",
    author: "Alice Green",
    date: "2025-05-12",
    summary: "Learn how TypeScript can improve your JavaScript development with type safety and better tooling.",
    content: `TypeScript is a superset of JavaScript that adds static types. This article explains how to integrate TypeScript into your projects...`,
    tags: ["TypeScript", "JavaScript", "Programming"],
    image: "https://example.com/images/typescript.png"
  },
  {
    id: 7,
    title: "Deploying Your App with Docker",
    author: "Bob Carter",
    date: "2025-05-14",
    summary: "A practical guide to containerizing and deploying your applications using Docker.",
    content: `Docker allows you to package your application and its dependencies into a container. In this guide, we'll show how to build and run Docker containers...`,
    tags: ["Docker", "DevOps", "Deployment"],
    image: "https://example.com/images/docker.png"
  },
  {
    id: 8,
    title: "Building Responsive Layouts with Flexbox",
    author: "Lily Adams",
    date: "2025-05-16",
    summary: "Understand the Flexbox model and how to use it for responsive, flexible web layouts.",
    content: `Flexbox makes it easy to design flexible responsive layout structures. This article covers the core concepts and real examples...`,
    tags: ["CSS", "Flexbox", "Responsive Design"],
    image: "https://example.com/images/flexbox.png"
  }
];

app.get("/",(req,res)=>{
    res.send("welcome to my bloggi");
});
app.get("/blogdata",(req,res)=>{
res.render("index.ejs",{blogdata});
});
app.listen(port,()=>{
    console.log("server working well");
    

});

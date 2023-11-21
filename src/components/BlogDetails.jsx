import React from "react";
import { NavLink } from "react-router-dom";
const BlogDetails = ({post}) => {
    return(
        <div className="">
            <NavLink to={`/blog/${post.id}`}>
                <span className="font-bold">{post.title}</span>
            </NavLink>
            <p className="text-sm">
                By <span className="italic">{post.author}</span> on {" "}
                <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span className="font-bold">{post.category}</span>
                </NavLink>
            </p>
            <p className="text-xs">Posted on {post.date} </p>
            <p className="mt-[10px]">{post.content}</p>
            <div className="flex gap-x-3">
                {post.tags.map( (tag,index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span className="text-blue-500 underline ">{`#${tag}`}</span>
                    </NavLink>
                ) )}
            </div>
        </div>
    )
}

export default BlogDetails
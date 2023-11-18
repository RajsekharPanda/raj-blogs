import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {

    //consume
    const {posts, loading} = useContext(AppContext)

    return(
        <div className="w-11/12 max-w-[1000px] py-7 flex flex-col gap-y-9 mt-[66px] mb-[70px]">
            {
                loading ? (<Spinner/>) : (
                    posts.length === 0 ? (<div>
                        <p>No Post Found</p>
                    </div>) :
                    (posts.map ( (post) => (
                        <div key={post.id}>
                            <p className="font-bold text-md">{post.title}</p>
                            <p className="text-xs">
                                By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
                            </p>
                            <p className="text-xs ">
                                Posted on {post.date}
                            </p>
                            <p className="text-md mt-[12px]">{post.content}</p>
                            <div className="flex gap-x-3">
                                {post.tags.map ((tag, index) => {
                                    return <span key={index} className="text-blue-500 underline font-bold text-xs">{`#${tag}`}</span>
                                })}
                            </div>
                        </div>
                    ) ))
                )
            }
        </div>
    )
}

export default Blogs
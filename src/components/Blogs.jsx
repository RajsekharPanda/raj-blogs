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
                        <BlogDetails key={post.id} post={post}/>
                    ) ))
                )
            }
        </div>
    )
}

export default Blogs
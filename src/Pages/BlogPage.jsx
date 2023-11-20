import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { AppContext } from "../context/AppContext";

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog,setBlog] = useState(null)
    const [relatedBlogs,setRelatedBlogs] = useState([])
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId =  location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error in blog call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])

    return(
        <div className="w-11/12 max-w-[1080px] flex flex-col mt-[100px]">
            <Header/>
            <div className="flex flex-col justify-center items-center">
            <div>
                <button
                onClick={() => navigation(-1)} 
                className="rounded-md border-2 px-4 py-1"
                >
                    Back
                </button>
            </div>
            {
              loading ?
              (
                <div>
                    <p>Loading</p>
                </div>
              ) :
              blog ?
              (
                <div className="flex flex-col justify-center items-center"> 
                    <BlogDetails post={blog}/>
                    <h2>Related Blogs</h2>
                    {
                        relatedBlogs.map( (post) => (
                            <div key={post.id}>
                                <BlogDetails post={post}/>
                            </div>
                        ) )
                    }
                </div>
              ):
              (
                <div className="flex flex-col justify-center items-center">
                    <p>No Blog Found</p>
                </div>
              )
            }
            </div>
            
        </div>
    )
}

export default BlogPage
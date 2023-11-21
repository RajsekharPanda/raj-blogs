import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return(
        <div >
            <Header/>
            <div className="w-11/12 max-w-[1000px] flex flex-col justify-center items-center">    
            <div >
                <button
                className="rounded-md border-2 px-4 py-1 mt-[100px]"
                onClick={() => navigation(-1)}
                >
                    Back
                </button>
                <h2 className="font-bold">
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Blogs/>
            </div>
            <Pagination/>
        </div>
    )
}

export default TagPage
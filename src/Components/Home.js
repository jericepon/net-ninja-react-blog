import React from "react";
import useFetch from "../Hooks/useFetch";
import BlogList from "./BlogList";

function Home() {

	const {data: blogs, isPending, error, setData} = useFetch('http://localhost:8000/blogs')
	
	const handleDelete = (id) => {
		setData((blogs) => blogs.filter((blog) => blog.id !== id));
	};

	return (
		<>
			<div className="container mt-5">
				{error && (<div className="alert alert-danger" role="alert">
					<strong>{error}</strong>
				</div>
				)}
				{isPending && ( <div className="spinner-border" role="status"> {" "} <span className="visually-hidden">Loading...</span>{" "} </div> )}
				{blogs && ( <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> )}
			</div>
		</>
	);
}

export default Home;

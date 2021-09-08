import React from "react";
import useFetch from "../Hooks/useFetch";
import BlogList from "./BlogList";

function Home() {

	const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')


	return (
		<div>
			{error && (<div className="alert alert-danger" role="alert">
				<strong>{error}</strong>
			</div>
			)}
			{isPending && (
				<div className="d-block text-center">
					<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				</div>
			)}
			{blogs && (<BlogList blogs={blogs} title="All Blogs" />)}
		</div>
	);
}

export default Home;

import React, { useState } from "react";
import {BlogData} from "../BlogData";
import BlogList from "./BlogList";
import Navbar from "./Navbar";

function Home() {
	const [blogs, setblog] = useState(BlogData);

	const handleDelete = (id) => {
		setblog(blogs => blogs.filter(blog => blog.id !== id));
	}

	return (
		<>
			<div className="container mt-5">
				<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
				<BlogList blogs={blogs.filter(blog => blog.author === 'Lucas')} title="Lucas Blogs" handleDelete={handleDelete} />
			</div>
		</>
	);
}

export default Home;

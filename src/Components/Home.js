import React, { useEffect, useState } from "react";
import {BlogData} from "../BlogData";
import BlogList from "./BlogList";

function Home() {
	const [blogs, setblog] = useState(BlogData);
	const handleDelete = (id) => {
		setblog(blogs => blogs.filter(blog => blog.id !== id));
	}

	useEffect(() => {
		console.log('Use Effect ran ');
	}, [])

	return (
		<>
			<div className="container mt-5">
				<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
			</div>
		</>
	);
}

export default Home;

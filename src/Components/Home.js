import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

function Home() {
	const [blogs, setblog] = useState(null);
	const [isPending, setPending] = useState(true)
	const handleDelete = (id) => {
		setblog(blogs => blogs.filter(blog => blog.id !== id));
	}

	useEffect(() => {
		fetch('http://localhost:8000/blogs').then((res) => res.json()).then(data => {
			setblog(data)
			setPending(false);
		})
	}, [])

	return (
		<>
			<div className="container mt-5">
				{isPending && <div className="spinner-border" role="status"> <span className="visually-hidden">Loading...</span> </div>}
				{blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
			</div>
		</>
	);
}

export default Home;

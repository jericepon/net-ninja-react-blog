import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

function Home() {
	const [blogs, setblog] = useState(null);
	const [isPending, setPending] = useState(true);
	const [error, setError] = useState(null);
	const handleDelete = (id) => {
		setblog((blogs) => blogs.filter((blog) => blog.id !== id));
	};

	useEffect(() => {
		fetch("http://localhost:8000/blogs")
			.then((res) => {
				if (!res.ok) {
					console.log('something\'s wrong');
					setPending(false);
				}
				return res.json()
			})
			.then((data) => {
				setblog(data);
				setError(null);
				setPending(false);
			})
			.catch((err) => {
				setPending(false);
				setError(err.message);
			});
	}, []);

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

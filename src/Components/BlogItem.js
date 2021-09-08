import React from "react";
import { Link } from "react-router-dom";

function BlogItem({ blog, handleDelete }) {
	
	return (
		<li className="mb-4">
			<div className="card text-start">
				<div className="card-body">
					<h4 className="card-title text-danger">
						<Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
					</h4>

					<p className="text-muted"><strong>{blog.author}</strong></p>
					<button
						onClick={() => {
							handleDelete(blog.id);
						}}
						type="button"
						className="btn btn-danger"
					>
						Delete
					</button>
				</div>
			</div>
		</li>
	);
}

export default BlogItem;

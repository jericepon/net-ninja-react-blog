import React from "react";

function BlogItem({ blog, handleDelete }) {
	return (
		<li className="mb-4">
			<div className="card text-start">
				<div className="card-body">
					<h4 className="card-title text-danger">{blog.title}</h4>
					<p className="text-muted"><em>{blog.author}</em></p>
					<p className="card-text">{blog.body}</p>
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

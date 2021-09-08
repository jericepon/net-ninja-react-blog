import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const {
		data: blog,
		isPending,
	} = useFetch(`http://localhost:8000/blogs/${id}`);
	const history = useHistory();

	const handleClick = () => {
		fetch(`http://localhost:8000/blogs/${blog.id}`, { method: "DELETE" }).then(() => {
			history.push('/')
		});
	};
	return (
		<div>
			<div className="blog-details">
				{isPending && (
					<div className="d-block text-center">
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				)}
				{blog && (
					<article>
						<h2>{blog.title}</h2>
						<p className="text-muted">
							Written by <strong>{blog.author}</strong>
						</p>

						<div className="d-block">
							<p>{blog.body}</p>
						</div>
						<button
							onClick={() => {
								handleClick(blog.id);
							}}
							type="button"
							className="btn btn-danger"
						>
							Delete
						</button>
					</article>
				)}
			</div>
		</div>
	);
};

export default BlogDetails;

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const {
		data: blog,
		isPending,
		error,
	} = useFetch(`http://localhost:8000/blogs/${id}`);

	return (
		<div>
			<div className="blog-details">
				{isPending && (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
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
					</article>
				)}
			</div>
		</div>
	);
};

export default BlogDetails;

import BlogItem from "./BlogItem";

export default function BlogList(props) {
	const blogs = props.blogs.map((blog) => (
		<BlogItem blog={blog} key={blog.id} handleDelete={props.handleDelete} />
	));
	return (
		<>
			<h2 className="mb-3">{props.title}</h2>
			<ul className="list-group list-unstyled">
				{blogs.length !== 0 ? ( blogs ) : (
					<div className="d-flex alert alert-warning align-items-center" role="alert">
						<strong>
							No blogs right
						</strong>
						<span className="material-icons">face</span>
					</div>
				)}
			</ul>
		</>
	);
}

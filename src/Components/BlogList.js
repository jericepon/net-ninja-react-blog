import BlogItem from "./BlogItem";

export default function BlogList(props) {
	const blogs = props.blogs.map((blog) => (
		<BlogItem blog={blog} key={blog.id} handleDelete={props.handleDelete}/>
	));
	return (
		<>
			<h2 className="mb-3">{props.title}</h2>
			<ul className="list-group list-unstyled">
				{blogs.length !== 0 ? blogs : <div className="alert alert-warning" role="alert">
					<strong>No blogs right now.</strong>
				</div>
				}
			</ul>
		</>
	)
}

import { useState } from "react";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const blog = { title, body, author };
		
		console.log(blog);
	};

	return (
		<div className="create">
			<div className="w-75 mx-auto">
				<h1 className="mb-4">Add a new blog</h1>
				<form className="form" method="post" onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="title" className="form-label">
							Blog title:
						</label>
						<input
							type="text"
							name="title"
							id=""
							className="form-control"
							placeholder=""
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						{/* <small id="helpId" className="text-muted">Help text</small> */}
					</div>
					<div className="mb-3">
						<label htmlFor="body" className="form-label">
							Blog body:
						</label>
						<textarea
							className="form-control"
							name="body"
							id=""
							rows="3"
							onChange={(e) => setBody(e.target.value)}
							value={body}
						></textarea>
						{/* <small id="helpId" className="text-muted">Help text</small> */}
					</div>
					<div className="mb-3">
						<label htmlFor="author" className="form-label">
							Blog author:
						</label>
						<select
							className="form-select"
							name="author"
							onChange={(e) => setAuthor(e.target.value)}
						>
							<option defaultValue>Select an author</option>
							<option value="John">John</option>
							<option value="Lucas">Lucas</option>
							<option value="Job">Job</option>
						</select>
					</div>
					<div className="mt-5">
						<button
							type="submit"
							name=""
							id=""
							className="btn btn-primary"
						>
							Add blog
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Create;

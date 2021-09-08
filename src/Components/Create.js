import { useState } from "react";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");
	const [isPending, setPending] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setPending(true);

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			setPending(false);
		});
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
							required
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
							required
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
							required
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
							className="btn btn-primary"
						>
							{isPending ? (
								<>
									<span
										className="spinner-border spinner-border-sm me-3"
										role="status"
										aria-hidden="true"
									></span>
									<span className="">Loading...</span>
								</>
							) : (
								`Add blog`
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Create;

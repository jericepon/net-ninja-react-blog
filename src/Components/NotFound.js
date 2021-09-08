import { Link } from "react-router-dom"

function NotFound() {
	return (
		<div className="not-found">
			<h1>You are lost!</h1>
			<p>Nothing is happening here.</p>
			<Link to="/" className="text-danger" >Go back home...</Link>
		</div>
	)
}

export default NotFound

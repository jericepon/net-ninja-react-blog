import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<div className="container d-flex">
				<Link className="navbar-brand" to="/">Navbar</Link>

				<div className="collapse navbar-collapse" id="collapsibleNavId">
					<ul className="navbar-nav ms-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="create/">Create</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

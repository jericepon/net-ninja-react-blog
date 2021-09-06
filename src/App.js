import "./App.css";

function App() {
	return (
		<>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<div className="container d-flex">
					<a className="navbar-brand" href="/">
						Navbar
					</a>
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation"
					></button>
					<div className="collapse navbar-collapse" id="collapsibleNavId">
						<ul className="navbar-nav ms-auto mt-2 mt-lg-0">
							<li className="nav-item active">
								<a className="nav-link" href="/">
									Home{" "}
									<span className="visually-hidden">
										(current)
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div></nav>
		</>
	);
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogDetails from "./Components/BlogDetails";
import Create from "./Components/Create";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";

function App() {
	return (
		<Router>
			<>
				<Navbar />
				<div className="container mt-5">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/create" component={Create}/>
						<Route path="/blogs/:id" component={BlogDetails}/>
						<Route path="*" component={NotFound}/>
					</Switch>
				</div>
			</>
		</Router>
	);
}

export default App;

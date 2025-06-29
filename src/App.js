import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import ResetPassword from "./pages/resestPassword";
import Header from "./pages/header";
import NotFound from "./pages/notFound";

function App() {
	return (
		<>
			<Header />
			<div className="App">
				<Router>
					<Routes>
						{/** for testing and designing  */}
						<Route
							path="/"
							element={<Navigate to="/reset-password/testToken" />}
						/>{" "}
						{/* Redirect from the root URL to a specific reset-password route of the main web token */}
						<Route path="/reset-password/:token" element={<ResetPassword />} />
						{/* Wildcard route for unmatched paths */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;

import React from "react";

const NotFound = () => {
	return (
		<div>
			<div className="error_message">
				<h2>Error</h2>
				<p>
					There was an error processing your request. Please try again later.
				</p>
				<p>If the problem persists, contact support.</p>
				<button onClick={() => window.location.reload()}>Reload Page</button>
				<button onClick={() => (window.location.href = "/")}>Go to Home</button>
			</div>
		</div>
	);
};

export default NotFound;

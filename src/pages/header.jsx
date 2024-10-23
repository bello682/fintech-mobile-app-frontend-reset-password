import React from "react";
import logo from "../../src/asset/images/newlogo.png";

const Header = () => {
	return (
		<div className="containerHead">
			<nav>
				<div className="wrapperImage">
					<img src={logo} alt="" />
				</div>
			</nav>
		</div>
	);
};

export default Header;

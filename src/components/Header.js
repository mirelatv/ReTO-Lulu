import React, { Component } from 'react';

import './css/Header.css';


const Header =()=> {

		return (
			<div className="headercito ">
				
					<nav className="nav-extended">
						<div className="nav-wrapper">
							<div className="container-Nav">
								
								<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
								<ul id="nav-mobile" className="right hide-on-med-and-down">
									<li><a href="sass.html">Sobre mi</a></li>
									<li><a href="badges.html">Mis fotos</a></li>
									<li><a href="collapsible.html">Mi portafolio</a></li>
								</ul>
							</div>
						</div>
					</nav>
					<div>
				</div>
       
			</div>
		);
	}


export default Header;

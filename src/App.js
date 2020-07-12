import React, { useEffect } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function App() {
	const key = '32bbb72dd3f89e74578605f98eff3b31';

	const getData = () => {
		fetch('https://cors-anywhere.herokuapp.com/v2.api-football.com/leagues/', {
			headers: {
        'X-RapidAPI-Key': '32bbb72dd3f89e74578605f98eff3b31',
        
			}
		})
			.then((response) => response.json())
			.then((data) => {
        for(var i =0;i<25;++i){
          console.log(data.api.leagues[i])
        }
      })
			.catch((error) => console.log(error));
	};

	return (
		<div className="App">
			<Navbar bg="light" expand="md" className="navbar">
				<Navbar.Brand href="#home" className="navbrand">
					The Score Story
				</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home" className="navlinks">
							Home
						</Nav.Link>
						<Nav.Link href="#link" className="navlinks">
							About
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<br />
			<Button variant="primary" onClick={getData}>
				GET DATA
			</Button>
		</div>
	);
}

export default App;

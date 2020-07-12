import React, { useEffect, useState } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, ListGroup, Image } from 'react-bootstrap';

function App() {
	const key = '32bbb72dd3f89e74578605f98eff3b31';

	const [ teamList, setTeamList ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	const getData = () => {
		setIsLoading(true);
		const list = [];
		fetch('https://cors-anywhere.herokuapp.com/v2.api-football.com/teams/league/524', {
			headers: {
				'X-RapidAPI-Key': '32bbb72dd3f89e74578605f98eff3b31'
			}
		})
			.then((response) => response.json())
			.then((data) => {
				for (var i = 0; i < 20; ++i) {
					list.push(data.api.teams[i]);
					console.log(data.api.teams[i]);
				}

				setTeamList(list);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
	};

	const listItems = teamList.map((item) => (
		<ListGroup.Item key={item.team_id}>
			<Image src={item.logo} style={{height:'20px'}} roundedCircle />
			{item.name}
		</ListGroup.Item>
	));

	if (isLoading) return <Container fluid>LOADING...</Container>;

	return (
		<Container fluid className="App">
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
			<ListGroup>{listItems}</ListGroup>
			<Button variant="dark" onClick={getData}>
				GET DATA
			</Button>
		</Container>
	);
}

export default App;

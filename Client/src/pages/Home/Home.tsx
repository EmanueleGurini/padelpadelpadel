import React from 'react'
import Search from "../../components/Search";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SearchBar from "../../components/SearchBar";
import {Typography} from "@mui/material";
import Logo from '../../assets/images/logo-padol.svg'

const Home = () => {
	return (
		<React.Fragment>
			<Search />
			<CssBaseline />
			<Container>
				<Typography variant={'h1'}>Hello, World!</Typography>
			</Container>
		</React.Fragment>


	)
}

export default Home
import React from 'react';
import styled from 'styled-components';

import { Card ,Input,Image} from 'antd';
import logo from './Png.png';
const { Search } = Input;
const Content = styled.div`
	position: relative;
	width: 100%;
	justify-content: center;
	min-height: 80px;
	// background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
	`;



const Title = styled.h2`
	margin-bottom:0px;
	background: #fcedda;
	min-height: 54px;
	padding:0 1rem;
	font-weight:bold;
	color: rgba(0, 0, 0, 0.65);
	align-self: center;
	verticle-align:center;
	text-align: center;
	font-family: Georgia, Times, "Times New Roman", serif;
	
`;

// const ItunesForm = styled.div`
// 	display: flex;
// 	align-items: center!important;
// 	justify-content: center;
// 	margin-right:auto;
// 	margin-left:0;
// 	text-align: center;
// 	@media (max-width: 500px) {
// 		display: flex;
// 		flex-direction: column;
// 	  }

// `;




// const Button = styled.button`
// 	background-color: black;
// 	color: white;
// 	border-radius: 2em;
// 	height: 28px;
// 	text-align: center;
// 	margin-top:10px;
// 	outline:none;
// 	:hover {
// 		cursor: pointer;
// 		background-color: grey;
// 	}
// 	:focus {
// 		outline-color: grey;
// 	}
// `;

// const Input = styled.input`
// 	height: 25px;
// 	margin: 0 1em;
// 	padding: 0 1em;
// 	margin-top:10px;
// 	background-color: White;
// 	border-radius: 1em;
// 	outline:none;
// 	color: Black;
// 	font-size: 16px;
// 	::placeholder {
// 		color: White;
// 	}
// 	:focus {
// 		outline-color: White;
// 	}
// `;

// const Select = styled.select`
// 	height: 25px;
// 	margin: 0 1em 0 0;
// 	background-color: White;
// 	margin-top:10px;
// 	color: Black;
// 	font-size: 16px;
// 	:focus {
// 		outline-color: White;
// 	}
// `;

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			searchMedia: 'all',
		};
	}

	handleSearchTextChange = event =>
		this.setState({ searchText: event.target.value });

	handleSearchMediaChange = event =>
		this.setState({ searchMedia: event.target.value });

	render() {
		const { startSearch } = this.props;
		const { searchText, searchMedia } = this.state;
		// const mediaOptions = mediaTypes.map(media => (
		// 	<option value={media} label={media} key={media} />
		// ));
		return (
			<Content>
				
				<Title>
				<div style={{paddingTop:'20px'}}>
					<Image
					
      					width={60}
      					src={logo}
    					/> </div>
						<h2>iTunes Search API</h2></Title>
				<Card title="Search for Artists"  style={{ position:'sticky', width: 300, alignContent:'center',alignSelf:'center', marginLeft:'auto', marginRight:'auto',marginBottom:'40px', marginTop:'50px' }}>
				<p>Get Details</p>
				<Search placeholder="input search text" type="text"
						value={searchText}
						onChange={this.handleSearchTextChange} style={{ width:'100%' }}
						onSearch={() => startSearch(searchText, searchMedia)} />

      				
      				
    			</Card>
				
			
			</Content>
		);
	}
}

export default Header;

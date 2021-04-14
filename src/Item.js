import React from 'react';
// import styled from 'styled-components';
import {Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;
// import Palette from './palette';

// var Card = styled.div`
// 	height: 200px;
//   width: 150px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   text-align: center;
//   white-space: nowrap;
// 	margin: 10px 5px;
// 	padding: 5px;
// 	background-color: Black;
// 	color: white;
// 	:hover {
// 		box-shadow: 0 0 0.75rem black;
// 	}
// `;

// const CardText = styled.div`
// 	overflow: hidden;
// 	text-overflow: ellipsis;
// `;

const Item = ({ kind, artistName, trackName, artworkUrl100 }) => (
	// <Card>
	// 	<div>{kind}</div>
	// 	<CardText>{artistName}</CardText>
	// 	<CardText>{trackName}</CardText>
	// 	<div>
	// 		<img src={artworkUrl100} alt="Image2"/>
	// 	</div>
	// </Card>
	<div className="site-card-wrapper" style={{alignItems:'center'}}>
		{/* <Space direction="vertical"> */}
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={16}>
	<Card
    hoverable
    style={{ width: 240, background: '#ECECEC', padding: '30px' , marginTop:'30px', marginBottom:'20px', marginLeft:'20%', maxHeight:'400px',marginRight:'50px',flexDirection:'column'}}
    cover={<img src={artworkUrl100} alt="Image2"/>}
  >
    <Meta title={artistName} description={trackName} />
  </Card>
  </Col>
  </Row>
  {/* </Space> */}
  </div>


);

export default Item;

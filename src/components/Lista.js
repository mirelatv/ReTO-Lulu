import React, { Component } from 'react';

const hobbys=['leer','didujar','jugar']

const Lista = ()=> {

		return (
			<div >
				<ul>
         {hobbys.map(hobbys,key)}=>
				 <li key={key}> {hobbys}</li>}
       </ul>
       
			</div>
		);
	}


export default Lista;

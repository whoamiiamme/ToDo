import React, { useState } from 'react';
import { connect } from 'react-redux';
import { markAnster } from './../actions';
import { useHistory } from 'react-router-dom';

function Test2(props) {
	const history = useHistory();
	const [ words, setWords ] = useState('');
	var { quesition } = props;
	const theSubmit = (key) => {
		var anser = key;
		props.markAnster({ anser, quesition });
		history.replace('/');
	};

	const onChange = (e) => {
		setWords(e.target.value);
	};
	return (
		<div className='App'>
			<div className='container'>
				<h1>{props.scope}</h1>
				<h3>Ghi vào nghĩa từ bên dưới</h3>
				<h3>{quesition[1].english}</h3>
				<div className='form-group'>
					<input
						value={words}
						onChange={onChange}
						type='text'
						placeholder='Input field'
						className='form-control'
					/>

					<button onClick={() => theSubmit(words)} type='button' className='btn btn-default'>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	var i = Math.ceil(Math.random(0, 1) * 4);
	return {
		quesition: state.quesition,
		scope: state.scope
	};
};

export default connect(mapStateToProps, { markAnster })(Test2);

import React from 'react';
import { connect } from 'react-redux';
import { markCheck } from './../actions';
import { useHistory } from 'react-router-dom';

function Test1(props) {
	const history = useHistory();
	var { quesition } = props;
	var i = Math.ceil(Math.random(0, 1) * 1);
	const Mark = (q) => {
		props.markCheck(q === i);
		history.replace('/test2');
	};

	return (
		<div className='App'>
			<div className='container mt-50'>
				<h1>{props.scope}</h1>
				<div className='panel panel-success'>
					<div className='panel-heading'>
						<h3 className='panel-title'>Chọn từ phù hợp với</h3>
						<h3>{quesition[1].english}</h3>
					</div>
					<div className='panel-body'>
						<button onClick={() => Mark(i)} type='button' className='btn btn-primary mr-10'>
							{quesition[i].vietnamese}
						</button>

						<button onClick={() => Mark(i === 0 ? 1 : 0)} type='button' className='btn btn-primary'>
							{quesition[i === 1 ? 0 : i].vietnamese}
						</button>
					</div>
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

export default connect(mapStateToProps, { markCheck })(Test1);

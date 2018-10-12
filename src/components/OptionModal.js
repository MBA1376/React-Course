import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
	return (
		<Modal
			isOpen={!!props.selectedOption} 
			onRequestClose={props.handleClearSelectedOption}
			contentLabel="Selected Option"
		>
			<h3>some text</h3>
			{props.selectedOption && <p>{props.selectedOption}</p>}
			<button onClick={props.handleClearSelectedOption}>Okay</button>
		</Modal>
	)
}

export default OptionModal;
import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
	return (
		<Modal
			className="modal"
			isOpen={!!props.selectedOption} 
			onRequestClose={props.handleClearSelectedOption}
			contentLabel="Selected Option"
			closeTimeoutMS={400}
		>
			<h3 className="modal__title">some text</h3>
			{props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
			<button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
		</Modal>
	)
}

export default OptionModal;
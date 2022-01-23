function Modal(props) {

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button onClick={props.onCancel} className='btn btn--alt'>Cancel</button>
            <button onClick={props.onConfirm} className='btn'>Confirm</button>
        </div>
    );
}
export default Modal;
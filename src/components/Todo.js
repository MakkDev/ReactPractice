import Modal from "./Modal";
import Backdrop from "./Backdrop";
import {useState}from 'react';

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false); 

    function deleteHandler() {
        setModalIsOpen(true);
        
    }
    function closeModalHandler(){
        setModalIsOpen(false);
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button onClick={deleteHandler} className="btn"> Delete </button>
            </div>
            {modalIsOpen ? <Modal onCancel={closeModalHandler} /> : null}
            {modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null}
             
        </div>
    );
}

export default Todo;
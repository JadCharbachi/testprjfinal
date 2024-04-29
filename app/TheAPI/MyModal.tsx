import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body')

function MyModal({ buttonLabel }: { buttonLabel: string }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
                {buttonLabel}
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
            </Modal>
        </div>
    );
}

export default MyModal;
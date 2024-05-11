import React, { useState } from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';

Modal.setAppElement('body')

function Acheter({ buttonLabel, symbolAPI }: { buttonLabel: string; symbolAPI: string }) {
    console.log(symbolAPI);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [symbol, setSymbol] = useState('');
    const [numberOfActions, setNumberOfActions] = useState<number>(0);
    const [orderType, setOrderType] = useState('limit');

    const resetForm = () => {
        const cleanedSymbol = symbolAPI.replace(/\d/g, '');
        setSymbol(cleanedSymbol);
        setNumberOfActions(0);
        setOrderType('limit');
    };
    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function submitOrder(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        console.log('Submitting order...');
        console.log('Symbol:', symbol);
        console.log('Number of Actions:', numberOfActions);
        console.log('Order Type:', orderType);
    }

    return (
        <div>
            <button onClick={() => { openModal(); resetForm(); }} className="bg-blue-500 text-white px-4 py-2 rounded">
                {buttonLabel}
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={{
                    content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '25%', // adjust width
                        height: '50%', // adjust height
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '20px'
                    },
                }}
            >
                <div style={{ position: 'relative' }}>
                <h2 style={{ fontSize: '2em', textAlign: 'center' }}>ACHAT DE {symbol}</h2> 
                    <button
                        onClick={closeModal}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'transparent',
                            border: 'none',
                            fontSize: '1.5em'
                        }}
                    >
                        X
                    </button>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingLeft: '50px',
                        paddingTop: '70px'
                    }}>
                        <div style={{ marginBottom: '20px' }}>
                            <input
                                type="text"
                                placeholder="Symbol"
                                value={symbol}
                                onChange={(e) => setSymbol(e.target.value)}
                                maxLength={15}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    marginBottom: '10px',
                                    border: '1px solid #000',
                                    borderRadius: '5px' // Add this line
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <input
                                type="text"
                                placeholder="Number of Actions"
                                value={numberOfActions === 0 ? '' : numberOfActions}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value === '' || /^\d+$/.test(value)) {
                                        setNumberOfActions(Number(value));
                                    }
                                }}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    marginBottom: '10px',
                                    WebkitAppearance: 'none',
                                    MozAppearance: 'textfield',
                                    border: '1px solid #000',
                                    borderRadius: '5px' // Add this line
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                            <label style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                <input
                                    type="radio"
                                    value="limit"
                                    checked={orderType === 'limit'}
                                    onChange={(e) => setOrderType(e.target.value)}
                                    style={{ marginRight: '10px' }}
                                />
                                Limit Price
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="radio"
                                    value="market"
                                    checked={orderType === 'market'}
                                    onChange={(e) => setOrderType(e.target.value)}
                                />
                                Market Price
                            </label>
                        </div>
                        <button onClick={(event) => { submitOrder(event); closeModal(); }} style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '4px' }}>Submit</button>
                    </div>
                </div >
            </Modal >
        </div >
    );
}

export default Acheter;
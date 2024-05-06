import { Title } from '@tremor/react';
import React, { useState } from 'react';

const CompoundInterestCalculator: React.FC = () => {
    const [montantInitial, setMontantInitial] = useState('');
    const [tauxInteret, setTauxInteret] = useState('');
    const [cashFlow, setCashFlow] = useState('');
    const [annees, setAnnees] = useState('');
    const [resultat, setResultat] = useState('');
    const [cashFlowParMois, setCashFlowParMois] = useState(false);
    const [erreur, setErreur] = useState(false);

    const calculInteretCompose = () => {
        if (!montantInitial && !tauxInteret && !cashFlow && !annees) {
            setErreur(true);
            setResultat('');
            return;
        }

        setErreur(false);

        const montantInitialValue = parseFloat(montantInitial);
        const tauxInteretValue = parseFloat(tauxInteret);
        const cashFlowValue = parseFloat(cashFlow);
        const anneesValue = parseFloat(annees);

        if (isNaN(montantInitialValue) || isNaN(tauxInteretValue) || isNaN(cashFlowValue) || isNaN(anneesValue)) {
            setResultat('');
            return;
        }

        const totalValeur = montantInitialValue * Math.pow(1 + tauxInteretValue / 100, anneesValue);
        let totalCashFlow = 0;
        if (cashFlowParMois) {
            totalCashFlow = cashFlowValue * 12 * ((Math.pow(1 + tauxInteretValue / 100, anneesValue) - 1) / (tauxInteretValue / 100));
        } else {
            totalCashFlow = cashFlowValue * ((Math.pow(1 + tauxInteretValue / 100, anneesValue) - 1) / (tauxInteretValue / 100));
        }
        const resultatFinal = totalValeur + totalCashFlow;
        setResultat(resultatFinal.toFixed(2).toString());
    };

    const styles: { [key: string]: React.CSSProperties } = {
        container: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '400px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        input: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            //marginBottom: '10px',
        },
        button: {
            width: '100%',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        result: {
            marginTop: '10px',
            fontWeight: 'bold',
        },
    };

    return (
        <div style={styles.container}>
            <Title className='mb-2'>Calculateur d&apos;Intérêts Composés</Title>
            <div className='mb-5'>
                <div>
                    <label title='Le montant initial à investir'>Montant Initial :</label>
                    <input
                        type="number"
                        min={0}
                        style={styles.input}
                        value={montantInitial}
                        onChange={(e) => setMontantInitial(e.target.value)}
                    />
                </div>
            </div>
            <div className='mb-5'>
                <div>
                    <label title='Le taux d&apos;intérêt'>Taux d&apos;Intérêt (%) :</label>
                    <input
                        type="number"
                        max={100}
                        min={0}
                        style={styles.input}
                        value={tauxInteret}
                        onChange={(e) => setTauxInteret(e.target.value)}
                    />
                </div>
            </div>
            <div className='mb-5'>
                <div>
                    <label title='Le cash flow'>Cash Flow :</label>
                    <input
                        type="number"
                        min={0}
                        style={styles.input}
                        value={cashFlow}
                        onChange={(e) => setCashFlow(e.target.value)}
                    />
                    <div className='md:justify-center items-center'>
                        <label title='Le cash flow par mois'>Cash Flow par mois : </label>
                        <input type="checkbox" checked={cashFlowParMois} onChange={() => setCashFlowParMois(!cashFlowParMois)} />
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                <div>
                    <label title='Le nombre d&apos;années d&apos;investissement'>Années :</label>
                    <input
                        type="number"
                        min={0}
                        style={styles.input}
                        value={annees}
                        onChange={(e) => setAnnees(e.target.value)}
                    />
                </div>
            </div>
            <button style={styles.button} onClick={calculInteretCompose}>Calculer</button>
            {erreur && <div style={{ color: 'red', marginTop: '10px' }}>Erreur</div>}
            <div style={styles.result}>
                <label>Résultat : </label>
                <span>{resultat ? resultat + "$" : ""}</span>
            </div>
        </div>
    );
};

export default CompoundInterestCalculator;

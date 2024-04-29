import React, { useState } from 'react';

const CompoundInterestCalculator: React.FC = () => {
    const [montantInitial, setMontantInitial] = useState(0);
    const [tauxInteret, setTauxInteret] = useState(0);
    const [cashFlow, setCashFlow] = useState(0);
    const [annees, setAnnees] = useState(0);
    const [resultat, setResultat] = useState(0);
    const [cashFlowParMois, setCashFlowParMois] = useState(false);

    const calculInteretCompose = () => {
        const totalValeur = montantInitial * Math.pow(1 + tauxInteret / 100, annees);
        let totalCashFlow = 0;
        if (cashFlowParMois) {
            totalCashFlow = cashFlow * 12 * ((Math.pow(1 + tauxInteret / 100, annees) - 1) / (tauxInteret / 100));
        } else {
            totalCashFlow = cashFlow * ((Math.pow(1 + tauxInteret / 100, annees) - 1) / (tauxInteret / 100));
        }
        const resultatFinal = totalValeur + totalCashFlow;
        setResultat(resultatFinal);
    };

    const styles = {
        container: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '300px',
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
            marginBottom: '10px',
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
            <h2>Calculateur d'Intérêts Composés</h2>
            <div>
                <label>Montant Initial :</label>
                <input type="number" style={styles.input} value={montantInitial} onChange={(e) => setMontantInitial(Number(e.target.value))} />
            </div>
            <div>
                <label>Taux d'Intérêt (%):</label>
                <input type="number" style={styles.input} value={tauxInteret} onChange={(e) => setTauxInteret(Number(e.target.value))} />
            </div>
            <div>
                <label>Cash Flow:</label>
                <input type="number" style={styles.input} value={cashFlow} onChange={(e) => setCashFlow(Number(e.target.value))} />
            </div>
            <div>
                <label>Années:</label>
                <input type="number" style={styles.input} value={annees} onChange={(e) => setAnnees(Number(e.target.value))} />
            </div>
            <div>
                <label>Cash Flow par mois:</label>
                <input type="checkbox" checked={cashFlowParMois} onChange={() => setCashFlowParMois(!cashFlowParMois)} />
            </div>
            <button style={styles.button} onClick={calculInteretCompose}>Calculer</button>
            <div style={styles.result}>
                <label>Résultat:</label>
                <span>{resultat}</span>
            </div>
        </div>
    );
};

export default CompoundInterestCalculator;

import React, { useState } from 'react';

const CompoundInterestCalculator: React.FC = () => {
    const [initialValue, setInitialValue] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [cashFlow, setCashFlow] = useState(0);
    const [years, setYears] = useState(0);
    const [result, setResult] = useState(0);

    const calculateCompoundInterest = () => {
        const totalValue = initialValue * Math.pow(1 + interestRate / 100, years);
        const totalCashFlow = cashFlow * ((Math.pow(1 + interestRate / 100, years) - 1) / (interestRate / 100));
        const finalResult = totalValue + totalCashFlow;
        setResult(finalResult);
    };

    return (
        <div>
            <h2>Compound Interest Calculator</h2>
            <div>
                <label>Initial Value:</label>
                <input type="number" value={initialValue} onChange={(e) => setInitialValue(Number(e.target.value))} />
            </div>
            <div>
                <label>Interest Rate (%):</label>
                <input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
            </div>
            <div>
                <label>Cash Flow:</label>
                <input type="number" value={cashFlow} onChange={(e) => setCashFlow(Number(e.target.value))} />
            </div>
            <div>
                <label>Years:</label>
                <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
            </div>
            <button onClick={calculateCompoundInterest}>Calculate</button>
            <div>
                <label>Result:</label>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default CompoundInterestCalculator;
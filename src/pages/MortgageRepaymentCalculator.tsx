import '../assets/mortgageRepaymentCalculator/mortgageRepaymentCalculator.css';

export default function MortgageRepaymentCalculator() {


    return (
        <div id='mortgageRepaymentCalculatorContainer'>
            <CalculatorContainer />
        
        
        
        
        
        </div>
    )
}

function CalculatorContainer() {
    return (
        <div id='container'>
            <Calculator />
            <Results />

        </div>
    )
}

function Calculator() {
    return (
        <div id='calculatorContainer'>
            <header>
                <h2>Mortgage Calculator</h2>
                <p>Clear All</p>
            </header>
            
            <form id='formCalculator'>
                <label>Mortgage Amount
                    <input type='number'></input>
                </label>
                <label>Mortgage Term
                    <input type='number'></input>
                </label>
                <label>Interest Rate 
                    <input type='number'></input>
                </label>
                <fieldset>
                    <legend>Mortgage Type </legend>

                    <div>
                        <label>
                            <input type='radio' id='radioRepayment' name='repayment' value='repayment'></input>
                            Repayment
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type='radio' id='radioInterestOnly' name='repayment' value='repayment'></input>
                            Interest Only
                        </label>
                    </div>
                </fieldset>
                <button type='submit'>Calculate Repayments</button>
            </form>

        </div>
    )
}

function Results() {
    return (
        <div id='resultsContainer'>
            <ResultsEmpty />

        </div>
    )
}

function ResultsEmpty() {

    return (
        <>
        
        
        
        </>
    )

}

function ResultsCompleted() {
    return (
        <>
        
        </>
    )
}
import '../assets/mortgageRepaymentCalculator/mortgageRepaymentCalculator.css';
import emptyIMG from "../assets/mortgageRepaymentCalculator/images/illustration-empty.svg";
import favicon from "../assets/mortgageRepaymentCalculator/images/favicon-32x32.png";
import iconCalculator from "../assets/mortgageRepaymentCalculator/images/icon-calculator.svg";


// Functionality
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


    const clearForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("TEST: clearForm function triggered")
    }

    return (
        <div id='calculatorContainer'>
            <header>
                <h3>Mortgage Calculator</h3>
                <p><a id='clearForm' onClick={clearForm}>Clear All</a></p>
            </header>
            
            <form id='formCalculator'>
                <label htmlFor='inputAmount'>Mortgage Amount</label>
                <input type='number' id='inputAmount'></input>


                <label htmlFor='inputTerm'>Mortgage Term</label>
                <input type='number'id='inputTerm'></input>

                <label htmlFor='inputRate'>Interest Rate</label>
                <input type='number'id='inputRate'></input>

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
            <img height='100px' width='100px' src={emptyIMG}></img>
            <h3>Results shown here</h3>
            <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </>
    )

}

function ResultsCompleted() {
    return (
        <>
        
        </>
    )
}
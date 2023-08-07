document.addEventListener("DOMContentLoaded", function () {
    const usdtAmountInput = document.getElementById("usdtAmount");
    const numDaysSelect = document.getElementById("numDays");
    const calculationResultSpan = document.getElementById("calculationResult");

    usdtAmountInput.addEventListener("input", calculate);
    numDaysSelect.addEventListener("change", calculate);

    function calculate() {
        const amount = parseFloat(usdtAmountInput.value) || 0;
        const days = parseFloat(numDaysSelect.value) || 0;
        const selectedOption = numDaysSelect.options[numDaysSelect.selectedIndex];
        const percent = parseFloat(selectedOption.getAttribute("data-percent")) || 0;

        const resultA = (amount * percent * days).toFixed(2);
        calculationResultSpan.textContent = resultA;

        const resultB = ((parseFloat(resultA) + amount) * days * percent).toFixed(2);
        const resultC = ((parseFloat(resultA) + parseFloat(resultB) + amount) * days * percent).toFixed(2);

        // Update the result B and C spans (cycleResult1 and cycleResult2) if needed
        const cycleResult1Span = document.getElementById("cycleResult1");
        const cycleResult2Span = document.getElementById("cycleResult2");
        if (cycleResult1Span && cycleResult2Span) {
            cycleResult1Span.textContent = resultB;
            cycleResult2Span.textContent = resultC;
        }
    }
});

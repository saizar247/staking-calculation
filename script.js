document.addEventListener("DOMContentLoaded", function () {
    const usdtAmountInput = document.getElementById("usdtAmount");
    const numDaysSelect = document.getElementById("numDays");
    const calculationResultSpan = document.getElementById("calculationResult");
    const cycleResult1Span = document.getElementById("cycleResult1");
    const cycleResult2Span = document.getElementById("cycleResult2");

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
        cycleResult1Span.textContent = resultB;

        const resultC = ((parseFloat(resultA) + parseFloat(resultB) + amount) * days * percent).toFixed(2);
        cycleResult2Span.textContent = resultC;
    }
});

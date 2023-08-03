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

        const result = (amount * percent * days).toFixed(2);
        calculationResultSpan.textContent = result;
    }
});

// 1. Logic functions - These are "Pure" and easy to test
export const toNumber = (value) => {
  if (value === "" || value === null) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

export const add = (a, b) => {
  // This is your "intentional bug" for the CI demo!
  // Change this to (a + b) later to "fix" the pipeline.
  return a - b; 
};

// 2. DOM Logic - Wrapped so it doesn't crash the test runner
if (typeof document !== 'undefined') {
  const firstInput = document.getElementById("a");
  const secondInput = document.getElementById("b");
  const resultOutput = document.getElementById("result");

  const updateResult = () => {
    const first = toNumber(firstInput.value.trim());
    const second = toNumber(secondInput.value.trim());

    if (first === null || second === null) {
      resultOutput.textContent = "--";
      return;
    }

    // Use our logic function here
    resultOutput.textContent = add(first, second).toString();
  };

  [firstInput, secondInput].forEach((input) => {
    input.addEventListener("input", updateResult);
  });
}
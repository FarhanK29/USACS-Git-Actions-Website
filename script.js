
export const toNumber = (value) => {
  if (value === "" || value === null) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

export const add = (a, b) => {
  return a + b; 
  //Change this to fail test
};


if (typeof document !== 'undefined') {
  const firstInput = document.getElementById("a");
  const secondInput = document.getElementById("b");
  const resultOutput = document.getElementById("result");

  const updateResult = () => {

    const first = toNumber(firstInput?.value.trim());
    const second = toNumber(secondInput?.value.trim());

    if (first === null || second === null) {
      if (resultOutput) resultOutput.textContent = "--";
      return;
    }

    if (resultOutput) resultOutput.textContent = add(first, second).toString();
  };


  [firstInput, secondInput].forEach((input) => {
    input?.addEventListener("input", updateResult); 
  });
}
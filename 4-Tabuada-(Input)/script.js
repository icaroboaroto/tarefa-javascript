const inputTabuada = document.querySelector("input");
const tabuada = document.querySelector("#resultado-tabuada");

const handleChangeInput = ({ target }) => {
  console.log(target.value);

  if (target.value) {
    setTabuada(target.value);
  }
};

inputTabuada.addEventListener("input", handleChangeInput);

const setTabuada = (number) => {
  tabuada.innerHTML = "";
  for (let counter = 1; counter <= 10; counter++) {
    tabuada.innerHTML += `<p>${number} x ${counter} = ${number * counter}</p>`;
  }
};

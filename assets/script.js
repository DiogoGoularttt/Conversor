let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");
let dolar = 5.84;

usdInput.addEventListener("keyup", () => {
  convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
  convert("brl-to-usd");
});

usdInput.addEventListener("blur", () => {
  usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
  brlInput.value = formatCurrency(brlInput.value)
})

function formatCurrency(value) {
  let fixedValue = fixValue(value);
  let options = {
    useGrouping: false,
    minimumFractionDigits: 2,
  };
  let formatter = new Intl.NumberFormat("pt-BR", options);
  return formatter.format(fixedValue);
}

//Aqui modificamos a vírgula por ponto e transformamos o valor de string para número e faço uma verificação caso o valor seja NaN
function fixValue(value) {
  let fixedValue = value.replace(",", ".");
  let floatValue = parseFloat(fixedValue);
  if (floatValue == NaN) {
    floatValue = 0;
  }
  return floatValue;
}

// Nessa função eu adicionei uma propriedade chamada type que será uma string para eu poder diferenciar quando for de usd para brl e de brl para usd
function convert(type) {
  if (type == "usd-to-brl") {
    let fixedValue = fixValue(usdInput.value);

    let result = fixedValue * dolar;
    result = result.toFixed(2);

    brlInput.value = formatCurrency(result);
  }
  if (type == "brl-to-usd") {
    let fixedValue = fixValue(brlInput.value);

    let result = fixedValue / dolar;
    result = result.toFixed(2);

    usdInput.value = formatCurrency(result);
  }
}

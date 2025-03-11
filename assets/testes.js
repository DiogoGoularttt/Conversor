// Tipos de dados
let idade = 20; // number
let nome = "Diogo"; // string
let casado = false; // boolean
let cidade = null; // null
let estado; // undefined
let horario = new Date(); // object

// Arrays e Objetos
let ingredientes = ["farinha", "ovo", "leite"];
let pessoa = {
  nome: "Diogo",
  idade: 20,
  endereco: {
    cep: "94858-620",
    pais: "Brasil",
    estado: "RS",
    cidade: "Alvorada",
    logradouro: "Rua Garças",
    numero: "237",
    complemento: "Apto 202",
  },
  nascimento: "03/05/2004",
  instagram: "@diihgoulart",
};

// Esse é um array de objetos
let estoque = [
  {
    nome: "Farinha",
    quantidade: 10,
    unidade: "kg",
  },
  {
    nome: "Ovo",
    quantidade: 20,
    unidade: "un",
  },
  {
    nome: "Leite",
    quantidade: 5,
    unidade: "L",
  },
];

// Arrow Functions
// let dolar = 5.91;

const converter = (real) => {
  return real / dolar;
};

let horas = horario.getHours();

if (horas >= 5 && horas < 12) {
  console.log("Bom dia!");
} else if (horas >= 12 && horas < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite!");
}

// Loops

let lista = [10, 20, 30, 40];

for (let item of lista) {
  console.log(item);
}

const ativar = () => {
  alert("O botão foi ativado!");
};

//Clique em botão para chamar a função ativar
const botao = document.querySelector("#button");

botao.addEventListener("click", () => {
  ativar();
});

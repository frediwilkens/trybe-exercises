let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: "Sim",
};

let pato = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: "Sim",
}

for (let key in info) {
  if (key === "recorrente" && info[key] === "Sim" && pato[key] === "Sim") {
    console.log("Ambos recorrentes")
  } else {
    console.log(info[key] + " e " + pato[key]);
  }
}
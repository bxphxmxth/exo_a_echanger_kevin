// 1) rajouter bordure rouge 2px dotted au premier h1

let firstH1 = document.querySelector("h1");
console.log(firstH1);

firstH1.style.border = "red dotted 2px"
// 2) mettre un couleur au choix à "BADABOUM". 

let bada = document.getElementsByTagName("p")[1].children[0];
console.log(bada);

bada.style.color = "purple"

// 3) creer liste d'au moins 3 li de tes chanteurs en dessous du h2 chaque li doit posseder une caratéristique choisie au hasard (bordure pointillée noire 1px, soulignement vert, couleur violet )

 

let tabArtistes = ["Alice Glass", "Kurt Cobain","Hayley Williams"];

let div2 = document.getElementsByTagName("div")[1];
console.log(div2);

let myUl = document.createElement("ul");

div2.appendChild(myUl);

console.log(div2);

let allLi;

let color = ["border: dotted black 1px", "text-decoration: underline; color : green", "color: green"];

let colorRandom; 
console.log(colorRandom);

tabArtistes.forEach(element => {
     allLi = myUl.appendChild(document.createElement("li"));
     allLi.textContent = element;
     allLi.style = color[colorRandom];
     colorRandom =  Math.floor(Math.random()*color.length);
});
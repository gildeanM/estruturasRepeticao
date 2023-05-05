//ExemploFor01
console.log("ExemploFor01");


for(let i = 5; i > 0; i--){//valor de i é decrementado até 0
  console.log(i);//response: 5 4 3 2 1
}

//ExemploFor02
console.log("ExemploFor02");


for(let i = 0; i < 5;i++){//valor de i é incrementado até 5
    console.log(i);//response: 0 1 2 3 4
}

//ExemploFor03
console.log("ExemploFor03");

let marcas = ["Asus","LG","Acer","Dell"];
let t = marcas.length;


for(let x = 0; x < t;x++){//valor de i é incrementado até o tamanho do array
    console.log(marcas[x]);//response: Asus LG Acer Dell
}

//ExemploWhile01
console.log("ExemploWhile01");

let control = 0;//variável de controle

while(control < 6){ //Condição que repetirá a estrura enquanto for true
    console.log(`${control} - Javascript`);//response:  0 - Javascript 1 - Javascript ... 5 - Javascript
    control++;//incremento
}

//ExemploWhile02
console.log("ExemploWhile02");

let modelos = ["LG","Samsung","Microsoft","Apple","Acer"];

let cont = 0;

while(cont < modelos.length){//comparação entre o cont e o tamanho do vetor
    console.log(cont+"-" + modelos[cont])//response: 0-LG 1-Samsung ... 4-Acer 
    cont++;
}

//ExemploWhile03
/* 
let contador = true;   // a variável contador vai ser verdadeira sempre
while(contador == true){  // essa condição vai ser sempre verdadeira, poderia ser reescrita assim: while(contador) que daria no mesmo
   console.log("Comandos executados enquato o programa estiver em execução"); 
}
*/

//ExemploDoWhile01
console.log("ExemploDoWhile01");

do{

    console.log("Executado pelo menos uma vez");//response: Executado pelo menos uma vez

}while(false);

//ExemploForIn01
console.log("ExemploForIn01");

let objeto = {1:"C", 2:"Python", 3:"C++", 4: "C#", 5:"PHP"};

for(let prop in objeto){//interage com todas as propriedades numeraveis do objeto e seus respectivos valores
    console.log("Linguagem" + prop + " - "+ objeto[prop]);//response: Linguagem: 1 - C Linguagem: 2 - Python ... Linguagem: 5 - PHP 
}

//ExemploForIn02
console.log("ExemploForIn02");

const pessoa = { 
    nome:"Maria",
    idade:20,
    peso:65,
    altura:1.7
   }

for(let atributo in pessoa){
    console.log(pessoa[atributo])//response: Maria 20 65 1.7
}

//ExemploForIn03
console.log("ExemploForIn03");

let marcas2 = ["LG","Samsung","Microsoft","Apple","Acer"];

for(let element in marcas2){
    console.log("Index: "+element+ " - "+marcas2[element] )//response: Index: 0 - LG Index: 1 - Samsung ... Index: 4 - Acer
}

//ExemploForOf01
console.log("ExemploForOf01");

let cursos = ["Sistemas de Informação","Ciências da Computação","Análise de Sistemas","Engenharia de Software"];

for(let curso of cursos){//Como o for in, mas voltado para Array
    console.log("Faculdade: -"+curso);//response: Faculdade: - Ciências da Computação Faculdade: - Análise de Sistemas ... Faculdade: - Engenharia de Software 

}

//ExemploForOf02
console.log("ExemploForOf02");

let valoresFixos = [10, 20, 30];//response: 10 20 30

for(const value of valoresFixos){
    console.log(value);
}

//ExemploForOf03
console.log("ExemploForOf03");

const infoPessoa = [
		   {nome: "Robison", idade: 18, altura:1.8},
		   {nome: "William", idade: 28, altura:1.6},
		   {nome: "Janaina", idade: 19, altura:1.5},
		   {nome: "Carla", idade: 25, altura:1.9},
		   {nome: "Maíra", idade: 32, altura:1.4},
         ];

for(let funcionario of infoPessoa){
    console.log(funcionario.nome+" - "+funcionario.idade+" - "+funcionario.altura);//response: Robinson-18-1.8 William-28-1.6 ...  Maíra-32-1.4
}


//ExemploForEach01
console.log("ExemploForEach01");

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) { 
    console.log(item*2);
}

numeros.forEach(tabuadaDe2);//response: 0 2 4 6 8 .... 20, ou seja, a tabuade de 2

//ExemploForEach02
console.log("ExemploForEach02");

let valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item, indice) {
    total += item; 
    console.log("Posição:" + indice + " - Soma = " + total); //response: Posição:0 - Soma = 0 Posição:1 - Soma = 1  Posição:2 - Soma = 3 ... Posição:10 - Soma = 55
}

valores.forEach(somar)

//ExemploForEach03
console.log("ExemploForEach03");

let modelPhones = ["A31","MotoOne","A51","A72","Redmi"]; 

modelPhones.forEach(function(item,indice){
    console.log(indice+ " = "+item)//response: 0 = A31 1 = MotoOne ... 4 = Redmi 
});


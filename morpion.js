let valeurs = new Array();
let j = 1;
let tour = 1;
let joueur1 = new Array();
let joueur2 = new Array();
let combos_gagnants = new Array();
let combos = new Array();
 
for (let i = 1; i<=9; i++)
{
    valeurs[i] = j*i;
    if (i%3 == 0)
    {
        j *= 10;
    }
}

console.log(valeurs);

let id = "";
let cases = new Array();
for (let k = 1; k<10; k++)
{
    id = "case_" + k;
    cases[k] = document.getElementById(id);
    cases[k].addEventListener("click", function(){
        click_case(cases[k]);
    });
}

function click_case(lacase)
{
    lacase.classList.remove('blue');
    lacase.classList.remove('red');
    if (tour == 1)
    {
        lacase.classList.add("blue");
        joueur1.push(lacase);
        console.log(joueur1);
    }
    else
    {
        lacase.classList.add('red');
        joueur2.push(lacase);
        console.log(joueur2);
    }
    changer_tour();
}

console.log(cases);


alert("Bienvenue");
alert("On va jouer au morpion !!");
alert("Joueur 1, tu commence !");

function changer_tour()
{
    if (tour == 1)
    {
        tour = 2;
        alert("c'est le tour du joueur 2");
    }
    else
    {
        tour = 1;
        alert("c'est le tour du joueur 1");
    }
}
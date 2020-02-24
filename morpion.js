let valeurs = new Array();
let j = 1;
let tour = 1;
let joueur1 = 0;
let joueur2 = 0;

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
    cases[k].addEventListener("click", click_case(cases[k]));
}

function click_case(lacase)
{
    if (tour == 1)
    {
        lacase.classList.add("blue");
    }
    else
    {
        lacase.classList.add('red');
    }
    changer_tour();
}

console.log(cases);


alert("Bienvenue");
alert("On va jouer au morpion !!");
alert("Joueur 1, tu commence !");

// function click_case(case)
// {
//         case.addEventListener("click", function(){
//             if (tour == 1)
//             {
//                 case.classList.add("red");
//             }
//             else
//             {
//                 case.classList.add("blue");
//             }
//         });
// }

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
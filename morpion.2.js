alert("Bienvenue");
alert("On va jouer au morpion !!");
alert("Joueur 1, tu commence !");

let joueur_courant = 1;
let color = "blue";
let cases = new Array();

for (let k = 1; k<10; k++)
{
    let id = "case_" + k;
    cases[k] = document.getElementById(id);
    cases[k].addEventListener("click",  function(){
        click_case(cases[k]);
    });
}

function check_win()
{
    if (compare_3_cases(1, 2, 3) || compare_3_cases(5, 1, 9) || compare_3_cases(3, 5, 7) || compare_3_cases(4, 5, 6) || compare_3_cases(7, 8, 9) || compare_3_cases(1, 4, 7) || compare_3_cases(2, 5, 8) || compare_3_cases(3, 6, 9))
    {
        alert(color == "blue" ? "Le joueur 1 a gagné" : "le joueur 2 a gagné");
        alert("C'est parti pour la revanche");
        document.location.reload(true);
    }
}

function compare_3_cases(index1, index2, index3)
{
    if (cases[index1].classList.contains(color) && cases[index2].classList.contains(color) && cases[index3].classList.contains(color))
    {
        console.log("enter condition");
        return true;
    }
    return false;
}

function tour_ia()
{
    
}

function click_case(lacase)
{
    if (lacase.classList.contains("red") || lacase.classList.contains("blue"))
    {
        alert("cette case est déja prise !");
        return;
    }
    lacase.classList.add("blue");
    check_win();
    changer_joueur_courant();
}

function changer_joueur_courant()
{
    if (joueur_courant == 1)
    {
        joueur_courant = 2;
        color = "red"
        alert("c'est le tour du joueur 2");
    }
    else
    {
        joueur_courant = 1;
        color = "blue";
        alert("c'est le tour du joueur 1");
    }
}
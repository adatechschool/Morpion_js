alert("Bienvenue");
alert("On va jouer au morpion !!");
alert("Joueur 1, tu commence !");

let joueur_courant = 1;
let color = "blue";
let cases = new Array();
let tour = 0;

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
        alert(color == "blue" ? "Vous avez vaincu la machine" : "vous avez perdu contre un robot débile");
        alert("C'est parti pour la revanche");
        document.location.reload(true);
    }
    return false;
}

function get_random_int(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
}

function compare_3_cases(index1, index2, index3)
{
    if (cases[index1].classList.contains(color) && cases[index2].classList.contains(color) && cases[index3].classList.contains(color))
    {
        return true;
    }
    return false;
}

function tour_ia()
{
    let case_choisie = cases[get_random_int(9) + 1];
    if (case_choisie.classList.contains("blue") || case_choisie.classList.contains("red"))
    {
        tour_ia();
    }
    case_choisie.classList.add("red");
    check_win();
    changer_joueur_courant();
}

function check_egalite()
{
    color = "blue";
    if (check_win() == false)
    {
        color = "red";
        if (check_win() == false)
        {
            alert("match nul !");
            document.location.reload(true);
        }
    }
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
    tour++;
    if (tour == 9)
    {
        check_egalite();
    }
    if (joueur_courant == 1)
    {
        joueur_courant = 2;
        color = "red"
        alert("c'est le tour de l'ordinateur");
        tour_ia();
    }
    else
    {
        joueur_courant = 1;
        color = "blue";
        alert("c'est le tour du joueur");
    }
}
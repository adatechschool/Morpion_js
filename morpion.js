alert("Bienvenue");
alert("On va jouer au morpion !!");
alert("Joueur 1, tu commence !");

let valeurs = new Array();
valeurs = [1, 2, 3, 10, 20, 30, 100, 200, 300];
console.log(valeurs);

let tour = 1;
let joueur1 = new Array();
let joueur2 = new Array();
let combos_gagnants = new Array();
combos_gagnants = [6, 60, 600, 111, 222, 333, 123, 321];
console.log(combos_gagnants);

let cases = new Array();
for (let k = 1; k<10; k++)
{
    let id = "case_" + k;
    cases[k] = document.getElementById(id);
    cases[k].addEventListener("click",  function(){
        click_case(cases[k], k);
    });
}

function check_player_combos(player)
{
    let combos_player = new Array();
    combos_player.push(player[0] + player[1] + player[2]);
    combos_player.push(player[0] + player[1] + player[3]);
    combos_player.push(player[0] + player[1] + player[4]);
    combos_player.push(player[0] + player[2] + player[3]);
    combos_player.push(player[0] + player[2] + player[4]);
    combos_player.push(player[0] + player[3] + player[4]);
    combos_player.push(player[1] + player[2] + player[3]);
    combos_player.push(player[1] + player[2] + player[4]);
    combos_player.push(player[1] + player[3] + player[4]);
    combos_player.push(player[2] + player[3] + player[4]);
    console.log(combos_player);
    return combos_player;
}

function check_win(player)
{
    let combos = check_player_combos(player);
    for (let i = 0; i<10; i++)
    {
        if (combos_gagnants.includes(combos[i]))
        {
            alert("Le joueur " + tour + " remporte la partie !");
            document.location.reload(true);
        }
    }
    if (joueur1.length == 5)
    {
        alert("EGALITE, vous etes trop forts.");
        document.location.reload(true);
    }
    return false;
}

function click_case(lacase, index)
{
    if (lacase.classList.contains("red") || lacase.classList.contains("blue"))
    {
        alert("cette case est déja prise !");
        return;
    }
    let value = valeurs[index - 1];
    lacase.classList.remove('blue');
    lacase.classList.remove('red');
    if (tour == 1)
    {
        lacase.classList.add("blue");
        joueur1.push(value);
        console.log(joueur1);
        check_win(joueur1);
    }
    else
    {
        lacase.classList.add('red');
        joueur2.push(value);
        console.log(joueur2);
        check_win(joueur2);
    }
    changer_tour();
}

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

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// ctx.font = "56px serif";
// ctx.fillText("Attrapez les tous", 100, 100);
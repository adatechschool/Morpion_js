for (let i = 1; i<4; i++)
{
    
}


let tour = 1;
let joueur1 = 0;
let joueur2 = 0;


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
let dinero = prompt("¿Cuanto dinero tienes en tu cuenta?");

if(dinero >= 1000000)
        console.log("I'm rich!! I have $" + dinero);

else
{
    const tresh = Math.random()*500; 
    if(dinero >= tresh)
        console.log("I'm not poor but I have $" + dinero);

    else
        console.log("I'm poor I have $" + dinero);

    console.log("The treshold is: " + tresh);
}


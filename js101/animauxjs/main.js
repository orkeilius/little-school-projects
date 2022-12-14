var animaux = ["alligator", "baleine", "buffle", "cheval", "chimpanze", "elephant", "lion"]

function creationBoutons() {
    //pour chaque animal, créer un bouton

    buttonParent = document.getElementById("lesAnimaux");
    animaux.forEach(animal => {
        button = document.createElement("button");
        button.innerHTML = animal;
        button.id = animal;
        button.setAttribute("onclick", "changerAnimal('" + animal + "')")
        buttonParent.appendChild(button);
    });
}
function changerAnimal(animal) {
    // mettre à jour la source de la photo et du player
    console.log(animal)
    document.getElementById("player").setAttribute("src", "cris/"+animal + ".mp3")
    document.getElementById("photo").setAttribute("src", "photos/"+animal + ".jpeg")
}
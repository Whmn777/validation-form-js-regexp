
// let prenom = "moi";
// On teste avec une Expression régulière : /e/
//console.log(/e/.test(prenom));

// On teste avec un objet RegExp : 
// let regExp = new RegExp('o');
// console.log(regExp.test(prenom));

const form = document.querySelector("#loginForm");


// Event pour écouter la modification de l'input email :
form.email.addEventListener('change', function(){
    validEmail(this);
});

// Event pour écouter la modification de l'input password :

form.password.addEventListener('change', function(){
    validPassword(this);
})

// Event pour écouter la soumission du formulaire :

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    //il faut tester que email et password sont tous les deux valides :
    if(validEmail(form.email) && validPassword(form.password)){
        form.submit(); //On envoie le formulaire.
    }
});

//--------- VALIDATION EMAIL---------------------------//

// fonction validEmail :
const validEmail = function(inputEmail){
    // reg exp pour validation email :
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]+[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
        );
    // test de la valeur de l'input email saisie 
    let testEmail = emailRegExp.test(inputEmail.value);
    
    // AFFICHAGE des erreurs ou pas => On cible la balise small
    let small = inputEmail.nextElementSibling;

    // On teste l'affichage de l'email valide ou pas :
    if(testEmail){
        small.innerText = "email valide";
        small.style.color = "green";
        //On retourne la valeur true pour la récuperer ensuite lors de l'envoie du formulaire
        return true;
    } else{
        small.innerText = "email non-valide";
        small.style.color = "red";
        //On retourne la valeur false pour la récuperer ensuite et stopper l'envoie du formulaire
        return false;
    }
};

//--------- VALIDATION PASSWORD---------------------------//

// fonction validPassword :
const validPassword = function(inputPassword){
    //Message de validation ou pas
    let msg;

    //On attribue à valid la valeur false au départ.
    let valid = false;

    //Au moins 8 caractères : longueur de la valeur du mot de passe saisi dans l'input
    if(inputPassword.value.length<8){
        msg = "Le mot de passe doit contenir au moins 8 caractères";
    }
    //Au moins 1 Maj : On teste s'il n'y a pas de Maj avec un regexp dans la valeur de l'input saisie :
    else if(!/[A-Z]/.test(inputPassword.value)){
        msg = "Le mot de passe doit contenir au moins 1 majuscule";
    }
    //Au moins 1 min : On teste s'il n'y a pas de min avec un regexp dans la valeur de l'input saisie :
    else if(!/[a-z]/.test(inputPassword.value)){
        msg = "Le mot de passe doit contenir au moins 1 minuscule";
    }
    //Au moins 1 chiffre : On teste s'il n'y a pas de chiffre avec un regexp dans la valeur de l'input saisie :
    else if(!/[0-9]/.test(inputPassword.value)){
        msg = "Le mot de passe doit contenir au moins 1 chiffre";
    }
    else{
        valid = true;
        msg = "Le mot de passe est valide";
    }

    // AFFICHAGE des erreurs ou pas => On cible la balise small
    let small = inputPassword.nextElementSibling;

    // On teste l'affichage de l'email valide ou pas :
    if(valid){
        small.innerText = msg;
        small.style.color = "green";
        //On retourne la valeur true pour la récuperer ensuite lors de l'envoie du formulaire
        return true;
    } else{
        small.innerText = "Password non-valide " + msg;
        small.style.color = "red";
        //On retourne la valeur true pour la récuperer ensuite stopper l'envoie du formulaire
        return false;
    }


}

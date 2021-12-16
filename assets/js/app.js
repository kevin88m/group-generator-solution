console.log("hello world");
function addParticipant(event)
{

    event.preventDefault();
    

    const nameInputElt=document.getElementById('nameInput');
    //alternative pour recuperer l'input a  partir de son name


    const participantName=nameInputElt.value.trim();

    

if (participantName ===''){
    alert ('le nom est obligatoire');
    return;

}
    
//je créé mon prénom

//je créé un element li qui contient mon prenom
const participantElt= `
<li>${participantName}</li>

`
;
//je récupère l' element ul qui contient la list des participants
const participantListElt=document.getElementById("participantList");
//j'ajoute mon element li à l'element ul
participantListElt.innerHTML=participantListElt.innerHTML + participantElt;



}

const addNameFormElt=document.getElementById("addNameForm");
//quand on soumet le formulaire.je veux que la fonction

addNameFormElt.addEventListener("submit",addParticipant);
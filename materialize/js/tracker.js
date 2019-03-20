// ===========================================================>

function login(){  
    let username = document.querySelector("#username").value
    let pwd      = document.querySelector("#pwd").value

    if( username.trim() != "admin" || pwd.trim() != "admin" || 
                    username.trim() == "" || pwd.trim() == ""){
        alert("veuillez verifier vos entrees")
    }
    else{
        location.href = "liste_bug.html"
    }
}

// ================================================================>
function enregistrer(){
    let nom      = document.querySelector("#nom").value
    let descript = document.querySelector("#description").value
    let lien     = document.querySelector("#lien").value
}
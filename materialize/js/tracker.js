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
function init(){
    let Bugs_init = {
        bugs : []
    }

    if(localStorage.getItem("bugtracker") === null){
        localStorage.setItem("bugtracker", JSON.stringify(Bugs_init))
    }
    bug_parse = JSON.parse(localStorage.getItem("bugtracker"))

    return bug_parse
}

// ================================================================>
function enregistrer(){
    let name      = document.querySelector("#nom").value
    let descript = document.querySelector("#description").value
    let lien     = document.querySelector("#lien").value

    let Bugs_init = init()
    let bug = {
        nom  : name,
        desc : descript,
        link : lien
    }
    Bugs_init.bugs.push(bug)
    
    localStorage.setItem("bugtracker", JSON.stringify(Bugs_init))

    alert("Enregistrement reussi")

    
}
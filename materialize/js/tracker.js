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

// ==================================================================>
function enregistrer(){

    let name      = document.querySelector("#nom").value
    let descript = document.querySelector("#description").value
    let lien     = document.querySelector("#lien").value

    if(name.trim() == "" || descript.trim() == "" || lien.trim() == ""){
        alert("remplissez tous les champs")
    }
    else{
        let Bugs_init = init()
        let bug = {
            nom  : name,
            desc : descript,
            link : lien
        }
        Bugs_init.bugs.push(bug)
        
        localStorage.setItem("bugtracker", JSON.stringify(Bugs_init))
    }

    document.querySelector("#nom").value = ""
    document.querySelector("#description").value = ""
    document.querySelector("#lien").value = ""

    

    alert("Enregistrement reussi")
}
// =====================================================================>

function show(){
    bugs_tracker = init()
    liste = document.querySelector("#bug_list")
    bugs_tracker.bugs.forEach(bug =>{
        liste.innerHTML += display(bug)
    })
}
// =====================================================================>

function lister(){
    bugstr = init()

    M.toast({
        html: bugstr.bugs.nom
    })
    

}
// ====================================================================>
function display(bug){
   return `
		<div class="collection-item avatar col s10 card offset-s1" >
			<div class="row"></div>
            <div class="row">
                <div class="col s4">
                    <span class="title"> ${bug.nom} </span>
                    <p> ${bug.link} <br></p>
                </div>
            </div>
        </div>
    `
}
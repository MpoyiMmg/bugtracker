


// =============================================================>
function initialise(){ 
    BugTracker = {
        bugs:[]
    }

    if(localStorage.getItem('bugs') === null){
        localStorage.setItem('bugs', JSON.stringify(BugTracker))
    }
    return JSON.parse(localStorage.getItem("bugs"))
}
// ==============================================================>

function connect(){
    let username = document.getElementById("username").value
    let pwd      = document.getElementById("pwd").value
    
    if(username.trim() != admin || pwd.trim() != admin || username.trim() =="" || pwd.trim() == "" ){
        alert("Verifier vos entrees")
    }
    else{
        Location.href = "liste_bugs.html"
    }
}
// ==============================================================>

function save(){
    if(username.trim() != "" && pwd.trim() != ""){
        bugTracker = initialise()

        bug_info = {
            name : us
        }
    }
}
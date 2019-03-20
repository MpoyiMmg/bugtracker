// ===========================================================>

function login(){  
    let username = document.querySelector("#username").value
    let pwd      = document.querySelector("#pwd").value

    if( username.trim() != "admin" || pwd.trim() != "admin" || username.trim() == "" || pwd.trim() == ""){
        alert("veuillez verifier vos entrees")
    }
    else{
        location.href = "liste_bug.html"
    }
}
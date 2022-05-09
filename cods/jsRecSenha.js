function eventConfirm(){
    var email = document.forms["recuperacao"]["email"].name;
    if (email == "") {
        alert("Favor informar o seu email para recuperação de senha!");
        return false;     
    }
    else{
        alert("Enviado com sucesso para " + email + " !");
        return true;
    }
}


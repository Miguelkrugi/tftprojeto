window.onload = function exampleFunction() {

    var utilizador_id = sessionStorage.getItem("utilizador_id");
    var utilizador_email = sessionStorage.getItem("utilizador_email");

console.log("CHAMADA!");

getRequestEmail(utilizador_id, utilizador_email);
    

}

async function getRequestEmail(uti_id, uti_email){

    console.log("Obtendo os jogos")

     var utilizador_id2 = sessionStorage.getItem("utilizador_id");
     console.log(uti_id);
    
    try{
    
    let games = await $.ajax({
    
    url: "/games/sentmail/" + uti_id + "/" + uti_email,
    method: "get",
    dataType: "json",
    
    });
    
    
    } catch(err){
     console.log(err);
    }
    }

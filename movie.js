//var length="";
//var title="";
//var genre="";
//var year="";
//var rating="";
//var criticRating="";



$("button").click(function(){
    var title=$("#Name").val();
    var length=$("#Length").val();
    var genre=$("#Genre").val();
    var year=$("#Year").val();
    var rating=$("#Rating").val();
    var criticRating=$("").val();
    var baseUrl="https://www.omdbapi.com/?"
    var Parameters="";
    var apiKey="apikey=67e25254";
if (title=""){
    $("#error").text("lolololol type a name looooooooser");
}
else if(genre!==""){
    
}
else if(length!==""){
    
}
else if(year!==""){
    
}
else if(rating!==""){
    
}
else if(criticRating!==""){
    
}
else if(baseUrl!==""){
    
}
else if(Parameters!==""){
    
}
$.ajax({
    url:"https://www.omdbapi.com/?i=tt3896198&apikey=67e25254",
    method:"GET",
    success: function(response){
        console.log(response);
    }
    });
});

// ok so this will involve conditionals- if there is no name, error shows up.
//other conditionals will involve editing the url based on the parameters set by the user. For more of what
//we will add to the url, the documentation provides stuff for each parameter.
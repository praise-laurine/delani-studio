$(document).ready(function(){
    $("#work4").mouseover(function(){
        $("#black").show();
    }).mouseout(function(){
        $("#black").hide();
    });    
    
    $("#work3").mouseover(function(){
        $("#ontario").show();
    }).mouseout(function(){
        $("#ontario").hide();
    });

    $("#work2").mouseover(function(){
        $("#pyramid").show();
    }).mouseout(function(){
        $("#pyramid").hide();
    });

    $("#work1").mouseover(function(){
        $("#jim").show();
    }).mouseout(function(){
        $("#jim").hide();
    });

    $("#work5").mouseover(function(){
        $("#nyc-day").show();
    }).mouseout(function(){
        $("#nyc-day").hide();
    });

    $("#work6").mouseover(function(){
        $("#calc").show();
    }).mouseout(function(){
        $("#calc").hide();
    });

    $("#work7").mouseover(function(){
        $("#burn").show();
    }).mouseout(function(){
        $("#burn").hide();
    });

    $("#work8").mouseover(function(){
        $("#giraffe").show();
    }).mouseout(function(){
        $("#giraffe").hide();
    });
});

$(document).ready(function(){
    $("#design-image").click(function(){
        $("#design-image").slideDown('1500').hide('1000')
        $("#design").show('1500')
    });
});
$(document).ready(function(){
    $("#dev-image").click(function(){
        $("#dev-image").slideDown('1500').hide('1000')
        $("#development").show('1500')
    });
});
$(document).ready(function(){
    $("#product-image").click(function(){
        $("#product-image").slideDown('1500').hide('1000')
        $("#product").show('1500')
    });
});

$(document).ready(function(){
    $("form#form-group").submit(function(event){
        event.preventDefault();
        let name = $("input#name").val();
        let email = $("input#email").val();
        let message= $("textarea#comment").val();
        if($("input#name").val() && $("input#email").val()){
          alert(name + ", your message has been received. Thank you for reaching out to us.");
        }
        else{
          alert("Please enter your name and email !");
        }
    });
});
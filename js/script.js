$(document).ready(function(){
    $("#work4").mouseover(function(){
        $("#black").show();
    })
    $("#work4").mouseout(function(){
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
        $("#design-image").slideDown().hide()
        $("#design").show();
    });
});
$(document).ready(function(){
  $("#design").click(function(){
      $("#design").slideDown().hide()
      $("#design-image").show();
  });
});


$(document).ready(function(){
    $("#dev-image").click(function(){
        $("#dev-image").slideDown().hide()
        $("#development").show()
    });
});
$(document).ready(function(){
  $("#development").click(function(){
      $("#development").slideDown().hide()
      $("#dev-image").show()
  });
});

$(document).ready(function(){
    $("#product-image").click(function(){
        $("#product-image").slideDown().hide()
        $("#product").show()
    });
});
$(document).ready(function(){
  $("#product").click(function(){
      $("#product").slideDown().hide()
      $("#product-image").show()
  });
});

$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        let personName = $("input#name").val();
        let personEmail = $("input#email").val();
        let message= $("textarea#comment").val();
        if($("input#name").val() && $("input#email").val()){
          alert(personName + ", your message has been received. Thank you for reaching out to us.");
        }
        else{
          alert("Please enter your name and email !");
        }
    });
});


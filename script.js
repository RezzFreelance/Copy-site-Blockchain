$("button").click(function(){
    $("#alert").show()
    $("#alert").css("transform", "translateY(0px)")
    $("#alert").css("position", "absolute")

    $(".logo").css("postiton", "releative")

    setTimeout(function(){
        $("#alert").hide()
        $("#alert").css("transform", "translateY(-100%)")
        $("#alert").css("position", "absolute") 
    }, 3000)
})
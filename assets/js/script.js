$("#currentDay").text(moment().format("dddd, MMMM Do"));

var hourChecker = function(){
    var currentHour = moment().hour();
    $(".time-block").each(function(){
        var timeBlock = parseInt($(this).attr("id"));
        console.log(timeBlock);
        if(timeBlock < currentHour){
            $(this).addClass("past");
        }
        else if (timeBlock===currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
    
}

hourChecker();
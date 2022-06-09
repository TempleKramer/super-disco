function getDateFunction() {
    var dateTime = new Date();
    $('#currentDay').html(dateTime);
}
$(document).ready(function() {
    getDateFunction()
})

function timeBlock() {
    var hourNine = moment({h:9})
    $('#nine').append(hourNine)
    $('#nine').text(hourNine)

    if (moment().isAfter(hourNine, 'hour')) {
        $(".time-block-nine").addClass("past");
        $(".time-block-nine").removeClass("present");
        $(".time-block-nine").removeClass("future");
        
    } else if (moment().isBefore(hourNine, 'hour')) {
        $(".time-block-nine").removeClass("past");
        $(".time-block-nine").removeClass("present");
        $(".time-block-nine").addClass("future");
    } else {
        $(".time-block-nine").removeClass("past");
        $(".time-block-nine").addClass("present");
        $(".time-block-nine").removeClass("future");
    }
    
    var hourTen = moment({h:10})
    $('#ten').append(hourTen)
    $('#ten').text(hourTen)

    if (moment().isAfter(hourTen, 'hour')) {
        $(".time-block-ten").addClass("past");
        $(".time-block-ten").removeClass("present");
        $(".time-block-ten").removeClass("future");
        
    } else if (moment().isBefore(hourNine, 'hour')) {
        $(".time-block-ten").removeClass("past");
        $(".time-block-ten").removeClass("present");
        $(".time-block-ten").addClass("future");
    } else {
        $(".time-block-ten").removeClass("past");
        $(".time-block-ten").addClass("present");
        $(".time-block-ten").removeClass("future");
    }

    var hourEleven = moment({h:11})
    $('#eleven').append(hourEleven)
    $('#eleven').text(hourEleven)

    if (moment().isAfter(hourEleven, 'hour')) {
        $(".time-block-eleven").addClass("past");
        $(".time-block-eleven").removeClass("present");
        $(".time-block-eleven").removeClass("future");
        
    } else if (moment().isBefore(hourNine, 'hour')) {
        $(".time-block-eleven").removeClass("past");
        $(".time-block-eleven").removeClass("present");
        $(".time-block-eleven").addClass("future");
    } else {
        $(".time-block-eleven").removeClass("past");
        $(".time-block-eleven").addClass("present");
        $(".time-block-eleven").removeClass("future");
    }

    var hourTwelve = moment({h:12})
    $('#twelve').append(hourTwelve)
    $('#twelve').text(hourTwelve)

    if (moment().isAfter(hourTwelve, 'hour')) {
        $(".time-block-twelve").addClass("past");
        $(".time-block-twelve").removeClass("present");
        $(".time-block-twelve").removeClass("future");
        
    } else if (moment().isBefore(hourNine, 'hour')) {
        $(".time-block-twelve").removeClass("past");
        $(".time-block-twelve").removeClass("present");
        $(".time-block-twelve").addClass("future");
    } else {
        $(".time-block-twelve").removeClass("past");
        $(".time-block-twelve").addClass("present");
        $(".time-block-twelve").removeClass("future");
    }

    var hourOne = moment({h:1})
    $('#one').append(hourOne)
    $('#one').text(hourOne)

    if (moment().isAfter(hourOne, 'hour')) {
        $(".time-block-one").addClass("past");
        $(".time-block-one").removeClass("present");
        $(".time-block-one").removeClass("future");
        
    } else if (moment().isBefore(hourOne, 'hour')) {
        $(".time-block-one").removeClass("past");
        $(".time-block-one").removeClass("present");
        $(".time-block-one").addClass("future");
    } else {
        $(".time-block-one").removeClass("past");
        $(".time-block-one").addClass("present");
        $(".time-block-one").removeClass("future");
    }

    var hourTwo = moment({h:2})
    $('#two').append(hourTwo)
    $('#two').text(hourTwo)

    if (moment().isAfter(hourTwo, 'hour')) {
        $(".time-block-two").addClass("past");
        $(".time-block-two").removeClass("present");
        $(".time-block-two").removeClass("future");
        
    } else if (moment().isBefore(hourTwo, 'hour')) {
        $(".time-block-two").removeClass("past");
        $(".time-block-two").removeClass("present");
        $(".time-block-two").addClass("future");
    } else {
        $(".time-block-two").removeClass("past");
        $(".time-block-two").addClass("present");
        $(".time-block-two").removeClass("future");
    }

    var hourThree = moment({h:3})
    $('#three').append(hourThree)
    $('#three').text(hourThree)

    if (moment().isAfter(hourThree, 'hour')) {
        $(".time-block-three").addClass("past");
        $(".time-block-three").removeClass("present");
        $(".time-block-three").removeClass("future");
        
    } else if (moment().isBefore(hourThree, 'hour')) {
        $(".time-block-three").removeClass("past");
        $(".time-block-three").removeClass("present");
        $(".time-block-three").addClass("future");
    } else {
        $(".time-block-three").removeClass("past");
        $(".time-block-three").addClass("present");
        $(".time-block-three").removeClass("future");
    }

    var hourFour = moment({h:4})
    $('#four').append(hourFour)
    $('#four').text(hourFour)

    if (moment().isAfter(hourFour, 'hour')) {
        $(".time-block-four").addClass("past");
        $(".time-block-four").removeClass("present");
        $(".time-block-four").removeClass("future");
        
    } else if (moment().isBefore(hourFour, 'hour')) {
        $(".time-block-four").removeClass("past");
        $(".time-block-four").removeClass("present");
        $(".time-block-four").addClass("future");
    } else {
        $(".time-block-four").removeClass("past");
        $(".time-block-four").addClass("present");
        $(".time-block-four").removeClass("future");
    }

    var hourFive = moment({h:5})
    $('#five').append(hourFive)
    $('#five').text(hourFive)

    if (moment().isAfter(hourFive, 'hour')) {
        $(".time-block-five").addClass("past");
        $(".time-block-five").removeClass("present");
        $(".time-block-five").removeClass("future");
        
    } else if (moment().isBefore(hourFive, 'hour')) {
        $(".time-block-five").removeClass("past");
        $(".time-block-five").removeClass("present");
        $(".time-block-five").addClass("future");
    } else {
        $(".time-block-five").removeClass("past");
        $(".time-block-five").addClass("present");
        $(".time-block-five").removeClass("future");
    }
}
timeBlock()

// var textInput = document.getElementById(".text")

// function saveText() {
//     localStorage.setItem("textInput", JSON.stringify(textInput))
//     console.log()
// }

// saveText()



var saveButton = $(".saveBtn")
var saveText = $("<button>")




$(".saveBtn").on("click", function() {
    var textInput = $(this)
.find("text-5")
.text()
.trim()
console.log(textInput)
})




//}
// var textInput = $("#text")
// .find("textarea")
// .text()
// .trim()
// console.log(textInput)


// CANT FIGURE OUT HOW TO SAVE TO LOCAL FILES :(




//var buttonSave = document.getElementsByClassName("saveBtn")

// buttonSave.onclick = function() {
//     var text = textInput
    
//     if (textInput) {
//         localStorage.setItem(JSON.stringify(textInput))
//         location.reload
        
//     }
// }


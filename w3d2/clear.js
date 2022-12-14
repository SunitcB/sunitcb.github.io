let width;
let growthAmt;
let growRate;
let noOfCircles;

$(() => {
    $('#btnStart').click(startAnimation);
});


function startAnimation() {
    width = parseInt($('#width').val());
    growRate = parseInt($('#growRate').val());
    growthAmt = parseInt($('#growthAmount').val());
    noOfCircles = parseInt($('#number').val());
    for (let i = 1; i <= noOfCircles; i++) {
        let circle = createCircle();
        let grow = setInterval(startGrowing, growRate, circle);
    }
}

function createCircle() {
    let circle = $('<div/>', {
        class: 'circle',
        css: {
            backgroundColor: randomColor(),
            top: Math.random() * (window.screen.availHeight / 2 - 0) + 0,
            left: Math.random() * (window.screen.availWidth / 2 - 0) + 0,
            width: width,
            height: width
        }
    });
    $('#container').append(circle);

    $('.circle').click(function () {
        $('#container').empty();
    });

    return circle;
}

function startGrowing(circle) {
    let circleSelector = $(circle);
    let topValue = parseInt(circleSelector.css('top').replace('px', ''));
    let leftValue = parseInt(circleSelector.css('left').replace('px', ''));
    topValue -= growthAmt / 2;
    leftValue -= growthAmt / 2;
    width += growthAmt;
    circleSelector.css({
        width: width,
        height: width,
        top: topValue,
        left: leftValue
    });

}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function randomPosition() {

}
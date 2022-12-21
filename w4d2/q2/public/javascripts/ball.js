$(()=>{
    handleRequests();
});

let handleRequests = () => {
    $('#btnBall').click(function () {
        fetch('/8ball')
        .then((data) => data.json())
        .then((data) => {
            console.log(data)
            $('#question').val(data.answer);
        })
    });
}
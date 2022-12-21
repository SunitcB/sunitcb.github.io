$(()=>{
    handleEvents();
});

let handleEvents = () => {
    console.log("asdasdasd");
    $('.button').click(function(){
        debugger
        let productId = $(this).parent().find('#productId').val();
        console.log(productId);
        $.ajax({
            url: '/addCart',
            type: 'post',
            data: { productId: productId },
            success: function (data) {
                console.log(data);
                $('#gotoCart').text('View Cart(' + data.cartItemCount + ')');
            },
            error: function (err) {
                console.log(err);
            }
        })
    })
}
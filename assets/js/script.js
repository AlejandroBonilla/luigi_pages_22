$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $("#submit_form").click(function(event){
        event.preventDefault();
        $("#send_success").modal('show');

        // setTimeout(function(){
        //     $("#send_success").modal('show');
        // },2000)
        
    })


})
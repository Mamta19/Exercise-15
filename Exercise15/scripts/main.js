$(document).ready(function () {

    ///// Code goes here

    //part1
    function update() {
        alert('click me');
    }
    $('#btnOne').on('click', update);

    //part2

    function part2() {
        $('.update-html').html('<h3>Hello Word!</h3>');
    }
    $('#btnTwo').on('click', part2);
});


//part 3

function part3() {

    $('#text-update').val('Hello World')
}
$('#btnThree').on('click', part3);
//part4
function part4() {
    var html = $('.copy-html').html()
    $('.paste-html').html(html);

}
$('#btnCopyHtml').on('click', part4);

//part5
function part5() {
    var value = $('#copy-text').val()
    $('#paste-text').val(value);
}
$('#btnCopyValues').on('click', part5);
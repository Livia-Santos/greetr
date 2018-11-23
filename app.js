// gets a new object
var g = G$ ('Jonh', 'Doe')

// use chainable methods
g.greet().setLang('pt').greet('formal').log();

// let's use our objcet on the click of the login button
$('#login').click(function() {
    var loginGrtr = G$('Jonh', 'Doe');

    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});
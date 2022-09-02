const { encrypt, decrypt } = require('./cryptor');

let inputData = $('#data-input').val();

const isEmpty = (text) => {
    if(typeof text === 'string' && text.length === 0){
        return true;
    }else{
        return false;
    }
}

$(function() {
    $('#encrypt').on('click', function(){

        if(isEmpty(inputData)){
            $('#data-output').text('');
            $('#message').text('No input, unable to encrypt.');
            return;
        }

        $('data-output').text(encrypt(inputData));
    });
    $('#decrypt').on('click', function(){

        if(isEmpty(inputData)){
            $('#data-output').text('');
            $('#message').text('No input, unable to encrypt.');
            return;
        }

        $('data-output').text(encrypt(inputData));
    });
});


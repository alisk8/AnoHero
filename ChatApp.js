function nam_and_pin_sub(){

    // check the pin
    var val = document.getElementById('input').value;
    if(val === '123'){
        document.getElementById('content').style.display = 'block';
        document.getElementById('dis_after').style.display = 'none';

        // store the name 
        var n = document.getElementById('name').value;
        localStorage.setItem("names", n);
    }
    else{
        alert('The PIN is Incorrect')
    }
}

function sendMessage(){
    var message =  document.getElementById('message').value;


    firebase.database().ref("messages").push().set({
        "sender": localStorage.getItem("names"),
        "message": message
    });


    return false;
}
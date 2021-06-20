function make_new(){
    document.getElementById('form').style.display = 'block';
}

function pub_art(){
    var names = document.getElementById('names').value;
    var text = document.getElementById('des').value;
    var url = document.getElementById('url').value;

    firebase.database().ref("art").push().set({
        "Name_of_art": names,
        "Description": text,
        "URl": url
    });

    document.getElementById('form').style.display = 'none';

    return false;
}
function contra() {
  if ($('#input').val().length == 0) {
    document.getElementById('demo').innerHTML = "Este campo es nesesario";
    return false;
  }
  else{
  	document.getElementById('demo').innerHTML = "";
  	return false;
  }
}
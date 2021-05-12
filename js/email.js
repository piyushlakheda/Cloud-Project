firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

  function register(){
    var userEmail = document.getElementById("reg_user_name").value
    var userpass =  document.getElementById("reg_pass_word").value
  /*  window.alert(userEmail+" "+userpass);    to check whether function ork or not line print function*/
  firebase.auth().signInWithEmailAndPassword(userEmail, userpass)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("error:" + errorMessage);
    });
  }
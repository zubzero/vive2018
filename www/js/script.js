// inicio del codigo de index
function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
	document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    swal('Retornar');
    return false;
    $window.history.back();
};
// Si no tiene puntos que los ponga
if (!localStorage.puntosiniciales){
    localStorage.puntosiniciales = 80;
    swal("Has obtenido 80 puntos!", "Registrate para ponerlos en tu cuenta.", "success");
    };
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtQAsX3DFGVMhw-5LMut9X5-Lyr0bgExk",
    authDomain: "viveenunclick-a9e3f.firebaseapp.com",
    databaseURL: "https://viveenunclick-a9e3f.firebaseio.com",
    projectId: "viveenunclick-a9e3f",
    storageBucket: "viveenunclick-a9e3f.appspot.com",
    messagingSenderId: "761395655988"
  };
  firebase.initializeApp(config);

var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    user.providerData.forEach(function (profile) {
    // console.log("Sign-in provider: "+profile.providerId);
    // console.log("  Provider-specific UID: "+profile.uid);
    // console.log("  Name: "+profile.displayName);
    // console.log("  Email: "+profile.email);
    // console.log("  Photo URL: "+profile.photoURL);
  });
  } else {
    // No user is signed in.
  }
});
//función para limpiar los campos
function LimpiarCampos(){
  document.registro.nombre.value="";
  document.registro.apellido.value="";
  document.registro.nacimiento.value="";
  document.registro.email.value="";
  document.registro.contrasena.value="";
  document.registro.nombre.focus();
}

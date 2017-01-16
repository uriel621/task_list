angular.module('tdlApp').service('fbService', function($firebaseArray){
    var config = {
    apiKey: "AIzaSyCDa6_rF57JT1SU-32k5V6jigqG9tZcFvo",
    authDomain: "task-list-b815f.firebaseapp.com",
    databaseURL: "https://task-list-b815f.firebaseio.com",
    storageBucket: "task-list-b815f.appspot.com",
    messagingSenderId: "337312856573"
  };
  firebase.initializeApp(config);

    this.getData = function(where){
        var ref = firebase.database().ref().child(where);

        return $firebaseArray(ref);
    }
});
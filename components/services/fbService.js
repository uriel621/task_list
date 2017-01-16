angular.module('tdlApp').service('fbService', function($firebaseArray){
    var config = {
        apiKey: "AIzaSyClT7qpbJbX-UiYvNu3ENk_BBvIrc_Pg5Y",
        authDomain: "lfzdemo.firebaseapp.com",
        databaseURL: "https://lfzdemo.firebaseio.com",
        storageBucket: "lfzdemo.appspot.com",
        messagingSenderId: "929068658428"
    };

    firebase.initializeApp(config);

    this.getData = function(where){
        var ref = firebase.database().ref().child(where);

        return $firebaseArray(ref);
    }
});
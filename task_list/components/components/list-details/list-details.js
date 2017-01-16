function listDetailsController(){
    var ctrl  = this;

    ctrl.deleteItem  = function(){
        ctrl.onDelete({listItemObj: ctrl.listItem});
    };
}

angular.module('tdlApp').component('listDetails', {
    templateUrl: './components/list-details/list-details.html',
    controller: listDetailsController,
    bindings: {
        listItem: '<',
        onDelete: '&'
    }
});
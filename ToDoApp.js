/**
 * Created by catal on 6/3/2017.
 */

angular.module('toDoApp', [])
    .controller('ToDoController', function($scope) {
        $scope.name='Catalin';

        $scope.listItems = [
            {"action": "Make slides", "done": false},
            {"action": "Travel to ING", "done": false},
            {"action": "Prepare room", "done": false},
            {"action": "Order pizza", "done": false}
        ];

        $scope.addNewItem = function (actionText) {
            $scope.listItems.push({action:actionText,done:false});
        }

    });
let app = angular.module("myApp", []);
app.controller('myCtr', function ($scope) {
    $scope.tasks = [
        { name: "Practice at Leetcode", isEditing: false },
        { name: "Practice at Codechef", isEditing: false },
        { name: "Do some Development", isEditing: false }
    ];

    $scope.addTask = () => {
        $scope.tasks.push({ name: $scope.newtask.name, isEditing: false });
        $scope.newtask.name = "";
    };

    $scope.remove = (task) => {
        const index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index, 1);
    };

    $scope.toggleEdit = (task) => {
       
        if (task.isEditing) {
          if (task.editedName.trim() !== '') {
            task.name = task.editedName;
          }
        } else {
          task.editedName = task.name; // Set initial value of editedName
        }
         console.log(task.isEditing);
        task.isEditing = !task.isEditing;

      };

      
    
});

//création du contrôleur "login_ctrl"
app.controller("login_ctrl", function ($scope, $http, me) {
	
	console.log("LoginCtrl initialized");

	$scope.user = {};
  	$scope.err = {
  		message: ""
  	};

  	/**
  	 * La méthode email_login permet à un utilisateur de 
  	 * se connecter via email.
  	 * Elle fait appel à la fonction login de la factory 'me'
  	 * @return {[type]}
  	 */
  	$scope.email_login = function () {


  		me.login($scope.user.mail, $scope.user.password)
  		//1er callback, s'exécute lorsque la méthode me.login
  		//a terminé son exécution
  		.then(function(res) {
  			//stocke l'objet user renvoyé par la factory dans le scope
  			$scope.user = res;
  			$scope.err.message = null;
  		})
  		.then(function() {
  			console.log("user_name : " + $scope.user.first_name);
  		})
  		.catch(function(err) {
  			$scope.err.message = err;
  		});
  	}

});
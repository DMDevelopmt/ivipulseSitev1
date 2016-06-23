app.controller("login_ctrl", function ($scope, $http, me) {
	
	console.log("LoginCtrl initialized");

	var ROOT_URL = 'http://192.168.1.21:8180';

	$scope.user = {};
	$scope.user.mail = "";
	$scope.user.password = "";
	$scope.user.first_name = "";
	$scope.user.last_name = "";
  	$scope.err = {};
  	$scope.cards = {};

  	$scope.estConnecte = false;

  	$scope.err.message = null;


  	$scope.email_login = function() {

  		var data = {
				email: $scope.user.email,
				password: $scope.user.password
			}

  		return $http.post(ROOT_URL + "/users/login", data)
			.success(function(res) {
				console.log("email " + data.email);
				console.log("mdp " + data.password);
				console.log("succes request " + res.me.avatar);
				$scope.estConnecte = true;
				$scope.user.first_name = res.me.first_name;
				$scope.user.last_name = res.me.last_name;
				$scope.cards = res.me.cards;
				$scope.err.message = null;
			})
			.error(function() {
				$scope.estConnecte = false;
		      	$scope.err.message = "Utilisateur ou Mot de passe incorrect";
		    });

  		//$scope.estConnecte = me.login($scope.user.email, $scope.user.password);
  		//console.log("estConnecte : " + $scope.estConnecte.toString());



  		/*me.login($scope.user.email, $scope.user.password)
  		.then(function (me_user) {
  			me.on_auth(me_user);
  			$scope.redirect_post_login(me_user);
  		});
  		.catch(function (err){
  			$scope.err.message = "erreur de connexion";
  		})*/
  	}

});
app.factory('me', function($q, $http){

	var ROOT_URL = 'http://192.168.1.21:8180';

	var me = {
		login: function (email, password) {

			data = {
				email: email,
				password: password
			}
			return $http.post(ROOT_URL + "/users/login", data)
			.success(function(res) {
				console.log("email " + data.email);
				console.log("mdp " + data.password);
				console.log("succes request " + res.statusText);
				return true;
			})



			/*return $q(function() {
			  return function(resolve, reject) {
			    return $http.post(ROOT_URL + "/users/login", data)
			    .success(function(res) {
			      
			      return resolve(true);
			      if (res.token) {
			        window.localStorage.token = $http.defaults.headers.common.token = _this._token = res.token;
			      }
			      if (res.me) {
			        return resolve(_this.init(res.me));
			      } else {
			        return reject("Problème interne, réessayez plus tard");
			      }*/
		    .error(function() {
		      return "Mot de passe invalide";
		    });
		}
	}
	return me;
});
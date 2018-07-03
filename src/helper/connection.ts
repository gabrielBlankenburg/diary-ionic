export class Connection {

	public static issetToken() {
		return this.getToken() != null;
	}

	private static getToken() {
		return localStorage.getItem("token");
	}

	public static setToken(token) {
		let t = 'Bearer '+token;
		localStorage.setItem("token", t);
	}

	public static logout() {
		localStorage.removeItem('token');
	}

	private static getBaseUrl() {
		return 'http://localhost/diary/public/api/';
	}

	public static postNote(title:string, label:string, content:string, 
							callback = null) {
		let headers = new Headers();
		headers.append("Accept", "application/json");
		headers.append("Authorization", this.getToken());

		let fd = new FormData();

		fd.append('title', title);
		fd.append('label', label);
		fd.append('content', content);

		let url = this.getBaseUrl()+'diary';

		fetch(url, {
				'method': 'POST',
				'headers': headers,
				'body': fd
			})
			.then(response => {
				return response.json().then(json => {
					if (callback != null) {
						callback(json);
					}
				})
			})
			.catch(error => {
				console.log('error');
			});
	}

	public static getNotes(callback) {
		let headers = new Headers();
		headers.append("Accept", "application/json");
		headers.append("Authorization", this.getToken());

		let url = this.getBaseUrl()+'diary';

		fetch(url, {
				'method': 'GET',
				'headers': headers,
			})
			.then(response => {
				return response.json().then(json => {
					callback(json);
				})
			})
			.catch(error => {
				console.log('error');
			});
	}

	public static getNote(id, callback) {
		let headers = new Headers();

		headers.append("Accept", "application/json");
		headers.append("Authorization", this.getToken());

		let url = this.getBaseUrl()+'diary/'+id;

		fetch(url, {
			'method': 'GET',
			'headers': headers,
		})
		.then(response => {
			return response.json().then(json => {
				callback(json)
			})
		})
		.catch(error => {
			console.log('error');
			console.log(error);
		});

	}

	public static login(email:string, password:string, onSuccess = null, 
						onFail = null, onError = null) {
		let headers = new Headers();
		headers.append("Accept", "application/json");

		let fd = new FormData();

		fd.append('email', email);
		fd.append('password', password);

		let url = this.getBaseUrl()+'login';

		fetch(url, {
				'method': 'POST',
				'headers': headers,
				'body': fd
			})
			.then(response => {
				return response.json().then(json => {
					this.setToken(json.accessToken);
					if (response.status == 200) {
						if (onSuccess != null) {
							onSuccess(json);
						}
					} else {
						if (onFail != null) {
							onFail(json);
						}
					}
				});				
			})
			.catch(error => {
				if (onError != null) {
					onError(error);
				}
			});
	}

	public static register(name:string, email:string, password:string, 
							onSuccess = null, onFail = null, onError = null) {
		let headers = new Headers();
		headers.append("Accept", "application/json");

		let fd = new FormData();

		fd.append('name', name);
		fd.append('email', email);
		fd.append('password', password);

		let url = this.getBaseUrl()+'register';

		fetch(url, {
				'method': 'POST',
				'headers': headers,
				'body': fd
			})
			.then(response => {
				return response.json().then(json => {
					this.setToken(json.accessToken);
					if (response.status == 200) {
						if (onSuccess != null) {
							onSuccess(json);
						}
					} else {
						if (onFail != null) {
							onFail(json);
						}
					}
				});				
			})
			.catch(error => {
				if (onError != null) {
					onError(error);
				}
			});
	}
}
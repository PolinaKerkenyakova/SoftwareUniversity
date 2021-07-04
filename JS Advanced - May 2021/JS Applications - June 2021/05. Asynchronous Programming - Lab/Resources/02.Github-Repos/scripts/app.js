function loadRepos() {
	let username = document.querySelector('#username').value;
	return fetch(`https://api.github.com/users/${username}/repos`)
		.then(response => {
			return response.json();
		})
		.then(data => {
			// console.log(data)
			showRepos(data);
		})
		.catch(err => {
			console.log('Err', err)
		})
}

const showRepos = (data) => {
	let ulElement = document.querySelector('#repos');
	ulElement.innerHTML = '';

	data.forEach(repo => {
		let liElement = document.createElement('li');

		let a = document.createElement('a');
		a.href = repo.html_url;
		a.textContent = repo.full_name;

		liElement.appendChild(a);
		ulElement.appendChild(liElement);
	});
}
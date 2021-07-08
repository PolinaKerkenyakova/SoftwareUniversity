function loadRepos() {
	let username = document.querySelector('#username').value;
	fetch(`https://api.github.com/users/${username}/repos`)
		.then(response => {
			if (response.ok) {
				return response.json();
			} 

			throw new Error(response.status)
		})
		.then(data => {
			showRepos(data);
		})
		.catch(error => {
			console.log(error)
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
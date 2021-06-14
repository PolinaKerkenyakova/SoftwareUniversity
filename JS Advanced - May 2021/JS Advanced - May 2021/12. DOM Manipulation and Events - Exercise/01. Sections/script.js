function create(inputArr) {

    let content = document.querySelector('#content')

    inputArr.forEach(x => {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = x;
        p.style.display = 'none';

        div.appendChild(p);
        div.addEventListener('click', function(e) {
            let p = e.target.children[0];
            p.style.display = 'inline-block';
        });

        content.appendChild(div);
    });
}
function movies(input) {

    let movies = [];

    for (let i = 0; i < input.length; i++) {

        let tokens = input[i].split(' ');
        let addMovieIndex = tokens.indexOf('addMovie');
        let directedByIndex = tokens.indexOf('directedBy');
        let onDateIndex = tokens.indexOf('onDate');

        if (addMovieIndex > -1) {
            let name = tokens.slice(addMovieIndex + 1).join(' ');
            movies.push({ name });
        }

        if (directedByIndex > -1) {
            let name = tokens.slice(0, directedByIndex).join(' ');
            let director = tokens.slice(directedByIndex + 1).join(' ');

            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        }

        if (onDateIndex > -1) {
            let name = tokens.slice(0, onDateIndex).join(' ');
            let date = tokens.slice(onDateIndex + 1).join('.');

            movies.forEach(movie => {

                if (movie.name === name) {
                    movie.date = date;
                }
            });
        }
    }

    movies.forEach(movie => {
        if (movie.name !== undefined && movie.date !== undefined && movie.director !== undefined) {
            console.log(JSON.stringify(movie));
        }
    });
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
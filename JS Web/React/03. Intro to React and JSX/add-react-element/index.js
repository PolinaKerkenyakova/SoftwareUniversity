const rootElement = document.querySelector('#root');

// const header = React.createElement(
//     'header',
//     {},
//     React.createElement('h1', {}, 'Hello from React'),
//     React.createElement('h2', {}, 'It\'s a library')
// );


const header = (
    <header>
        <h1>Hello from react</h1>
        <h2>It's a library</h2>
    </header>
);


ReactDOM.render(header, rootElement);

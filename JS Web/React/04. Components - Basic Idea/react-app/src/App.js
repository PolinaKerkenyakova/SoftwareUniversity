import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading.js';
// import Body from './components/Body.js';
import BookList from './components/BookList.js'
import Counter from './components/Counter.js';

let bookDb = [
  {
      title: 'AA',
      description: 'AAA'
  },
  {
      title: 'BB',
      description: 'BBB'
  },
  {
      title: 'CC',
      description: 'CCC'
  }
];

function App() {
  return (
    <div className="App">
      <Heading />
      {/* <Body /> */}
      <Counter />
      <BookList books={bookDb} />
    </div>
  );
}

export default App;

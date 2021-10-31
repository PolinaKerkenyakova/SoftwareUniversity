import './App.css';
import BookList from './components/BookList';

const books = [
  { title: 'Book One', description: 'Book One Description' },
  { title: 'Book Two', description: 'Book Two Description' },
  { title: 'Book Three', description: 'Book Three Description' },
];

function App() {
  return (
    <div>
      <h1>Book Library</h1>
      < BookList books={books}/>
    </div>
  );
}

export default App;

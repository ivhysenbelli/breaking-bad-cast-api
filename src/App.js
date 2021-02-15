import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Search from './components/Search';

function App() {
   const [items, setItems] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [query, setQuery] = useState("")

   useEffect(() => {

    const fetchItems = async () => {
      const results = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`,{
      })
      .then(response => response.json());

      console.log(results);
      setItems(results);
      setIsLoading(false);
    }
    fetchItems()
   }, [query]);

  return (
    <div className="container">
     <Header />
     <Search getQuery={(q) => setQuery(q)}/>
     <Cards loadStatus={isLoading} characters={items} />
     <Footer />
    </div>
  );
}

export default App;

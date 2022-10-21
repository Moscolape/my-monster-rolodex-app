import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log('render');

  const [searchField, setSearchField] = useState('');
  // const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);


  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.username.toLocaleLowerCase().includes(searchField);
    })
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);


  const onSearchChange = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  }

  // const onTitleChange = (e) => {
  //   const searchString = e.target.value.toLocaleLowerCase();
  //   setTitle(searchString);
  // }


  return (
    <div className="App">
      {/* <h1 className='app-title'>{title}</h1> */}
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox 
        onChangeHandler = {onSearchChange}
        placeHolder = 'Search'
        inputClass = 'monster-search-box'
      />
      {/* <br />
      <SearchBox 
        onChangeHandler = {onTitleChange}
        placeHolder = 'set title'
        inputClass = 'monster-search-box'
      /> */}
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App;

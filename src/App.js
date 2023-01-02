import './App.css';
import React,{useState} from 'react'
import items  from './data.js'
import Categories from './Categories';
import Menu from './Menu';

const allcategoryItem = ['all', ...new Set( items.map((item) =>item.category))]



function App() {
  const [menuItem, setMenuItem] = useState(items)
  const [categories, setCategories] = useState([allcategoryItem])

 const filterItems =(category) =>{
  if( category === "all"){
    setMenuItem(items)
    return;
  }
  const newItems = items.filter((item) =>item.category === category)
  setMenuItem(newItems)
 }
  return (
    <menu>
    <section className='menu section'>
      <div className="title">
        <h1>Menu</h1>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItem={filterItems}/>
      <Menu items ={menuItem}/>
    </section>
    </menu>
  );
}

export default App;

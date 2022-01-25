import { useState } from 'react';
import './index.css';
import { Menu } from './Menu';
import { Categories } from './Categories';
import items from './data';

//Creo el arreglo que contendra todas las cat que existan en la base de datos. Con el set logro eliminar repetidos.
//Agrego 'all' que no existe como categoria en si misma
const allCategories = ['all', ...new Set(items.map((item)=>item.category))];

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories]= useState(allCategories);

  const filterItems = (category) => {
    if(category=='all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((items)=>items.category === category);
    setMenuItems(newItems);
  }
  
  
  return(
    <div>
      <h1 className='text-center mt-5 p-0'>Our Menu</h1>
      <hr className='underline'/>
      <div className='container'>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </div>
    </div>

  )
}

export default App;

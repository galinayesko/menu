import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//unique kategori için buraya tanımlama yapıyoruz
//böylelikle ileride data.js içine yeni kategori eklenirse dinamik olarak kullanıcı tarafına yansıyacak.
const allCategories =['all',...new Set(items.map( (item) => item.category))]
// set ile tekrar eden categorileri eledik. Sadece ilkini görüp alıyor
//all içindekileri aldık sonra new Set ile yenileri ayrıca spread ederek aldık.


function App() {
  const [menuItems,setMenuItems] = useState(items)
  const [categories,SetCategories] = useState(allCategories)

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter( (item)=> 
      item.category === category)
      setMenuItems(newItems)
    }
  
  
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;

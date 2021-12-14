import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  //setCategories es un función!!!!
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   //mantenemos las categorias actuales y le metemos otra
  //   //setCategories([...categories,'Nueva Serie']);
  //   //setCategories( cats => [...cats,'Nueva Serie']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <CategoryAdd setCategories={ setCategories }/>
      <hr />
      

      <ol>
        { 
          categories.map( (category, index) => 
            <GifGrid key={ category } category={ category }/>
          )
        }
      </ol>

    </>
  )
};

export default GifExpertApp;
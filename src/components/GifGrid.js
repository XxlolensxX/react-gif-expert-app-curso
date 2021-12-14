import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  //le cambio el nombre a data por images
  const { data:images, loading } = useFetchGifs( category );
  
  return (
    <> 
      <h3>{ category }</h3>

      { loading && <p>Cargando</p> }
      <div className='card-grid'>
      
          { 
            //image es un objeto asi que lo puedes desestructurar
            images.map( image => <GifGridItem key={image.id} {...image} /> ) 
          }
      
      </div>
    </>
  )
}

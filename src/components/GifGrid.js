import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <div className="container-grid">
            <h2>{ category }</h2>
            <div className="card-grid">
                {
                    (loading)? <p>Cargando...</p>:
                    images.map( img => 
                        <GifGridItem
                            key={ img.id }
                            { ...img }/>
                    )
                }
            </div>
        </div>
        
    )
}

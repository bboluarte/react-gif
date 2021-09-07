import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Tokio Revengers']);

    return (
        <>
            <div className="cabecera">
                <h2>GifExpertApp</h2>
            </div>
            <div className="container">
               <AddCategory setCategories={ setCategories } />
                <div className="lista-horizontal">
                    {
                        categories.map( cat => (
                            <GifGrid 
                                key={ cat } 
                                category={ cat }
                            />
                        ))
                    }
                </div>
                
            </div>
            
        </>
    )
}

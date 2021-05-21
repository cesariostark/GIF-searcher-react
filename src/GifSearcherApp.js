import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifSearcherApp = () => {

    // const categories = ['Evangelion', 'Fullmetal Alchemist', 'Rurouni Kenshin'];

    const [categories, setCategories] = useState(['Evangelion'])

    return (
        <>
            <h2>Gif Searcher App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            

            <ol>
                { categories.map( (category, idx) => 
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                )}
            </ol>  
        </>
    )
}

import React, {useState} from 'react';
import './App.scss';
import {ICategory} from "./models/Interfaces";
import Category from "./components/Category/Category";
import {addSubcategory} from "./helpers";


function App() {
    
    const initialCategory = {
        id: 1,
        name: 'root',
        parentId: 0,
        childrenArray: [],
    };
    const [category, setCategory] = useState<ICategory>(initialCategory);

    return (
        <div className="App">
            <button onClick={() => addSubcategory(category, setCategory)}>
                Add
            </button>
            <Category subcategories={category.childrenArray}/>
        </div>
    );
}

export default App;

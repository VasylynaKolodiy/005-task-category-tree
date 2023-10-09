import React, {useState} from 'react';
import {ICategory} from "../../models/Interfaces";
import Category from "../Category/Category";
import {addSubcategory} from "../../helpers";

interface ISubcategoryProps {
    subcategory: ICategory,
}


const Subcategory: React.FC<ISubcategoryProps> = ({subcategory}) => {
    const [category, setCategory] = useState<ICategory>(subcategory)
    console.log('category', category)

    return (
        <li>
            <div>
                {category.name}
            </div>
            <button onClick={() => addSubcategory(category, setCategory)}>Add</button>
            {category.childrenArray.length > 0 && (
                <Category subcategories={category.childrenArray}/>
            )}
        </li>
    );
};

export default Subcategory;
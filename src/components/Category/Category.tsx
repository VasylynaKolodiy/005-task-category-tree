import React from 'react';
import './Category.scss'
import {ICategory} from "../../models/Interfaces";
import Subcategory from "../Subcategory/Subcategory";

interface ICategoryProps {
    subcategories: ICategory[];
}

const Category: React.FC<ICategoryProps> = ({subcategories}) => {
        return (
            <ul className='categories'>
                {subcategories.map((subcategory) => {
                    return (
                        <Subcategory key={subcategory.id} subcategory={subcategory}/>
                    )
                })}
            </ul>
        );
    }
;

export default Category;
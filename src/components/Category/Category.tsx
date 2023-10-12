import React from 'react';
import './Category.scss'
import {ICategory} from "../../models/Interfaces";
import Subcategory from "../Subcategory/Subcategory";

interface ICategoryProps {
    parentCategories: ICategory[];
    handleCreateCategory: (id: number, name: string) => void
}

const Category: React.FC<ICategoryProps> = ({parentCategories, handleCreateCategory}) => {
        return (
            <ul className='categories'>
                {parentCategories.map((subcategory) => {
                    return (
                        <Subcategory
                            key={subcategory.id}
                            subcategory={subcategory}
                            handleCreateCategory={handleCreateCategory}
                        />
                    )
                })}
            </ul>
        );
    }
;

export default Category;
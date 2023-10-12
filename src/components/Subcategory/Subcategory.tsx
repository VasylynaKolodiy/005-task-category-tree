import React, {useState} from 'react';
import {ICategory} from "../../models/Interfaces";
import Category from "../Category/Category";


interface ISubcategoryProps {
    subcategory: ICategory,
    handleCreateCategory: (id: number, name: string) => void
}


const Subcategory: React.FC<ISubcategoryProps> = ({subcategory, handleCreateCategory}) => {
    const [isVisibleInput, setIsVisibleInput] = useState<boolean>(false);
    const [subcategoryName, setSubcategoryName] = useState<string>('');
    
    const createCategory = (parentId: number, name: string) => {
        handleCreateCategory(parentId, name)
        setIsVisibleInput(false);
        setSubcategoryName('');
    }

    return (
        <li>
            <div className='subcategory-info'>
                <div>
                    {subcategory.name}
                </div>
                <button onClick={() => setIsVisibleInput(true)}>Add</button>
            </div>

            <div className={`subcategory-name ${isVisibleInput ? 'visible' : ''}`}>
                <input
                    className='subcategory-input'
                    value={subcategoryName}
                    type='text'
                    autoFocus={true}
                    onChange={(e) => setSubcategoryName(e.target.value)}
                />
                <button
                    onClick={() => createCategory(subcategory.id, subcategoryName)}
                >Ok
                </button>
            </div>

            {
                subcategory.childrenArray.length > 0 && (
                    <Category parentCategories={subcategory.childrenArray} handleCreateCategory={handleCreateCategory}/>
                )
            }
        </li>
    );
};

export default Subcategory;
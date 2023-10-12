import React, {useState} from 'react';
import './App.scss';
import {ICategory} from "./models/Interfaces";
import Category from "./components/Category/Category";


function App() {
    const [subcategoryName, setSubcategoryName] = useState<string>('');
    const [isVisibleInput, setIsVisibleInput] = useState<boolean>(false);
    const [categories, setCategories] = useState<ICategory[]>([]);

    console.log(categories, 'categories')

    const handleCreateCategory = (parentId: number, name: string) => {
        setCategories(prevCategories => {
            const newCategory: ICategory = {
                id: Date.now(),
                name: name,
                childrenArray: [],
                parentId: parentId,
            };

            if (parentId === 0) {
                return [...prevCategories, newCategory];
            }

            const updateCategory = (categories: ICategory[]): ICategory[] => {
                return categories.map(category => {
                    if (category.id === parentId) {
                        return {
                            ...category,
                            childrenArray: [...category.childrenArray, newCategory],
                        };
                    } else if (category.childrenArray.length > 0) {
                        return {
                            ...category,
                            childrenArray: updateCategory(category.childrenArray),
                        };
                    }
                    return category;
                });
            };
            return updateCategory(prevCategories);
        });
    };

    const createCategory = (parentId: number, name: string) => {
        handleCreateCategory(parentId, name)
        setIsVisibleInput(false);
        setSubcategoryName('');
    }

    return (
        <div className="App">
            <button
                onClick={() => setIsVisibleInput(true)}
            >
                Add
            </button>

            <div className={`subcategory-name ${isVisibleInput ? 'visible' : ''}`}>
                <input
                    className='subcategory-input'
                    value={subcategoryName}
                    type='text'
                    autoFocus={true}
                    onChange={(e) => setSubcategoryName(e.target.value)}
                />
                <button
                    onClick={() => createCategory(0, subcategoryName)}
                >Ok
                </button>
            </div>
            <Category
                parentCategories={categories}
                handleCreateCategory={handleCreateCategory}
            />
        </div>
    );
}

export default App;

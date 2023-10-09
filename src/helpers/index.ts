import {ICategory} from "../models/Interfaces";

export const createSubcategory = (name: string, par: number) => {
    return {
        id: Date.now(),
        name: name,
        parentId: par,
        childrenArray: [],
    }
}

export const addSubcategory = (category: ICategory, setCategory: (subcategory: ICategory) => void) => {
    const newCategory = {...category, childrenArray: [...category.childrenArray, createSubcategory('aaa', category.id)]};
    setCategory(newCategory)
}
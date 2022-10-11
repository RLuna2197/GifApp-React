import { useState } from 'react';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setCategories( categories  => [inputValue, ...categories])
        
    }
    return (
    <form onSubmit={ (event) => onSubmit(event)}>    
        <input 
        type="text" 
        name="buscar" 
        id="buscar" 
        placeholder="Buscar gif..." 
        value= { inputValue }
        onChange= {  onInputChange }/>
    </form>
  );
};

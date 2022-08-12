import { useState } from "react"

// fuctioncomponet
export const AddCategory = ( { onNewCategory } ) => {
    // Componente useStates
    const [inputValue, setinputValue] = useState('');

    // funcion tipo flecha
    // const onInputChange = (event) =>{
    //     //console.log(event.target.value);
    //     setinputValue(event.target.value);
    // }
    const onInputChange = ({ target }) =>{
        //console.log(target.value);
        setinputValue(target.value);
    };

    const onSumit = (event) => {
        event.preventDefault();
        //console.log(inputValue);
        if (inputValue.trim().length <= 1) {
            return;
        }
        // setCategories .... inputValue
        //addSetCategories( (categories) => [ ...categories, inputValue ]);
        onNewCategory( inputValue.trim() );
        setinputValue('');
    };

    return (
        <form onSubmit={ (event) => onSumit(event) }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                //onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
    )
}

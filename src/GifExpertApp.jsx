
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


    //Realiza una insercion de un valor dentro de un arreglo ya definido.
    const onAddCategory = ( onNewCategory ) => {
        if( categories.includes( onNewCategory ) ) return;
        //console.log(onNewCategory)
        //categories.push('Ratma')
        //setCategories( [...categories, 'Valorant'] );
        //setCategories( cat => [ ...cat,'Valorant' ]);
        setCategories( [ onNewCategory, ...categories ] );
    }
    
    //console.log(onAddCategory);

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* imput */}

            <AddCategory 
                // addSetCategories = { setCategories }
                 onNewCategory = { (event) =>  onAddCategory(event)}
                />

            {/* listado de Gif */}
            {/* <ol>
                { 
                    categories.map( category => (<GifGrid 
                                                        key = { category } 
                                                        category = { category } 
                                                    />
                                                )
                        //{ return <li key={ category } > { category } </li>} 
                    ) 
                }
                
            </ol> */}
                {/* Gif Item */}
            {/* Todo lo anterior se sustituye por lo siguiente */}
            {
                categories.map( category => (<GifGrid 
                                                    key = { category } 
                                                    category = { category } 
                                                />
                                            )
                            )
            } 
        </>
    )
}

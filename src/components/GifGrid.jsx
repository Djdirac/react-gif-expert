//import { useEffect, useState  } from 'react';
import { GifItem } from './GifItem';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

// Fuctional Componet
export const GifGrid = ( {category}) => {

    const { images, isLoading } = useFetchGifs( category );

    // console.log( { images, isLoading } );

    // const [images, setImages] = useState([])
    
    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     setImages(newImages);
    // }

    // useEffect( () => {
    //     // getGifs(category);
    //     getImages()
    // }, []);

    
    
    return (
            <>
                <h3>{category}</h3>
                {
                    isLoading && (<h2>Cargando...</h2>)
                }
                
                <div className = 'card-grid'>
                    {
                        images.map(
                            // ( { id, title } ) => (<li key={ id }>{ title }</li>)
                            ( image ) => ( <GifItem
                                                        key={ image.id } 
                                                        {...image}
                                                    /> 
                                                )
                        )
                    }
                </div>
            </>
    )
}

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);
    // console.log(categories);
    const onAddCategory = ( newCategory ) =>{
      console.log(newCategory);
      if ( categories.includes(newCategory) ) return; 


      // console.log(newCategory);
      // categories.push(newCategory) esta no es la manera de hacerlo porque la constante no es mutable debido a que es un hook.
      

      setCategories([newCategory, ...categories ]);
      // setCategories (cat => [ ...cat, 'Valorant']);

    }

    return (
      <>
        <h1> GiftExpertApp </h1>
        < AddCategory 
          // setCategories={ setCategories }
          onNewCategory={event => onAddCategory(event)}
          // currentCategories={ categories}
        />

        {
          categories.map( (category) => (
              <GifGrid 
              key={category}
              category={ category}
              />
            ))
        }
      </>
    )
}

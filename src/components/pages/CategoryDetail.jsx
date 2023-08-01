import React from 'react';
import { useParams } from 'react-router-dom';
import { categoryItems } from '../utils/data';

const CategoryDetail = () => {

   const { categoryID } = useParams();
   console.log(categoryID)

   return (
      <main>
         <section className="single-category">
            <div className="container">
               {categoryItems?.map(cat => {
                  return cat.id === categoryID ? <h1 key={cat.id}>{cat.title}</h1> : null;
               })}
            </div>
         </section>
      </main>
   )
}

export default CategoryDetail;
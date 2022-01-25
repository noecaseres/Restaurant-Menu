import React from 'react'

export const Categories = ({categories, filterItems}) => {
    return (
        <div className='text-center mb-4'>
            {categories.map((category,index)=>{
                return(
                    <button 
                        type='button'
                        className='cat-btn'
                        key={index}
                        onClick={()=>filterItems(category)}
                    >
                    {category}
                </button>
                )
            })}
           
        </div>
    )
}

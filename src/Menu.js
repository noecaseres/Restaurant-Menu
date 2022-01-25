import React from 'react';

export const Menu = ({items}) => {
    return (
        <div className='row'>
            {items.map((menuItem)=>{
                const {id,title,img,desc,price} = menuItem;
                return (
                    <div className='col-md-12 col-lg-6'>
                        <article key={id} className='d-flex cards'>
                            <img src={img} alt={title} className='m-2 w-25'/>
                        <div className='m-2'>
                            <div className='d-flex justify-content-between'>
                                <h2>{title}</h2>
                                <p className='price'>${price}</p>
                            </div>
                                <p className='text-desc'>{desc}</p>
                        </div>
                        </article>
                    </div>
                )
            })

            }
        </div>
    )
}

import React from 'react';
import './Content.css';
import EachItem from './EachItem';
import { items } from './other/ItemFile';

const Content =() => {
   return (
    <React.StrictMode>
    <div id='photo' className='MainDiv'>
        <div>
            <h1 className='NameOfTitle'><span className='bgline'>Co fotím</span></h1>
        </div>
        <div className='portfolioDiv'>
            {
                items.map((user, i) => {
                    return (
                        <EachItem 
                            key={i}
                            id={items[i].id}
                            name={items[i].name}
                            picture={items[i].picture}
                            url={items[i].url}
                        />
                    );
                })
            }
        </div>
    </div>
    </React.StrictMode>
   );
}

export default Content;
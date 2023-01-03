import './search.scss'
import { useState } from 'react';
import { HiOutlineChevronLeft } from "react-icons/hi";


export default function Search() {

    const [search, setSearch] = useState('');

    const handleClick = (e)=> {
        e.preventDefault()
        
        console.log(search)
    }


  return (
        <div className="container-search">
            <form className="search" onSubmit={ handleClick }>
                <input type='text'  className="input-search" placeholder="Order N°" value={ search } onChange={ (e)=> setSearch( e.target.value )} />
                <button  type='submit' className="btn-search"><HiOutlineChevronLeft /></button>
            </form>
        </div>

  )
}

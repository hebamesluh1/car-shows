"use client"
import React, { useState } from 'react'
import { SearchMenufacturer } from '..'

const SearchBar = () => {
    const [manufacturer, useManufacturer] = useState('')
    const handleSubmit = () => {
        console.log("submit btn")
    }
    return (
        <form className='searchbar' onSubmit={handleSubmit}>
            <div className="searchbar__item">
                <SearchMenufacturer
                    manufacturer={manufacturer}
                    useManufacturer={useManufacturer} />
            </div>
        </form>
    )
}

export default SearchBar
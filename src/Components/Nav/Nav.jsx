import React from 'react'
import './Nav.css'
import { Filter } from '../../ui/DispalyFilter/DisplayFilter'

export const Nav = ({ grouping,ordering,setGrouping,setOrdering }) => {
  return (
    <header className=''>
        <Filter grouping={grouping} ordering={ordering} setGrouping={setGrouping} setOrdering={setOrdering} />
    </header>
  )
}

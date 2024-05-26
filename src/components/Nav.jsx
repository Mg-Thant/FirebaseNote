import React from 'react'

const Nav = ({getNotes, totalNotes}) => {
  return (
    <div className='flx-ctr form-nav'>
      <h3>Fire Note</h3>
      <p>Total Notes <span>({totalNotes})</span></p>
    </div>
  )
}

export default Nav;

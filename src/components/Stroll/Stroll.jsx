import React from 'react'
import StrollList from '../StrollList/StrollList';
import css from './Stroll.module.scss'

const Stroll = () => {
  return (
    <section>
        <div className={css.strollContainerAxel} >
          <StrollList />
        </div>
    </section>
  )
}

export default Stroll
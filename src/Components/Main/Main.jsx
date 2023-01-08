import React from 'react'
import '../Main/Main.css'
import Profit from './Profit'
import AssetsPie from './AssetsPie'

export default function Main() {
  return (
    <>
      <div className='header__container'>
        <div className="header__row">
          <div className="header__element">
            <div className="header__item">
              <Profit />
            </div>
          </div>
          <div className="header__element">
            <div className="header__item">
              <AssetsPie />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

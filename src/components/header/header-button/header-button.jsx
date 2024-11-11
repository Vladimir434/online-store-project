/* eslint-disable react/prop-types */
import Logo from '../../../assets/logo-shop.svg'
import s from '../header-button/header-button.module.css'

const HeaderButton = ({bul}) => {
  return (
    <div>
      {bul
        ? <img src={Logo} alt="" />
        : <button className={s.button}>войти</button>
      }
    </div>
  )
}

export default HeaderButton
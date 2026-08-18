import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__main">
          <div className="header__info">
            <h1 className="header__name">Сысоева Софья Вадимовна</h1>
            <p className="header__title">Разработчик мобильных приложений</p>
          </div>
        </div>
        <ul className="header__contacts">
          <li className="header__contact">
            <svg className="header__icon" width="14" height="14"><use href="#location-icon" /></svg>
            <span>г. Ростов-на-Дону</span>
          </li>
          <li className="header__contact">
            <svg className="header__icon" width="14" height="14"><use href="#phone-icon" /></svg>
            <a href="tel:+79896127875">+7 (989)-612-78-75</a>
          </li>
          <li className="header__contact">
            <svg className="header__icon" width="14" height="14"><use href="#telegram-icon" /></svg>
            <a href="https://t.me/sofas_s" target="_blank" rel="noreferrer">Telegram</a>
          </li>
          <li className="header__contact">
            <svg className="header__icon" width="14" height="14"><use href="#github-icon" /></svg>
            <a href="https://github.com/SofaSss" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li className="header__contact">
            <svg className="header__icon" width="14" height="14"><use href="#email-icon" /></svg>
            <a href="mailto:sofas8642@gmail.com">sofas8642@gmail.com</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

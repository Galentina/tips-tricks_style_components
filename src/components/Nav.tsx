import { icons } from "../theme/icons/nav"

export const Nav = ()=>{
    return (
        <nav>
            <h1>Т и Т</h1>
            <a>
                <icons.Home/> Все темы
            </a>
            <a>
                <icons.Tag/> По тэгам
            </a>
            <a>Опубликовать</a>
            <a>Поиск</a>
        </nav>
    )
}
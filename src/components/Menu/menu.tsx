import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'


type MenuMode = 'horizontal' | 'vertical'

type selectCallback = (selectedIndex: string) => void

interface IMenuContext {
    index: string
    onSelect?: selectCallback
    mode?: MenuMode
    defaultOpenSubMenus?: string[]
}

export interface MenuProps {
    defaultIndex: string
    className?: string
    mode?: MenuMode
    style?: React.CSSProperties
    onSelect?: (selectedIndex: string) => void
    children?: React.ReactNode
    defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({index: '0'})

function Menu(props: MenuProps) {
    const { className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus } = props
    const [ currentActive, setActive ] = useState(defaultIndex)
    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })
    const handleClick = (index: string) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive: '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus,
    }
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString()
                })
            } else {
                console.log(childElement)
                console.error("Warning: Menu has a child not fit")
            }
        })
    }
    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                { renderChildren() }
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
}
export default Menu
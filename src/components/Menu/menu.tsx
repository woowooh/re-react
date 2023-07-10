import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'


type MenuMode = 'horizontal' | 'vertical'

type selectCallback = (selectedIndex: number) => void

interface IMenuContext {
    index: number
    onSelect?: selectCallback
}

export interface MenuProps {
    defaultIndex: number
    className?: string
    mode?: MenuMode
    style?: React.CSSProperties
    onSelect?: (selectedIndex: number) => void
    children?: React.ReactNode
}

export const MenuContext = createContext<IMenuContext>({index: 0})

function Menu(props: MenuProps) {
    const { className, mode, style, children, defaultIndex, onSelect } = props
    const [ currentActive, setActive ] = useState(defaultIndex)
    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })
    const handleClick = (index: number) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive: 0,
        onSelect: handleClick
    }
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            console.log('index', index)
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index
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
    defaultIndex: 0,
    mode: 'horizontal'
}
export default Menu
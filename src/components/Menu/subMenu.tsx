import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'


export interface ISubMenuProps {
    index?: string
    title: string
    className?: string
    children?: React.ReactNode
}

function SubMenu(props: ISubMenuProps) {
    const {index, title, children, className} = props
    const context = useContext(MenuContext)
    const openedSubMenus = context.defaultOpenSubMenus as Array<String>
    const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
    const [ menuOpen, setMenuOpen] = useState(isOpened)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setMenuOpen(!menuOpen)
    }
    let timer:any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setMenuOpen(toggle)
        }, 300)
    }
    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    }: {}
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true)
        },
        onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false)
        }
    }: {}

    const renderChildren = () => {
        const subMenuClasses = classNames('viking-submenu', {
            'menu-opened': menuOpen
        })
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            } else {
                console.log(childElement)
                console.error("Warning: Menu has a child not fit")
            }
        })
        return (
            <ul className={subMenuClasses} >
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
            </div>
            { renderChildren() }
        </li>
    )
}


SubMenu.displayName = 'SubMenu'

export default SubMenu
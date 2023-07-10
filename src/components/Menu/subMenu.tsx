import React, { useContext, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'


export interface ISubMenuProps {
    index?: number
    title: string
    className?: string
    children?: React.ReactNode
}

function SubMenu(props: ISubMenuProps) {
    const {index, title, children, className} = props
    const context = useContext(MenuContext)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })
    const renderChildren = () => {
        const childrenComponent = React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index
                })
            } else {
                console.log(childElement)
                console.error("Warning: Menu has a child not fit")
            }
        })
        return (
            <ul className='viking-submenu'>
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li key={index} className={classes}>
            <div className="submenu-title">
                {title}
            </div>
            { renderChildren() }
        </li>
    )
}


SubMenu.displayName = 'SubMenu'

export default SubMenu
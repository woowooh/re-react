import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import PrimaryButton from './components/Button/primaryButton'
import Menu from "./components/Menu/menu"
import MenuItem from "./components/Menu/menuItem"
import SubMenu from "./components/Menu/subMenu"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultOpenSubMenus={['3']} mode={"vertical"} defaultIndex={'0'}  onSelect={(index) => { alert(index)}}>
          <MenuItem>
            menuItem1
          </MenuItem>
          <MenuItem >
            menuItem2
          </MenuItem>
          <MenuItem >
            menuItem3
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem >
              dropdown1
            </MenuItem>
            <MenuItem >
              dropdown2
            </MenuItem>
            <MenuItem >
              dropdown3
            </MenuItem>
          </SubMenu>
          <SubMenu title="dropdown">
            <MenuItem >
              dropdown1
            </MenuItem>
            <MenuItem >
              dropdown2
            </MenuItem>
            <MenuItem >
              dropdown3
            </MenuItem>
          </SubMenu>
        </Menu>
        <Button disabled>Hello</Button>  
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

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
        <Menu mode={"vertical"} defaultIndex={0}  onSelect={(index) => { alert(index)}}>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem >
              dropdown2
            </MenuItem>
          </SubMenu>
          <MenuItem >
            link3
          </MenuItem>
          <MenuItem >
            link4
          </MenuItem>
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

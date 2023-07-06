import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import PrimaryButton from './components/Button/primaryButton'
import Menu from "./components/Menu/menu"
import MenuItem from "./components/Menu/menuItem"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0}  onSelect={(index) => { alert(index)}}>
          <MenuItem>
            link1
          </MenuItem>
          <MenuItem >
            link2
          </MenuItem>
          <MenuItem >
            link3
          </MenuItem>
        </Menu>
        <Button disabled>Hello</Button>
        <PrimaryButton size={ButtonSize.Small}>Default Primary</PrimaryButton>
        <Button className='www' onClick={(e) => {e.preventDefault();alert('www')}}>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello, Large</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello, Danger small</Button>
        <Button btnType={ButtonType.Default} >Hello, Default</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">link baidu</Button>
        <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">link baidu</Button>

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

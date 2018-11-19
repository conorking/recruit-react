import * as React from 'react';
import './App.css';
import Frame from './Frame';
import './Frame.tsx';
import TitleBar from './TitleBar';

class App extends React.Component<any,any>{
  constructor(props: any, context: any) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    
    this.state = {
      framename: "Register Card Form",
      menuIsOpen: false,
      nameIndex: 0
    };
  }

  public toggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });

    if(!this.state.menuIsOpen){this.setState({ framename: "Menu"})}
    else{this.setState({ framename: "Register Card Form"})}
    
  };

  public render() {
    return (
      <div>        
        <TitleBar toggleMenu={this.toggleMenu} framename={this.state.framename} menuIsOpen={this.state.menuIsOpen}/>
        <Frame menuIsOpen={this.state.menuIsOpen}/>
      </div>
    );
  }
}

export default App;



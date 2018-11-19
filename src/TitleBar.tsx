import * as React from 'react';
// import { Button, Col, Grid, Row} from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './App.css'
import './TitleBar.css'

class TitleBar extends React.Component<any, any> {
	constructor(props: any, context: any) {
		super(props, context);
		this.getIcon = this.getIcon.bind(this);
	}

	public getIcon() : string{
		if(this.props.menuIsOpen){
			return './back.svg' as string;
		}
		return './menu.svg' as string;
	}

	public render() {
	return (	
		<div className="titlebar">        	
    		<Image 
    		onClick={this.props.toggleMenu} 
    		className="menuButton"
    		src={this.getIcon()}
    		/>	            
        	<h1 className="titlebarHeader">{this.props.framename}</h1>
        </div>
	);
	}
}

export default TitleBar;
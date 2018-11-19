import * as React from 'react';
import { FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
import './App.css';

class Frame extends React.Component<any, any> {
	constructor(props: any, context: any) {
		super(props, context);

		this.ccFilter = this.ccFilter.bind(this);
		this.cvcFilter = this.cvcFilter.bind(this);
		this.expiryFilter = this.expiryFilter.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.isValidated = this.isValidated.bind(this);

		this.state = {
			CVC: '',
			creditCardNumber: '',
			expiry: '',
			expiryErrorText: ''
		};
	}

	public validateExpiryDate() {
		const month = parseInt(this.state.expiry.substr(0,2), 10);

		if (month > 12){
			if(!(this.state.expiryErrorText.length > 0)){ this.setState({ expiryErrorText : "Please enter a valid month (mm/yy)"});	}
			return 'error' 
		}

		if(!(this.state.expiryErrorText.length === 0)){	this.setState({ expiryErrorText : ""});	}
		
		if (this.state.expiry.length === 5){			
			return 'success';
		}
		
		return null;
	}

	public validateCC() {
		if (this.state.creditCardNumber.length === 19){			
			return 'success';
		}
	
		return null;
	}

	public validateCVC() {
		if (this.state.CVC.length === 3){ 
			return 'success';
		}

		return null;
	}

	public isValidated() {
		if(!(this.validateExpiryDate() === 'success')){
			return false;
		}
		if(!(this.validateCC() === 'success')){
			return false;
		}
		if(!(this.validateCVC() === 'success')){
			return false;
		}

		return true;
	}

	public ccFilter(e: any) {		
		// Remove any non integers
		const cleanedCC = e.target.value.replace(/[^0-9]/g, '');

		// add dashes
		let formattedCC = '';

		for (let i = 0; i < cleanedCC.length; i++) {
			if(i%4===0 && i>0) { formattedCC += '-' };
			formattedCC += cleanedCC[i];
		}
		this.setState({ creditCardNumber: formattedCC});
	}

	public cvcFilter(e: any) {		
		// Remove any non integers
		this.setState({ CVC: e.target.value.replace(/[^0-9]/g, '')});
	}
	
	public expiryFilter(e: any) {		
		// Remove any non integers
		let init = e.target.value;
		init = init.replace(/[^0-9]/g, '');
		init = init.substr(0,4);

		// Add format if more than 2 characters
		if(e.target.value.length > 2){
			init = [init.slice(0, 2), '/', init.slice(2)].join('');			
		}

		this.setState({ expiry: init});
	}

	public submitForm(e: any){
		e.preventDefault();

		if(!this.isValidated()){
			alert("Please make sure all fields are valid before proceeding.");
			return;
		}

		// tslint:disable-next-line:no-console
		console.log("Credit Card Number : " + this.state.creditCardNumber);
		// tslint:disable-next-line:no-console
		console.log("CVC : " + this.state.CVC);
		// tslint:disable-next-line:no-console
		console.log("Expiry : " + this.state.expiry);
	}

	public render() {		
		if(!this.props.menuIsOpen) {return (
			<div className="Frame">	
				<h2 className="frame-header">Welcome User</h2>
				<form onSubmit={this.submitForm}>
					<FormGroup
						validationState={this.validateCC()}>
						<FormControl
							type="text"
							name="creditcardnumber"
							value={this.state.creditCardNumber}
							placeholder="Credit Card Number"
							onChange={this.ccFilter}
							maxLength={19}
						/>
						<FormControl.Feedback />
					</FormGroup>

					<div className="ccvExpiryRow">
						<div className="left-spacer"/>

						<FormGroup
							className="small-input"
							validationState={this.validateCVC()}>
							<FormControl
								type="text"
								name="cvc"
								value={this.state.CVC}
								placeholder="CVC"
								onChange={this.cvcFilter}
								maxLength={3}
							/>
							<FormControl.Feedback />
						</FormGroup>

						<FormGroup
							className="small-input"		
							validationState={this.validateExpiryDate()}>
							<FormControl
								type="text"
								name="expiry"
								value={this.state.expiry}
								placeholder="Expiry"
								onChange={this.expiryFilter}
							/>
							<FormControl.Feedback />
						    <HelpBlock>{this.state.expiryErrorText}</HelpBlock>
						</FormGroup>

					</div>

					<FormGroup				
						validationState={this.validateExpiryDate()}>
						<FormControl
							type="submit"
							value="Submit"
							onClick={this.submitForm}
						/>
					</FormGroup>

				</form>
			</div>
		)}
		else {			
			return (
				<div className="Frame">
					<h2 className="frame-header">This is menu content</h2>
				</div>
				);			
		}
	}
}

export default Frame;

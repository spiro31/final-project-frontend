import React from "react";
import {
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	Row
} from "reactstrap";

export default class SignupForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			userPass: "",
			address: "",
			addressCont: "",
			city: "",
			userState: "",
			zip: ""
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}
	render() {
		return (
			<div className="signup-form">
				<div className="container">
					<Form>
						<Row form>
							<Col md={6}>
								<FormGroup>
									<Label for="firstName">First Name</Label>
									<Input
										type="text"
										name="firstName"
										value={this.state.firstName}
										id="firstName"
										placeholder="First Name"
										onChange={e =>
											this.setState({
												frstName: e.target.value
											})
										}
									/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="lastName">Last Name</Label>
									<Input
										type="text"
										name="lastName"
										value={this.state.lastName}
										id="lastName"
										placeholder="Last Name"
										onChange={e =>
											this.setState({
												lastName: e.target.value
											})
										}
									/>
								</FormGroup>
							</Col>
						</Row>

						<Row form>
							<Col md={6}>
								<FormGroup>
									<Label htmlFor="email">Email</Label>
									<Input
										type="email"
										name="email"
										id="email"
										value={this.state.email}
										placeholder="example@mail.com"
										onChange={e =>
											this.setState({
												email: e.target.value
											})
										}
									/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label htmlFor="userPass">Password</Label>
									<Input
										type="password"
										name="userPass"
										id="userPass"
										value={this.state.userPass}
										placeholder="password placeholder"
										onChange={e =>
											this.setState({
												userPass: e.target.value
											})
										}
									/>
								</FormGroup>
							</Col>
						</Row>

						<FormGroup>
							<Label htmlFor="address">Address</Label>
							<Input
								type="text"
								name="address"
								id="address"
								value={this.state.address}
								placeholder="1234 Main St"
								onChange={e =>
									this.setState({
										address: e.target.value
									})
								}
							/>
						</FormGroup>

						<FormGroup>
							<Label htmlFor="userAddress2">Address 2</Label>
							<Input
								type="text"
								name="userAddress2"
								id="userAddress2"
								value={this.state.addressCont}
								placeholder="Apartment, studio, or floor"
								onChange={e =>
									this.setState({
										addressCont: e.target.value
									})
								}
							/>
						</FormGroup>

						<Row form>
							<Col md={6}>
								<FormGroup>
									<Label htmlFor="userCity">City</Label>
									<Input
										type="text"
										name="city"
										value={this.state.city}
										id="usereCity"
										onChange={e =>
											this.setState({
												city: e.target.value
											})
										}
									/>
								</FormGroup>
							</Col>
							<Col md={4}>
								<FormGroup>
									<Label htmlFor="usereState">State</Label>
									<Input
										type="text"
										name="state"
										value={this.state.userState}
										id="userState"
										onChange={e =>
											this.setState({
												userState: e.target.value
											})
										}
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label htmlFor="userZip">Zip</Label>
									<Input
										type="text"
										name="zip"
										value={this.state.zip}
										id="userZip"
										onChange={e =>
											this.setState({
												zip: e.target.value
											})
										}
									/>
								</FormGroup>
							</Col>
						</Row>
						<div className="text-center pb-5 mb-5">
							<Button
								onClick={this.handleFormSubmit}
								color="primary">
								Sign Up
							</Button>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

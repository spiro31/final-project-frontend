import React from "react";
import { Context } from "../store/appContext.jsx";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Collapse,
	Col
} from "reactstrap";

export default class ProductForm extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);

		this.state = {
			collapse: false,
			image: ""
		};
		this.title = React.createRef();
		this.brand = React.createRef();
		this.price = React.createRef();
		this.category = React.createRef();
		this.description = React.createRef();
		this.image = React.createRef();
	}

	toggle() {
		this.setState(state => ({ collapse: !state.collapse }));
	}

	render() {
		return (
			<div>
				<Button
					outline
					color="primary"
					onClick={this.toggle}
					className="product__btn">
					Add Item
				</Button>
				<Collapse isOpen={this.state.collapse}>
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div className="container mb-4">
									<Form>
										<FormGroup row>
											<Label for="title" sm={2}>
												Title
											</Label>
											<Col sm={10}>
												<Input
													type="text"
													name="title"
													ref={this.title}
													onChange={e =>
														this.setState({
															title:
																e.target.value
														})
													}
													placeholder="Product Brand"
												/>
											</Col>
										</FormGroup>
										<FormGroup row>
											<Label for="brand" sm={2}>
												Brand
											</Label>
											<Col sm={10}>
												<Input
													type="text"
													name="brand"
													ref={this.brand}
													onChange={e =>
														this.setState({
															brand:
																e.target.value
														})
													}
													placeholder="Product Brand"
												/>
											</Col>
										</FormGroup>

										<FormGroup row>
											<Label for="price" sm={2}>
												Price
											</Label>
											<Col sm={10}>
												<Input
													type="number"
													name="price"
													ref={this.price}
													onChange={e =>
														this.setState({
															price:
																e.target.value
														})
													}
													placeholder="Price"
												/>
											</Col>
										</FormGroup>

										<FormGroup row>
											<Label for="category" sm={2}>
												Select One
											</Label>
											<Col sm={10}>
												<Input
													type="select"
													name="category"
													ref={this.category}
													onChange={e =>
														this.setState({
															category:
																e.target.value
														})
													}>
													<option>Tops</option>
													<option>Pants</option>
													<option>Shoes</option>
													<option>Accessories</option>
												</Input>
											</Col>
										</FormGroup>

										<FormGroup row>
											<Label for="description" sm={2}>
												Describe your Item
											</Label>
											<Col sm={10}>
												<Input
													type="textarea"
													name="description"
													ref={this.description}
													onChange={e =>
														this.setState({
															description:
																e.target.value
														})
													}
												/>
											</Col>
										</FormGroup>

										<FormGroup row>
											<Label for="image" sm={2}>
												File
											</Label>
											<Col sm={10}>
												<Input
													type="file"
													encType="multipart/form-data"
													name="image"
													id="image"
													ref={this.image}
													onChange={e =>
														this.setState({
															image:
																e.target
																	.files[0]
														})
													}
												/>
												<FormText color="muted">
													jpeg, png
												</FormText>
											</Col>
										</FormGroup>
										<Button
											outline
											color="primary"
											className="product__btn1"
											onClick={() => {
												actions.createProduct(
													this.state.title,
													this.state.brand,
													this.state.price,
													this.state.category,
													this.state.description,
													this.state.image
												);
											}}>
											Submit
										</Button>
									</Form>
								</div>
							);
						}}
					</Context.Consumer>
				</Collapse>
			</div>
		);
	}
}

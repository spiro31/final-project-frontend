import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

import {
	Card,
	Button,
	CardHeader,
	CardFooter,
	CardBody,
	Container,
	Row,
	Col
} from "reactstrap";

export class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0
		};
	}
	render() {
		return (
			<Container>
				<Card className="shopping-cart">
					<CardHeader className="bg-primary text-light d-flex justify-content-between">
						<span>
							<i
								className="fa fa-shopping-cart"
								aria-hidden="true"
							/>
						</span>
						<Link to="/rent/">
							<Button>Continue Shopping</Button>
						</Link>
					</CardHeader>
					<CardBody>
						<Context.Consumer>
							{({ store, actions }) => {
								return store.shoppingCart.map((item, index) => {
									return (
										<div key={index}>
											<Row>
												<Col className="text-center">
													<img
														src={item.item.image}
														height="100"
														width="100"
														alt="image"
													/>
												</Col>
												<Col>
													<Link
														to={
															"/item/" +
															item.item.ID
														}>
														<h4 className="product-name">
															{
																item.item
																	.post_title
															}
														</h4>
													</Link>
													<p>
														{
															item.item.meta_keys
																.product_brand
														}
													</p>
												</Col>
												<Col className="text-sm-center  text-md-right row">
													<Col
														style={{
															paddingTop: "5px"
														}}>
														<p>
															<span>
																&#36;
																{
																	item.item
																		.meta_keys
																		.product_price
																}
															</span>
															&nbsp;&nbsp;
															<span className="text-muted">
																x
															</span>
														</p>
													</Col>
													<Col>
														<div className="quantity">
															<input
																onChange={e =>
																	actions.setQty(
																		e.target
																			.value,
																		index
																	)
																}
																type="number"
																step="1"
																max="99"
																min="1"
																value={
																	item.count
																}
																title="Qty"
																className="qty"
																size="4"
															/>
														</div>
													</Col>
													<Col className="text-right">
														<button
															onClick={() => {
																this.setState({
																	shoppingCart: actions.removeCartItem(
																		item
																	)
																});
															}}
															type="button"
															className="btn btn-outline-danger btn-xs">
															<i
																className="fa fa-trash"
																aria-hidden="true"
															/>
														</button>
													</Col>
												</Col>
											</Row>
											<hr />
										</div>
									);
								});
							}}
						</Context.Consumer>
						<Row className="pull-right float-right mr-2">
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<button
											onClick={() => {
												this.setState({
													total: actions.totalPrice()
												});
											}}
											id="updateCart"
											className="btn btn-outline-secondary pull-right">
											Update shopping cart
										</button>
									);
								}}
							</Context.Consumer>
						</Row>
					</CardBody>

					<CardFooter>
						<div
							className="pull-right"
							id="paypal"
							style={{ margin: "10px" }}>
							<a href="" className="btn btn-success pull-right">
								Checkout
							</a>
							<div
								className="pull-right"
								style={{ margin: "5px" }}>
								Total price: <b>{this.state.total}</b>
							</div>
						</div>
					</CardFooter>
				</Card>
			</Container>
		);
	}
}

Card.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	color: PropTypes.string,
	body: PropTypes.bool,
	className: PropTypes.string
};
CardFooter.propTypes = {
	className: PropTypes.string
};

CardHeader.propTypes = {
	className: PropTypes.string
};
Container.propTypes = {
	fluid: PropTypes.bool
	// applies .container-fluid class
};
Row.propTypes = {
	noGutters: PropTypes.bool
};

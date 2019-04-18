import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import "../../styles/item.scss";
import { Button } from "reactstrap";

export class Item extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let product = store.products.filter((item, index) => {
						if (item.ID == this.props.match.params.theid) {
							return item;
						}
					});

					return (
						<div className="my-5">
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-5">
										<div
											id="carouselControls"
											className="carousel slide"
											data-ride="carousel">
											<div className="carousel-inner">
												<div className="carousel-item active">
													<img
														src={product[0].image}
														className="d-block w-100"
														alt="product image"
													/>
												</div>
											</div>
											<a
												className="carousel-control-prev"
												href="#carouselControls"
												role="button"
												data-slide="prev">
												<span
													className="carousel-control-prev-icon"
													aria-hidden="true"
												/>
												<span className="sr-only">
													Previous
												</span>
											</a>
											<a
												className="carousel-control-next"
												href="#carouselControls"
												role="button"
												data-slide="next">
												<span
													className="carousel-control-next-icon"
													aria-hidden="true"
												/>
												<span className="sr-only">
													Next
												</span>
											</a>
										</div>
									</div>
									<div className="col-md-7">
										<p className="new-product">NEW</p>
										<h2>{product[0].post_title}</h2>
										<hr />
										<div className="product-rating">
											<i className="fa fa-star gold" />{" "}
											<i className="fa fa-star gold" />{" "}
											<i className="fa fa-star gold" />{" "}
											<i className="fa fa-star gold" />{" "}
											<i className="fa fa-star-o" />{" "}
										</div>
										<p className="price">
											{" "}
											<b>$</b>
											{product[0].meta_keys.product_price}
										</p>
										<hr />
										<p>
											<b>Description: </b>{" "}
											{
												product[0].meta_keys
													.product_description
											}
										</p>
										<hr />
										<div className="btn-group cart">
											<button
												onClick={() => {
													actions.addToCart(
														product[0]
													);
												}}
												type="button"
												className="btn btn-success mt-5">
												Add to cart
											</button>
											<button
												onClick={() => {
													actions.addToWishList(
														product[0]
													);
												}}
												type="button"
												className="btn btn-danger mt-5">
												Add to Wishlist
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Item.propTypes = {
	match: PropTypes.object
};

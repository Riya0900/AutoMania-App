import { useEffect, useState } from "react";
import { Grid, Container, Box, Typography, Button } from "@mui/material";
import useCheckout from "./Checkoutstyle";
import { connect } from "react-redux";

const Checkout = (props) => {
  let total = 0;
  props.cart.map((product) => (total += product.p_price * product.quantity));

  const classes = useCheckout();

  const initialValues = {
    billing_first_name: "",
    billing_last_name: "",
    billing_company_name: "",
    billing_country: "",
    billing_address_1: "",
    billing_address_2: "",
    billing_city: "",
    billing_state: "",
    billing_postcode: "",
    billing_phone: "",
    billing_email: "",
    order_comments: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(
    (formErrors, isSubmit) => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
      }
    },
    [formErrors]
  );

  const validate = (values) => {
    const errors = {};
    const regex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    if (!values.billing_first_name) {
      errors.billing_first_name = "First name is reaquired!";
    }
    if (!values.billing_last_name) {
      errors.billing_last_name = "Last name is reaquired!";
    }
    if (!values.billing_country) {
      errors.billing_country = "Country is reaquired!";
    }
    if (!values.billing_address_1) {
      errors.billing_address_1 = "Address is reaquired!";
    }
    if (!values.billing_city) {
      errors.billing_city = "City is reaquired!";
    }
    if (!values.billing_state) {
      errors.billing_state = "State is reaquired!";
    }
    if (!values.billing_postcode) {
      errors.billing_postcode = "Postcode is reaquired!";
    }
    if (!values.billing_phone) {
      errors.billing_phone = "Phone Number is reaquired!";
    }
    if (!values.billing_email) {
      errors.billing_email = "Email is reaquired!";
    } else if (!regex.test(values.billing_email)) {
      errors.billing_email = "This is not a valid email format!";
    }

    return errors;
  };

  return (
    <>
      <div className={classes.checkoutmain}>
        <Container className={classes.checkcontainer}>
          <Box className={classes.checkbox}>
            <div>
              {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className={classes.ui_message_success}>
                  Place order Successfully
                </div>
              )}

              {Object.keys(formErrors).length > 0 && isSubmit && (
                <div className={classes.ui_message_unsuccess}>
                  Your form was unsuccessful. Please check your details and try
                  again.
                </div>
              )}
            </div>
            <form
              name="checkout"
              method="post"
              action=""
              className={classes.checkoutform}
              encType="multipart/form-data"
              noValidate="novalidate"
            >
              <Grid container spacing={2} className={classes.gridcheck}>
                <Grid item xs={6}>
                  <div className={classes.col_1}>
                    <div className={classes.col_1_1}>
                      <Typography variant="h3" className={classes.commonhead}>
                        Billing details
                      </Typography>

                      <div className={classes.textbox}>
                        <div className={classes.row}>
                          <p
                            className={classes.row1}
                            id="billing_first_name_field"
                            validate="required"
                            dataPriority="10"
                            autoComplete="off"
                          >
                            <label
                              for="billing_first_name"
                              className={classes.firstrow}
                            >
                              First name&nbsp;
                              <abbr
                                className={classes.required}
                                title="required"
                              >
                                *
                              </abbr>
                            </label>

                            <span className={classes.stext}>
                              <input
                                type="text"
                                className={classes.input_text}
                                name="billing_first_name"
                                id="billing_first_name"
                                placeholder=""
                                autoComplete="given-name"
                                value={formValues.billing_first_name}
                                onChange={handleChange}
                              />
                            </span>
                            <p className={classes.billing_required}>
                              {formErrors.billing_first_name}
                            </p>
                          </p>
                        </div>

                        <div className={classes.row}>
                          <p
                            className={classes.row2}
                            id="billing_last_name_field"
                            validate="required"
                            dataPriority="20"
                            autoComplete="off"
                          >
                            <label
                              for="billing_last_name"
                              className={classes.firstrow}
                            >
                              Last name&nbsp;
                              <abbr
                                className={classes.required}
                                title="required"
                              >
                                *
                              </abbr>
                            </label>

                            <span className={classes.stext}>
                              <input
                                type="text"
                                className={classes.input_text}
                                name="billing_last_name"
                                id="billing_last_name"
                                placeholder=""
                                autoComplete="family-name"
                                value={formValues.billing_last_name}
                                onChange={handleChange}
                              />
                            </span>
                            <p className={classes.billing_required}>
                              {formErrors.billing_last_name}
                            </p>
                          </p>
                        </div>

                        <div className={classes.row}>
                          <p
                            className={classes.commrow}
                            id="billing_company_name_field"
                            dataPriority="30"
                            autoComplete="off"
                          >
                            <label
                              for="billing_company_name"
                              className={classes.firstrow}
                            >
                              Company name &nbsp;
                              <span className={classes.optional}>
                                (optional)
                              </span>
                            </label>

                            <span className={classes.stext}>
                              <input
                                type="text"
                                className={classes.input_text}
                                name="billing_company_name"
                                id="billing_company_name"
                                placeholder=""
                                autoComplete="organization"
                                value={formValues.billing_company_name}
                                onChange={handleChange}
                              />
                            </span>
                          </p>
                        </div>

                        <div className={classes.row}>
                          <p
                            className={classes.commrow}
                            validate="required"
                            id="billing_country_field"
                            data-priority="40"
                            autoComplete="off"
                          >
                            <label
                              for="billing_country"
                              className={classes.firstrow}
                            >
                              Country / Region&nbsp;
                              <abbr
                                className={classes.required}
                                title="required"
                              >
                                *
                              </abbr>
                            </label>

                            <span className={classes.stext}>
                              <input
                                type="text"
                                className={classes.input_text}
                                name="billing_country"
                                id="billing_country"
                                placeholder=""
                                autoComplete="country"
                                value={formValues.billing_country}
                                onChange={handleChange}
                              />
                            </span>
                            <p className={classes.billing_required}>
                              {formErrors.billing_country}
                            </p>
                          </p>
                        </div>

                        <div className={classes.row}>
                          <p
                            className={classes.commrow}
                            id="billing_address_1_field"
                            validate="required"
                            dataPriority="50"
                          >
                            <label
                              for="billing_address_1"
                              className={classes.firstrow}
                            >
                              Street address&nbsp;
                              <abbr
                                className={classes.required}
                                title="required"
                              >
                                *
                              </abbr>
                            </label>

                            <span className={classes.stext}>
                              <input
                                type="text"
                                className={classes.input_text}
                                name="billing_address_1"
                                id="billing_address_1"
                                placeholder="House number and street name"
                                autoComplete="address-line1"
                                value={formValues.billing_address_1}
                                onChange={handleChange}
                              />
                            </span>
                            <p className={classes.billing_required}>
                              {formErrors.billing_address_1}
                            </p>
                          </p>
                        </div>
                        <div className={classes.row}>
                          <p
                            className={classes.commrow}
                            id="billing_address_2_field"
                            data-priority="60"
                          >
                            <label
                              for="billing_address_2"
                              className={classes.row5_address}
                            >
                              Apartment, suite, unit, etc.&nbsp;
                              <span className={classes.optional}>
                                (optional)
                              </span>
                            </label>
                            <span className={classes.stext}>
                              <input
                                type="text"
                                className={classes.input_text}
                                name="billing_address_2"
                                id="billing_address_2"
                                placeholder="Apartment, suite, unit, etc. (optional)"
                                autocomplete="address-line2"
                                dataPlaceholder="Apartment, suite, unit, etc. (optional)"
                                value={formValues.billing_address_2}
                                onChange={handleChange}
                              />
                            </span>
                          </p>
                        </div>

                        <div className={classes.row}>
                          <p
                            className={classes.commrow}
                            id="billing_city_field"
                            data-priority="70"
                            validate="required"
                          >
                            <label
                              for="billing_city"
                              className={classes.firstrow}
                            >
                              Town / City&nbsp;
                              <abbr
                                className={classes.required}
                                title="required"
                              >
                                *
                              </abbr>
                            </label>
                            <span className={classes.stext}>
                              <input
                                type="text"
                                className={classes.input_text}
                                name="billing_city"
                                id="billing_city"
                                placeholder=""
                                autocomplete="address-level1"
                                value={formValues.billing_city}
                                onChange={handleChange}
                              />
                            </span>
                            <p className={classes.billing_required}>
                              {formErrors.billing_city}
                            </p>
                          </p>
                        </div>

                        <div className={classes.row}>
                          <p
                            className={classes.commrow}
                            id="billing_state_field"
                            data-priority="80"
                            validate="required"
                          >
                            <label
                              for="billing_state"
                              className={classes.firstrow}
                            >
                              Town / State&nbsp;
                              <abbr
                                className={classes.required}
                                title="required"
                              >
                                *
                              </abbr>
                            </label>
                            <span className={classes.stext}>
                              <input
                                type="text"
                                className={classes.input_text}
                                name="billing_state"
                                id="billing_state"
                                placeholder=""
                                autocomplete="address-level1"
                                value={formValues.billing_state}
                                onChange={handleChange}
                              />
                            </span>
                            <p className={classes.billing_required}>
                              {formErrors.billing_state}
                            </p>
                          </p>
                        </div>

                        <div className={classes.row}>
                          <p
                            className={classes.commrow}
                            id="billing_postcode_field"
                            data-priority="90"
                            validate="required"
                          >
                            <label
                              for="billing_postcode"
                              className={classes.firstrow}
                            >
                              ZIP Code&nbsp;
                              <abbr
                                className={classes.required}
                                title="required"
                              >
                                *
                              </abbr>
                            </label>
                            <span className={classes.stext}>
                              <input
                                type="text"
                                className={classes.input_text}
                                name="billing_postcode"
                                id="billing_postcode"
                                placeholder=""
                                autocomplete="postal-code"
                                value={formValues.billing_postcode}
                                onChange={handleChange}
                              />
                            </span>
                            <p className={classes.billing_required}>
                              {formErrors.billing_postcode}
                            </p>
                          </p>
                        </div>

                        <div className={classes.row}>
                          <p
                            className={classes.commrow}
                            id="billing_phone_field"
                            data-priority="100"
                            validate="required"
                          >
                            <label
                              for="billing_phone"
                              className={classes.firstrow}
                            >
                              Phone&nbsp;
                              <abbr
                                className={classes.required}
                                title="required"
                              >
                                *
                              </abbr>
                            </label>
                            <span className={classes.stext}>
                              <input
                                type="tel"
                                className={classes.input_text}
                                name="billing_phone"
                                id="billing_phone"
                                placeholder=""
                                autocomplete="tel"
                                value={formValues.billing_phone}
                                onChange={handleChange}
                              />
                            </span>
                            <p className={classes.billing_required}>
                              {formErrors.billing_phone}
                            </p>
                          </p>
                        </div>

                        <div className={classes.row}>
                          <p
                            className={classes.commrow}
                            id="billing_email_field"
                            data-priority="110"
                            validate="required"
                          >
                            <label
                              for="billing_email"
                              className={classes.firstrow}
                            >
                              Email address&nbsp;
                              <abbr
                                className={classes.required}
                                title="required"
                              >
                                *
                              </abbr>
                            </label>
                            <span className={classes.stext}>
                              <input
                                type="email"
                                className={classes.input_text}
                                name="billing_email"
                                id="billing_email"
                                placeholder=""
                                autocomplete="email username"
                                value={formValues.billing_email}
                                onChange={handleChange}
                              />
                            </span>
                            <p className={classes.billing_required}>
                              {formErrors.billing_email}
                            </p>
                          </p>
                        </div>
                      </div>

                      <div className={classes.col_1_2}>
                        <Typography variant="h3" className={classes.commonhead}>
                          Additional information
                        </Typography>

                        <div className={classes.textbox}>
                          <div className={classes.row}>
                            <p
                              className={classes.commrow}
                              id="order_comments_field"
                              data-priority=""
                            >
                              <label
                                for="order_comments"
                                className={classes.firstrow}
                              >
                                Order notes&nbsp;
                                <span className={classes.optional}>
                                  (optional)
                                </span>
                              </label>
                              <span className={classes.stext}>
                                <textarea
                                  name="order_comments"
                                  className={classes.ordercomment}
                                  id="order_comments"
                                  placeholder="Notes about your order, e.g. special notes for delivery."
                                  value={formValues.order_comments}
                                  onChange={handleChange}
                                  rows="2"
                                  cols="5"
                                />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className={classes.col_2}>
                    <Typography variant="h3" className={classes.commonhead}>
                      Your order
                    </Typography>

                    <div className={classes.shop_table}>
                      <table className={classes.review_order}>
                        <thead className={classes.thead}>
                          <tr className={classes.tr}>
                            <th className={classes.th}>Product</th>
                            <th className={classes.th}>Subtotal</th>
                          </tr>
                        </thead>

                        <tbody className={classes.tbody}>
                          {props.cart.map((product) => (
                            <tr className={classes.tr}>
                              <td className={classes.td}>
                                {product.p_name}&nbsp;
                                <strong className={classes.strong}>
                                  ×&nbsp; {product.quantity}{" "}
                                </strong>
                              </td>
                              <td className={classes.td}>
                                <span>
                                  <bdi className={classes.bdi}>
                                    <span>$</span>
                                    {product.p_price * product.quantity}.00
                                  </bdi>
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot className={classes.tfoot}>
                          <tr className={`${classes.tr} ${classes.tr_border}`}>
                            <th className={classes.th}>Subtotal</th>
                            <td className={classes.td}>
                              <span>
                                <bdi className={classes.bdi}>
                                  <span>$</span>
                                  {total}.00
                                </bdi>
                              </span>
                            </td>
                          </tr>

                          <tr className={`${classes.tr} ${classes.tr_border}`}>
                            <th className={classes.th}>Total</th>
                            <td className={classes.td}>
                              <strong className={classes.strong}>
                                <span>
                                  <bdi className={classes.bdi}>
                                    <span>$</span>
                                    {total}.00
                                  </bdi>
                                </span>
                              </strong>
                            </td>
                          </tr>
                        </tfoot>
                      </table>

                      <div className={classes.checkout_payment} id="payment">
                        <ul className={classes.payment_method}>
                          <li className={classes.notice_info}>
                            Sorry, it seems that there are no available payment
                            methods for your state. Please contact us if you
                            require assistance or wish to make alternate
                            arrangements.
                          </li>
                        </ul>

                        <div className={classes.place_order}>
                          <div className={classes.terms_conditions}>
                            <div classNmae={classes.privacy_policy}>
                              <p>
                                Your personal data will be used to process your
                                order, support your experience throughout this
                                website, and for other purposes described in
                                our&nbsp;
                                <a
                                  href="/"
                                  className={classes.privacy_policy_link}
                                  target="_blank"
                                >
                                  privacy policy
                                </a>
                                .
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.btn}
                            id="place_order"
                            value="Place order"
                            data-value="Place order"
                            onClick={handleSubmit}
                          >
                            Place order
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Checkout);

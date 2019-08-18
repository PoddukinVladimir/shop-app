import React from 'react';
import {Form, Field} from 'react-final-form'
import {Form as BForm} from 'react-bootstrap';
import {newProductAdded} from '../../actions';
import {connect} from 'react-redux';
import {showAlertWithTimeout} from '../../actions';

import './product-form.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const mapDispatchToProps = {
    addProduct: newProductAdded,
    showAlert: showAlertWithTimeout
};

const ProductForm = ({addProduct, showAlert}) => {
    const onSubmit = async (product) => {
        await sleep(300);
        addProduct(product);
        showAlert(`New item was successfully added!`);
    };

    return (
        <Form
            onSubmit={onSubmit}
            validate={values => {
                const requiredMsg = `This field is required`;
                const errors = {};

                if (!values.name) {
                    errors.name = requiredMsg;
                }
                if (!values.description) {
                    errors.description = requiredMsg;
                }
                if (!values.price) {
                    errors.price = requiredMsg;
                }
                return errors;
            }}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={(e) => {
                    const promise = handleSubmit(e);
                    if (!promise) return;
                    promise.then(() => setTimeout(form.reset))
                }}>
                    <Field name="name">
                        {({input, meta}) => (
                            <BForm.Group controlId="product-name">
                                <BForm.Label>Name:</BForm.Label>
                                <BForm.Control
                                    {...input}
                                    type="text"
                                    placeholder="Name"
                                    isInvalid={meta.error && meta.touched}
                                />
                                {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                            </BForm.Group>
                        )}
                    </Field>
                    <Field name="description">
                        {({input, meta}) => (
                            <BForm.Group controlId="product-description">
                                <BForm.Label>Description:</BForm.Label>
                                <BForm.Control
                                    as="textarea"
                                    {...input}
                                    placeholder="Description"
                                    rows="5"
                                    isInvalid={meta.error && meta.touched}
                                />
                                {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                            </BForm.Group>
                        )}
                    </Field>
                    <Field name="price">
                        {({input, meta}) => (
                            <BForm.Group controlId="product-price">
                                <BForm.Label>Price:</BForm.Label>
                                <BForm.Control
                                    {...input}
                                    type="number"
                                    placeholder="Price"
                                    isInvalid={meta.error && meta.touched}
                                />
                                {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                            </BForm.Group>
                        )}
                    </Field>
                    <Field name="img">
                        {({input, meta}) => (
                            <BForm.Group controlId="product-image">
                                <BForm.Label>Image Link:</BForm.Label>
                                <BForm.Control
                                    {...input}
                                    type="text"
                                    placeholder="Image"
                                    isInvalid={meta.error && meta.touched}
                                />
                                {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                            </BForm.Group>
                        )}
                    </Field>
                    <div>
                        <button
                            className="btn btn-success float-right"
                            type="submit"
                            disabled={submitting}>
                            Add
                        </button>
                    </div>
                </form>
            )}
        />
    )
};

export default connect(null, mapDispatchToProps)(ProductForm);
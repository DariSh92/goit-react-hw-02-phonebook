import { PropTypes } from 'prop-types';
// import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormWrapp, Input, Error, Label, SubmitButton } from 'components/ContactForm/ContactForm.styled';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().min(4).max(12).required(),

})

const initialValues = {
    name: '',
    number: '',
}



export const ContactForm = (onSubmit) => {

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={schema}>
                <FormWrapp autoComplete='off'>
                    <Label htmlFor='number'>Number</Label>
                        <Input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            placeholder='Please, enter your number'
                            required
                            />
                            <Error name="number"component='div' />
                

                    <Label htmlFor='name'>Name</Label>
                        <Input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            placeholder='Please, enter your Name'
                            required
                        />
                    <Error name="name" component='div'/>
                <SubmitButton type='submit'>Add contact</SubmitButton>
        
            </FormWrapp>

        </Formik>
    )


}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
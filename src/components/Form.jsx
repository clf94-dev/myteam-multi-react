import {Grid} from '@material-ui/core'
import React from 'react'
import {useForm} from 'react-hook-form';

export default function Form() {
    const {handleSubmit, register, errors} = useForm();
    const onSubmit = values => console.log(values);
    return (
        <Grid container direction='column'>
            <form >
                <input
                    type="text"
                    name='name'
                    placeholder={errors.name
                    ? ' This is required'
                    : 'Name'}
                    style={errors.name
                    ? {
                        borderBottomColor: "red",
                        color: 'red'
                    }
                    : {
                        borderBottomColor: "black"
                    }}
                    ref={register({required: true, maxLength: 30})}
                    className={errors.name
                    ? "error input"
                    : " input"}/>
                <input
                    type="email"
                    name='email'
                    placeholder={errors.name
                    ? 'Enter a valid email address'
                    : 'Email'}
                    style={errors.email
                    ? {
                        borderBottomColor: "red",
                        color: 'red'
                    }
                    : {
                        borderBottomColor: "black"
                    }}
                    ref={register({required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                    className={errors.email
                    ? "error input"
                    : " input"}/>
                <input type="text" name='Company' placeholder='Company' className=" input"/>
                <input type="text" name='Title' placeholder='Title' className=" input"/>
                <textarea
                    type="text"
                    name="message"
                    className={errors.message
                    ? "error message"
                    : " message"}
                    placeholder={errors.message
                    ? 'This is required'
                    : 'Your message....'}
                    style={errors.message
                    ? {
                        borderBottomColor: "red",
                        color: 'red'
                    }
                    : {
                        borderBottomColor: "black"
                    }}
                    ref={register({required: true})}/>
            </form>
            <button type="submit" onClick={handleSubmit(onSubmit)} className='submit-btn'>
                Submit
            </button>
        </Grid>
    )
}
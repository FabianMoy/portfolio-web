import React, { useEffect, useRef, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { setData } from '../../helpers/setData'
import { FaRedoAlt, FaCheckCircle } from 'react-icons/fa'
import {gsap} from 'gsap';
import { FaTelegramPlane } from 'react-icons/fa'

export const FormContactMe = () => {

    const [state, setState] = useState({
        loading:false,
        done: false
    })
    const [ formValues, handleInputChange, reset ] = useForm({
        name:'',
        email:'',
        body:''})

    const {name, email, body} = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
            setState({loading: true})
            setData(formValues, setState);
            reset();
        }
    
    const {loading, done} = state;
    
    const iconRef = useRef();
    const submitRef = useRef();
    const tl = gsap.timeline({defaults:{scaleX: 0, duration: 0.3}})
    
    useEffect(()=>{
        if(done===true){
            tl.to(submitRef.current, {
                ease: 'power3.out'
            })
            tl.from(iconRef.current, {
                opacity: 0,
                ease: 'power3.in'
            },'-=0.3')
        }
    },[done, tl])
        
    return (
        <form className='formContactMe__form-wrapper'>
            <div>   
                <input
                    className='formContactMe__form-input'
                    autoComplete='off'
                    name='email'
                    required="required"
                    value={email}
                    onChange={handleInputChange}
                />
                <label>Email</label>
            </div>
            <div>
                <input
                    className='formContactMe__form-input'
                    autoComplete='off'
                    type="text"
                    name='name'
                    required="required"
                    value={name}
                    onChange={handleInputChange}
                />
                <label>Name</label>
            </div>
            <div> 
                <textarea
                    className='formContactMe__form-textarea'
                    name="body"
                    required="required"
                    value={body}
                    onChange={handleInputChange}
                />
                {loading&&<FaRedoAlt />}
                <label>Message</label>
            </div>
            <div ref={iconRef}>
                {done&&<FaCheckCircle />}
            </div>
            <button
                ref={submitRef}
                className='formContactMe__form-button'
                type='submit'
                onClick={handleSubmit}
                disabled={loading}
            >
                Submit
                <FaTelegramPlane />
            </button>
        </form>
    )
}
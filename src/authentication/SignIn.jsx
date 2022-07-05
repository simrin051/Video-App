import { Link } from 'react-router-dom';
import { useState } from "react";
import { InputText, InputPassword } from './../components/FormFields/InputField';
import { useReducer } from "react";
import { formsReducer } from './../reducers/reducer';
import { errorReducer } from './../reducers/reducer';
import { useUserContext } from './../contexts/user';
import { useLocation } from 'react-router-dom';
import './auth.css';

export const SignIn = () => {
    const initialState = {
        email: "",
        password: ""
    }
    const [formState, formDispatch] = useReducer(formsReducer, initialState);
    const { loginUser, state: { token } } = useUserContext();
    const state = useLocation();
    const fromPathNavigate = state.from ? state.from : '/';
    const [error, setSigninError] = useState();
    const errorInitialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    const [errorState, errorDispatch] = useReducer(errorReducer, errorInitialState);

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const onFocusClearError = (type) => {
        errorDispatch({
            type: type,
            payload: ""
        })
    }

    const handleSubmit = async (e) => {
        var errorFlag = false;
        const checkForFormValidity = () => {
            if (!validEmailRegex.test(formState.email)) {
                errorDispatch({
                    type: "ERROR_EMAIL",
                    payload: "Please enter valid email"
                })
                errorFlag = true;
            }
            if (formState.password === '' || formState.password.length < 8) {
                e.preventDefault();
                errorDispatch({
                    type: "ERROR_PASSWORD",
                    payload: "Please enter password of length equal to greater than 8"
                })
                errorFlag = true;
            }
        }
        checkForFormValidity();
        if (!errorFlag) {
            const authPayload = {
                email: formState.email,
                password: formState.password
            }
            e.preventDefault();
            loginUser(authPayload, fromPathNavigate, setSigninError, fromPathNavigate);
        }
    }


    return (
        <div>
            <div className='auth-container'>
                <h2 className="form-heading">LOGIN</h2>
                <form id="submit-form" class="form-container">
                    <InputText
                        value={formState.email.value}
                        onChange={(e) => {
                            formDispatch({
                                type: 'SET_EMAIL',
                                payload: e.target.value
                            })
                        }}
                        label={"Email"}

                        onFocus={() => {
                            onFocusClearError('ERROR_EMAIL');
                        }}
                    />
                    <small class="incorrectcredentials">{errorState && errorState.email}</small>
                    <InputPassword
                        value={formState.password.value}
                        onChange={(e) => {
                            formDispatch({
                                type: 'SET_PASSWORD',
                                payload: e.target.value
                            })
                        }}

                        onFocus={() => {
                            onFocusClearError('ERROR_PASSWORD');
                        }}
                        label={"Password"}
                    />
                    <small class="incorrectcredentials">{errorState && errorState.password}</small>

                    < div className="authenticate">
                        <button type="button" className="button" onClick={(e) => handleSubmit(e)} >Login</button>
                    </div>
                </form>
               {error &&  <small class="incorrectcredentials">{error}</small>}
                <div className="signUpLinks">
                    <p><small>Still don't have an account?</small> <Link to="/signup" class="Link">SignUp</Link></p>
                </div>
                </div >
        </div >
    )
}
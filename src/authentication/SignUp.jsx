import { useReducer, useState } from "react";
import { InputText, InputPassword } from './../components/FormFields/InputField';
import { useLocation } from 'react-router-dom';
import { useUserContext } from "./../contexts/user";
import { formsReducer } from './../reducers/reducer';
import { errorReducer } from './../reducers/reducer';
import './auth.css';

export const SignUp = () => {
    const state = useLocation();
    const fromPathNavigate = state.from ? state.from : '/';
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    const errorInitialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    const [formState, formDispatch] = useReducer(formsReducer, initialState);
    const [errorState, errorDispatch] = useReducer(errorReducer, errorInitialState);
    const [errorinSignup, setSignupError] = useState();
    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const { signUpUser } = useUserContext();

    const onFocusClearError = (type) => {
        errorDispatch({
            type: type,
            payload: ""
        })
    }

    const HandleSubmit = (e) => {
        var errorFlag = false;
        e.preventDefault();
        const authPayload = {
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            password: formState.password
        }
        const checkForFormValidity = () => {
            if (!validEmailRegex.test(formState.email)) {
                errorDispatch({
                    type: "ERROR_EMAIL",
                    payload: "Please enter valid email"
                })
                errorFlag = true;
            }
            if (formState.password === '' || formState.password.length < 8) {
                errorDispatch({
                    type: "ERROR_PASSWORD",
                    payload: "Please enter password of length equal to greater than 8"
                })
                errorFlag = true;
            }
            if (formState.firstName == '') {
                errorDispatch({
                    type: "ERROR_FIRSTNAME",
                    payload: "Please enter firstname"
                })
                errorFlag = true;
            } else if (formState.firstName.length < 2) {
                errorDispatch({
                    type: "ERROR_FIRSTNAME_LENGTH",
                    payload: "Please enter firstname longer than 2 letters"
                })
                errorFlag = true;
            }
            if (formState.lastName == '') {
                errorDispatch({
                    type: "ERROR_LASTNAME",
                    payload: "Please enter lastname"
                })
                errorFlag = true;
            } else if (formState.lastName.length < 2) {
                errorDispatch({
                    type: "ERROR_LASTNAME_LENGTH",
                    payload: "Please enter lastname longer than 2 letters"
                })
                errorFlag = true;
            }
        }
        checkForFormValidity()
        if (!errorFlag) {
            signUpUser(authPayload, fromPathNavigate,setSignupError);
        };
    }
    return (
        <div>
            <div className='auth-container'>
                <h2 className="form-heading">SIGN{" "}UP</h2>
                <form id="submit-form" class="form-container">
                    <InputText
                        id={"FirstName"}
                        value={formState.firstName}
                        required
                        onChange={(e) =>
                            formDispatch({
                                type: 'SET_FIRSTNAME',
                                payload: e.target.value
                            })}
                        onFocus={(e) => {
                            onFocusClearError('ERROR_FIRSTNAME');
                        }}
                        label={"First Name"}
                    />
                    <small class="incorrectcredentials">{errorState && errorState.firstName}</small>
                    <InputText
                        id={"LastName"}
                        value={formState.lastName}
                        required
                        onChange={(e) =>
                            formDispatch({
                                type: 'SET_LASTNAME',
                                payload: e.target.value
                            })}
                        onFocus={() => {
                            onFocusClearError('ERROR_LASTNAME');
                        }}
                        label={"Last Name"}
                    />
                    <small class="incorrectcredentials">{errorState && errorState.lastName}</small>
                    <InputText
                        id={"Email"}
                        value={formState.email}
                        required
                        onChange={(e) => {
                            formDispatch({
                                type: 'SET_EMAIL',
                                payload: e.target.value
                            })
                        }}
                        onFocus={() => {
                            onFocusClearError('ERROR_EMAIL');
                        }}
                        label={"Email"}
                    />
                    <small class="incorrectcredentials">{errorState && errorState.email}</small>
                    <InputPassword
                        id={"Password"}
                        value={formState.password}
                        required
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
                    {errorinSignup &&  <small class="incorrectcredentials">{errorinSignup}</small>}
                    <button type="submit" id="signup-btn" className="button" onClick={HandleSubmit}>Signup</button>
                </form>
            </div >
        </div>
    )
}

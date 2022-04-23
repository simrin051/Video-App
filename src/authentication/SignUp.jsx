import { useState, useReducer } from "react";
import { createUser } from "../services/auth";
import { InputText, InputPassword } from '../components/FormFields/InputField';
import { Header } from "../components/header/header";
import { formsReducer } from './../reducers/reducer';
import { onInputChange } from "./AuthUtils";

const errorState = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

export const SignUp = () => {


    const initialState = {
        firstName: { value: "", hasError: false, error: "" },
        lastName: { value: "", hasError: false, error: "" },
        email: { value: "", hasError: true, error: "" },
        password: { value: "", hasError: true, error: "" },
        isFormValid: false,
    }
    const [formState, dispatch] = useReducer(formsReducer, initialState);

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const handleChange = (event) => {
        console.log("inside handle change");
        const { id, value } = event.target;
        if (id === "FirstName") {
            console.log("inside if");
            if (value.length == 0) {
                console.log("Firstname and lastname is empty");
                errorState.firstName = 'FirstName should not be empty';
                errorState.lastName = 'LastName should not be empty';
            } else {
                errorState.firstName = null;
            }
            setInputValues({ ...inputValues, firstName: value });
        }
        if (id === "LastName") {
            console.log("inside if");
            if (value.length == 0) {
                console.log("Firstname and lastname is empty");
                errorState.lastName = 'LastName should not be empty';
            } else {
                errorState.lastName = null;
            }
            setInputValues({ ...inputValues, lastName: value });
        }
        if (id == "Password") {
            if (value.length < 8) {
                console.log("value length < 8");
                errorState.password = 'Password length should be greater than or equal to 8';
            } else {
                errorState.password = null;
            }
            setInputValues({ ...inputValues, password: value })
        }

        if (id == "Email") {
            if (!validEmailRegex.test(value)) {
                errorState.email = 'Email ID is invalid';
            } else {
                errorState.email = null;
            }
            setInputValues({ ...inputValues, email: value })
        }
    }
    const [inputValues, setInputValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        const authPayload = {
            firstName: formState.firstName.value,
            lastName: formState.lastName.value,
            email: formState.email.value,
            password: formState.password.value
        }
        createUser(authPayload);
        console.log("Form Data " + JSON.stringify(authPayload));
        // ... submit to API or something
    };

    return (
        <div>
            <Header />
            <div className='auth-container'>
                <h2 className="form-heading">Create my Account</h2>
                <form id="submit-form" class="form-container">
                    <InputText
                        id={"FirstName"}
                        value={formState.firstName.value}
                        onChange={(e) => onInputChange("firstName", e.target.value, dispatch, formState)
                        }
                        label={"First Name"}
                    />
                    <span className="text-invalid-msg">{errorState.firstName}</span>
                    <InputText
                        id={"LastName"}
                        value={formState.lastName.value}
                        onChange={(e) => onInputChange("lastName", e.target.value, dispatch, formState)}
                        label={"Last Name"}
                    />
                    <span className="text-invalid-msg">{errorState.lastName}</span>
                    <InputText
                        id={"Email"}
                        value={formState.email.value}
                        onChange={(e) => {
                            onInputChange("email", e.target.value, dispatch, formState)
                        }}
                        label={"Email"}
                    />
                    {formState.email.hasError && (
                        <div className="error-message">{formState.email.error}</div>
                    )}
                    <InputPassword
                        id={"Password"}
                        value={formState.password.value}
                        onChange={(e) => {
                            onInputChange("password", e.target.value, dispatch, formState)
                        }}
                        label={"Password"}
                    />
                    {formState.password.hasError && (
                        <div className="error-message">{formState.password.error}</div>
                    )}
                    <button type="submit" className="button" onClick={handleSubmit}>Signup</button>
                </form>
            </div >
        </div>
    )
};
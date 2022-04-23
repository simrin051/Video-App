import { Link } from 'react-router-dom';
import { useState } from "react";
import { InputText, InputPassword } from '../components/FormFields/InputField';
import { Header } from './../components/header/header';
import { useReducer } from "react";
import { formsReducer } from '../reducers/reducer';
import { onInputChange } from './AuthUtils';

export const SignIn = () => {

    const initialState = {
        email: { value: "", hasError: true, error: "" },
        password: { value: "", hasError: true, error: "" },
        isFormValid: false,
    }
    const [formState, dispatch] = useReducer(formsReducer, initialState);

    console.log(" Form state after reducer " + JSON.stringify(formState));

    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });

    return (
        <div>
            <Header />
            <div className='auth-container'>
                <h2 className="form-heading">Login to my user account</h2>
                <form id="submit-form" class="form-container">
                    <InputText
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
                        value={formState.password.value}
                        onChange={(e) =>
                            onInputChange("password", e.target.value, dispatch, formState)
                        }
                        label={"Password"}
                    />
                    {formState.password.hasError && (
                        <div className="error-message">{formState.password.error}</div>
                    )}
                    <div className="authenticate">
                        <button type="button" className="Login btn  btn-block btn-lg rounded-0">Login</button>
                    </div>
                </form>
                <div className="signUpLinks">
                    <p><small>Still don't have an account?</small> <Link to="/signup" class="Link">SignUp</Link></p>
                </div>
            </div>
        </div>
    )
}
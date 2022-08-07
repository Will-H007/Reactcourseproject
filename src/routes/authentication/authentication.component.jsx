import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import {auth, signInWithGooglePopup, signInWithGoogleRediect,  createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/directory/sign-up form/sign-up-form.component';
import SignInForm from '../../components/sign-in form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {

    useEffect(async () => {
        const response = await getRedirectResult(auth);
        console.log(response)
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }, [])


    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log({user})
    };
    return (
        <div className='authentication-container'>
  
            <SignInForm/>
            <SignUpForm/>
            
        </div>
    );
};

export default Authentication;
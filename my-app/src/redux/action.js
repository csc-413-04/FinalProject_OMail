export const selectEmail = (emailPreview) => {
    console.log("you selected email: ", emailPreview.id);
    return{
        type: 'EMAIL_SELECTED',
        payload: emailPreview
    }

};

export const composeEmail = (state) =>{
    console.log("Compose Email Action");
    return{
        type: 'COMPOSE_EMAIL',
        payload: state

    }
}

export const closeCompose = (state) =>{
    console.log("Close Compose Action");
    return{
        type: 'CLOSE_COMPOSE',
        payload: state

    }
}


export const importEmails = (emails) => {
    return{
        type: 'Email_Import',
        payload: emails
    }
};

export const loginRequest = (loginInfo) => {
    return { 
        type: 'LOGIN_REQUEST',
        payload: loginInfo
    }
};
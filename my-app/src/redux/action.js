

export const selectEmail = (emailPreview) => {
    console.log("you selected email: ", emailPreview.id);
    return{
        type: 'EMAIL_SELECTED',
        payload: emailPreview
    }

};
export const importEmails = (emails) => {
    return{
        type: 'Email_Import',
        payload: emails
    }
};

export const createUser = (namePass) => {
    return {
        type: 'CREATE_USER',
        payload: namePass
    }
}


export const loginRequest = (loginInfo) => {
    return { 
        type: 'LOGIN_REQUEST',
        payload: loginInfo
    }
};
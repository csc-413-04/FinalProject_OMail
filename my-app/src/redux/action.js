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
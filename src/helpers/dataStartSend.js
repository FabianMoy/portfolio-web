import emailjs from '@emailjs/browser';

export const dataStartSend = async({name, email, body}) =>{

    const data = {
        from_name: name, 
        from_email: email, 
        message: body,
    }

    const {serviceID, templateID, templateParams, userID} = {
        serviceID: 'contact_form', 
        templateID: 'contact_form', 
        templateParams: data, 
        userID: 'user_EqAZDw73TmVKwgVuxjqYw'}
    
    const resp = await emailjs.send(serviceID, templateID, templateParams, userID);
    
    return resp;
}
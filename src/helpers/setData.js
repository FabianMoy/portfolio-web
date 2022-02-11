import { dataStartSend } from "./dataStartSend";

export const setData = (contactData, setState) => {

    dataStartSend(contactData)
        .then((resp)=>{
                return setState({
                    resp:resp,
                    done:true,
                    loading:false})
        }).catch((err)=>{
            return setState({
                resp:err,
                loading:false});
        })
}
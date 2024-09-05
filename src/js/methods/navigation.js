import { submitForm } from '../requests/submitForm';
import { router } from '../router/router';
import { validateForm } from './formValidation';

export const toAddProduct = () => {
    router.push({path: '/add-product'})
}

export const cancelAddProduct = () =>{
    router.push('/');
}

export const handleSave = async (data) =>{
    const valid = validateForm()
    if(valid){
        await submitForm(data)
        return true;
    } else{
        return false;
    }
}
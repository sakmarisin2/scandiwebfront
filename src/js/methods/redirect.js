import { submitForm } from '../requests/submitForm';
import { router } from '../router';
import { validateForm } from './methods';

export const ToAddProduct = () => {
    router.push({path: '/add-product'})
}

export const CancelAddProduct = () =>{
    router.push({path: "/"})
}

export const handleSave = async (data) =>{
    const valid = validateForm()
    console.log(data)
    if(valid){
        await submitForm(data)
        router.push({path: "/"})
    }
}
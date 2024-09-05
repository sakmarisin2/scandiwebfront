import { submitForm } from '../requests/submitForm';
import { router } from '../router';
import { validateForm } from './methods';

export const toAddProduct = () => {
    router.push({path: '/add-product'})
}

export const cancelAddProduct = () =>{
    router.go(-1)
}

export const handleSave = async (data) =>{
    const valid = validateForm()
    if(valid){
        await submitForm(data)
        router.go(-1)
    }
}
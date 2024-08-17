import { router } from '../router';

export const ToAddProduct = () => {
    router.push({path: '/addproduct'})
}

export const CancelAddProduct = () =>{
    router.push({path: "/"})
}
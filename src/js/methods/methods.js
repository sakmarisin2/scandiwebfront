import { store } from '../store';

export const SetType = (event) =>{
    store.commit('SetCurrentType',event.target.value)
}
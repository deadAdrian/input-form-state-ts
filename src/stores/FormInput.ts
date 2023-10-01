import { defineStore } from 'pinia'
import {reactive} from 'vue'



export const useFormStore = defineStore('form', () => {
  const formState = reactive({
    age: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    cep: ''
  })
  
  return {formState}
})
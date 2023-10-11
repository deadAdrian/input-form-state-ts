<template>
  <h1>My form</h1>
    <v-form class="px-2 py-4" @submit.prevent="submit">
      <v-text-field
        v-model="formState.firstName"
        type="text"
        label="First name"
        density="compact"
        variant="outlined"
        color="blue"
        @blur="v$.firstName.$touch"
        :error="v$.firstName.$error"
        :error-messages="(v$.firstName.$errors[0]?.$message as string)"
        class="my-input"
        :class="(v$.firstName.$error && validateError)? 'error-animation' : ''"
      />

      <v-text-field
        v-model="formState.lastName"
        type="text"
        label="Last name"
        density="compact"
        variant="outlined"
        color="blue"
        @blur="v$.lastName.$touch"
        :error="v$.lastName.$error"
        :error-messages="(v$.lastName.$errors[0]?.$message as string)"
        class="my-input"
        :class="(v$.lastName.$error && validateError)? 'error-animation' : ''"
      />

      <div class="d-flex">
        <v-text-field
          v-model="formState.phone"
          type="tel"
          label="Phone"
          density="compact"
          variant="outlined"
          color="blue"
          @blur="v$.phone.$touch"
          :error="v$.phone.$error"
          :error-messages="v$.phone.$errors[0]?.$message as string"
          v-mask="['(##) ####-####', '(##) #####-####']"
          class="w-75 my-input"
          :class="(v$.phone.$error && validateError)? 'error-animation' : ''"
        />
     
        <InputNumber
          v-model="formState.age"
          :options="options"
          type="number"
          label="Age"
          density="compact"
          variant="outlined"
          color="blue"
          @blur="v$.age.$touch"
          :error="v$.age.$error"
          :error-messages="v$.age.$errors[0]?.$message"
          class="ml-2 w-25 my-input"
          :class="(v$.age.$error && validateError)? 'error-animation' : ''"
        />
      </div>
      <v-text-field
        v-model="formState.email"
        type="email"
        label="Email"
        density="compact"
        variant="outlined"
        color="blue"
        @blur="v$.email.$touch"
        :error="v$.email.$error"
        :error-messages="(v$.email.$errors[0]?.$message as string)"
        class="my-input"
        :class="(v$.email.$error && validateError)? 'error-animation' : ''"
      />

      <v-text-field
        v-model="formState.cep"
        type="tel"
        label="CEP"
        density="compact"
        variant="outlined"
        color="blue"
        @blur="v$.cep.$touch"
        :error="v$.cep.$error"
        :error-messages="(v$.cep.$errors[0]?.$message as string)"
        v-mask="'#####-###'"
        class="my-input"
        :class="(v$.cep.$error && validateError)? 'error-animation' : ''"
      />

      <v-btn type="submit" block color="blue">Submit</v-btn>
    </v-form>
</template>

<script setup lang="ts">
import InputNumber from '@/components/InputNumber/InputNumber.vue'
import type {CurrencyDisplay } from 'vue-currency-input'
import { ref } from 'vue'
import { useFormStore } from '@/stores/FormInput'
import { storeToRefs } from 'pinia'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minValue, minLength, helpers } from '@vuelidate/validators'

const options = {
  "currency": "BRL",
  "currencyDisplay": "hidden" as CurrencyDisplay,
  "hideCurrencySymbolOnFocus": true,
  "hideGroupingSeparatorOnFocus": true,
  "hideNegligibleDecimalDigitsOnFocus": true,
  "autoDecimalDigits": false,
  "useGrouping": false,
  "accountingSign": false
}

const store = useFormStore();

const { formState } = storeToRefs(store)

let myTimeout: ReturnType<typeof setTimeout>;

const validateError = ref(false)

/*
async function that validates a CEP with a API
doing validation on every user keydown isn't efficient 
so this is one solution that only fetchs data once the user
stays 500ms without typing.

naturally the vuelidate helper withAsync receive a promise
fetch().then(), but we can't do that because of efficency
so the solution was to use both: a timeout that is cleared 
every time a input is detected and a sleep promise that
forces the function to await the timeout and get the result
from api
*/

const isCEPValid = async (value: string) => {
  clearTimeout(myTimeout)
  let cepValidation = false;

  myTimeout = setTimeout(() => {
    fetch(`https://viacep.com.br/ws/${value}/json/`)
      .then((result) => {cepValidation = result.ok})
      .catch(console.log)
  }, 500)

  await new Promise(r => setTimeout(r, 550));

  return cepValidation
}



const rules = {
  firstName: {required: helpers.withMessage('Required', required)},
  lastName: {required: helpers.withMessage('Required', required)},
  email: {required: helpers.withMessage('Required', required), email},
  age: {required: helpers.withMessage('Required', required), minValueValue: helpers.withMessage('Min: 13', minValue(13))},
  phone: {
    required: helpers.withMessage('Required', required),
    minLength: helpers.withMessage('Must have at least 10 digits', minLength(14))
  },
  cep: {
    required: helpers.withMessage('Required', required),
    isValid: helpers.withMessage('CEP is not valid', helpers.withAsync(isCEPValid)) 
  }
}
  
const v$ = useVuelidate(rules, formState)

async function submit(){
  clearTimeout(myTimeout)
  const validateSuccess = await v$.value.$validate()
  if(validateSuccess ){
    alert('Success!')
  }else{
    validateError.value = true
    myTimeout = setTimeout(() => {
      validateError.value = false
    }, 300)
  }
  
}
</script>



<style lang="scss">
.my-input{
  .v-input__details{
    height: 12px;
    padding: 0px;
    margin-left: 8px;
    align-items: center;
    padding-inline-start: 0px !important;
    padding-inline-end: 0px !important;
  }
}

.error-animation{
  animation: .3s linear on-error;
}

@keyframes on-error{
  0%{
    transform: translateX(0px);
  }20%{
    transform: translateX(3px);
  }40%{
    transform: translateX(-3px);
  }60%{
    transform: translateX(3px);
  }80%{
    transform: translateX(-3px);
  }100%{
    transform: translateX(0px);
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
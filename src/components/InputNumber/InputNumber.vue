<template>
  <v-text-field
    ref="inputRef"
    :variant="variant"
    :type="type"
    :label="label"
    :density="density"
    :color="color"
  />
</template>

<script setup lang="ts">

import { useCurrencyInput } from 'vue-currency-input'
import type {InputNumber} from '@/types'

const componentProps = defineProps<InputNumber> ()

const {inputRef} = useCurrencyInput(componentProps.options)


</script>

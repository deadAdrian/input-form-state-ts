import type {CurrencyInputOptions } from 'vue-currency-input'
type Density = 'compact' | 'comfortable' | 'default'

export interface InputNumber{
  modelValue: number | string | null;
  options: CurrencyInputOptions;
  label?: string;
  type?: string;
  color?: string;
  variant?: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
  density?: Density;
}


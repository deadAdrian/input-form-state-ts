import { createVuetify, type ThemeDefinition } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    background1: '#f2f2f2',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#000',
    background1: '#242424',
    surface: '#000',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}


export default createVuetify({
  components,
  directives,
  theme:{
    defaultTheme: 'darkTheme',
    themes:{
      lightTheme,
      darkTheme
    }
  },
  icons: {
    defaultSet: 'mdi', 
  },
  
})

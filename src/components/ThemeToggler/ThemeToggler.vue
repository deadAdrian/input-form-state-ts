<template>
    <div class="my-switch" :class=" toggled ? 'my-switch-active' : ''" @click="() => {
        toggled = !toggled
        toggleTheme()
    }">
        <div class="my-switch-toggle" :class=" toggled ? 'my-switch-toggle-active' : ''"></div>
    </div> 
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useTheme } from 'vuetify'
const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
}
const toggled = ref(true)
</script>

<style scoped lang="scss">

@property --initialColor {
  syntax: '<color>';
  initial-value: #f38303,;
  inherits: false;
}

@property --finalColor {
  syntax: '<color>';
  initial-value: #facc01;
  inherits: false;
}
.my-switch{
    cursor: pointer;
    width: 50px;
    height: 25px;
    border-radius: 30px;
    position: relative;
    padding: 0px 3px;
    background: linear-gradient(to left, var(--initialColor), var(--finalColor) 70%);
    transition: --initialColor 0.3s ease-in, --finalColor 0.3s ease-in;
    .my-switch-toggle{
        background-color: white;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
        width: 19px;
        height: 19px;
        transition: left 0.3s ease-in;
    }

    .my-switch-toggle-active{
        left: 57% !important;
    }
}

.my-switch-active{
    --initialColor: #001a52;
    --finalColor: #61057e;
}
</style>
<template>
    <v-app-bar :elevation="2"  class="d-flex justify-center">
      <template #append>
        <v-btn  class="mr-3" variant="flat" icon="mdi-github" href="https://github.com/deadAdrian/input-form-state-ts" target="_blank" size="large" aria-label="github"/>
        <ThemeToggler />
      </template>
        
    </v-app-bar>
    
</template>

<script setup lang="ts">
import ThemeToggler from '@/components/ThemeToggler/ThemeToggler.vue'
</script>
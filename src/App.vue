<script setup lang="ts">
import MyForm from '@/components/Form/MyForm.vue'
import MyAppBar from '@/components/AppBar/MyAppBar.vue'
</script>

<template>
  <v-app class="my-app mt-16 mt-lg-0">
    <MyAppBar />
    <main class="d-flex justify-center align-center flex-column w-100 px-2">
      <MyForm />
    </main>
  </v-app>
</template>

<style lang="scss">
html{
  overflow-y: auto !important;
}
#app{
  display: flex;
  justify-content: center;
}
.my-app{
  height: fit-content !important;
  max-width: 330px;
  border-radius: 4px;

  .v-application__wrap{
    min-height: fit-content !important;
  }
}
</style>

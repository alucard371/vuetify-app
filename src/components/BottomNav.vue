
<template>

  <v-bottom-nav app fixed :value="true">

    <v-btn flat color="primary" :to="{ path: '/'}">
      <span>Top Stories</span>
      <v-icon>mdi-thumb-up-outline</v-icon>
    </v-btn>

    <v-btn flat color="primary" :to="{ name: 'code-examples'}">
      <span>Code Examples</span>
      <v-icon>mdi-code-braces</v-icon>
    </v-btn>

    <v-btn flat color="primary" :to="{ name: 'my-favorites'}">
      <span>Favorites</span>
      <v-icon>mdi-lamp</v-icon>
    </v-btn>

  </v-bottom-nav>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
  export default class BottomNav extends Vue {
  }
</script>
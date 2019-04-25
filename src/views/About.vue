<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { getSomething } from "../service/dumb-service";
export default {
  created() {
    getSomething();
  }
}
</script>

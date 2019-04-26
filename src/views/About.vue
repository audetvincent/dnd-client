<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>My JSON : {{myJson || 'is empty'}}</p>
  </div>
</template>

<script>
import { fetchSpell } from "../service/dumb-service";
export default {
  computed: {
    myJson: fetchSpell()
  }
}
</script>

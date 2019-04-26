<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { fetchSpell } from "../service/dumb-service";
export default {
  data() {
    return {
      myJson: '',
    }
  },
  created() {
    fetchSpell().then((json) => this.myJson = json).catch((error) => {console.log('got an error doc', error)});
  }
}
</script>

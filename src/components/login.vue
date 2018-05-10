<template>
   <div id="id">
    <Input v-model="username" icon="ios-clock-outline" placeholder="Enter something..."/>
    <Input v-model="password" icon="ios-clock-outline" placeholder="Enter something..."/>
    <Button @click="signUp" type="primary">Primary</Button>
  </div>
</template>
<script>
import { Input, Button } from 'iview';
import { signup } from '../service';
export default {
  components: {
    Input,
    Button
  },
  props: [],
  data() {
    return {
      username: '1',
      password: '1'
    };
  },
  computed: {},
  methods: {
    async signUp() {
      const { username, password } = this;
      if (!username) return;
      if (!password) return;
      let res = await signup(username, password);
      if (res.status === 1) {
        this.$router.push('/home');
      }
      console.log(res);
    }
  },
  beforeCreate() {},
  created() {},
  beforeUpdate() {},
  updated() {},
  beforeMount() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
</style>

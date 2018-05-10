<template>
  <div class="login">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>
          欢迎登录
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="username">
              <Input v-model="form.username" placeholder="请输入用户名">
              <span slot="prepend">
                <Icon :size="16" type="person"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码">
              <span slot="prepend">
                <Icon :size="14" type="locked"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card, Form, FormItem, Input, Icon, Button } from 'iview';
import { signup } from '../service';
export default {
  components: {
    Card,
    Form,
    FormItem,
    Input,
    Icon,
    Button
  },
	data() {
		return {
			form: {
				username: '',
				password: '',
			},
			rules: {
				username: [
					{
						required: true,
						message: '账号不能为空',
						trigger: 'blur',
					},
				],
				password: [
					{
						required: true,
						message: '密码不能为空',
						trigger: 'blur',
					},
				],
			},
		};
	},
	methods: {
		async handleSubmit() {
      const { username, password } = this.form;
      console.log(username, password);
      if (!username) return;
      if (!password) return;
      let res = await signup(username, password);
      console.log(res)
      if (res.status === 1) {
        this.$router.push('/home/articleinfo');
      }
		},
	},
};
</script>
<style lang="scss" scoped>
.login {
	width: 100%;
	height: 100%;
	background-image: url('../assets/thumb-1920-286981.jpg');
	background-size: cover;
	background-position: center;
	position: relative;
	&-con {
		position: absolute;
		right: 160px;
		top: 50%;
		transform: translateY(-60%);
		width: 300px;
		&-header {
			font-size: 16px;
			font-weight: 300;
			text-align: center;
			padding: 30px 0;
		}
		.form-con {
			padding: 10px 0 0;
		}
		.login-tip {
			font-size: 10px;
			text-align: center;
			color: #c3c3c3;
		}
	}
}
</style>


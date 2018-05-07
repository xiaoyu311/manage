<template>
   <div>
    <h1>文章发表</h1>
    <h3>标题</h3>
    <Input v-model="value" placeholder="Enter something..." clearable ></Input>
    <h3>分类</h3>
    <Select v-model="model10" multiple>
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <h3>正文</h3>
    <Input v-model="value5" :autosize="autosize" type="textarea" placeholder="Enter something..."></Input>
  </div>
</template>
<script>
import { Input, Select, Option } from 'iview';
export default {
	components: {
		Input,
		Select,
		Option,
	},
	props: [],
	data() {
		return {
			value: 'Hello World',
			value5: '',
			autosize: {
				minRows: 11,
			},
			cityList: [
				{
					value: 'New York',
					label: 'New York',
				},
				{
					value: 'London',
					label: 'London',
				},
				{
					value: 'Sydney',
					label: 'Sydney',
				},
				{
					value: 'Ottawa',
					label: 'Ottawa',
				},
				{
					value: 'Paris',
					label: 'Paris',
				},
				{
					value: 'Canberra',
					label: 'Canberra',
				},
			],
			model10: [],
		};
	},
};
</script>
<style lang="scss" scoped>

</style>
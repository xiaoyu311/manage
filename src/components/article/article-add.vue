<template>
   <div>
    <h1>文章发表</h1>
    <h3>标题</h3>
    <Input v-model="title" placeholder="请填写文章标题" clearable ></Input>
    <h3>分类</h3>
    <Select v-model="type" multiple>
        <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <h3>正文</h3>
    <Input v-model="content" :autosize="autosize" type="textarea" placeholder="填写文章内容"></Input>
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
			title: '',
			content: '',
			autosize: {
				minRows: 11,
			},
			typeList: [
				{
					value: 'Html',
					label: 'Html',
				},
				{
					value: 'JavaScript',
					label: 'JavaScript',
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
			type: [],
		};
	},
};
</script>
<style lang="scss" scoped>

</style>
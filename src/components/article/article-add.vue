<template>
  <div>
    <h1>文章发表</h1>
    <h3>标题</h3>
    <Input v-model="title" placeholder="请填写文章标题" clearable />
    <h3>分类</h3>
    <Select v-model="type" multiple>
      <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <h3>正文</h3>
    <Input v-model="content" :autosize="autosize" type="textarea" placeholder="填写文章内容" />
    <Button @click="articleAdd" type="success" long>SUBMIT</Button>
  </div>
</template>
<script>
  import {
    Input,
    Select,
    Option,
    Button
  } from 'iview';
  import {
    article_add
  } from '../../service';
  export default {
    components: {
      Input,
      Select,
      Option,
      Button
    },
    props: [],
    data() {
      return {
        title: '',
        content: '',
        autosize: {
          minRows: 11,
        },
        typeList: [{
            value: 'job',
            label: 'job',
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
    methods: {
      async articleAdd() {
        const {
          title,
          type,
          content
        } = this;
        if (!title) return;
        if (!type.length) return;
        if (!content) return;
        let res = await article_add(title, type[0], content);
        console.log(res);
      }
    }
  };

</script>
<style lang="scss" scoped>


</style>

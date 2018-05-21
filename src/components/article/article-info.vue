<template>
  <div>
    <Content :style="{padding: '24px', minHeight: '100%', background: '#fff'}">
      <Table border :columns="columns7" :data="ArticleList"></Table>
    </Content>
    <Modal v-model="See">
      <h4 v-if="See">标题</h4>
      <Input v-model="title" placeholder="Enter something..." clearable></Input>
      <h4 v-if="See">类型</h4>
      <Select v-model="type">
        <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <h4 v-if="See">内容</h4>
      <Input v-model="content" placeholder="Enter something..." clearable></Input>
    </Modal>
  </div>
</template>
<script>
  import {
    Content,
    Table,
    Modal,
    Input,
    Select,
    Option
  } from 'iview';
  import {
    article_list,
    article_remove,
    collection
  } from '../../service';
  export default {
    name: 'people-info',
    components: {
      Content,
      Table,
      Modal,
      Input,
      Select,
      Option
    },
    //	props: [],
    data() {
      return {
        See: false, // 查看弹窗显示
        index: undefined, // 模态框
        title: '', // 模态框标题默认空字符串
        content: '', // 模态框内容默认空字符串
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
        type: '',
        columns7: [{
            title: '文章id',
            key: 'article_id',
            align: 'center',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.article_id
              );
            },
          },
          {
            title: '作者id',
            key: 'author_id',
            align: 'center',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.author_id
              );
            },
          },
          {
            title: '作者',
            key: 'loginname',
            align: 'center',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.author.loginname
              );
            },
          },
          {
            title: '创建时间',
            key: 'create_at',
            align: 'center',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.create_at
              );
            },
          },
          {
            title: '类型',
            key: 'tab',
            align: 'center',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.tab
              );
            },
          },
          {
            title: '内容',
            key: 'content',
            align: 'center',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.content
              );
            },
          },
          {
            title: '标题',
            key: 'title',
            align: 'center',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.title
              );
            },
          },
          {
            title: '最后回复时间',
            key: 'last_reply_at',
            align: 'center',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.last_reply_at
              );
            },
          },
          {
            title: '精华',
            key: 'good',
            align: 'center',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.good
              );
            },
          },
          {
            title: '置顶',
            key: 'reply_count',
            align: 'center',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.top
              );
            },
          },
          {
            title: '点赞数量',
            key: 'visit_count',
            align: 'center',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.visit_count
              );
            },
          },
          {
            title: '头像地址',
            key: 'avatar_url',
            align: 'center',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.author.avatar_url
              );
            },
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              // console.log(params);
              return h('div', [
                h(
                  'a', {
                    props: {
                      size: 'small',
                      shape: 'circle',
                    },
                    style: {
                      marginRight: '5px',
                    },
                    on: {
                      click: () => {
                        this.collect(params.row.article_id);
                      },
                    },
                  },
                  '收藏'
                ),
                h(
                  'a', {
                    props: {
                      type: 'error',
                      size: 'small',
                    },
                    style: {
                      marginRight: '5px',
                    },
                    on: {
                      click: () => {
                        this.SeeShow(params);
                      },
                    },
                  },
                  '编辑'
                ),
                h(
                  'a', {
                    props: {
                      type: 'error',
                      size: 'small',
                    },
                    on: {
                      click: () => {
                        this.removeArticle(params.row.article_id);
                      },
                    },
                  },
                  '删除'
                ),
              ]);
            },
          },
        ],
        ArticleList: [],
      };
    },
    computed: {},
    methods: {
      SeeShow(params) {
        console.log(params)
        let index = params.index;
        this.title = this.ArticleList[index].title;
        this.type = this.ArticleList[index].type;
        this.content = this.ArticleList[index].content;
        this.See = true;
      },
      // 文章收藏
      async collect(article_id) {
        let res = await collection(article_id);
        console.log(res);
      },
      // 文章删除
      async removeArticle(article_id) {
        console.log(article_id)
        let res = await article_remove(article_id);
        if (res.status === 1) {
          this.ArticleList = res.data;
        }
      },
    },
    // 文章列表
    async mounted() {
      let res = await article_list();
      if (res.status === 1) {
        this.ArticleList = res.data;
      }
    },
  };

</script>
<style lang="scss" scoped>


</style>

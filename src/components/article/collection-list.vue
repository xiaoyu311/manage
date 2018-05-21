<template>
  <div>
    <Content :style="{padding: '24px', minHeight: '100%', background: '#fff'}">
      <Table border :columns="columns7" :data="ArticleList"></Table>
    </Content>
    <Modal v-model="See">
      <h3 v-if="index !== undefined">{{ArticleList[index].title}}</h3>
      <h4 v-if="index !== undefined">{{ArticleList[index].type}}</h4>
      <h5 v-if="index !== undefined">{{ArticleList[index].content}}</h5>
    </Modal>
  </div>
</template>
<script>
  import {
    Content,
    Table,
    Modal
  } from 'iview';
  import {
    collection_list
  } from '../../service';
  export default {
    name: 'people-info',
    components: {
      Content,
      Table,
      Modal
    },
    //	props: [],
    data() {
      return {
        See: false, // 查看弹窗显示
        index: undefined, // 模态框
        columns7: [{
            title: '收藏用户id',
            key: 'user_id',
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
                params.row.user_id
              );
            },
          },
          {
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
            title: '创建时间',
            key: 'creat_at',
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
                params.row.creat_at
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
                  '查看 '
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
      SeeShow() {
        this.See = true;
      },
    },
    // 文章列表
    async mounted() {
      let res = await collection_list();
      if (res.status === 1) {
        this.ArticleList = res.data;
      }
    },
  };

</script>
<style lang="scss" scoped>


</style>


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
    article_list,
    article_remove,
    collection
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
            title: '作者',
            key: 'username',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                params.row.username
              );
            },
          },
          {
            title: '标题',
            key: 'title',
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
            title: '类型',
            key: 'type',
            render: (h, params) => {
              let type = '';
              params.row.type.forEach(item => {
                if (!type) {
                  type = item;
                } else {
                  type = type + ',' + item;
                }
              });
              return h(
                'h4', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                },
                type
              );
            },
          },
          {
            title: '内容',
            key: 'content',
            render: (h, params) => {
              return h('h5', {
                style: {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }
              }, params.row.content);
            },
          },
          {
            title: 'star',
            key: 'star',
            render: (h, params) => {
              return h('h5', {
                style: {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }
              }, params.row.star);
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
                        this.SeeInfo(params.index);
                      },
                    },
                  },
                  '查看'
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
                        this.removeArticle(params);
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
      async SeeInfo(index) {
        let res = await collection(10);
        console.log(res);
        // this.See = true;
        // this.index = index;
      },
      async removeArticle(article_id) {
        let res = await article_remove(article_id);
        if (res.status === 1) {
          this.ArticleList = res.data;
        }
      },
    },
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

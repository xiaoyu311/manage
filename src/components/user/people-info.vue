<template>
  <div>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <Table border :columns="columns7" :data="UserList"></Table>
    </Content>
  </div>
</template>
<script>
  import {
    Content,
    Table
  } from 'iview';
  import {
    info
  } from '../../service';
  export default {
    name: 'people-info',
    components: {
      Content,
      Table,
    },
    props: [],
    data() {
      return {
        columns7: [{
            title: '用户名',
            key: 'username',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }
                },
                params.row.username
              );
            },
          },
          {
            title: 'user_id',
            key: 'id',
            render: (h, params) => {
              return h(
                'h4', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }
                },
                params.row.user_id
              );
            },
          },
          {
            title: '密码',
            key: 'password',
            render: (h, params) => {
              return h(
                'h4', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }
                },
                params.row.password
              );
            },
          },
          {
            title: '搜藏文章',
            key: 'collections',
            render: (h, params) => {
              let collections = '';
              params.row.collections.forEach(item => {
                if (!collections) {
                  collections = item;
                } else {
                  collections = collections + ',' + item;
                }
              });
              return h(
                'h4', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }
                },
                collections ? collections : '暂无收藏'
              );
            },
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h(
                  'a', {
                    style: {
                      marginRight: '5px',
                    },
                    on: {
                      click: () => {
                        this.show(params.index);
                      },
                    },
                  },
                  '查看'
                ),
                h(
                  'a', {
                    style: {
                      marginRight: '5px',
                    },
                    on: {
                      click: () => {
                        this.remove(params.index);
                      },
                    },
                  },
                  '编辑'
                ),
                h(
                  'a', {
                    on: {
                      click: () => {
                        this.remove(params.index);
                      },
                    },
                  },
                  '删除'
                ),
              ]);
            },
          },
        ],
        UserList: [],
      };
    },
    computed: {},
    methods: {
      show(index) {},
      remove(index) {
        this.data6.splice(index, 1);
      },
    },
    async mounted() {
      let res = await info();
      if (res.status === 1) {
        this.UserList = res.data;
      }
      console.log(res);
    },
  };

</script>
<style lang="scss" scoped>


</style>

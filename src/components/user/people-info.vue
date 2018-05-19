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
            title: '用户id',
            key: 'user_id',
            render: (h, params) => {
              return h(
                'h3', {
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
            title: '用户名',
            key: 'loginname',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }
                },
                params.row.loginname
              );
            },
          },
          {
            title: '密码',
            key: 'password',
            render: (h, params) => {
              return h(
                'h3', {
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
            title: '头像链接',
            key: 'avatar_url',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }
                },
                params.row.avatar_url
              );
            },
          },
          {
            title: '创建时间',
            key: 'create_at',
            render: (h, params) => {
              return h(
                'h3', {
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }
                },
                params.row.create_at
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

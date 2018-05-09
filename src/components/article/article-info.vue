<template>
  <div>
    <Content :style="{padding: '24px', minHeight: '100%', background: '#fff'}">
      <Table border :columns="columns7" :data="data6"></Table>
    </Content>
  </div>
</template>
<script>
  import {
    Content,
    Table
  } from 'iview';
  import {
    article_list
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
            title: 'Name',
            key: 'name',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person',
                  },
                }),
                h('strong', params.row.name),
              ]);
            },
          },
          {
            title: 'Age',
            key: 'age',
          },
          {
            title: 'Address',
            key: 'address',
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h(
                  'Button', {
                    domProps: {
                      class: 'ivu-btn ivu-btn-primary ivu-btn-small',
                      size: 'small',
                      shape: 'circle',
                    },
                    style: {
                      marginRight: '5px',
                    },
                    on: {
                      click: () => {
                        this.show(params.index);
                      },
                    },
                  },
                  'View'
                ),
                h(
                  'Button', {
                    props: {
                      type: 'error',
                      size: 'small',
                    },
                    on: {
                      click: () => {
                        this.remove(params.index);
                      },
                    },
                  },
                  'Delete'
                ),
              ]);
            },
          },
        ],
        data6: [{
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
          },
        ],
      };
    },
    computed: {},
    methods: {
      show(index) {
        // console.log(this)
        Modal.info({
          title: 'User Info',
          content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index]
					.address}`,
        });
      },
      remove(index) {
        this.data6.splice(index, 1);
      },
    },
    beforeCreate() {},
    created() {},
    beforeUpdate() {},
    updated() {},
    beforeMount() {},
    async mounted() {
      let res = await article_list();
      console.log(res);
    },
  };

</script>
<style lang="scss" scoped>


</style>

<template>
  <div class="layout">
    <Layout style="min-height: 100%;">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            Item 1
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            Item 2
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            Item 3
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu style="min-height: 100%;" @on-select="seeInfo" active-name="1-2" theme="dark" width="auto" :open-names="['1']">
            <MenuGroup>
              <MenuItem name="1">
              <Icon type="document-text"></Icon>
              首页
              </MenuItem>
            </MenuGroup>
            <Submenu name="1">
              <template slot="title">
                <Icon size="18" type="ios-people-outline"></Icon>
                用户管理
              </template>
              <MenuItem name="people">用户信息</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon size="18" type="ios-book"></Icon>
                文章管理
              </template>
              <MenuItem name="articleadd">文章添加</MenuItem>
              <MenuItem name="2-2">编辑文章</MenuItem>
              <MenuItem name="articleinfo">文章信息</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem name="1">Home</BreadcrumbItem>
            <BreadcrumbItem name="2">Components</BreadcrumbItem>
            <BreadcrumbItem name="3">Layout</BreadcrumbItem>
          </Breadcrumb>
          <router-view></router-view>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import {
    Layout,
    Sider,
    Content,
    Header,
    Footer,
    Menu,
    Submenu,
    Icon,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Table,
    Modal,
    Button,
    MenuGroup,
  } from 'iview';
  export default {
    components: {
      Layout,
      Sider,
      Content,
      Header,
      Footer,
      Menu,
      Submenu,
      Icon,
      MenuItem,
      Breadcrumb,
      BreadcrumbItem,
      Table,
      Modal,
      Button,
      MenuGroup,
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
                      shape: 'circle'
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
      // 点击查看不同的数据
      seeInfo(name) {
        this.$router.push(`/${name}`);
      }
    },
  };

</script>
<style lang="scss" scoped>
  .layout {
    flex: 1;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

</style>

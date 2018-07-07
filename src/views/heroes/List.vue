
<template>
     <div >
          <h2 class="sub-header">英雄列表</h2>
             <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>序号</th>
                  <th>名称</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
      
                <tr :key="item.id" v-for="(item, index) in list">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.gender }}</td>
                  
                  <td>
                    <router-link :to="{name: 'heroedit', params: {id: item.id}}">编辑</router-link>
                    &nbsp;&nbsp;
                    <a href="#" @click.prevent="handelDelete(item.id)">删除</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</template>

<script>
// import axios from 'axios';

export default {
    data() {
        return {
            list:[]
        }
    },
    created() {
        this.loadData();
    },
    methods: {
        loadData() {
            this.$http.get('heroes')
                .then((res) => {
                    const {status, data} = res;
                    if (status === 200) {
                      this.list = data;
                    }
                })
        },
        handelDelete(id) {
            if (!confirm('确认要删除吗?') ) {
                return;
            }
            this.$http.delete('heroes/' + id)
                .then((res) => {
                    if(res.status === 200) {
                        this.loadData();
                    }else {
                        laert('删除失败');
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
};

</script>

<style>

</style>


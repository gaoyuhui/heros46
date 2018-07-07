<template>
    <div>
    <h2 class="sub-header">修改</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="exampleInputEmail1" placeholder="name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="exampleInputPassword1" placeholder="sex">
          </div>
          <button type="submit" class="btn btn-success" @click="handelEdit" >添加</button>
        </form>
</div>
</template>

<script>
// import axios from 'axios';
export default {
    data() {
        return{
            formData:{
                name: '',
                gender: ''
            },
            heroId: -1
          
        }
    },
    created() {
        this.heroId = this.$route.params.id;
        this.loadData();
    },
    methods: {
        loadData() {
            // console.log(this.heroId);
            this.$http.get(`heroes/${this.heroId}`)
                .then((res) => {
                    if(res.status === 200) {
                        this.formData = res.data;
                    }
                })
            
        },
        handelEdit() {
            this.$http.put(`heroes/${this.heroId}`, this.formData)
                .then((res) => {
                    if(res.status === 200) {
                        this.$router.push({name: 'heroes'});
                    }else {
                        alert('修改失败');
                    }
                })
        }
    },
}
</script>

<style>

</style>

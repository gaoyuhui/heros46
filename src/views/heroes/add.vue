
<template>
<div>
    <h2 class="sub-header">Add Hero</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="exampleInputEmail1" placeholder="name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="exampleInputPassword1" placeholder="sex">
          </div>
          <button type="submit" class="btn btn-success" @click="handelAdd" >添加</button>
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
            }
          
        }
    },
    methods: {
        handelAdd() {
            this.$http.post('heroes', this.formData)
                .then((res) => {
                    if(res.status === 201) {
                        this.$router.push({name: 'heroes'});
                    }else {
                        alert('添加失败')
                    }
                })
        }
    }
}
</script>

<style>

</style>

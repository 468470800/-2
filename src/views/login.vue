<template>
    <div class="Signin">
      <div class="card-mb">
          <h3 class="text-center">UNI-ADMIN</h3>
      </div>
        <div class="card-body">
            <el-form :model="ruleForm" status-icon :rules="rules"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item  prop="username">
                    <el-input v-model="ruleForm.username" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input type="password" v-model="ruleForm.password"  placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="el-bt" size="400px" type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import Login from "../api/login"
    export default {
        name: '',
        props: {},
        components: {},
        data() {
            return {
                ruleForm: {
                    username:'',
                    password: '',
                },
                rules: {
                    name: [
                        { required: true, message: "请输入用户名", trigger: "blur" },
                    ],
                    pass: [
                        { required: true, message: "请输入密码", trigger: "blur" },
                    ]
                }
            };
        },
        computed: {},
        watch: {},
        methods: {
               submitForm(forName){
                   console.log(forName);
                this.$refs[forName].validate((valid)=>{
                    console.log(valid);
                    if(valid){
                    //登录接口
                        Login.login(this.ruleForm).then(res=>{
                            console.log("111");
                            console.log(res)//打印当前
                        }).catch(err=>{//失败回调
                            console.log(err) 
                        })
                    }else{
                        console.log("error submit");
                        return false;
                    }
                })
               }
        },
        created() {

        },
        mounted() {

        },
        beforeDestroy() {

        }
    };
</script>
<style>
    .Signin{
        width: 500px;
        height: 300px;
        border: 1px solid #d7d7d7;
        color: #6c757d;
        border-radius: 3px;
        margin: 150px auto;
    }
    .card-mb{
        text-align: center;
        font-size: 23px;
        font-weight: lighter;
        border-bottom: 1px solid #d7d7d7;
        height: 40px;
        line-height: 20px;
    }

    .card-body{
        padding-top: 25px;
        width: 80%;
        margin: 0 1%;
    }

    .el-bt{
        width: 100%;
        background-color: teal;
    }




</style>

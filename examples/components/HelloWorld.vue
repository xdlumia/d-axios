/*
 * @Author: web.王晓冬
 * @Date: 2020-03-19 10:29:17
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-08-11 09:56:52
 * @Description: file content
 */
<template>
  <div>
    <button>我在这里测试</button>

  </div>
</template>

<script>
export default {
  name: "msg",
  props: {
    msg: String
  },
  data() {
    return {
    };
  },
  components: {  },
  computed: {},
  methods: {
    cancel() {},
    submit(form, done) {
      if (!form.key0) {
        return;
      }
      // 对form数据重新处理
      form.aaa = 1;
      done();
    }
  },
  created() {

    this.$api.mockGetUser().then(res=>{
      console.log(res);
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: 10px;
}
</style>

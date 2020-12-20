<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>自然语言处理 DEMO</h3>
    <div class="">
      <div class="">
        <textarea class="textarea" cols="30" rows="2" v-model="text"></textarea> 
        <div><input type="button" :value="label" @click="parse" :disabled="btnDisabled"></div>
      </div>
      <div class="">
        <pre cols="30" rows="10">{{output}}</pre>
      </div>
    </div>
    <h3>人工智能诊断 DEMO</h3>
    <div>WIP</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      label: '解析',
      text: '最近有点咳嗽，还有点流鼻涕，但不发烧',
      output: '',
      btnDisabled: false
    }
  },
  methods: {
    parse() {
      this.btnDisabled = true
      this.output = ''
      this.label = 'Loading...'
      axios.post('/api/nlp', {
        text: this.text
      }).then(r => {
        this.output = JSON.stringify(r.data, null, 2)
      }).catch(error => {
        if (error.response) {
          if (error.response.status === 429) {
            this.output = '请求太频繁，请稍后再试'
          } else {
            this.output = error.response.data
          }
        } else {
          this.output = error.message
        }
      }).then(() => {
        this.btnDisabled = false
        this.label = '解析'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 1em 0;
  line-height: 2em;
  padding-left: 10px;
  background: #ffd;
}

a {
  color: #42b983;
}

.textarea {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

pre {
  padding: 10px;
  border-radius: 5px;
  background: #efefef;
}
</style>

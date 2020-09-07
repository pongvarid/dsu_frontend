 <template>
  <div>
    <h1>Hello Admin</h1>
  </div>
</template>

    <script>
import {sync,call} from 'vuex-pathify'
export default {
  name: "Root",
  /*-------------------------ประกาศ components ---------------------------------------*/
  components: {},
  /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
  props: {},
  /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
  data() {
    return {
      txt: "Hello World",
    };
  },
  /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
  mounted: async function () {
    /**** เรียกใช้ methods ชื่อ load() */
    await this.load();
  },
  /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
  async beforeRouteEnter(to, from, next) {
    next();
  },
  /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
  computed: {
    ...sync('test/*')
  },
  /*-------------------------Methods------------------------------------------*/
  methods: {
    ...call('test/*'),
    /******* Methods default run ******/
    load: async function () {
      await this.testApi();
    },
  },
};
</script>
<style lang='postcss' scoped>
</style>
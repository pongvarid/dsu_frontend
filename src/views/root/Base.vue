 <template>
  <div >
    <Navbar/>

    <router-view />
 <Footers />
  </div>
</template>

    <script>
    import Navbar from '@/components/share/Navbar';
    import Footers from '@/components/share/Footer';
export default {
  name: "Root",
  /*-------------------------ประกาศ components ---------------------------------------*/
  components: {
    Navbar,Footers
  },
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
  computed: {},
  /*-------------------------Methods------------------------------------------*/
  methods: {
    /******* Methods default run ******/
    load: async function () {},
  },
};
</script>
<style>
 

.vs-select__label {
    font-size: 16px !important;
}

.vs-select-content {
    max-width: 100% !important;
    ;
}
</style>
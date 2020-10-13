<template>
<footer class="footer container_custom">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="footer_container d-flex flex-md-row flex-column align-items-center justify-content-md-start justify-content-center">
                    <div class="copyright order-md-1 order-2">
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        Copyright &copy;
                        2020
                          by <a href="https://www.up.ac.th/th/" target="_blank">University of Phayao</a>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    </div>
                    <nav class="footer_nav ml-md-auto order-md-2 order-1">
                        <ul class="d-flex flex-row align-items-center justify-content-start">
                            <li @click="$router.push('/')" ><a href="#">หน้าแรก</a></li>
                            <li><a @click="$router.push('/about')" href="#">หอพัก</a></li>
                            <li><a @click="$router.push('/about')" href="#">โซนแผนที่</a></li>
                            <li><a @click="$router.push('/about')" href="#">เกี่ยวกับ</a></li>
                            <!-- <li><a href="#">Contact</a></li> -->
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {

            txt: 'Hello World'

        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    mounted: async function () {
        /**** เรียกใช้ methods ชื่อ load() */
        await this.load();
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>

<style lang='postcss' scoped>

</style>

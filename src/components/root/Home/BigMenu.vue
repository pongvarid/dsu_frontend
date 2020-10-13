<template>
<div>
    <div class="super_overlay"></div>

    <!-- Home -->

    <div class="home"> 
        
        <!-- Home Slider -->
        <div class="bgimg w3-display-container w3-text-white">
            <div class="w3-display-middle w3-jumbo">
                <div class="home_content text-center">
                    <div class="home_title">
                        <h1>ฐานข้อมูลหอพักเอกชน</h1>
                        <p class="w3-text-white w3-xlarge w3-hide-small">บริเวณหน้า มหาวิทยาลัยพะเยา</p>
                    </div>
                    <div class="search_form_container">
                        <form @submit.prevent="getoDorm()" class="search_form" id="search_form">
                            <div class="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-sm-between">
                                <input v-model="name" type="text" class="search_input" placeholder="ชื่อหอพักที่คุณ ค้นหา?" required="required">
                                <button class="search_button">ค้นหา</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="categories">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="categories_container d-flex flex-md-row flex-column align-items-start justify-content-start">

                        <!-- Category -->
                        <div class="category text-center">
                            <a href="#" @click="$router.push('/dorm')">
                                <div class="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                                    <div class="cat_icon"><i style="font-size:36px;" class="em em-department_store" aria-role="presentation" aria-label="DEPARTMENT STORE"></i></div>

                                    <div class="cat_title">หอพัก</div>
                                </div>
                            </a>
                        </div>

                        <!-- Category -->
                        <div class="category text-center">
                            <a href="#" @click="$router.push('/dorm')">
                                <div class="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                                    <div class="cat_icon">
                                        <i style="font-size:36px;" class="em em-house_with_garden" aria-role="presentation" aria-label="HOUSE WITH GARDEN"></i>
                                    </div>
                                    <div class="cat_title">ทาวน์เฮาท์ / ทาวน์โฮม</div>
                                </div>
                            </a>
                        </div>

                        <!-- Category -->
                        <div class="category text-center">
                            <a href="#" @click="$router.push('/dorm')">
                                <div class="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                                    <div class="cat_icon">
                                        <i style="font-size:36px;" class="em em-house_buildings" aria-role="presentation" aria-label=""></i>
                                    </div>
                                    <div class="cat_title">คอนโด</div>
                                </div>
                            </a>
                        </div>

                        <!-- Category -->
                        <div class="category text-center">
                            <a href="#" @click="$router.push('/dorm')">
                                <div class="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                                    <div class="cat_icon"><i style="font-size:36px;" class="em em-house" aria-role="presentation" aria-label="HOUSE BUILDING"></i>
                                    </div>
                                    <div class="cat_title">บ้านพัก</div>
                                </div>
                            </a>
                        </div>

                        <!-- Category -->
                        <div class="category text-center">
                            <a href="#" @click="$router.push('/dorm')">
                                <div class="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                                    <div class="cat_icon">
                                        <i style="font-size:36px;" class="em em-hotel" aria-role="presentation" aria-label="HOTEL"></i>
                                    </div>
                                    <div class="cat_title">อาคารพาณิชย์</div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "Root",
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {},
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {},
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            name:'',
            txt: "Hello World",
            scrollPosition: null
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
       async getoDorm(){
           await this.$router.push(`/dorm?name=${this.name}`)
       },
        /******* Methods default run ******/
        load: async function () {},
    },
};
</script>

<style scoped>
.bgimg {
    background-image: url('https://www.img.in.th/images/c5f4c362dd472dd84fb07324b7c7afcb.jpg');
    min-height: 100%;
    background-position: center;
    background-size: cover;
}
</style>

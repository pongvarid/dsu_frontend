<template>
 
    <div class="food container_custom">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section_title text-center">
                        <h1>บริการอื่นๆ หน้า มหาวิทยาลัย พะเยา</h1>
                    </div><br><br><br>
                    <div class="container row">

                        <!-- Grid Item -->
                        <div class="grid-item grid_large">
                            <div class="food_item">
                                <div class="food_item_tag"><a href="#">7-11</a></div>
                                <div class="background_image" style="background-image:url('https://www.img.in.th/images/58c2ce79e72d1588a6cf16e839196a3e.png')">
                                </div>
                            </div>
                        </div>

                        <!-- Grid Item -->
                        <div class="grid-item grid_small">
                            <div class="food_item">
                                <div class="food_item_tag"><a href="#">TESCO </a></div>
                                <div class="background_image" style="background-image:url('https://www.img.in.th/images/1a01aa99affe3ea90c2c152e320836e5.png')">
                                </div>
                            </div>
                        </div>

                        <!-- Grid Item -->
                        <div class="grid-item grid_medium">
                            <div>
                                <div class="grid_half">
                                    <div class="food_item">
                                        <div class="food_item_tag"><a href="#">Freshmart</a></div>
                                        <div class="background_image" style="background-image:url('https://www.img.in.th/images/40e30ea93f0539015d2fedd649becb9d.png')"></div>
                                    </div>
                                </div>
                                <div class="grid_half">
                                    <div class="food_item">
                                        <div class="food_item_tag"><a href="#">เจริญภัณฑ์</a></div>
                                        <div class="background_image" style="background-image:url('https://www.img.in.th/images/ab030fda327535a9e5fffefd56c4d47e.png')"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Grid Item -->
                        <div class="grid-item grid_medium">
                            <div class="food_item">
                                <div class="food_item_tag"><a href="#">กาดหลุม</a></div>
                                <div class="background_image" style="background-image:url('https://www.img.in.th/images/f78591a6d0e64e5a29434943419d5bff.png')">
                                </div>
                            </div>
                        </div>

                        <!-- Grid Item -->
                        <div class="grid-item grid_small">
                            <div class="food_item">
                                <div class="food_item_tag"><a href="#">กาดเขียว</a></div>
                                <div class="background_image" style="background-image:url('https://www.img.in.th/images/9fb24efc457a5ff3a56912069d1850d0.png')">
                                </div>
                            </div>
                        </div>

                        <!-- Grid Item -->
                        <div class="grid-item grid_large">
                            <div class="food_item">
                                <div class="food_item_tag"><a href="#">ตลาดสินเจริญ</a></div>
                                <div class="background_image" style="background-image:url('https://www.img.in.th/images/90e0643a5a91f09664078c7c28e1f11a.png')">
                                </div>
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

<style lang='postcss' scoped>
</style>

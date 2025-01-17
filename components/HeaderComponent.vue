<template>
    <header class="header" ref="header">
        <div class="container">
            <nav>
                <ul class="gnav">
                    <li v-on:mouseover="changeHoverHeaderId(0)" v-on:click="scroll()" class="gnav-item">
                        <NuxtLink class="gnav-item1" to="/"> Home </NuxtLink>
                    </li>
                    <li v-on:mouseover="changeHoverHeaderId(1)" v-on:click="scroll()" class="gnav-item">
                        <NuxtLink class="gnav-item2" to="/about"> About </NuxtLink>
                    </li>
                    <li v-on:mouseover="changeHoverHeaderId(2)" v-on:click="scroll()" class="gnav-item">
                        <NuxtLink class="gnav-item3" to="/works"> Works </NuxtLink>
                    </li>
                    <li v-on:mouseover="changeHoverHeaderId(3)" v-on:click="scroll()" class="gnav-item">
                        <NuxtLink class="gnav-item4" to="/reserch"> Reserch </NuxtLink>
                    </li>
                    <li v-on:mouseover="changeHoverHeaderId(4)" v-on:click="scroll()" class="gnav-item">
                        <NuxtLink class="gnav-item5" to="/contact"> Contact </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        methods:{
            changeHoverHeaderId(hover_id){
                this.$emit('change-header-hover', hover_id)
            },
            scroll(){
                window.scrollTo({top: 900, left: 0, behavior: "smooth"}); 
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        .container {
            margin-right: 14%;
            margin-left: 14%;
            .gnav {
                display: flex;
                justify-content: space-between;
                font-size: 20px;
                padding: 10px;
                .gnav-item{
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 16px;
                    .gnav-item1{
                        display: block;
                        position: relative;
                        text-align: center;
                        font-weight: bold;
                        color: #fff;
                        text-decoration: none;
                        padding-left: 40px;
                    };
                    .gnav-item1::before{
                        content: "";
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        top: 30%;
                        right: 70px;
                        transform: translateY(-50%);
                        background: #fff;
                        mask: url("assets/home.svg") no-repeat center center / contain;
                        -webkit-mask: url("assets/home.svg") no-repeat center center / contain;
                    }
                    .gnav-item1:hover {
                        color: #00FFFF;
                    }
                    .gnav-item1:hover::before {
                        background: #00FFFF;
                    }

                    .gnav-item2{
                        display: block;
                        position: relative;
                        text-align: center;
                        font-weight: bold;
                        color: #fff;
                        text-decoration: none;
                        padding-left: 40px;
                    };
                    .gnav-item2::before{
                        content: "";
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        top: 50%;
                        right: 70px;
                        transform: translateY(-50%);
                        background: #fff;
                        mask: url("assets/sushi.svg") no-repeat center center / contain;
                        -webkit-mask: url("assets/sushi.svg") no-repeat center center / contain;
                    }
                    .gnav-item2:hover {
                        color: #00FFFF;
                    }
                    .gnav-item2:hover::before {
                        background: #00FFFF;
                    }

                    .gnav-item3{
                        display: block;
                        position: relative;
                        text-align: center;
                        font-weight: bold;
                        color: #fff;
                        text-decoration: none;
                        padding-left: 40px;
                    };
                    .gnav-item3::before{
                        content: "";
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        top: 50%;
                        right: 70px;
                        transform: translateY(-50%);
                        background: #fff;
                        mask: url("assets/folder.svg") no-repeat center center / contain;
                        -webkit-mask: url("assets/folder.svg") no-repeat center center / contain;
                    }
                    .gnav-item3:hover {
                        color: #00FFFF;
                    }
                    .gnav-item3:hover::before {
                        background: #00FFFF;
                    }

                    .gnav-item4{
                        display: block;
                        position: relative;
                        text-align: center;
                        font-weight: bold;
                        color: #fff;
                        text-decoration: none;
                        padding-left: 30px;
                    };
                    .gnav-item4::before{
                        content: "";
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        top: 50%;
                        right: 90px;
                        transform: translateY(-50%);
                        background: #fff;
                        mask: url("assets/reserch.svg") no-repeat center center / contain;
                        -webkit-mask: url("assets/reserch.svg") no-repeat center center / contain;
                    }
                    .gnav-item4:hover {
                        color: #00FFFF;
                    }
                    .gnav-item4:hover::before {
                        background: #00FFFF;
                    }

                    .gnav-item5{
                        display: block;
                        position: relative;
                        text-align: center;
                        font-weight: bold;
                        color: #fff;
                        text-decoration: none;
                        padding-left: 40px;
                    };
                    .gnav-item5::before{
                        content: "";
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        top: 50%;
                        right: 90px;
                        transform: translateY(-50%);
                        background: #fff;
                        mask: url("assets/mail.svg") no-repeat center center / contain;
                        -webkit-mask: url("assets/mail.svg") no-repeat center center / contain;
                    }
                    .gnav-item5:hover {
                        color: #00FFFF;
                    }
                    .gnav-item5:hover::before {
                        background: #00FFFF;
                    }
                }
                .gnav-item:hover {
                    border-bottom: 3px solid #00FFFF;
                    padding-bottom: 13px;
                }
                & li {
                    list-style:none;
                    padding: 20px;
                    margin-right: 4%;
                    margin-left: 4%;
                    text-decoration: none;
                }
                & a {
                    color: #000;
                    text-decoration: none;
                }
            }
        } 
    }
</style>
<template>
    <header class="header" ref="header">
        <div class="container">
            <nav>
                <!-- ヘッダー: アイコン ＋ ページ名 -->
                <ul class="gnav">
                    <li v-on:mouseover="changeHoverHeaderId(0)" v-on:click="scroll()" class="gnav-item">
                        <HomeIcon class="gnav-icon1" width="30" height="30" fill="#fff"></HomeIcon>
                        <NuxtLink class="gnav-item-str" to="/"> Home </NuxtLink>
                    </li>
                    <li v-on:mouseover="changeHoverHeaderId(1)" v-on:click="scroll()" class="gnav-item">
                        <AboutIcon class="gnav-icon2" width="30" height="30" fill="#fff"></AboutIcon>
                        <NuxtLink class="gnav-item-str" to="/about"> About </NuxtLink>
                    </li>
                    <li v-on:mouseover="changeHoverHeaderId(2)" v-on:click="scroll()" class="gnav-item">
                        <WorksIcon class="gnav-icon3" width="30" height="30" fill="#fff"></WorksIcon>
                        <NuxtLink class="gnav-item-str" to="/works"> Works </NuxtLink>
                    </li>
                    <li v-on:mouseover="changeHoverHeaderId(3)" v-on:click="scroll()" class="gnav-item">
                        <ReserchIcon class="gnav-icon4" width="30" height="30" fill="#fff"></ReserchIcon>
                        <NuxtLink class="gnav-item-str" to="/reserch"> Reserch </NuxtLink>
                    </li>
                    <li v-on:mouseover="changeHoverHeaderId(4)" v-on:click="scroll()" class="gnav-item">
                        <ContactIcon class="gnav-icon5" width="30" height="30" fill="#fff"></ContactIcon>
                        <NuxtLink class="gnav-item-str" to="/contact"> Contact </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    import HomeIcon from '~/assets/HomeIcon.vue';
    import AboutIcon from '~/assets/AboutIcon.vue';
    import WorksIcon from '~/assets/WorksIcon.vue';
    import ReserchIcon from '~/assets/ReserchIcon.vue';
    import ContactIcon from '~/assets/ContactIcon.vue';

    export default {
        components: {
            HomeIcon,
            AboutIcon,
            WorksIcon,
            ReserchIcon,
            ContactIcon,
        },
        methods: {
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
                .gnav-item {
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 16px;
                    .gnav-item-str {
                        display: block;
                        position: relative;
                        text-align: center;
                        font-weight: bold;
                        color: #fff;
                        text-decoration: none;
                        padding-left: 5px;
                    }
                    .gnav-icon1 {
                        margin-top: -5px;
                    }
                    .gnav-icon2 {
                        margin-top: -2px;
                        margin-right: 2px;
                    }
                    .gnav-icon3 {
                        margin-top: -3px;
                        margin-right: 1px;
                    }
                    .gnav-icon4 {
                        margin-top: -8px;
                        margin-right: -2px;
                    }
                    .gnav-icon5 {
                        margin-right: 4px;
                    }
                }
                .gnav-item:hover {
                    border-bottom: 3px solid #00FFFF;
                    padding-bottom: 13px;
                }
                .gnav-item:hover > * {
                    color: #00FFFF;
                    fill: #00FFFF;
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
<template>
    <header class="header">
        <div class="container">
            <nav>
                <!-- ヘッダー: アイコン ＋ ページ名 -->
                <ul class="gnav">
                    <li>
                        <NuxtLink v-on:mouseover="emit('change-header-hover', 0)" v-on:click="scroll()" class="gnav-item" to="/">
                            <HomeIcon class="gnav-icon1" width="3.4vw" height="3.4vh" fill="#fff"></HomeIcon>
                            <div class="gnav-item-str"> Home </div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink v-on:mouseover="emit('change-header-hover', 1)" v-on:click="scroll()" class="gnav-item" to="/about">
                            <AboutIcon class="gnav-icon2" width="3.4vw" height="3.4vh" fill="#fff"></AboutIcon>
                            <div class="gnav-item-str"> About </div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink v-on:mouseover="emit('change-header-hover', 2)" v-on:click="scroll()" class="gnav-item" to="/works">
                            <WorksIcon class="gnav-icon3" width="3.4vw" height="3.4vh" fill="#fff"></WorksIcon>
                            <div class="gnav-item-str"> Works </div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink v-on:mouseover="emit('change-header-hover', 3)" v-on:click="scroll()" class="gnav-item" to="/reserch">
                            <ReserchIcon class="gnav-icon4" width="3.4vw" height="3.4vh" fill="#fff"></ReserchIcon>
                            <div class="gnav-item-str"> Reserch </div>
                        </NuxtLink> 
                    </li>
                    <li> 
                        <NuxtLink v-on:mouseover="emit('change-header-hover', 4)" class="gnav-item" to="/contact">
                            <ContactIcon class="gnav-icon5" width="3.4vw" height="3.4vh" fill="#fff"></ContactIcon>
                            <div class="gnav-item-str" v-on:click="scroll()"> Contact </div>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
    import HomeIcon from '~/assets/HomeIcon.vue';
    import AboutIcon from '~/assets/AboutIcon.vue';
    import WorksIcon from '~/assets/WorksIcon.vue';
    import ReserchIcon from '~/assets/ReserchIcon.vue';
    import ContactIcon from '~/assets/ContactIcon.vue';
   
    const scrollY = ref(0);

    const emit = defineEmits<{
        'change-header-hover': number
    }>()

    const scroll = () => {
        let zoom_value=(window.outerWidth - 16) / window.innerWidth;
        window.scrollTo({top: window.innerHeight - 90 * zoom_value, left: 0, behavior: "smooth"}); 
    }

    const handleScroll = () => {
        scrollY.value = window.scrollY;
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
	});

</script>

<style lang="scss" scoped>
    .header {
        position: sticky;
        top: 0;
        height: 13vh;
        z-index: 30;
        pointer-events: auto;
        background-color: #000000;
        .container {
            margin-right: 14%;
            margin-left: 14%;
            .gnav {
                display: flex;
                justify-content: space-between;
                font-size: 0px;
                padding-top: 4.5vh;
                .gnav-item {
                    display: flex;
                    justify-content: space-between;
                    font-size: 1.40vw;
                    .gnav-item-str {
                        display: block;
                        position: relative;
                        text-align: center;
                        font-weight: bold;
                        color: #fff;
                        text-decoration: none;
                    }
                    .gnav-icon1 {
                    }
                    .gnav-icon2 {
                    }
                    .gnav-icon3 {
                    }
                    .gnav-icon4 {
                    }
                    .gnav-icon5 {
                    }
                }
                .gnav-item:hover > * {
                    color: #00FFFF;
                    fill: #00FFFF;
                }
                & li {
                    list-style:none;
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
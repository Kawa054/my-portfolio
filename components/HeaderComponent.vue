<template>
    <header class="header">
        <div class="container">
            <nav>
                <!-- ヘッダー: アイコン ＋ ページ名 -->
                <ul class="gnav">
                    <li v-on:mouseover="emit('change-header-hover', 0)" v-on:click="scroll()" class="gnav-item">
                        <HomeIcon class="gnav-icon1" width="3.4vw" height="3.4vh" fill="#fff"></HomeIcon>
                        <NuxtLink class="gnav-item-str" to="/"> Home </NuxtLink>
                    </li>
                    <li v-on:mouseover="emit('change-header-hover', 1)" v-on:click="scroll()" class="gnav-item">
                        <AboutIcon class="gnav-icon2" width="3.4vw" height="3.4vh" fill="#fff"></AboutIcon>
                        <NuxtLink class="gnav-item-str" to="/about"> About </NuxtLink>
                    </li>
                    <li v-on:mouseover="emit('change-header-hover', 2)" v-on:click="scroll()" class="gnav-item">
                        <WorksIcon class="gnav-icon3" width="3.4vw" height="3.4vh" fill="#fff"></WorksIcon>
                        <NuxtLink class="gnav-item-str" to="/works"> Works </NuxtLink>
                    </li>
                    <li v-on:mouseover="emit('change-header-hover', 3)" v-on:click="scroll()" class="gnav-item">
                        <ReserchIcon class="gnav-icon4" width="3.4vw" height="3.4vh" fill="#fff"></ReserchIcon>
                        <NuxtLink class="gnav-item-str" to="/reserch"> Reserch </NuxtLink>
                    </li>
                    <li v-on:mouseover="emit('change-header-hover', 4)" v-on:click="scroll()" class="gnav-item">
                        <ContactIcon class="gnav-icon5" width="3.4vw" height="3.4vh" fill="#fff"></ContactIcon>
                        <NuxtLink class="gnav-item-str" to="/contact"> Contact </NuxtLink>
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
        window.scrollTo({top: 800, left: 0, behavior: "smooth"}); 
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
                        margin-top: -5px;
                    }
                    .gnav-icon2 {
                        margin-top: -2px;
                    }
                    .gnav-icon3 {
                        margin-top: -3px;
                    }
                    .gnav-icon4 {
                        margin-top: -4px;
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
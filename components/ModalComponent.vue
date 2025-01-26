<script setup lang="ts">
    interface Props {
        imageName?: string|null;
        description?: string|null;
        modalTitle?: string|null;
    }
    const props = withDefaults(defineProps<Props>(), {
        imageName: null,
        description: null,
        modalTitle: null,
    });

    //imgのpathを生成する関数
    const generateImgPath = (fileName: string): string => {
        return new URL(`../assets/logo/${fileName}.png`, import.meta.url).href
    }

</script>

<template>
    <!-- teleportでネストされた DOM 構造から抜け出せるようにする -->
    <Teleport to="html, body">
        <div class="modal">
            <div class="modal-content">
                <span class="close" @click="$emit('close')">&times;</span>
                <div class="row-content">
                    <img :src="generateImgPath(imageName)">
                    <div class="modal-title">{{ modalTitle }}</div>
                    <div class="modal-separator"></div>
                </div>
                <div class="modal-description">{{ description }}</div>
                <div class="css-kanzenni-rikai" v-if="modalTitle === 'CSS'">CSS完全に理解したい</div>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
    .modal {
        position: fixed; 
        z-index: 999; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: hidden;
        background-color: rgb(0,0,0); 
        background-color: rgba(0,0,0,0.6); 
    }

    .modal-content {
        background-color: #fff;
        margin: 10% auto;
        border: 1px solid #888;
        width: 30%; 
        height: 60%;
		border-radius: 10px;
		border: 4px solid #000;
        .row-content {
            margin-top: 8%;
            display:flex;
            flex-flow: column;
            align-items: center;
            .modal-title{
                padding-top: 2%;
                padding-bottom: 2%;
                font-size: 23px;
            }
            .modal-separator{
                width: 80%;
                border-bottom: 4px solid #42a30a4d;
            }
        }
        .modal-description{
            margin: 12%;
            margin-top: 3%;
            margin-left: 14%;
            font-size: 20px;
        }
        .css-kanzenni-rikai{
            position: absolute;
            padding-left: 25%;
            color: rgb(255, 0, 0);
        }
    }

    img {
        width: 100px;
        height: 100px;
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        padding-right: 10px;
        padding-top: 3px;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
</style>
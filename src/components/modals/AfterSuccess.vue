<template>
    <div>
        <div class="flex mb-30px">
            <img class="check mr-5px" src="../../assets/modal/check_mark_icon.svg" alt="">
            <p class="msg">{{ props.content }}</p>
        </div>
        <button v-show="!close" class="know_btn" @click="emit('redirect-login')">我知道了</button>
        <button v-show="close" class="know_btn" @click="emit('close-modal')">回頁面</button>
    </div>
</template>
<script setup>
const props = defineProps({
  content: String,
  close:String | Boolean,
});
const emit = defineEmits(['redirect-login','close-modal']);

</script>
<style scoped>
.check {
    width: 18px;
    height: 18px;
}
.msg {
    color: #038800;
}

.know_btn {
    width: 100%;
    height: 40px;
    color: #ffffff;
    background-color: #CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}

.know_btn:hover {
    color: #CEB96E;
    background-color: #ffffff;
    border: 1px solid #CEB96E;
}
</style>
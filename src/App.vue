<template>
    <div>
        webpack cli test gittest
        <!-- v-model -->
        <p>v-model</p>
        <input type="text" v-model="message" />
        <p>{{ message }}</p>
        <!-- 手写v-model -->
        <input type="text" @input="handleInput" :value="message" />
        <p>{{ message }}</p>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            message: "Hello Vue!",
            mo: "你好",
        };
    },
    methods: {
        handleInput(e) {
            this.message = e.target.value;
        },
    },
};
</script>

<style lang="scss" scoped></style>

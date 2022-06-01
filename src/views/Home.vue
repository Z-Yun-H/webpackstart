<template>
    <div>
        {{ message }}
        <button @click="$router.push('./about')">关于页面</button>
        <button @click="goabout">跳转关于页面</button>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            message: "Hello Vue!",
        };
    },
    methods: {
        goabout() {
            this.$router.push("/about");
        },
    },
};
</script>

<style scoped></style>

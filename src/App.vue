<template>
    <div>
        webpack cli
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            message: "Hello Vue!",
        };
    },
};
</script>

<style lang="scss" scoped></style>

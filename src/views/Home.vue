<template>
    <div>
        <!-- 手写v-model 改变父组件 -->
        <div>
            {{ value }}
            home vue
        </div>
        <child v-model="value"></child>
        <button @click="$router.push('./about')">关于页面</button>
        <button @click="goabout">跳转关于页面</button>

        
    </div>
</template>

<script>
import child from "#/child.vue";
export default {
    name: "home",
    components: {
        child,
    },
    data() {
        return {
            value: "Hello Vue!",
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

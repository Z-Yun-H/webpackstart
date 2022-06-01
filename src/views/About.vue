<template>
    <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <router-link to="/">Go back home</router-link>
        <div></div>
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            message: "Hello Vue!",
        };
    },
};
</script>

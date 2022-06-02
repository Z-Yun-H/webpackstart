<template>
    <div>
        child
        <input :value="value" @input="$emit('input', $event.target.value)" />
    </div>
</template>
<script>
export default {
    name: "child",
    props: ["value"],
    data() {
        return {
            message: "Hello Vue!",
        };
    },
};
</script>

<template>
    <div class="header">
        <PrimaryButton>Test</PrimaryButton>
        <PrimaryButton><RouterLink to="/">Home</RouterLink></PrimaryButton>
        <PrimaryButton><RouterLink to="/login">Login/SignUp</RouterLink></PrimaryButton>
        <PrimaryButton>Find a Guild</PrimaryButton>
    </div>
</template>
<style scoped lang="scss"></style>
<script lang="ts">
import PrimaryButton from '../base/PrimaryButton.vue';
export default {
    components: {
        PrimaryButton,
    },
}
</script>
<template>
    <div id="kyorugui_panel">
        <UnderlinedTitle
            class="blue"
            title="Kyorugui"
            subtitle="Combat"
        />
    </div>
</template>

<script>
     import UnderlinedTitle      from "@/components/UnderlinedTitle.vue";

    export default {
        name: "KyoruguiPanel",
        components: {
            UnderlinedTitle
        }
    }
</script>

<style lang="scss">
    #kyorugui_panel {
        @extend %material-panel;
        @extend %section-container;
        background-color: $white-1;
        height: 20rem;
    }
</style>
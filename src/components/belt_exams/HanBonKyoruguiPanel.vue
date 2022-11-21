<template>
    <div id="han_bon_kyorugui_panel">
        <UnderlinedTitle
            class="blue"
            title="Han Bon Kyorugui"
            subtitle="Pas combat"
        />
    </div>
</template>

<script>
     import UnderlinedTitle      from "@/components/UnderlinedTitle.vue";

    export default {
        name: "HanBonKyoruguiPanel",
        components: {
            UnderlinedTitle
        }
    }
</script>

<style lang="scss">
    #han_bon_kyorugui_panel {
        @extend %material-panel;
        @extend %section-container;
        background-color: $white-1;
        height: 20rem;
    }
</style>
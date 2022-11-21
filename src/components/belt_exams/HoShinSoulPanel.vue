<template>
    <div id="ho_shin_soul_panel">
        <UnderlinedTitle
            class="blue"
            title="Ho shin soul"
            subtitle="Self defense"
        />
    </div>
</template>

<script>
    import UnderlinedTitle      from "@/components/UnderlinedTitle.vue";

    export default {
        name: "HoShinSoulPanel",
        components: {
            UnderlinedTitle
        }
    }
</script>

<style lang="scss">
    #ho_shin_soul_panel {
        @extend %material-panel;
        @extend %section-container;
        background-color: $white-1;
        height: 20rem;
    }
</style>
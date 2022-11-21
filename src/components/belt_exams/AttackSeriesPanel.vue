<template>
    <div id="attack_series_panel">
        <UnderlinedTitle
            class="blue"
            title="Enchainements"
        />
    </div>
</template>

<script>
    import UnderlinedTitle      from "@/components/UnderlinedTitle.vue";

    export default {
        name: "Attack_series_Panel",
        components: {
            UnderlinedTitle
        }
    }
</script>

<style lang="scss">
    #attack_series_panel {
        @extend %material-panel;
        @extend %section-container;
        background-color: $white-1;
        height: 20rem;
    }
</style>
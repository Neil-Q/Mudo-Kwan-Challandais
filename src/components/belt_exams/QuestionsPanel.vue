<template>
    <div id="Questions_panel">
        <UnderlinedTitle
            class="blue"
            title="Questions"
        />

        <div class="marking">
            xx pt / xxx pt 
        </div>
    </div>
</template>

<script>
     import UnderlinedTitle      from "@/components/UnderlinedTitle.vue";

    export default {
        name: "QuestionsPanel",
        components: {
            UnderlinedTitle
        }
    }
</script>

<style lang="scss">
    #Questions_panel {
        @extend %material-panel;
        @extend %section-container;
        background-color: $white-1;
    }
</style>
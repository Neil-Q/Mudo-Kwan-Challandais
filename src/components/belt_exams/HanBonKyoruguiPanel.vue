<template>
    <div id="han_bon_kyorugui_panel">
        <UnderlinedTitle
            class="blue"
            title="Han Bon Kyorugui"
            subtitle="Pas combat"
        />

        <div class="marking">
            xx pt / xxx pt 
        </div>

        <div id="han_bon_container">
            <div class="han_bon">
                <div class="illustration">supérieur</div>
                <div class="number">2</div>
            </div>

            <div class="han_bon">
                <div class="illustration">inférieur</div>
                <div class="number">2</div>
            </div>

            <div class="han_bon" v-show="this.keup <= 6">
                <div class="illustration">sauté</div>
                <div class="number">1</div>
            </div>
        </div>
    </div>
</template>

<script>
     import UnderlinedTitle      from "@/components/UnderlinedTitle.vue";

    export default {
        name: "HanBonKyoruguiPanel",
        components: {
            UnderlinedTitle
        },
        props: {
            keup: {
                type: Object,
                required: true
            },
        },
    }
</script>

<style lang="scss">
    #han_bon_kyorugui_panel {
        @extend %material-panel;
        @extend %section-container;
        background-color: $white-1;
    }

    #han_bon_container {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        margin-top: clamp(3rem, 10vw, 5rem);
        padding-bottom: clamp(3rem, 10vw, 5rem);
        
        .han_bon {
            @extend %flex-center;
            flex-direction: row-reverse;
            column-gap: 3rem;
        }

        .number {
            font-size: $font-sz-xxxl;
            font-weight: bold;
        }

        .illustration {
            @extend %material-panel;
            @extend %flex-center;
        
            width: clamp(8rem, 24vw, 12rem);
            aspect-ratio: 1/1;
            font-size: $font-sz-large;
            font-weight: bold;
        }
    }

    @media (min-width: 40rem) {
        #han_bon_container {
            flex-direction: row;
            justify-content: center;
            column-gap: clamp(1rem, 6vw, 3rem);

            .han_bon {
                flex-direction: column;
                row-gap: 2rem;
            }
        }
    }

</style>
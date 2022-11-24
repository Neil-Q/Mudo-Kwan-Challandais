<template>
    <div id="kyorugui_panel">
        <UnderlinedTitle
            class="blue"
            title="Kyorugui"
            subtitle="Combat"
        />

        <div class="marking">
            xx pt / xxx pt 
        </div>

        <div id="kyorugui_container">
            <div class="kyorugui">
                <div class="illustration">Temps</div>
                <div class="caption">1 x 1min</div>
            </div>

            <div class="kyorugui">
                <div class="illustration">Casque</div>
                <div class="caption">{{withContact ? "Touches légères" : "Sans touches"}}</div>
            </div>
        </div>
    </div>
</template>

<script>
     import UnderlinedTitle      from "@/components/UnderlinedTitle.vue";

    export default {
        name: "KyoruguiPanel",
        components: {
            UnderlinedTitle
        },
        props: {
            isOverTwelve: {
                type: Object,
                required: true
            },
            keup: {
                type: Object,
                required: true
            }
        },
        computed: {
            withContact() {
                if(this.isOverTwelve || this.keup <= 6) return true;
                return false;
            }
        }
    }
</script>

<style lang="scss">
    #kyorugui_panel {
        @extend %material-panel;
        @extend %section-container;
        background-color: $white-1;
    }

    #kyorugui_container {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 2rem;
        margin-top: clamp(1rem, 6vw, 3rem);
        padding-bottom: clamp(3rem, 10vw, 5rem);
        
        .kyorugui {
            @extend %flex-center;
            flex-direction: row;
            justify-content: left;
            column-gap: 3rem;
        }

        .caption {
            font-size: $font-sz-large;
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
        #kyorugui_container {
            flex-direction: row;
            justify-content: center;
            column-gap: clamp(1rem, 6vw, 3rem);

            .kyorugui {
                flex-direction: column;
                row-gap: 2rem;
            }
        }
    }
</style>
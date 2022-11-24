<template>
    <div id="attack_series_panel">
        <UnderlinedTitle
            class="blue"
            title="Enchainements"
        />

        <div class="marking">
            xx pt / xxx pt 
        </div>

        <div id="series_container">
            <div class="series">
                <div class="illustration">Au sol</div>
                <div class="number">2</div>
            </div>

            <div class="series">
                <div class="illustration">Sauté</div>
                <div class="number" >{{keup <= 12 ? 2 : 1}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import UnderlinedTitle      from "@/components/UnderlinedTitle.vue";

    export default {
        name: "Attack_series_Panel",
        components: {
            UnderlinedTitle
        },
        props: {
            keup: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    #attack_series_panel {
        @extend %material-panel;
        @extend %section-container;

        background-color: $white-1;
    }

    #series_container {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        margin-top: clamp(3rem, 10vw, 5rem);
        padding-bottom: clamp(3rem, 10vw, 5rem);
        
        .series {
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
        #series_container {
            flex-direction: row;
            justify-content: center;
            column-gap: clamp(1rem, 6vw, 3rem);

            .series {
                flex-direction: column;
                row-gap: 2rem;
            }
        }
    }
</style>
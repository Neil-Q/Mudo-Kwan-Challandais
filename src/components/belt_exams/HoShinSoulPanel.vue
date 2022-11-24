<template>
    <div id="ho_shin_soul_panel">
        <UnderlinedTitle
            class="blue"
            title="Ho shin soul"
            subtitle="Self defense"
        />

        <div class="marking">
            xx pt / xxx pt 
        </div>

        <div id="ho_shin_soul_container">
            <div class="number_to_do" v-show="numberOfTechniques < 5">
                <div class="number">{{numberOfTechniques}}</div> 
                <div>Défenses différentes au choix parmis</div>
            </div>
            <div class="number_to_do" v-show="numberOfTechniques == 5">
                <div class="number">1</div>
                <div>Défense pour chaque saisie parmis</div>
            </div>

            <div id="ho_shin_soul_attacks">
                <div class="attack">
                    Saisie directe
                </div>
                <div class="attack">
                    Saisie croisée
                </div>
                <div class="attack">
                    Saisie double
                </div>
                <div class="attack">
                    Saisie double une main
                </div>
                <div class="attack">
                    Saisie double arrière
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UnderlinedTitle      from "@/components/UnderlinedTitle.vue";

    export default {
        name: "HoShinSoulPanel",
        components: {
            UnderlinedTitle
        },
        props: {
            keup: {
                type: Object,
                required: true
            }
        },
        computed: {
            numberOfTechniques() {
                if(this.keup == 1) return 5;
                if(this.keup == 2) return 4;
                if(this.keup == 3) return 3;
                if(this.keup <= 6) return 2;
                return 0;
            }
        }
    }
</script>

<style lang="scss">
    #ho_shin_soul_panel {
        @extend %material-panel;
        @extend %section-container;

        background-color: $white-1;
        padding-bottom: clamp(3rem, 10vw, 5rem);
    }
    
    #ho_shin_soul_container {
        font-size: $font-sz-xl;
        font-weight: bold;
        margin-top: clamp(3rem, 10vw, 5rem);

        .number_to_do {
            margin-bottom: clamp(2rem, 6vw, 3rem);

        }

        .number {
            font-size: $font-sz-xxxl;
            margin-bottom: clamp(0.5rem, 2vw, 1rem);
        }
    }

    #ho_shin_soul_attacks {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: clamp(1rem, 6vw, 3rem);
        max-width: 43rem;
        margin: auto;

        .attack {
            @extend %material-panel;
            @extend %flex-center;
        
            width: clamp(7rem, 24vw, 12rem);
            aspect-ratio: 1/1;
            font-size: $font-sz-large;
            font-weight: bold;
        }
    }
</style>
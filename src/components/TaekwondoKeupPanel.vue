<template>
    <div id="rank_selector_panel">
        <input id="show_all_radio_selector" class="grade_global_selector" type="radio" name="grade_global_selector" checked>
        <label for="show_all_radio_selector" @click="updateShowAll(true)">
            <div class="illustration"></div>
            <div class="caption">Voire tout</div>
        </label>

        <div class="separator"></div>

        <div id="age_selectors">
            <input id="minus_twelve_radio_selector" class="grade_global_selector" type="radio" name="grade_global_selector">
            <label for="minus_twelve_radio_selector" @click="updateShowAll(false); updateIsAdult(false)">
                <div class="illustration"></div>
                <div class="caption">-12 ans</div>
            </label>
            <input id="over_twelve_radio_selector" class="grade_global_selector" type="radio" name="grade_global_selector">
            <label for="over_twelve_radio_selector" @click="updateShowAll(false); updateIsAdult(true)">
                <div class="illustration"></div>
                <div class="caption">+12 ans</div>
            </label>
        </div>

        <BeltRankDropdown id="keup_selector" :discipline="isAdult ? 'taekwondo' : 'taekwondo_children'"/>
    </div>
</template>

<script>
    // import BeltIcon             from "@/components/BeltIcon.vue";
    import BeltRankDropdown     from "@/components/BeltRankDropdown.vue";

    export default {
        name: "TaekwondoKeupPanel",
        components: {
            // BeltIcon,
            BeltRankDropdown
        },
        data() {
            return {
                showAll: true,
                isAdult: true,
                keup: 0
            }
        },
        methods: {
            // setSelectors(showAll, isAdult, keup) {
                
            // },
            updateShowAll(boolean) {
                this.showAll = boolean;
                // alert("showAll: " + this.showAll);
            },
            updateIsAdult(boolean) {
                this.isAdult = boolean;
                // alert("isAdulte: " + this.isAdulte);
            },
            updateKeup(keup) {
                this.keup = keup;
                // alert("keup: " + this.keup);
            }
        }
    }
</script>

<style lang="scss">
    input[type="radio"] {
        display: none;
    }

    #rank_selector_panel{
        --global-padding: clamp(1rem, 7vw, 2rem);

        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: var(--global-padding);
        padding: var(--global-padding);
        border-radius: 30px;
        max-width: 25rem;
        min-width: 15rem;
        background-color: var(--dark-color);
        margin: auto;

        label, #keup_selector {
            box-sizing: border-box;
            border-radius: 10px;
        }

        .separator {
            border: solid 1px var(--white-color);
        }
    }
    .grade_global_selector {
        + label {
            display: block;
            background-color: silver;
            cursor: pointer;
        }

        &:checked + label {
            background-color: var(--white-color);
            color: var(--blue-medium-color);
            outline: 3px solid var(--blue-light-color);
            outline-offset: 2px;
        }
    }
    #show_all_radio_selector + label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        width: 100%;
        aspect-ratio: 4/1;
        padding: 0.5rem;

        .illustration {
            flex: 1;
            width: 80%;
            background-color: grey;
        }
    }
    #age_selectors {
        display: flex;
        justify-content: center;
        gap: var(--global-padding);

        label {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            flex: 1;
            padding: 1rem;
            aspect-ratio: 1/1;
        }
    }
    #keup_selector {
        aspect-ratio: 5/1;
    }

    // @media (min-width: 60rem) {
    //     #rank_selector_panel {
    //         flex-direction: row;
    //         min-width: 55rem;
    //         max-height: 10rem;

    //     }

    //     #show_all_radio_selector + label {
    //         width: auto;
    //         aspect-ratio: 1 / 1;
    //     }

    //     #keup_selector {
    //         flex: 2;
    //     }
    // }

</style>
<template>
    <div id="rank_selector_panel">
        <input id="show_everything_radio" class="radio_inputs" type="radio" name="radio_inputs" checked>
        <label class="show_everything" for="show_everything_radio" @click="updateShowAll(true)">
            <div class="illustration"></div>
            <div class="caption">Voire tout</div>
        </label>

        <div class="separator"></div>

        <input id="minus_twelve_radio" class="radio_inputs" type="radio" name="radio_inputs">
        <label class="minus_twelve" for="minus_twelve_radio" @click="updateShowAll(false); updateIsAdult(false)">
            <div class="illustration"></div>
            <div class="caption">-12 ans</div>
        </label>

        <input id="over_twelve_radio" class="radio_inputs" type="radio" name="radio_inputs">
        <label class="over_twelve" for="over_twelve_radio" @click="updateShowAll(false); updateIsAdult(true)">
            <div class="illustration"></div>
            <div class="caption">+12 ans</div>
        </label>

        <BeltRankDropdown 
            id="belt_dropdown"
            :discipline="isAdult ? 'taekwondo' : 'taekwondo_children'"
            :keup="keup"
            @update-keup="(n) => updateKeup(n)"
        />

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
            updateShowAll(boolean) {
                this.showAll = boolean;
            },
            updateIsAdult(boolean) {
                this.isAdult = boolean;
            },
            updateKeup(keup) {
                this.keup = keup;
            }
        }
    }
</script>

<style lang="scss" scoped>
    input[type="radio"] {
        display: none;
    }

    #rank_selector_panel{
        box-sizing: border-box;
        border-radius: 30px;
        max-width: 25rem;
        min-width: 15rem;
        background-color: var(--dark-color);
        margin: auto;

        display: grid;
        grid-template-columns: 1fr 5fr 1fr 5fr 1fr;
        grid-template-rows: 1fr 3fr 1fr 1fr 5fr 1fr 3fr 1fr;

        label, #belt_dropdown {
            box-sizing: border-box;
            border-radius: 10px;
        }
    }

    .radio_inputs {
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

    .show_everything {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        grid-column: 2 / 5;
        grid-row: 2 / 3;

        .illustration {
            background-color: grey;
        }
    }

    .separator {
        width: 100%;
        height: 0;
        outline: 1px solid var(--white-color);
        grid-column: 2 / 5;
        grid-row: 4 / 4;
    }

    .over_twelve, .minus_twelve {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        aspect-ratio: 1 / 1;
    }
    .minus_twelve {
        grid-column: 2 / 3;
        grid-row: 5 / 5;
    }
    .over_twelve {
        grid-column: 4 / 5;
        grid-row: 5 / 6;
    }

    #belt_dropdown {
        grid-column: 2 / 5;
        grid-row: 7 / 8;
    }

    @media (min-width: 60rem) {
        #rank_selector_panel {
            flex-direction: row;
            min-width: 55rem;

            grid-template-columns: 1fr 9fr 1fr 1fr 5fr 1fr 5fr 1fr;
            grid-template-rows: 1fr 5fr 1fr 2fr 1fr;
        }

        .show_everything {
            grid-column: 2 / 3;
            grid-row: 2 / 5;
        }
        .separator {
            width: 0;
            height: 100%;
            grid-column: 4 / 4;
            grid-row: 2 / 5;
        }
        .minus_twelve {
            grid-column: 5 / 6;
            grid-row: 2 / 3;
        }
        .over_twelve {
            grid-column: 7 / 8;
            grid-row: 2 / 3;
        }
        #belt_dropdown {
            grid-column: 5 / 8;
            grid-row: 4 / 5;
        }
    }

</style>
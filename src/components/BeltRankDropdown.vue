<template>
    <button class="rank_dropdown">
        <div class="rank_menu">
            <div class="menu_belt">
                <div class="menu_belt_none" v-show="keup == 0">-  KEUP  -</div>
                <div class="keup_and_belt" v-show="keup >= 1">
                    <div class="rank">{{keup}} K</div>
                    <BeltIcon class="belt medium" :class="discipline + ' keup_'+ keup" />
                </div>
            </div>
            <div class="dropdown_indicator">
                <span></span>
            </div>
        </div>

        <div class="dropdown">
            <div v-for="i in (discipline == 'taekwondo_children' ? 14 : 9) " :key="i" class="dropdown_item" @click="updateKeup(i)">
                <div class="keup_and_belt">
                    <div class="rank">{{i}} K</div>
                    <BeltIcon class="medium" :class="discipline + ' keup_'+ i" />
                </div>
            </div>
        </div>
    </button>
</template>

<script>
    import BeltIcon     from "@/components/BeltIcon.vue"

    export default {
        name: "BeltRankDropdown",
        components: {
            BeltIcon
        },
        props: {
            discipline: {
                validator(value) {return ['taekwondo', 'taekwondo_child', 'hapkimudo'].includes(value)}
            },
            keup: {
                type: Number,
                default: 1
            }
        },
        methods: {
            updateKeup(keup) {
                this.$emit("updateKeup", keup);
                document.activeElement.blur();
            }
        }
    }
</script>

<style lang="scss" scoped>

    .rank_dropdown {
        position: relative;
        height: 100%;
        width: 100%;
        display: grid;
        background-color: var(--white-color);
        border-radius: inherit;
        border: none;
        padding: 0;
    }

    .rank_dropdown:not(:focus) {
        .dropdown {
            display: none;
        }
    }

    .rank_menu {
        display: grid;
        grid-template-columns: 8fr 2fr;
        grid-template-areas: "belt indicator";
        align-items: center;
        width: 100%;
        height: 100%;
        cursor: pointer;
        border-radius: inherit;
        overflow: hidden;
        padding: 0;
    }

    .menu_belt {
        grid-area: belt;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dropdown_indicator {
        height: 100%;
        width: 100%;
        grid-area: indicator;
        background-color: rgba($color: #000000, $alpha: 0.5);
    }
    .keup_and_belt {
        box-sizing: border-box;
        display: grid;
        align-items: center;
        grid-template-columns: 2fr 4fr;
        grid-template-areas: "keup belt";
        width: 100%;
        padding-right: 5%;
        grid-area: belt;
        font-size: var(--font-sz-xl);

        .rank {
            grid-area: keup;
            font-weight: bold;
        }
        .menu_belt {
            grid-area: belt;
        }
    }

    .dropdown {
        width: 100%;
        aspect-ratio: 9 / 5;
        overflow-y: scroll;
        overscroll-behavior-y: none;
        position: absolute;
        top: 110%;
        display: flex;
        flex-direction: column-reverse;
        background-color: var(--white-color);
        border-radius: 10px;
        z-index: 2;
    }
    .dropdown_item {
        display: grid;
        grid-template-columns: 8fr 2fr;
        grid-template-areas: "belt whitespace";
        width: 100%;
        aspect-ratio: 5 / 1;
        padding: 10px 0;

        &:hover {
            background-color: var(--darker-color);
        }
    }


</style>
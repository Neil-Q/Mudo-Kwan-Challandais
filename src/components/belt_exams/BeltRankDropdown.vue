<template>
    <button class="keup_dropdown" ref="main_element" @mousedown="preventDropdown">

        <div class="keup_menu">
            <div class="menu_belt">
                <div class="menu_unchoosed" v-show="keup == 0">
                    <svg viewBox="0 0 52.9167 5.29167">
                        <g transform="translate(-.518049 31.7671)">
                            <text transform="translate(-54.5344 -105.701)"><tspan x="57.330078" y="78.555647"><tspan style="font-family:Montserrat;font-size:5.64444px; fill: currentColor">- CHOISIR KEUP -</tspan></tspan></text>
                        </g>
                    </svg>
                </div>
                <div class="keup_and_belt" v-show="keup >= 1">
                    <div class="rank">{{keup}} K</div>
                    <BeltIcon class="belt medium" :class="discipline + ' keup_'+ keup" />
                </div>
            </div>
            
            <div class="dropdown_arrow">
                <span>&#9650;</span>
            </div>
        </div>

        <div class="dropdown" ref="dropdown">
            <div
                v-for="i in [...Array(discipline == 'taekwondo_children' ? 14 : 9).keys()].slice().reverse()"
                :key="i"
                class="dropdown_item"
                @click="updateKeup(i + 1)
            ">
                <div class="keup_and_belt">
                    <div class="rank">{{(i + 1)}} K</div>
                    <BeltIcon class="medium" :class="discipline + ' keup_'+ (i + 1)" />
                </div>
            </div>
        </div>
    </button>
</template>

<script>
    import BeltIcon     from "@/components/belt_exams/BeltIcon.vue"

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
            },
            locked: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            locked: function() {this.lock()}
        },
        methods: {
            updateKeup(keup) {
                this.$emit("updateKeup", keup);
                document.activeElement.blur();
            },
            preventDropdown(event) {
                if(this.locked) event.preventDefault();
            },
            lock() {
                this.locked == true ? this.$refs.main_element.classList.add("locked") : this.$refs.main_element.classList.remove("locked");
            }
        },
        mounted() {
            this.lock();
        }
    }
</script>

<style lang="scss" scoped>

    .keup_dropdown {
        position: relative;
        height: 100%;
        width: 100%;
        display: grid;
        background-color: $white-1;
        border-radius: 10px;
        border: none;
        padding: 0;
        color: $dark-2;
    }
    .keup_dropdown.locked {
        background-color: $dark-2;
        color: $dark-4;

        .dropdown_arrow {
            border-color: $dark-4;
        }
    }

    .keup_dropdown:not(:focus) {
        .dropdown {
            display: none;
        }
    }

    .keup_menu {
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

    .menu_unchoosed {
        @extend %flex-center;

        svg {
            display: block;
            width: 80%;
        }
    }
    .menu_belt {
        grid-area: belt;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dropdown_arrow {
        @extend %flex-center;
        height: 80%;
        width: 100%;
        grid-area: indicator;
        border-left: solid 2px $dark-2;

        span {
            font-size: $font-sz-xxl;
            transform: rotate(180deg);
        }
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
        font-size: $font-sz-xl;

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
        flex-direction: column;
        background-color: $white;
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
            background-color: $darker-1;
        }
    }


</style>
<template>
    <div class="belt">
        <div class="stripe stripe_1"></div>
        <div class="stripe stripe_2"></div>
    </div>
</template>

<script>
    export default {
        name: "beltIcon",
        props: {
            discipline: {
                default: "taekwondo",
                validator(value) {
                    return ["taekwondo", "taekwondo_minus_twelve", "hapkimudo"].includes(value)
                }
            },
            keup: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    .belt {
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-areas: "a b c d e";
        border: 2px solid var(--dark-color);
        border-radius: 3px;

        &.wide {
            aspect-ratio: 5/1;
            grid-template-columns: 10fr 1fr 1fr 1fr 2fr;
        }
        &.medium {
            aspect-ratio: 4/1;
            grid-template-columns: 7fr 1fr 1fr 1fr 2fr;
        }
        &.small {
            aspect-ratio: 3/1;
            grid-template-columns: 5fr 1fr 1fr 1fr 1fr;
        }

        .stripe {
            width: 100%;
            height: 100%;
            background-color: var(--stripes-color);
            outline: 5px solid var(--stripes-color);
        }
        .stripe_1 {
            grid-area: b;
        }
        .stripe_2 {
            grid-area: d;
        }
    }

    .taekwondo {
        // Belt color
        &.keup_10 {
            background-color: var(--belt-white);
        }
        &.keup_9, &.keup_8, &.keup_7 {
            background-color: var(--belt-yellow);
            --stripes-color: var(--belt-blue);
        }
        &.keup_6, &.keup_5, &.keup_4 {
            background-color: var(--belt-blue);
            --stripes-color: var(--belt-red);
        }
        &.keup_3, &.keup_2, &.keup_1 {
            background-color: var(--belt-red);
            --stripes-color: var(--belt-black);
        }

        // Stripes 

        &.keup_10, &.keup_9, &.keup_6, &.keup_3 {
            .stripe_1, .stripe_2 {
                display: none;
            }
        }

        &.keup_8, &.keup_5, &.keup_2 {
            .stripe_1 {
                display: none;
            }
        }
    }

    .taekwondo_children {
        // Belt color
        &.keup_15 {
            background-color: var(--belt-white);
        }
        &.keup_14, &.keup_13 {
            background-color: var(--belt-yellow);
            --stripes-color: var(--belt-orange);
        }
        &.keup_12, &.keup_11 {
            background-color: var(--belt-orange);
            --stripes-color: var(--belt-green);
        }
        &.keup_10, &.keup_9 {
            background-color: var(--belt-green);
            --stripes-color: var(--belt-purple);
        }
        &.keup_8, &.keup_7 {
            background-color: var(--belt-purple);
            --stripes-color: var(--belt-blue);
        }
        &.keup_6, &.keup_5, &.keup_4 {
            background-color: var(--belt-blue);
            --stripes-color: var(--belt-red);
        }
        &.keup_3, &.keup_2, &.keup_1 {
            background-color: var(--belt-red);
            --stripes-color: var(--belt-black);
        }

        // Stripes 

        &.keup_15, &.keup_14, &.keup_12, &.keup_10, &.keup_8, &.keup_6, &.keup_3 {
            .stripe_1, .stripe_2 {
                display: none;
            }
        }

        &.keup_13, &.keup_11, &.keup_9, &.keup_7, &.keup_5, &.keup_2 {
            .stripe_1 {
                display: none;
            }
        }
    }

    .hapkimudo {
        // Belt color
        &.keup_10 {
            background-color: var(--belt-white);
        }
        &.keup_9, &.keup_8 {
            background-color: var(--belt-yellow);
            --stripes-color: var(--belt-green);
        }
        &.keup_7, &.keup_6 {
            background-color: var(--belt-green);
            --stripes-color: var(--belt-blue);
        }
        &.keup_5, &.keup_4 {
            background-color: var(--belt-blue);
            --stripes-color: var(--belt-red);
        }
        &.keup_3, &.keup_2, &.keup_1 {
            background-color: var(--belt-red);
            --stripes-color: var(--belt-black);
        }

        // Stripes 

        &.keup_10, &.keup_9, &.keup_7, &.keup_5, &.keup_3 {
            .stripe_1, .stripe_2 {
                display: none;
            }
        }

        &.keup_8, &.keup_6, &.keup_4, &.keup_2 {
            .stripe_1 {
                display: none;
            }
        }
    }

    .dan_1 {
        background-color: var(--belt-black);
        --stripes-color: var(--belt-yellow);

        .stripe_1 {
            display: none;
        }
    }
</style>
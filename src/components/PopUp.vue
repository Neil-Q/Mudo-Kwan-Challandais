<template>
    <div
        class="pop_up"
        ref="pop_up"
        v-show="show"
        @click.self="close()"
    >
        <div class="pop_up_container" :class="shape">
            <div class="pop_up_closing_tab">
                <button @click="close()">
                    <svg viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="height: 100%">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="pop_up_content">
                <slot name="content">
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PopUp",
        props: {
            shape: {
                type: String,
                default: "auto",

                validator(value) {return ['auto', 'small', 'tall', 'wide', 'fullpage'].includes(value)}
            }
        },
        methods: {
            close() {
                this.show = false;
                document.querySelector("body").classList.remove("locked");
            },
            open() {
                document.querySelector("body").classList.add("locked");
                this.show = true;
            }
        },
        data() {
            return {
                show: false
            }
        },
    }
</script>

<style lang="scss">
    .pop_up {
        @extend %flex-center;

        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;
        width: 100%;
        height: 100%;
        max-height: 100%;
        padding: 2rem;
        backdrop-filter: blur(6px);
        background-color: $darker-2;
    }

    .pop_up_container {
        box-sizing: border-box;
        background-color: $white-1;
        box-shadow: $shadow-3;
        max-height: 100%;
        // max-height: 100%;

        &.auto {
            max-width: 100%;
        }

        &.auto_max {
            height: 100%;
            max-height: 150vw;
            width: auto;
        }

        &.small {
            width: 80%;
            min-height: 20%;
        }

        &.tall {
            max-width: 80%;
            height: 100%;
        }

        &.wide {
            width: 100%;
            max-height: 50%;
        }

        &.fullpage {
            width: 100%;
            height: 100%;
        }
    }

    .pop_up_closing_tab {
        display: flex;
        justify-content: right;
        height: 3rem;

        button {
            height: 100%;
            border: none;
            background-color: transparent;
            transition: 0.5s;
            color: $dark-3;

            &:hover {
                transform: rotate(180deg);
            }
        }
    }

    .pop_up_content {
        box-sizing: border-box;
        padding: 1rem;
        height: 100%;
        max-height: calc(100vh - 7rem);
        width: 100%;
    }

    @media (min-width: 40rem) {
        .pop_up_container {
            &.small {
                width: 70%;
            }

            &.tall {
                max-width: 70%;
            }

            &.wide {
                max-height: 70%;
            }
        }
    }

    @media (min-width: 60rem) {
        .pop_up_container {
            &.small {
                width: 50%;
            }

            &.tall {
                max-width: 50%;
            }

            &.wide {
                max-height: 50%;
            }
        }
    }

    // @media (min-width: 100vh) {
    //     .pop_up_container {
    //         &.auto_max {
                
    //         }
    //     }
    // }
    
</style>
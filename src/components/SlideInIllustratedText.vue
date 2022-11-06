<template>
    <div class="illustrated_text" ref="wrapper">
        <div class="illustration" ref="illustration">
            <slot name="illustration"></slot>
        </div>
        <div class="text" ref="text">
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    export default {
        name: "SlideInIllustratedText",
        mounted() {
            const   wrapper = this.$refs.wrapper,
                    illustration = this.$refs.illustration;
                    //text = this.$refs.text;

            gsap.from(illustration, {
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top center",
                    end: "top top",
                    scrub: 1,
                },
                xPercent: 70,
            })

            gsap.to(wrapper, {
                scrollTrigger: {
                    trigger: wrapper,
                    start: "center center",
                    end: "center top",
                    scrub: true,
                    pin: wrapper,
                    markers: true
                }
            })
        }
    }
</script>

<style lang="scss">
.illustrated_text {
    overflow: hidden;
    height: 100vh;

    .illustration {
        width: 100%;

        &> * {
            aspect-ratio: 3/2;
            object-fit: cover;
            width: 100%;
        }
    }

    .text {
        width: 100%;
        box-sizing: border-box;
        padding: 5%;
        font-size: var(--font-sz-large);
    }
}

@media (min-width: 60em) {
    .illustrated_text {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "left right";
        align-items: center;

        .illustration {
            grid-area: right;
        }

        .text {
            grid-area: left;
            text-align: left;
        }
    }

    .illustrated_text.reversed {
        .illustration {
            grid-area: left;
        }

        .text {
            grid-area: right;
        }
    }
}
</style>
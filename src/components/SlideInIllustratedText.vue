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
        props: {
            reversed: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            const   wrapper = this.$refs.wrapper,
                    illustration = this.$refs.illustration,
                    text = this.$refs.text;

            if(this.reversed) wrapper.classList.add("reversed");

            gsap.from(illustration, {
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top 70%",
                    end: "top 50%",
                    scrub: 1,
                },
                xPercent: wrapper.classList.contains("reversed") ? -70 : 70,
                opacity: 0.7
            })

            gsap.from(text, {
                scrollTrigger: {
                    trigger: wrapper,
                    start: "center 65%",
                    toggleActions: "restart none none reverse"
                },
                opacity: 0,
                duration: 0.5,
                y: 20
            })
        }
    }
</script>

<style lang="scss">
.illustrated_text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    padding: 2.5rem 0;

    .illustration {
        width: 100%;
        max-width: 40em;
        margin: 0 auto;

        &> * {
            aspect-ratio: 3/2;
            object-fit: cover;
            width: 95%;
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
            max-width: none;
        }

        .text {
            grid-area: left;
            text-align: left;
            padding: 0 15%;
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
<template>
    <header ref="hero">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    // import { gsap } from "gsap";
    // import { ScrollTrigger } from "gsap/ScrollTrigger";
    // gsap.registerPlugin(ScrollTrigger);

export default {
    name: "Hero",
    props: [
        "title"
    ],
}
</script>

<style lang="scss" scoped>
header {
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    overflow: hidden;

    &.blue {
        background-color: $blue;
    }

    &.red {
        background-color: $red-dark;
    }
}

h1 {
    color: white;
    border: solid 3px white;
    border-radius: 3px;
    padding: 1rem 2rem;
    font-size: clamp(2rem, 6vw, 3rem);
    text-transform: uppercase;
}
</style>
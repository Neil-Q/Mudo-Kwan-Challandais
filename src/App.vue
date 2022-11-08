<template>
    <router-view/>
</template>

<style lang="scss">
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

:root {
    // colors ->
    --dark-color: #262626;
    --dark-soft-color: #404040;

    --white-color: #ffffff;
    --grey-soft-color: #f5f5f5;

    --blue-dark-color: #006699;
    --blue-medium-color: #0088CC;
    --blue-light-color: #00A3FF;
    --blue-strongLight-color: #00ccff ;

    --red-dark-color: #a71010;
    --red-medium-color: #C21111;
    --red-light-color: #e71515;

    //fonts ->
    --font-korean: "Noto Serif KR";

    --font-sz-medium: clamp(0.8rem, 2vw, 1rem);
    --font-sz-large: clamp(1rem, 2.5vw, 1.2rem);
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    height: auto;
    overflow-Y: overlay;
    background-color: var(--white-color);
    font-size: var(--font-sz-medium);

    &::-webkit-scrollbar {
        display: block;
        width: 0.5vw;
        margin-right: 3px;
    }

    &::-webkit-scrollbar-track {
        width: 5px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(40, 40, 40);
        width: 10px;
    }
}

h3 {
    font-size: clamp(1.5rem, 2vw ,2rem);
    text-transform: uppercase;
}

section {
    box-sizing: border-box;
    // padding: 2rem;
    
    &.blue {
        background-color: var(--blue-medium-color);
    }

    &.red {
        background-color: var(--red-dark-color);
    }

    &.grey {
        background-color: rgba($color: #000000, $alpha: 0.05);
    }

    &> .content {
        box-sizing: border-box;
        margin: auto;
        width: 100%;
        max-width: 1200px;
    }
}

.blue_light {
    color: var(--blue-light-color);
}
.blue {
    color: var(--blue-medium-color);
}
.blue_dark {
    color: var(--blue-dark-color);
}
.red {
    color: var(--red-medium-color);
}

.hangul {
    font-family: var(--font-korean);
}

@media (min-width: 40em) {
}

@media (min-width: 60em) {
}
</style>

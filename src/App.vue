<template>
    <router-view/>
</template>

<style lang="scss">
@import "@/scss/_variables";

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $dark;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    height: auto;
    overflow-Y: overlay;
    background-color: $white-1;
    font-size: $font-sz-medium;

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

section {
    box-sizing: border-box;
    min-height: 100vh;
    padding: 2rem;

    &> .content {
        box-sizing: border-box;
        margin: auto;
        width: 100%;
        max-width: 1200px;
    }

    &.hapkimudo {
        --color-scheme: #{$red};
    }

    &.taekwondo {
        --color-scheme: #{$blue};
    }

    &.taekwondo_childrens {
        --color-scheme: #{$blue-light};
    }

    &.taekwondo_baby {
        --color-scheme: #{$blue-lighter};
    }
}

h3 {
    font-size: $font-sz-xxl;
    text-transform: uppercase;
}
h4 {
    font-size: $font-sz-xl;
}

a {
    color: inherit;
    text-decoration: none;

    :visited {
        color: inherit;
    }
}


.blue_bg {
    background-color: $blue;
}
.blueLight_bg {
    background-color: $blue-light;
}
.red_bg {
    background-color: $red-dark;
}
.grey_bg {
    background-color: $darker-1;
}

.blue_light {
    color: $blue-light;
}
.blue {
    color: $blue;
}
.blue_dark {
    color: $blue-dark;
}
.red {
    color:$red;
}

.hangul {
    font-family: $korean-serif;
}

@media (min-width: 40em) {
}

@media (min-width: 60em) {
}
</style>

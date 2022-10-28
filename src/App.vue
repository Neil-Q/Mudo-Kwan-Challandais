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
    --dark-color: #262626;
    --dark-soft-color: #404040;

    --grey-soft-color: #f5f5f5;

    --blue-dark-color: #006699;
    --blue-medium-color: #0088CC;
    --blue-light-color: #00A3FF;
    --blue-strongLight-color: #00ccff ;

    --red-dark-color: #a71010;
    --red-medium-color: #C21111;
    --red-light-color: #e71515;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    height: auto;
    overflow-Y: overlay;

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
    padding: 2rem;
    
    &.blue {
        background-color: var(--blue-medium-color);
    }

    &.red {
        background-color: var(--red-dark-color);
    }

    &.grey {
        background-color: var(--grey-soft-color);
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

@media (min-width: 60em) {
    section {
        padding: 5rem 3rem;
    }
}
</style>

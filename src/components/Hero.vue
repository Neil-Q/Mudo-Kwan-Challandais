<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name: "Hero",
    props: [
        "title"
    ]
}
</script>

<style lang="scss" scoped>
header {
    min-height: 40rem;
    max-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    &.blue {
        background-color: var(--blue-medium-color);
    }

    &.red {
        background-color: var(--red-dark-color);
    }
}

h1 {
    color: white;
    border: solid 3px white;
    border-radius: 3px;
    padding: 1rem 2rem;
    font-size: 3rem;
    text-transform: uppercase;
}
</style>
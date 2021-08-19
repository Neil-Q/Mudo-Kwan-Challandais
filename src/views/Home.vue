<template>
    <Dojang />
    <NavBar />
    <div id="body_dummy"></div>

</template>

<script>

import Dojang from "@/components/Dojang.vue";
import NavBar from "@/components/NavBar.vue";

export default {
    name: "Home",
    components: {
        Dojang,
        NavBar
    },
    methods: {
    }
}
</script>

<style lang="scss">

body{
    --blue-dark-color: #006699;
    --blue-medium-color: #0088CC;
    --blue-light-color: #00A3FF;
    --blue-strongLight-color: #00ccff ;

    --red-medium-color: #C21111;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
}
#body_dummy {
    height: 2000px;
}

</style>

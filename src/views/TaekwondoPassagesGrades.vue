<template>
    <NavBar class="blue"/>
    <Hero title="Passages de grade" class="blue" />

    <MudoFooter />
</template>

<script>
    import NavBar                   from "@/components/NavBar.vue";
    import Hero                     from "@/components/Hero.vue";
    import MudoFooter               from "@/components/MudoFooter.vue"; 

    export default {
        name: "TaekwondoPassagesGrades",
        components: {
            NavBar,
            Hero,
            MudoFooter
        },
    }
</script>

<style>

</style>
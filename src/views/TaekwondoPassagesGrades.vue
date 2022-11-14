<template>
    <NavBar class="blue"/>
    <Hero title="Passages de grade" class="blue" />

    <section id="rank_selector">
        <TaekwondoKeupPanel />
    </section>

    <MudoFooter />
</template>

<script>
    import NavBar                   from "@/components/NavBar.vue";
    import Hero                     from "@/components/Hero.vue";
    import TaekwondoKeupPanel       from "@/components/TaekwondoKeupPanel.vue";
    import MudoFooter               from "@/components/MudoFooter.vue"; 

    export default {
        name: "TaekwondoPassagesGrades",
        components: {
            NavBar,
            Hero,
            TaekwondoKeupPanel,
            MudoFooter
        },
        data() {
            return {
                isAdulte: true,
                keup: 0
            }
        },
        methods: {
            knowIfAdult() {
                alert(this.isAdulte)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #rank_selector {
        min-height: 0;
    }

</style>
<template>
    <NavBar class="blue"/>
    <Hero title="Passages de grade" class="blue" />

    <section id="rank_selector">
        <TaekwondoKeupPanel
            @update-keup="(newKeup) => updateKeup(newKeup)"
            @update-is-adult="(boolean) => updateIsAdult(boolean)"
        />
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
                isAdult: true,
                keup: 0 // 0 -> All
            }
        },
        methods: {
            updateIsAdult(boolean) {
                this.isAdult = boolean;
                console.log(this.isAdult);
            },
            updateKeup(keup) {
                this.keup = keup;
                console.log(this.keup);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #rank_selector {
        min-height: 0;
    }

</style>
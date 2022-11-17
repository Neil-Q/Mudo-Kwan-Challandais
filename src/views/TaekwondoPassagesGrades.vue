<template>
    <NavBar class="blue"/>
    <Hero title="Passages de grade" class="blue" />

    <section id="rank_selector">
        <TaekwondoKeupPanel
            @update-keup="(newKeup) => updateKeup(newKeup)"
            @update-is-adult="(boolean) => updateIsAdult(boolean)"
        />
    </section>

    <section id="poomse">
        <UnderlinedTitle
            class="blue"
            title="Poomse"
            subtitle="Formes"
        />

        <PoomseTable
            :poomse="poomseToDo"
        />
    </section>

    <section id="kibons">
        <UnderlinedTitle
            class="blue"
            title="Kibon"
            subtitle="Bases"
        />
    </section>

    <MudoFooter />
</template>

<script>
    import NavBar                   from "@/components/NavBar.vue";
    import Hero                     from "@/components/Hero.vue";
    import UnderlinedTitle          from "@/components/UnderlinedTitle.vue";
    import TaekwondoKeupPanel       from "@/components/belt_exams/TaekwondoKeupPanel.vue";
    import PoomseTable              from "@/components/belt_exams/PoomseTable.vue";
    import MudoFooter               from "@/components/MudoFooter.vue"; 

    export default {
        name: "TaekwondoPassagesGrades",
        components: {
            NavBar,
            Hero,
            UnderlinedTitle,
            TaekwondoKeupPanel,
            PoomseTable,
            MudoFooter
        },
        data() {
            return {
                isAdult: true,
                keup: 0, // 0 -> All
                poomseToDo: 0,
            }
        },
        methods: {
            calculatePoomse() {
                if(this.isAdult) {
                    switch (this.keup) {
                        case 9 :
                            this.poomseToDo = 1;
                            break;
                        case 8 :
                            this.poomseToDo = 2;
                            break;
                        case 7 :
                            this.poomseToDo = 3;
                            break;
                        case 6 :
                        case 5 :
                            this.poomseToDo = 4;
                            break;
                        case 4 :
                            this.poomseToDo = 5;
                            break;
                        case 3 :
                            this.poomseToDo = 6;
                            break;
                        case 2 :
                            this.poomseToDo = 7;
                            break;
                        case 1 :
                            this.poomseToDo = 8;
                            break;
                        case 0 :
                            this.poomseToDo = 0;
                            break;
                        default :
                            break;
                    }
                } else {
                    switch (this.keup) {
                        case 14 :
                        case 13 :
                            this.poomseToDo = 1;
                            break;
                        case 12 :
                        case 11 :
                            this.poomseToDo = 2;
                            break;
                        case 10 :
                        case 9 :
                        case 8 :
                        case 7 :    
                            this.poomseToDo = 3;
                            break;
                        case 6 :
                        case 5 :
                            this.poomseToDo = 4;
                            break;
                        case 4 :
                            this.poomseToDo = 5;
                            break;
                        case 3 :
                            this.poomseToDo = 6;
                            break;
                        case 2 :
                            this.poomseToDo = 7;
                            break;
                        case 1 :
                            this.poomseToDo = 8;
                            break;
                        case 0 :
                            this.poomseToDo = 0;
                            break;
                        default :
                            break;
                    }
                }
            },
            updateIsAdult(boolean) {
                this.isAdult = boolean;
                this.calculatePoomse();
            },
            updateKeup(keup) {
                this.keup = keup;
                this.calculatePoomse();
            },
        }
    }
</script>

<style lang="scss">
    #rank_selector {
        min-height: 0;
    }

    #poomse {
        @extend %gray-bg;
    }
    
    #kibon {
        height: 50rem;
    }
</style>
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

        <div id="poomse_caption" v-show="poomseToDo >= 1">
            <div class="container">
                <div class="mandatory">
                    <div class="caption">.</div> Poomse obligatoire(s)
                </div>
                <div class="random">
                    <div class="caption">.</div> Un poomse tiré au hasard
                </div>
            </div>
        </div>

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

        <KibonTable />
    </section>

    <MudoFooter />
</template>

<script>
    import NavBar                   from "@/components/NavBar.vue";
    import Hero                     from "@/components/Hero.vue";
    import UnderlinedTitle          from "@/components/UnderlinedTitle.vue";
    import TaekwondoKeupPanel       from "@/components/belt_exams/TaekwondoKeupPanel.vue";
    import PoomseTable              from "@/components/belt_exams/PoomseTable.vue";
    import KibonTable              from "@/components/belt_exams/KibonTable.vue";
    import MudoFooter               from "@/components/MudoFooter.vue"; 

    export default {
        name: "TaekwondoPassagesGrades",
        components: {
            NavBar,
            Hero,
            UnderlinedTitle,
            TaekwondoKeupPanel,
            PoomseTable,
            KibonTable,
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
    #poomse_caption {
        display: inline-block;
        font-size: $font-sz-large;
        text-align: left;
        margin-bottom: 2rem;

        .container {
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
        }

        .caption {
            display: inline-block;
            margin-right: 1rem;
            color: transparent;
            padding: 0.5rem;
            width: clamp(3rem, 15vw, 10rem);
            border-radius: 100px;
            border: solid 2px;
        }

        .mandatory .caption{
            background-color: $dark-1;
            border-color: $dark-1
        }

        .random .caption {
            background-color: $white-1;
            border-color: $white-3;
        }
    }
    
    #kibon {
        height: 50rem;
    }

    @media (min-width: 60rem) {
        #poomse_caption .container {
            flex-direction: row;
            column-gap: 5rem;
        }
    }
</style>
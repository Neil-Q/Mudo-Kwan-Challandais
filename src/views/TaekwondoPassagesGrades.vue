<template>
    <NavBar class="blue"/>
    <Hero title="Passages de grade" class="blue" />

    <section id="rank_selector">
        <TaekwondoKeupPanel
            @update-keup="(newKeup) => updateKeup(newKeup)"
            @update-is-over-twelve="(boolean) => updateIsOverTwelve(boolean)"
        />
    </section>

    <section id="trials">
        <PoomsePanel
            :poomse="poomseToDo"
        />
 
        <KibonPanel
            :keup="keup"
            :isOverTwelve="isOverTwelve"
        />

        <HanBonKyoruguiPanel />
        <HoShinSoulPanel />
        <AttackSeriesPanel />
        <KyoruguiPanel />
        <QuestionsPanel />

    </section>

    <MudoFooter />
</template>

<script>
    import NavBar                   from "@/components/NavBar.vue";
    import Hero                     from "@/components/Hero.vue";
    import TaekwondoKeupPanel       from "@/components/belt_exams/TaekwondoKeupPanel.vue";
    import PoomsePanel              from "@/components/belt_exams/PoomsePanel.vue";
    import KibonPanel               from "@/components/belt_exams/KibonPanel.vue";
    import HanBonKyoruguiPanel      from "@/components/belt_exams/HanBonKyoruguiPanel.vue";
    import AttackSeriesPanel        from "@/components/belt_exams/AttackSeriesPanel.vue";
    import HoShinSoulPanel          from "@/components/belt_exams/HoShinSoulPanel.vue";
    import KyoruguiPanel            from "@/components/belt_exams/KyoruguiPanel.vue";
    import QuestionsPanel           from "@/components/belt_exams/QuestionsPanel.vue";
    import MudoFooter               from "@/components/MudoFooter.vue"; 

    export default {
        name: "TaekwondoPassagesGrades",
        components: {
            NavBar,
            Hero,
            TaekwondoKeupPanel,
            PoomsePanel,
            KibonPanel,
            HanBonKyoruguiPanel,
            HoShinSoulPanel,
            AttackSeriesPanel,
            KyoruguiPanel,
            QuestionsPanel,
            MudoFooter
        },
        data() {
            return {
                isOverTwelve: true,
                keup: 0, // 0 -> All
                poomseToDo: 0,
            }
        },
        methods: {
            calculatePoomse() {
                if(this.isOverTwelve) {
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
            updateIsOverTwelve(boolean) {
                this.isOverTwelve = boolean;
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
        background-color: $white-2
    }

    #trials{
        background-color: $white-2;
        display: flex;
        flex-direction: column;
        gap: 3rem;      
    }

    @media (max-width: 40rem) {
        #trials {
            padding: 1rem;
        }
    }
</style>
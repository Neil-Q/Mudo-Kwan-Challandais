<template>
    <NavBar class="blue sticky"/>

    <section id="club_hero">
    </section>

    <section id="mudo_kwan_challandais">
        <UnderlinedTitle title="Le Mudo Kwan Challandais"/>

        <div class="club_strength">
            <div class="club_strength_text">
                <h3>Plus de 40 ans d'histoire</h3>
                <p>C’est en 1980 que le club fut crée sous le nom de BUDOKAN 85 alors qu'aucune fédération de taekwondo n’existait alors en France. Il sera alors rataché au club de karaté pendant ses premières années.</p>
                <p>En 1986, Gilles LEDUBY reprendra le rôle d’enseignant et accompagnera bénévolement de nombreux pratiquants pendant 34 ans. Nous le remercions grandement pour son dévouement et il est, et restera, toujours le bienvenu parmi nous.</p>
            </div>
            <div class="club_strength_pictures">
            </div>
        </div>

        <div class="club_strength reversed">
            <div class="club_strength_text">
                <h3>Une grande famille</h3>
                <p>Notre club se veut avant tout être une grande famille. Nous mettons un point d’honneur à nous raprocher de tout le monde et veillons à ce que chacun trouve ce qu’il recherche et parvienne à ses objectifs.</p>
                <p>Nous organisons aussi régulièrement des événements conviviaux ouverts à l'entourage des membres en dehors des entraînements</p>
                <p>Nous pensons sincerement qu’il s’agit d’une de nos principales forces et nombre d’entre nous viennent autant par plaisir du sport que par plaisir de nous retrouver ensemble.</p>
            </div>
            <div class="club_strength_pictures">
            </div>
        </div>

        <div class="club_strength">
            <div class="club_strength_text">
                <h3>Des événements internes</h3>
                <p>Nous organisons réguliérement des événements au sein de notre pratique sportive tels que des mini competitions internes, des cours de découverte ouvers à tous ou encore la venue de Maîtres tels que le grand Maître Lee Kang Jong</p>
            </div>
            <div class="club_strength_pictures">
            </div>
        </div>

        <div class="club_strength reversed">
            <div class="club_strength_text">
                <h3>Ouverts à l'exterieur</h3>
                <p>Nous somme aussi très présents à l’exterieur lors de stages organisés principalements sur Nantes, la Roche sur Yon et les Herbiers.</p>
                <p>Enfin, nous souhaitons affirmer de plus en plus notre volontés à nous ouvrir aux pratiquants d’autres disciplines afin d’échanger sur nos techniques et nos manières de pratiquer.</p>
            </div>
            <div class="club_strength_pictures">
            </div>
        </div>
         
    </section>

    <section id="our_teachers">
        <UnderlinedTitle class="large white" title="Nos professeurs"/>
    </section>

    <section id="director_comite">
        <UnderlinedTitle class="large" title="Les membres du bureau"/>
    </section>

    <section id="club_body_dummy">        
    </section>

    <Footer />
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import UnderlinedTitle from "@/components/UnderlinedTitle.vue";
    import Footer from "@/components/Footer.vue";

    export default {
        name: "LeClub",
        components: {
            NavBar,
            UnderlinedTitle,
            Footer
        },

        data() {
            return {
                carrousel1: [
                    {
                        src: "foo",
                        alt: "foo",
                        caption: "foo"
                    },
                    {
                        src: "foo",
                        alt: "foo",
                        caption: "foo"
                    },
                    {
                        src: "foo",
                        alt: "foo",
                        caption: "foo"
                    },
                ]                
            }
        }
    }
</script>

<style lang="scss">

#club_hero {
    min-height: 40rem;
    max-height: 60vh;
    width: 100%;
    background-color: var(--blue-medium-color);
}

#mudo_kwan_challandais {
    padding-bottom: 3rem;
}

.club_strength {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 90%;
    max-width: 1600px;
    padding: 2.5rem 0 2.5rem 0;

    &.reversed {
        flex-direction: row-reverse;
    }
}

.club_strength_text {
    margin-top: auto;
    margin-bottom: auto;
    max-width: calc(100% - clamp(30rem, 40vw, 40rem));

    h3 {
        font-size: clamp(1.5rem, 2vw ,2rem);
        text-transform: uppercase;
        text-align: left;
    }

    p {
        font-size: clamp(0.85em, 1vw, 1rem);
        text-align: justify;;
    }
}

.club_strength_pictures {
    background-color: gray;
    margin-top: auto;
    margin-bottom: auto;
    width: clamp(28rem, 35vw, 35rem);
    height: clamp(16rem, 20vw, 20rem);
}

#our_teachers {
    height: 50em;
    background-color: var(--blue-medium-color);
}

#director_comite {
    height: 50em;
}

@media (max-width: 60em) {

    .club_strength {
        flex-direction: column-reverse;
        padding: 3rem 0 0 0;

        &.reversed {
            flex-direction: column-reverse;
        }
    }

    .club_strength_text {
        width: clamp(1rem, 90vw, 40rem);
        margin: auto;
        max-width: 100%;

        h3 {
            text-align: center;
        }
    }

    .club_strength_pictures {
        width: clamp(1rem, 90vw, 40rem);
        height: clamp(1rem, 45vw, 20rem);
        margin: auto;
    }
}

</style>
<template>
    <NavBar class="blue"/>
    <Hero title="Le club" class="blue" />

    <!-- <section id="mudo_kwan_challandais">
            <UnderlinedTitle title="Le Mudo Kwan Challandais"/>

            <div class="illustrated_text">
                <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
                <div>
                    <h3>Plus de 40 ans d'histoire</h3>
                    <p>C’est en 1980 que le club fut crée sous le nom de BUDOKAN 85 alors qu'aucune fédération de taekwondo n’existait alors en France. Il sera alors rataché au club de karaté pendant ses premières années.</p>
                    <p>En 1986, Gilles LEDUBY reprendra le rôle d’enseignant et accompagnera bénévolement de nombreux pratiquants pendant 34 ans. Nous le remercions grandement pour son dévouement et il est, et restera, toujours le bienvenu parmi nous.</p>
                </div>
            </div>

            <div class="illustrated_text reversed">
                <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
                <div>
                    <h3>Une grande famille</h3>
                    <p>Notre club se veut avant tout être une grande famille. Nous mettons un point d’honneur à nous raprocher de tout le monde et veillons à ce que chacun trouve ce qu’il recherche et parvienne à ses objectifs.</p>
                    <p>Nous organisons aussi régulièrement des événements conviviaux ouverts à l'entourage des membres en dehors des entraînements</p>
                    <p>Nous pensons sincerement qu’il s’agit d’une de nos principales forces et nombre d’entre nous viennent autant par plaisir du sport que par plaisir de nous retrouver ensemble.</p>
                </div>
            </div>

            <div class="illustrated_text">
                <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
                <div>
                    <h3>Des événements internes</h3>
                    <p>Nous organisons réguliérement des événements au sein de notre pratique sportive tels que des mini competitions internes, des cours de découverte ouvers à tous ou encore la venue de Maîtres tels que le grand Maître Lee Kang Jong</p>
                </div>
            </div>

            <div class="illustrated_text reversed">
                <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
                <div>
                    <h3>Ouverts à l'exterieur</h3>
                    <p>Nous somme aussi très présents à l’exterieur lors de stages organisés principalements sur Nantes, la Roche sur Yon et les Herbiers.</p>
                    <p>Enfin, nous souhaitons affirmer de plus en plus notre volontés à nous ouvrir aux pratiquants d’autres disciplines afin d’échanger sur nos techniques et nos manières de pratiquer.</p>
                </div>
            </div>      
    </section> -->
    <SlideInIllustratedText>
        <template v-slot:illustration>
            <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
        </template>
        <template v-slot:text>
            <h3>Plus de 40 ans d'histoire</h3>
            <p>C’est en 1980 que le club fut crée sous le nom de BUDOKAN 85 alors qu'aucune fédération de taekwondo n’existait alors en France. Il sera alors rataché au club de karaté pendant ses premières années.</p>
            <p>En 1986, Gilles LEDUBY reprendra le rôle d’enseignant et accompagnera bénévolement de nombreux pratiquants pendant 34 ans. Nous le remercions grandement pour son dévouement et il est, et restera, toujours le bienvenu parmi nous.</p>
        </template>
    </SlideInIllustratedText>

    <SlideInIllustratedText>
        <template v-slot:illustration>
            <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
        </template>
        <template v-slot:text>
            <h3>Plus de 40 ans d'histoire</h3>
            <p>C’est en 1980 que le club fut crée sous le nom de BUDOKAN 85 alors qu'aucune fédération de taekwondo n’existait alors en France. Il sera alors rataché au club de karaté pendant ses premières années.</p>
            <p>En 1986, Gilles LEDUBY reprendra le rôle d’enseignant et accompagnera bénévolement de nombreux pratiquants pendant 34 ans. Nous le remercions grandement pour son dévouement et il est, et restera, toujours le bienvenu parmi nous.</p>
        </template>
    </SlideInIllustratedText>

    <section id="director_comite" class="grey">
        <div class="content">
            <UnderlinedTitle class="large" title="Les membres du bureau"/>

            <div id="members_list">
                <div class="member">
                    <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
                    <p class="name">Anthony Moinardeau</p>
                    <p class="function">Président</p>
                </div>

                <div class="member">
                    <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
                    <p class="name">Dany Villay</p>
                    <p class="function">Trésorier</p>
                </div>

                <div class="member">
                    <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
                    <p class="name">Stéphane Noel</p>
                    <p class="function">Secrétaire adjoint et responsable communication </p>
                </div>
            </div>
        </div>
    </section>

    <section id="our_teachers" >
        <div class="content">
            <UnderlinedTitle class="large" title="Nos professeurs"/>

            <div id="teachers_list">
                <div class="teacher">
                    <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
                    <p class="name">Anthony moinardeau</p>
                    <div class="qualifications">
                        <p>BPJEPS Activités Physiques pour Tous</p>
                        <p>Instructeur Fédéral</p>
                    </div>
                    <div class="degrees">
                        <p>2° dan Hapkimudo</p>
                        <p>2° dan Hapkido</p>
                        <p>1° dan Taekwondo</p>
                    </div>
                </div>

                <div class="teacher">
                    <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
                    <p class="name">Dany Vilay</p>
                    <div class="qualifications">
                        <p>Instructeur Fédéral</p>
                    </div>
                    <div class="degrees">
                        <p>2° dan Taekwondo</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <MudoFooter />
</template>

<script>
    import NavBar                   from "@/components/NavBar.vue";
    import Hero                     from "@/components/Hero.vue";
    import UnderlinedTitle          from "@/components/UnderlinedTitle.vue";
    import SlideInIllustratedText   from "@/components/SlideInIllustratedText.vue"
    import MudoFooter               from "@/components/MudoFooter.vue";

    export default {
        name: "LeClub",
        components: {
            NavBar,
            Hero,
            UnderlinedTitle,
            SlideInIllustratedText,
            MudoFooter
        },
        data() {
            return {
                pictures: require('@/assets/club_pictures/2021-2022_new_season_group.jpg')
            }
        },
        mounted() {
            // const illustratedTextsImages = gsap.utils.toArray('.illustrated_text img');
            // illustratedTextsImages.forEach(image => {
            //     gsap.from(image, {
            //         scrollTrigger: {
            //             trigger: image,
            //             start: "center center",
            //             end: "top top",
            //             scrub: 1,
            //             pin: true,
            //             markers: true
            //         },
            //         xPercent: image.parentElement.classList.contains("reversed") ? -70 : 70,
            //     })
            // })

            // const illustratedTexts = gsap.utils.toArray('.illustrated_text div');
            // illustratedTexts.forEach(text => {
            //     gsap.from(text, {
            //         scrollTrigger: {
            //             trigger: text,
            //             start: "top 20%",
            //         },
            //         opacity: 0,
            //         duration: 1,
            //         y: 50
            //     })
            // })
        }
    }
</script>

<style lang="scss">
// .illustrated_text {
//     overflow: hidden;
//     height: 100vh;

//     img {
//         aspect-ratio: 3/2;
//         object-fit: cover;
//     }

//     div {
//         box-sizing: border-box;
//         padding: 5%;
//         font-size: var(--font-sz-large);
//     }
// }

#teachers_list, #members_list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 5rem;

    img {
        width: 20rem;
        max-width: 70vw;
        object-fit: cover;
    }

    .name {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
}

.teacher {
    img {
        aspect-ratio: 3 / 4;
    }

    .name {
        color: var(--dark-color);
    }

    .qualifications {
        margin-bottom: 1rem;
        color: var(--red-medium-color);
        font-weight: bold;
    
        p {
            margin: 0;
        }
    }

    .degrees p {
        margin: 0;
        color: var(--dark-color);
        font-weight: bold;
    }
}

.member {
    img {
        aspect-ratio: 1 / 1;
        border-radius: 10rem;
    }

    .name {
        color: var(--red-medium-color);
    }

    .function {
        max-width: 15rem;
        font-weight: bold;
        margin: auto;
    }
}

@media (min-width: 40em) {

}

@media (min-width: 60em) {
}
</style>
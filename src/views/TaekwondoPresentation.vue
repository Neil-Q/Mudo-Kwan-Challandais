<template>
    <NavBar class="blue" />
    <Hero class="blue" title="Le taekwondo" />

     <section id="taekwondo_presentation">
        <div class="content">
            <div id="taekwondo_hanguls">
                <div class="character">
                    <div class="character_hangul hangul">태</div>
                    <div class="character_romanization">TAE</div>
                    <div class="character_translation">Pieds</div>
                </div>
                <div class="character">
                    <div class="character_hangul hangul">권</div>
                    <div class="character_romanization">KWON</div>
                    <div class="character_translation">Poings</div>
                </div>
                <div class="character">
                    <div class="character_hangul hangul">도</div>
                    <div class="character_romanization">DO</div>
                    <div class="character_translation">Voie</div>
                </div>
            </div>

            <div id="taekwondo_presentation_text">
                <p>Originaire de Corée le Taekwondo, littéralement la voie (Do) des pieds (Tae) et des poings (Kwon) a de nombreuses facettes. Il peut ressembler en certains points à du Karaté mais avec de nombreuses différences dans la pratique. Le travail des frappes de pied, la recherche de l’enchainement ainsi que du déplacement y est beaucoup plus présent, créant ainsi un style plus fluide, plus aérien</p>
                <p>Le Taekwondo est souvent considéré comme un art martial spectaculaire et spécialisé dans les coups de pied. Plus largement, on parlera d’art martial de percussion pieds/poings. Une dimension sportive lui est également vouée depuis sa première inscription en sport de démonstration puis aux jeux olympiques.</p>
            </div>
        </div>
    </section>

    <section id="taekwondo_short_history">
        <div class="content">
            <div class="illustration"></div>
            <div id="taekwondo_short_history_text">
                <h3>Un peu d'histoire</h3>
                <p>Le taekwondo est un art relativement récent, moins de 70 ans, mais il constitue la synthèse de plusieurs art martiaux coréens anciens et japonais. Il est crée suite à la fin de la domination nipponne du pays, resultant en une volonté de reconstruire l'identité nationale autour d'un art martial totalement Coréen. Il arrive en France avec maître Lee Kwan Young en 1969 et ne cesse de se développer depuis, devenant même discipline olympique à partir des années 2000.</p>
            </div>
        </div>
    </section>

    <section id="taekwondo_benefits">
        <div class="content">
                <div id="taekwondo_tenets">
                    <div class="taekwondo_tenet">
                        <div class="tenet_hanguls hangul">예의</div>
                        <div class="tenet_signification">Courtoisie</div>
                    </div>
                    <div class="taekwondo_tenet">
                        <div class="tenet_hanguls hangul">엄지</div>
                        <div class="tenet_signification">Intégrité</div>
                    </div>
                    <div class="taekwondo_tenet">
                        <div class="tenet_hanguls hangul">인내</div>
                        <div class="tenet_signification">Pérséverance</div>
                    </div>
                    <div class="taekwondo_tenet">
                        <div class="tenet_hanguls hangul">국기</div>
                        <div class="tenet_signification">Self Control</div>
                    </div>
                    <div class="taekwondo_tenet">
                        <div class="tenet_hanguls hangul">백철불굴</div>
                        <div class="tenet_signification">Esprit Indomptable</div>
                    </div>
                </div>

                <div id="taekwondo_benefits_text">
                    <p>Les gains du Taekwondo pour les adolescents et les adultes sont à la fois physiques et psychologiques.</p>
                    <p>Sur le plan physique, le gain principal est à la fois la souplesse et la capacité à supporter l’effort, sur le plan respiratoire. Le travail sur la décontraction et sur les montées en pression cardiaque aidant beaucoup sur ces aspects.</p>
                    <p>Sur le plan psychologique, le Taekwondo adulte permet de s’évader complètement, venir à un cours permet de se vider complètement l’esprit.</p>
                    <p>Il permet aussi de gagner en assurance. Que ce soit pour de la pratique loisir ou pour la compétition, notre club soutient une pratique martiale de la discipline. </p>
                    <p>Le respect, la persévérance, le fair-play, l'humilité et la maitrise de soit sont au cœur de l'enseignement. Des exercices ludiques viennent agrémenter l'enseignement pour développer les liens entre les pratiquants et travailler sur d'autres types d'apprentissages.</p>
                </div>
            </div>
    </section>

 

    <div id="presentation_videos">
            <iframe src="https://www.youtube.com/embed/iai8YbMEues" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/dBjoz4tUq8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <section class="grey">
        <div class="content">
            <UnderlinedTitle title="Les différentes parties de la pratique" />
        </div>
    </section>

    <section>
        <div class="content">
            <UnderlinedTitle title="Tenue et équipements" />
        </div>
    </section>

    <MudoFooter />
</template>

<script>
    import NavBar           from "@/components/NavBar.vue";
    import Hero             from "@/components/Hero.vue";
    import UnderlinedTitle  from "@/components/UnderlinedTitle.vue";
    import MudoFooter       from "@/components/MudoFooter.vue";

    export default {
        name: "TaekwondoPresentation",
        components: {
            NavBar,
            Hero,
            UnderlinedTitle,
            MudoFooter
        },
    }
</script>

<style lang="scss" scoped>



#taekwondo_hanguls {
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;

    .character_hangul {
        font-size: clamp(0px, 25vw, 10rem);
    }
    .character_romanization {
        font-size: clamp(1rem, 5vw, 2rem);
        font-weight: bold;
    }
    .character_translation {
        text-transform: uppercase;
        font-size: clamp(0.6rem, 3vw, 1.2rem);
    }
}
#taekwondo_presentation_text {
    max-width: 40rem;
    margin: auto;
    font-size: var(--font-sz-large);
    text-align: center;
}

#taekwondo_short_history {
    font-size: var(--font-sz-large);

    .illustration {
        position: absolute;
        right: -15vw;
        transform: translateY(-10vw);
        width: 70vw;
        height: 34vw;
        background-color: rgba($color: #000000, $alpha: 0.1);
    }
}

#taekwondo_tenets {
    grid-column-start: 1;
    grid-column-end: 6;
    box-sizing: border-box;
    border: solid var(--dark-color) 15px;
    padding: clamp(1rem, 6vw ,3rem) 0;
}
.taekwondo_tenet {
    margin-bottom: 1rem;
}
.tenet_hanguls {
    font-size: clamp(1rem, 10vw, 5rem);
}
.tenet_signification {
    text-transform: uppercase;
    font-size: small;
    font-weight: bold;
}
#taekwondo_benefits_text {
    grid-column-start: 7;
    grid-column-end: end;
}

#presentation_videos {
    iframe {
        display: block;
        width: 100%;
        aspect-ratio: 560 / 315;
    }
}

@media (min-width: 60em) {
    h3, h4 {
        text-align: left;
    }

    #taekwondo_short_history {
        text-align: left;

        .content {
            display: grid;
            grid-template-columns: 7fr 5fr;
        }

        .illustration {
            position: initial;
            transform: translateY(0);
        }
    }

    #taekwondo_benefits .content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }

    #presentation_videos {
        display: flex;
        
        iframe {
            width: 50vw;
        }
    }
}

</style>
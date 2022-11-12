<template>
    <NavBar class="blue" />
    <Hero class="blue" title="Le taekwondo" />

     <section id="taekwondo_presentation">
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
                <p>Originaire de Corée le Taekwondo, littéralement la voie (Do) des pieds (Tae) et des poings (Kwon) a de nombreuses facettes. Il peut ressembler en certains points à du Karaté mais avec de nombreuses différences dans la pratique. Le travail des frappes de pied, la recherche de l’enchainement ainsi que du déplacement y sont beaucoup plus présents, créant ainsi un style plus fluide, plus aérien.</p>
                <p>Le Taekwondo est souvent considéré comme un art martial spectaculaire et spécialisé dans les coups de pied. Plus largement, on parlera d’art martial de percussion pieds/poings. Une dimension sportive lui est également vouée depuis sa première inscription en sport de démonstration puis aux jeux olympiques.</p>
            </div>
    </section>

    <section id="taekwondo_short_history">
            <div id="korean_flag">
                <svg id="korean_flag_trigrams" viewBox="0 0 339.502 263.358">
                    <g transform="translate(-86.2506 -124.321)" style="fill:#464655">
                        <path d="m349.92 149.189 16.035 24.102c1.347 2.025 0.802 4.759-1.219 6.112l-4.066 2.723c-2.029 1.358-4.775 0.812-6.129-1.22l-16.055-24.096c-1.351-2.027-0.803-4.766 1.223-6.119l4.086-2.728c2.03-1.355 4.773-0.805 6.125 1.226z"/>
                        <path d="m374.66 186.35 16.087 24.087c1.358 2.034 0.804 4.786-1.237 6.134l-4.084 2.699c-2.026 1.34-4.754 0.789-6.103-1.23l-16.078-24.062c-1.354-2.026-0.81-4.767 1.217-6.122l4.075-2.724c2.026-1.355 4.768-0.81 6.123 1.218z"/>
                        <path d="m367.089 137.731 40.829 61.273c1.352 2.028 0.803 4.768-1.225 6.12l-4.102 2.734c-2.028 1.352-4.769 0.804-6.121-1.224l-40.843-61.269c-1.353-2.029-0.803-4.771 1.227-6.123l4.115-2.739c2.029-1.347 4.768-0.8 6.12 1.228z"/>
                        <path d="m384.211 126.291 16.07 24.149c1.354 2.034 0.798 4.78-1.241 6.127l-4.087 2.7c-2.028 1.34-4.757 0.789-6.105-1.234l-16.082-24.117c-1.353-2.028-0.804-4.769 1.224-6.122l4.099-2.732c2.028-1.352 4.77-0.803 6.122 1.229z"/>
                        <path d="m408.967 163.531 16.045 24.099c1.35 2.026 0.803 4.762-1.22 6.115l-4.075 2.724c-2.029 1.356-4.775 0.809-6.127-1.223l-16.045-24.099c-1.349-2.026-0.803-4.762 1.22-6.115l4.075-2.724c2.03-1.357 4.774-0.811 6.127 1.223z"/>
                        <path d="m132.721 293.982 40.824 61.207c1.352 2.027 0.806 4.767-1.222 6.12l-4.088 2.73c-2.028 1.354-4.769 0.807-6.123-1.222l-40.824-61.207c-1.353-2.027-0.806-4.767 1.222-6.12l4.089-2.73c2.027-1.354 4.769-0.807 6.122 1.222z"/>
                        <path d="m115.582 305.43 16.028 24.041c1.351 2.026 0.806 4.761-1.217 6.116l-4.066 2.722c-2.027 1.357-4.771 0.812-6.126-1.217l-16.047-24.035c-1.354-2.027-0.808-4.768 1.22-6.122l4.086-2.728c2.027-1.353 4.769-0.806 6.122 1.223z"/>
                        <path d="m140.351 342.604 16.046 24.102c1.35 2.026 0.803 4.763-1.222 6.115l-4.078 2.727c-2.029 1.356-4.772 0.809-6.126-1.222l-16.056-24.097c-1.351-2.027-0.804-4.766 1.222-6.118l4.088-2.73c2.03-1.357 4.773-0.808 6.126 1.223z"/>
                        <path d="m98.442 316.875 40.798 61.21c1.351 2.026 0.804 4.764-1.219 6.118l-4.077 2.726c-2.028 1.356-4.771 0.809-6.125-1.22l-40.822-61.202c-1.353-2.028-0.804-4.769 1.224-6.122l4.102-2.734c2.026-1.352 4.767-0.804 6.119 1.224z"/>
                        <path d="m121.294 210.441 40.818-61.257c1.353-2.03 4.095-2.578 6.124-1.224l4.087 2.729c2.027 1.353 2.573 4.093 1.222 6.12l-40.834 61.223c-1.35 2.023-4.081 2.573-6.108 1.231l-4.071-2.695c-2.038-1.348-2.592-4.095-1.238-6.127z"/>
                        <path d="m104.147 199.008 40.825-61.269c1.353-2.03 4.097-2.578 6.126-1.222l4.077 2.726c2.024 1.353 2.57 4.09 1.22 6.116l-40.814 61.272c-1.353 2.03-4.095 2.579-6.124 1.224l-4.088-2.729c-2.026-1.352-2.573-4.091-1.222-6.118z"/>
                        <path d="m86.99 187.624 40.829-61.33c1.353-2.031 4.098-2.58 6.127-1.224l4.077 2.726c2.023 1.353 2.57 4.087 1.222 6.114l-40.804 61.339c-1.351 2.03-4.094 2.581-6.123 1.228l-4.1-2.734c-2.029-1.352-2.577-4.091-1.228-6.119z"/>
                        <path d="m338.493 355.188 16.047-24.035c1.355-2.029 4.099-2.574 6.126-1.217l4.066 2.722c2.023 1.354 2.567 4.09 1.216 6.116l-16.028 24.04c-1.353 2.029-4.095 2.577-6.123 1.223l-4.086-2.728c-2.026-1.353-2.572-4.093-1.218-6.121z"/>
                        <path d="m363.243 318.141 16.073-24.154c1.351-2.03 4.094-2.58 6.123-1.227l4.096 2.73c2.029 1.353 2.577 4.096 1.223 6.124l-16.107 24.116c-1.351 2.022-4.082 2.571-6.109 1.227l-4.062-2.692c-2.035-1.35-2.589-4.093-1.237-6.124z"/>
                        <path d="m355.626 366.698 16.057-24.098c1.352-2.029 4.093-2.578 6.122-1.225l4.104 2.737c2.027 1.352 2.575 4.09 1.225 6.119l-16.047 24.1c-1.351 2.029-4.09 2.579-6.12 1.228l-4.115-2.739c-2.028-1.351-2.578-4.093-1.226-6.122z"/>
                        <path d="m380.403 329.463 16.066-24.042c1.354-2.025 4.092-2.571 6.119-1.22l4.102 2.734c2.03 1.353 2.577 4.096 1.221 6.125l-16.066 24.043c-1.353 2.025-4.092 2.571-6.118 1.22l-4.103-2.734c-2.03-1.354-2.577-4.097-1.221-6.126z"/>
                        <path d="m372.771 378.081 16.075-24.056c1.35-2.019 4.077-2.569 6.103-1.23l4.086 2.7c2.04 1.348 2.595 4.097 1.239 6.131l-16.063 24.088c-1.352 2.028-4.093 2.575-6.121 1.224l-4.098-2.732c-2.03-1.354-2.577-4.097-1.221-6.125z"/>
                        <path d="m397.554 340.969 16.035-24.085c1.353-2.031 4.098-2.58 6.127-1.223l4.072 2.722c2.025 1.354 2.57 4.093 1.218 6.119l-16.049 24.053c-1.349 2.024-4.083 2.573-6.11 1.229l-4.06-2.69c-2.033-1.349-2.586-4.094-1.233-6.125z"/>
                    </g>
                </svg>
                <svg id="korean_flag_center" viewBox="0 0 176.471 176.551">
                    <g transform="translate(-167.801 -79.4474)">
                        <path d="m305.009 94.256c-40.563-27.042-95.35-15.986-122.374 24.506-13.555 20.211-8.045 47.674 12.235 61.195 20.265 13.521 47.64 8.03 61.161-12.252 13.521-20.281 40.914-25.704 61.178-12.254 20.298 13.521 25.757 40.984 12.217 61.195 27.042-40.559 16.111-95.347-24.417-122.39" style="fill:var(--blue-dark-color)"/>
                        <path d="m182.634 118.763c-13.555 20.211-8.045 47.674 12.235 61.195 20.265 13.521 47.64 8.03 61.161-12.252 13.521-20.281 40.914-25.704 61.178-12.254 20.298 13.521 25.757 40.984 12.217 61.195-27.006 40.632-81.775 51.549-122.338 24.507-40.526-27.039-51.494-81.827-24.453-122.391" style="fill:var(--red-dark-color)"/>
                    </g>
                </svg>
            </div>

            <div id="taekwondo_short_history_text">
                <h3>Un peu d'histoire ?</h3>
                <p>Le taekwondo est un art relativement récent, moins de 70 ans, mais il constitue la synthèse de plusieurs art martiaux coréens anciens et japonais. Il est crée suite à la fin de la domination nipponne du pays, resultant en une volonté de reconstruire l'identité nationale autour d'un art martial totalement Coréen.</p>
                <p>Il arrive en France avec maître Lee Kwan Young en 1969 et ne cesse de se développer depuis, devenant même discipline olympique à partir des années 2000.</p>
            </div>
    </section>

    <section id="taekwondo_benefits">
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

                <div id="taekwondo_benefits_texts">
                    <div class="taekwondo_benefit">
                        <p>Les arts martiaux, tel le taekwondo, ne sont pas juste des techniques de combat, le terme « DO » induit la notion de « sens ».</p>
                        <p>Il s’agit de donner du sens à sa pratique, en connaître le but, prendre conscience d’un chemin, sur lequel chaque pratiquant s’engage. La pratique du Taekwondo est une philosophie.</p>
                    </div>
                    <div class="taekwondo_benefit">
                        <p>Le respect, la persévérance, le fair-play, l'humilité et la maitrise de soit sont au cœur de la pratique.</p>
                        <p>La diversification des formes de pratiques du Taekwondo permet à tous de trouver sa voie et de s'épanouir quelque soit son niveau, son âge, ses envies et ses besoins.</p>
                    </div>
                    <div class="taekwondo_benefit">
                        <p>Antidote contre l'anxiété et le stress de la vie moderne, libérez votre énergie tout en canalisant votre agressivité.</p>
                        <p>La mise en situation d'opposition permet d'évacuer de façon positive les tensions accumulées dans la journée et d'augementer confiance en soi et assurance nécessaire en situation de conflit.</p>
                    </div>
                    <div class="taekwondo_benefit">
                        <p>lorem ipsum dolor sit amet</p>
                        <p>lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="taekwondo_benefit">
                        <p>Le taekwondo est une activité complète qui met en mouvement la totalité du corps et développera des qualités physiques de puissance et d'endurance.</p>
                        <p>Par la pratique des enchaînements et la mise en situation de combat, il améliore aussi réflexes, coordination, précision des mouvements et équilibre. On y développe aussi souplesse, agilité et force musculaire.</p>
                    </div>
                    <!-- Grâce à cet encadrement où sont prônés la courtoisie, l'intégrité et le contrôle de soi, l'enfant est encouragé à développer un bon esprit sportif et de respect de l'autre. L'enfant étant confronté à des situations où il est tantôt vainqueur et tantôt vaincu, il apprend rapidement de l'échec tout en développant l'esprit de groupe et de persévérance. -->
                </div>
    </section>

    <div id="presentation_videos">
        <div class="container">
            <iframe src="https://tube.rvere.com/embed?v=iai8YbMEues" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <!-- <iframe src="https://youtube.com/embed/iai8YbMEues" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            <iframe src="https://tube.rvere.com/embed?v=dBjoz4tUq8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>

    <MudoFooter />
</template>

<script>
    import NavBar           from "@/components/NavBar.vue";
    import Hero             from "@/components/Hero.vue";
    // import UnderlinedTitle  from "@/components/UnderlinedTitle.vue";
    import MudoFooter       from "@/components/MudoFooter.vue";

    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    export default {
        name: "TaekwondoPresentation",
        components: {
            NavBar,
            Hero,
            // UnderlinedTitle,
            MudoFooter
        },
        mounted() {

            // Taekwondo presentation
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#taekwondo_presentation",
                    start: "center center",
                    end: "+=150%",
                    pin: "#taekwondo_presentation",
                    anticipatePin: 1,
                    scrub: 1,
                },
            })
            .from(".character_hangul", {opacity: 0, y: 30, stagger: 1})
            .from("#taekwondo_hanguls", {duration: 1})
            .from(".character_romanization, .character_translation", {opacity: 0, y: 20, duration: 0.5})
            .from("#taekwondo_hanguls", {duration: 1})
            .from("#taekwondo_presentation_text p", {opacity: 0, y: 20, stagger: 1})
            .from("#taekwondo_hanguls", {duration: 3})


            // Taekwondo history
            gsap.to("#korean_flag_center", {
                rotation: -360,
                duration: 10,
                repeat: -1,
                ease: "none"
            })

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#taekwondo_short_history",
                    start: "center center",
                    end: "+=150%",
                    pin: true,
                    scrub: 1,
                }
            })
            .to("#korean_flag_center", {opacity: 0, scale: 2, duration: 1})
            .to("#korean_flag", {opacity: 0, scale: 2, duration: 1}, "<")
            .from("#taekwondo_short_history_text", {opacity: 0, duration: 0.5, delay: 0.5}, "<")
            .to("#taekwondo_short_history_text", {duration: 0.5})


            // Taekwondo tenets
            const   tenets = document.querySelectorAll(".taekwondo_tenet"),
                    tenetsHanguls = document.querySelectorAll(".tenet_hanguls"),
                    tenetsSignifications = document.querySelectorAll(".tenet_signification"),
                    texts = document.querySelectorAll(".taekwondo_benefit");

            const tenets_timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#taekwondo_benefits",
                    start: "center center",
                    end: "+=400%",
                    pin: true,
                    anticipatePin: 4,
                    scrub: 0.5,
                    snap: {
                        snapTo: 1/4,
                        duration: 1
                    }
                }
            })
            
            for(let i = 0; i < tenets.length; i++) {
                const tenetHanguls = tenetsHanguls[i],
                      tenetSignification = tenetsSignifications[i],
                      text = texts[i],
                      transition = 0.8;

                if (i !== 0) {
                    tenets_timeline
                        .from(tenetHanguls, {opacity: 0, x: -40, duration: transition})
                        .from(tenetSignification, {opacity: 0, x: 40, duration: transition}, "<")
                        .from(text, {opacity: 0, y: 20, duration: transition}, "<")
    
                        .to(tenetHanguls, {duration: 1})
                }

                if (i == tenets.length - 1) break;
                tenets_timeline
                    .to(tenetHanguls, {opacity: 0, x: 40, duration: transition})
                    .to(tenetSignification, {opacity: 0, x:-40, duration: transition},"<")
                    .to(text, {opacity: 0, y: -20, duration: transition},"<")
            }

            // Taekwondo videos
            let taekwondoVideos = gsap.matchMedia();

            taekwondoVideos.add("(min-width: 60em)", () => {
                gsap.to("#presentation_videos .container", {
                    scrollTrigger: {
                        trigger:"#presentation_videos",
                        start: "top top",
                        end: "bottom top",
                        pin: "#presentation_videos .container",
                        scrub: 1,
                        snap: {
                            snapTo: 1,
                            duration: 1,
                            ease: "none"
                        }
                    },
                    xPercent: -50
                })
            });
        }
    }
</script>

<style lang="scss">

#taekwondo_presentation {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#taekwondo_hanguls {
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 2rem;

    .character_hangul {
        font-size: clamp(0px, 25vw, 10rem);
    }
    .character_romanization {
        font-size: clamp(1rem, 5vw, 2rem);
        font-weight: bold;
        color: var(--blue-medium-color);
    }
    .character_translation {
        text-transform: uppercase;
        font-size: clamp(0.6rem, 3vw, 1.2rem);
    }
}
#taekwondo_presentation_text {
    max-width: 40rem;
    font-size: var(--font-sz-large);
    text-align: center;
    margin: 0 2rem;
}


#taekwondo_short_history {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-size: var(--font-sz-large);
    min-height: 100vh;
    width: 100%;
}
#korean_flag {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    transform: scale(1.2);
}
#korean_flag_trigrams {
    width: 100%;
}
#korean_flag_center {
    position: absolute;
    width: 35%;
}
#taekwondo_short_history_text {
    position: absolute;
    text-align: justify;
    max-width: 40rem;
    margin: 2rem;

    h3 {
        border-bottom: solid 1px var(--blue-medium-color);
    }
}


#taekwondo_benefits {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#taekwondo_tenets {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    height: 50vh;
}
.taekwondo_tenet {
    position: absolute;
}
.tenet_hanguls {
    font-size: clamp(0px, 25vw, 10rem);    
}
.tenet_signification {
    font-weight: bold;
    text-transform: uppercase;
    font-size: var(--font-sz-large);
}
#taekwondo_benefits_texts {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    flex: 1;
    padding-top: 1rem;
}
.taekwondo_benefit {
    position: absolute;
    font-size: var(--font-sz-large);
    max-width: 40em;
    // margin: 0 2rem;
}


#presentation_videos {
    iframe {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
    }
}



@media (min-width: 40em) {
    #taekwondo_presentation_text {
        text-align: justify;
    }

    #korean_flag {
        width: 80%;
        transform: scale(1);
    }
}

@media (min-width: 60em) {
    #korean_flag {
        width: 50%;
    }

    #taekwondo_benefits {
        display: grid;
        width: 80%;
        margin: auto;
        grid-template-columns: 7fr 5fr;
        grid-template-areas: "text tenet";
    }
    #taekwondo_tenets {
        grid-area: tenet;
        justify-content: center;
    }
    .tenet_hanguls {
        font-size: 6vw;    
    }
    #taekwondo_benefits_texts {
        grid-area: text;
        justify-content: center;
    }

    #presentation_videos {
        overflow: hidden;

        .container {
            display: flex;
            width: 200%;
        }

        iframe {
            height: 100vh;
            width: 100vw;
        }
    }
}

</style>
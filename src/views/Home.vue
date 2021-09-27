<template>
    <Dojang />

    <NavBar />

    <section id="welcome_message">
        <div class="welcome">
            <p>Bienvenue</p>
            <div class="red_line"></div>
        </div>
        <div class="message">
            <p>Le Mudo Kwan Challandais vous accueille en toute simplicité dans son dojang que vous soyez débutants ou confirmés, recherchiez aussi bien la compétition que le simple loisir</p>
        </div>
    </section>

    <Practices />

    <section id="free_try">
        <div id="free_try_picture">
            <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
        </div>
        <div id="free_try_text">
            <p>2 cours d'essai gratuits</p>
            <p>Viens découvrir le Taekwondo ou le Hapkimudo durant deux séances et trouve la voie martiale  qui te correspond</p>
            <p>Tu peux venir avec un ou plusieurs de tes amis ou des membres de ta famille !</p>
        </div>
    </section>

    <section id="schedule_section">
        <h2>Horraires des cours</h2>
        <Schedule />
        <button>Inscriptions et tarifs</button>
    </section>

    <Footer />
</template>

<script>

import Dojang from "@/components/Dojang.vue";
import NavBar from "@/components/NavBar.vue";
import Practices from "@/components/Practices.vue";
import Schedule from "@/components/Schedule.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Home",
    components: {
        Dojang,
        NavBar,
        Practices,
        Schedule,
        Footer
    },

    data() {
        return {
            clubPicture: require('@/assets/club_pictures/2021-2022_new_season_group.jpg'),
            dojangExpanded: true,
            dojangAnimationOngoing: false
        }
    },

    methods: {
        hideDojang() {
            this.dojangAnimationOngoing = true;

            document.querySelector("#dojang_wrapper").classList.add("hidden");
            document.querySelector("#dojang_banner_overlay").classList.add("hidden");

            setTimeout(() => {
                document.body.style.height = "auto";

                document.body.style.overflowX = "hidden";
                document.body.style.overflowY = "auto"
                document.body.style.overflow = "overlay";
                
                //Permet à l'illustration de l'hapkimudo de se dessiner directement une fois le dojang caché [components/practices.vue]
                const hapkiEvent = new Event("drawHapki");
                document.querySelector("#hapkimudo_SVG").dispatchEvent(hapkiEvent);

                this.dojangExpanded = false;
                this.dojangAnimationOngoing = false;
            }, 1000);
        },
        showDojang() {
            this.dojangAnimationOngoing = true;

            document.querySelector("#dojang_wrapper").classList.remove("hidden");
            document.body.style.height = "100%";
            document.body.style.overflow = "hidden";

            setTimeout(() => {
                document.querySelector("#dojang_banner_overlay").classList.remove("hidden");
                this.dojangAnimationOngoing = false;
                }, 1000);        
            this.dojangExpanded = true;
        },
    },

    mounted() {
        this.showDojang();
        window.scrollTo(0, 0);    

        //Défillement depuis souris

        window.addEventListener("wheel", (e) => {
            if (e.deltaY > 0 && this.dojangExpanded && !this.dojangAnimationOngoing) { 
                this.hideDojang();
            }
        });

        window.addEventListener("wheel", (e) => {
            if (e.deltaY < 0 && window.pageYOffset == 0 && !this.dojangExpanded && !this.dojangAnimationOngoing) { 
                this.showDojang();
            }
        });

        //Défillement depuis écran tactil

        let touchOrigin = undefined;
        let touchOriginYOffset = undefined;

        window.addEventListener("touchstart", (e) => {
            touchOrigin = e.changedTouches[0].clientY;
            touchOriginYOffset = parseInt(window.pageYOffset);
        })

        window.addEventListener("touchend", (e) => {
            let touchEnd = e.changedTouches[0].clientY;

            if (this.dojangExpanded && touchEnd < touchOrigin && !this.dojangAnimationOngoing) {
                this.hideDojang();
            }

            if (!this.dojangExpanded && touchOriginYOffset == 0 && touchEnd > touchOrigin && !this.dojangAnimationOngoing) {
                this.showDojang();
            }
        })

        //Défillement depuis bouton

        document.querySelector("#dojang_scrolldown_button").addEventListener("click", this.hideDojang);

    },
}
</script>

<style lang="scss">

body{
    --blue-dark-color: #006699;
    --blue-medium-color: #0088CC;
    --blue-light-color: #00A3FF;
    --blue-strongLight-color: #00ccff ;

    --red-dark-color: #a71010;
    --red-medium-color: #C21111;
    --red-light-color: #e71515;
 
    height: 100%;
    width: 100vw;
    overflow: hidden;
}

#welcome_message {
    display: flex;
    flex-direction: column;
    padding-top: clamp(0.25rem, 0.5vw, 1rem);
    padding-bottom: 2rem;
    background-color: rgba(0,0,0,0.02);

    * {
        align-self: center;
    }

    .welcome {
        width: 900px;  
        max-width: 90%;   

        p {
            font-size: clamp(2rem, 3vw, 3rem);
            margin-bottom: 0;
        }

        .red_line {
            background: var(--red-medium-color);
            border-radius: 0.2rem;
            width: 90%;
            height: 5px;
            margin: auto;
        }
    }

    .message {
        width: 90%;
        justify-content: center;
        font-size: clamp(1.1rem, 1.5vw, 1.5rem);
        max-width: 1200px;
    }
}

#free_try {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--blue-dark-color);
    padding: 5rem 5% 5rem 5%;

    #free_try_picture {
        width: 45%;

        img {
            max-width: 100%;
        }
    }

    #free_try_text{
        color: white;
        font-size: clamp(0.8rem, 1.2vw, 1.2rem);
        width: 45%;

        :first-child{
            text-transform: uppercase;
            text-decoration: underline;
            font-size: clamp(1rem, 1.5vw, 1.5rem);
            font-weight: bold;     
        }
    }
}

#schedule_section {
    max-width: 1000px;
    width: 85%;
    margin: auto;
    padding: 3rem 0 5rem 0;
    
    h2 {
        font-size: clamp(2rem, 2.5vw, 2.5rem);
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 3rem;
    }

    button {
        margin-top: 5rem;
        background-color: var(--red-medium-color);
        border: none;
        color: white;
        font-weight: bold;
        padding: 1rem 2.5rem 1rem 2.5rem;
        font-size: clamp(1rem, 1.2vw, 1.2rem);
        cursor: pointer;
        transition: 0.5s;
        
        &:hover {
            background-color: var(--red-light-color);
            border-radius: 25px;
        }
    }
}

@media (max-width: 40em) {
    #free_try {
        flex-direction: column;
        padding: 3rem 0 2rem 0;

        #free_try_picture {
            width: 85%;
        }

        #free_try_text {
            width: 85%;
            font-size: 1rem;

            :first-child {
                font-size: 1.2rem;
            }
        }
    }
}
</style>

<template>
    <Dojang />

    <NavBar/>

    <UnderlinedTitle
        class="darker"
        title="Bienvenue"
        text="Le Mudo Kwan Challandais vous accueille en toute simplicité dans son dojang que vous soyez débutants ou confirmés, que vous recherchiez aussi bien la compétition que le simple loisir."
    />

    <Practices />

    <section id="free_try">
        <div id="free_try_picture">
            <img src="../assets/club_pictures/2021-2022_new_season_group.jpg" alt="Photo de groupe du premier cours de la saison 2021-2022" />
        </div>
        <div id="free_try_text">
            <h3>2 cours d'essai gratuits</h3>
            <p>Viens découvrir le Taekwondo ou le Hapkimudo durant deux séances et trouve la voie martiale qui te correspond</p>
            <p>Tu peux venir avec un ou plusieurs de tes amis ou des membres de ta famille !</p>
        </div>
    </section>

    <section id="schedule_section">
        <UnderlinedTitle title="Horaires des entraînements" />
        <div class="wrap">
            <Schedule />
            <button>Inscriptions et tarifs</button>
        </div>
    </section>

    <Footer />
</template>

<script>

import Dojang           from "@/components/Dojang.vue";
import NavBar           from "@/components/NavBar.vue";
import UnderlinedTitle  from "@/components/UnderlinedTitle.vue";
import Practices        from "@/components/Practices.vue";
import Schedule         from "@/components/Schedule.vue";
import Footer           from "@/components/Footer.vue";

export default {
    name: "Home",
    components: {
        Dojang,
        NavBar,
        UnderlinedTitle,
        Practices,
        Schedule,
        Footer
    },

    data() {
        return {
            clubPicture: require('@/assets/club_pictures/2021-2022_new_season_group.jpg'),
        }
    },
}
</script>

<style lang="scss">

body{
    height: 100%;
    width: 100vw;
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
        font-size: clamp(0.85em, 1vw, 1.125rem);
        font-weight: bold;
        width: 45%;

        h3 {
            text-transform: uppercase;
            font-size: clamp(1.5rem, 2vw ,2rem);
        }
    }
}

#schedule_section {
    width: 100%;
    
    .wrap {
        max-width: 1000px;
        width: 85%;
        margin: auto;
        padding: clamp(2rem, 3vw, 3rem) 0 clamp(3rem, 5vw, 5rem) 0;

        button {
            margin-top: clamp(3rem, 5vw, 5rem);
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
        }
    }
}
</style>

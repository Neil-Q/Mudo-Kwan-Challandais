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
    <div id="free_try_dummy"></div>
    <div id="horraires_dummy"></div>
    <div id="footer_dummy"></div>
</template>

<script>

import Dojang from "@/components/Dojang.vue";
import NavBar from "@/components/NavBar.vue";
import Practices from "@/components/Practices.vue";

export default {
    name: "Home",
    components: {
        Dojang,
        NavBar,
        Practices
    },
    methods: {
    }
}
</script>

<style lang="scss">

body{
    --blue-dark-color: #006699;
    --blue-medium-color: #0088CC;
    --blue-light-color: #00A3FF;
    --blue-strongLight-color: #00ccff ;

    --red-medium-color: #C21111;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
}
//___________________________________________________________
#free_try_dummy {
    height: 35rem;
    background-color: var(--blue-dark-color);
}
#horraires_dummy {
    height: 60rem;
}
#footer_dummy {
    height: 40rem;
    background-color: var(--red-medium-color);
}
//___________________________________________________________

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

</style>

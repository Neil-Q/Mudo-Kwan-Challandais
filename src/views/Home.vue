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
    <div id="body_dummy"></div>

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
#body_dummy {
    height: 2000px;
    background: rgba(0,0,0,0.05);
}
#welcome_message {
    display: flex;
    flex-direction: column;
    padding-top: 1em;
    padding-bottom: 2em;
    background-color: rgba(0,0,0,0.02);

    * {
        align-self: center;
    }

    .welcome {
        width: 900px;  
        max-width: 90%;   

        p {
            font-size: 3em;
            margin-bottom: 0;
        }

        .red_line {
            background: var(--red-medium-color);
            border-radius: 0.2em;
            width: 90%;
            height: 5px;
            margin: auto;
        }
    }

    .message {
        width: 90%;
        justify-content: center;
        font-size: 1.5em;
        max-width: 1200px;
    }
}

@media (max-width: 992px) {
    #welcome_message {
        .message { 
            font-size: 1.2em;
        }
    }
}

</style>

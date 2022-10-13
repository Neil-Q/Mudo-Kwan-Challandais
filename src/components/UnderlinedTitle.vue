<template>
    <div class="underlined_title">
        <div class="title">
            <h2>{{title}}</h2>
            <div class="line"></div>
        </div>
        <div v-if="text" class="text">
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "UnderlinedTitle",
    props: [
        "title",
        "text",
    ]
}
</script>

<style lang="scss">
.underlined_title {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: clamp(0.5rem, 1vw, 2rem);
    padding-bottom: 2rem;    

    * {
        align-self: center;
    }

    &.darker {
        background-color: rgba(0,0,0,0.02);
    }

    &.white {
        color: white;

        .title .line {
            background: white;
        }
    }

    &.large {
        padding-bottom: 6rem;
    }
}

.title {
    width: 900px;  
    max-width: 90%;

    h2 {
        font-size: clamp(2rem, 3vw, 3rem);
        margin-bottom: 0;
        text-transform: uppercase;
    }

    .line {
        background: var(--red-medium-color);
        border-radius: 0.2rem;
        width: 90%;
        height: 5px;
        margin: auto;
    }
}

.text {
    width: 90%;
    justify-content: center;
    font-size: clamp(1.1rem, 1.5vw, 1.5rem);
    max-width: 1200px;
}

@media (max-width: 40em) {
    .title .line {
        width: 100%;
    }

    .underlined_title {
        &.large {
            padding-bottom: 4rem;
        }
    }
}


</style>
<template>
    <ul class="lexicon_table">
        <li class="lexicon_term" v-for="term in lexiconArray" :key="term" v-show="(isOverTwelve ? term.keupAdult : term.keupChild) >= keupLimit">
            <div class="belt">
                <BeltIcon
                class="small"
                :class="disciplineClass + ' keup_' + (isOverTwelve ? term.keupAdult : term.keupChild)"
                />
            </div>

            <div class="name"> {{term.name}} </div>

            <div class="description"> {{term.description}} </div>

            <div class="hangeul">백철불굴</div>

            <div class="audio"></div>
        </li>
    </ul>
</template>

<script>
    import BeltIcon     from "@/components/belt_exams/BeltIcon.vue"

    export default {
        name: "LexiconTable",
        components: {
            BeltIcon
        },
        props: {
            lexiconArray: {
                type: Array,
                required: true,

                validator(value) {
                    return value.every(term => {
                        return  typeof term.keupAdult   === Number 
                            &&  typeof term.keupChild   === Number
                            &&  typeof term.name        === String
                            &&  typeof term.description === String
                            &&  typeof term.hangeul     === String
                            &&  typeof term.audio       === String
                    })
                }
            },
            discipline: {
                type: String,

                validator(value) {
                    return ["taekwondo", "hapkimudo"].includes(value)
                }
            },
            isOverTwelve: {
                type: Boolean,
                required: false
            },
            keupLimit: {
                type: Number,
                required: false
            },
            
        },
        computed: {
            disciplineClass() {
                if (this.discipline === "hapkimudo") return "hapkimudo";
                if (this.isOverTwelve) return "taekwondo";

                return "taekwondo_children";
            },
        }
    }
</script>

<style lang="scss">
    .lexicon_table {
        margin: 0;
        padding: 0;

        .lexicon_term:last-child {
            border: none;
        }
    }

    .lexicon_term {
        display: grid;
        grid-template-columns: 5rem 1fr 3fr 7rem 7rem;
        grid-template-areas: "belt name description hangeul audio";
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;
        list-style: none;
        text-align: left;
        border-bottom: solid $white-3 1px;

        .belt {
            grid-area: belt;
        }

        .name {
            grid-area: name;
            font-weight: bold;
        }

        .description {
            grid-area: description;
        }

        .hangeul {
            grid-area: hangeul;
        }

        .audio {
            grid-area: audio;
            justify-self: end;
            width: 100%;
            height: 1.5rem;
            background-color: $blue;
            border-radius: 100px;
        }
    }

    @media (max-width: 60rem) {
        .lexicon_table {
            background-color: $darker-1;
        }

        .lexicon_term {
            grid-template-columns: 4rem 1fr 3fr 4rem;
            grid-template-areas: "belt name description audio";

            .hangeul {
                display: none;
            }
        }
    }

    @media (max-width: 40rem) {
        .lexicon_table {
            background-color: $lighter-1;
        }

        .lexicon_term {
            text-align: center;

            grid-template-columns: 3rem 1fr 3rem;
            grid-template-rows: auto auto;
            grid-template-areas:
            "belt name audio"
            "description description description";
        }
    }
</style>
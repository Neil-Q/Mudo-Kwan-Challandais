<template>
    <div id="poomse_table">
        <ul id="poomse_list" ref="poomse_list">
            <li v-for="number in 8" :key="number">
                <input
                    type="radio"
                    :id="'poomse_choice_' + number"
                    name="poomse_choice"
                    class="poomse_choice_radio"
                    @click="setCurrentPoomse(number)"
                >
                <label
                    :for="'poomse_choice_' + number"
                    class="poomse_choice"
                >
                    {{number}}
                </label>
            </li>
        </ul>

        <div id="poomse_presentation">
            <h3>{{currentPoomseName}}</h3>
            <h4>{{currentPoomseMeaning}}</h4>

            <iframe
                :src="currentPoomseVideoAdress"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>

            <div id="poomse_img_and_pdf">
                <div id="poomse_plan_image">
                    IMG
                </div>
                <div class="separator"></div>
                <div id="poomse_plan_pdf">
                    PDF
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PoomseTable",
        props: {
            poomse: {
                type: Number,
                default: 0
            }
        },
        watch: {
            poomse: function() {this.updateMandatory()}
        },
        computed: {
            currentPoomseName() {
                return this.poomseDatas[this.currentPoomse - 1].name;
            },
            currentPoomseMeaning() {
                return this.poomseDatas[this.currentPoomse - 1].meaning;
            },
            currentPoomseVideoAdress() {
                return this.rvereAdress + this.poomseDatas[this.currentPoomse - 1].youtubeId + '&start=' + this.poomseDatas[this.currentPoomse - 1].videoStart
            }
        },
        data() {
            return {
                currentPoomse: 1,
                poomseDatas: [
                    {
                        number: 1,
                        name: "Il Jang",
                        trigram: "",
                        meaning: "Le ciel",
                        youtubeId: "WhkjRruCBTo",
                        videoStart: 82,
                        image: "@/assets/illustrations/poomse/poomse_1.jpg",
                        // planPDF: 
                    },
                    {
                        number: 2,
                        name: "Yi jang",
                        trigram: "",
                        meaning: "Le lac",
                        youtubeId: "tGlrUplKHh8",
                        videoStart: 66,
                        image: "@/assets/illustrations/poomse/poomse_2.jpg",
                        // planPDF: 
                    },
                    {
                        number: 2,
                        name: "Sam Jang",
                        trigram: "",
                        meaning: "Le feu",
                        youtubeId: "ksSqKt0UkWo",
                        videoStart: 70,
                        image: "@/assets/illustrations/poomse/poomse_3.jpg",
                        // planPDF: 
                    },
                    {
                        number: 4,
                        name: "Sa Jang",
                        trigram: "",
                        meaning: "La foudre",
                        youtubeId: "Lt917gacJho",
                        videoStart: 90,
                        image: "@/assets/illustrations/poomse/poomse_4.jpg",
                        // planPDF: 
                    },
                    {
                        number: 5,
                        name: "Oh Jang",
                        trigram: "",
                        meaning: "Le vent",
                        youtubeId: "VdqNEAHWCBM",
                        videoStart: 73,
                        image: "@/assets/illustrations/poomse/poomse_5.jpg",
                        // planPDF: 
                    },
                    {
                        number: 6,
                        name: "Yuk Jang",
                        trigram: "",
                        meaning: "L'eau",
                        youtubeId: "jcBwWo4wN7c",
                        videoStart: 55,
                        image: "@/assets/illustrations/poomse/poomse_6.jpg",
                        // planPDF: 
                    },
                    {
                        number: 7,
                        name: "Tchil Jang",
                        trigram: "",
                        meaning: "La montagne",
                        youtubeId: "6FUM1p6qqhQ",
                        videoStart: 61,
                        image: "@/assets/illustrations/poomse/poomse_7.jpg",
                        // planPDF: 
                    },
                    {
                        number: 8,
                        name: "Pal Jang",
                        trigram: "",
                        meaning: "La terre",
                        youtubeId: "Gr_Je2ZkgkI",
                        videoStart: 68,
                        image: "@/assets/illustrations/poomse/poomse_8.jpg",
                        // planPDF: 
                    },
                ],
                rvereAdress: "https://tube.rvere.com/embed?v=",
            }
        },
        methods: {
            updateMandatory() {
                const labels = this.$refs.poomse_list.querySelectorAll("label"),
                      radios = this.$refs.poomse_list.querySelectorAll("input"),
                      list_items =  this.$refs.poomse_list.querySelectorAll("li");

                labels.forEach(label => label.classList.remove("mandatory"));
                list_items.forEach(item => item.classList.remove("hidden"));

                if(this.poomse == 0) return

                list_items.forEach((item, index) => {if(index >= this.poomse) item.classList.add("hidden")});
                labels[this.poomse - 1].classList.add("mandatory");
                radios[this.poomse - 1].checked = true;

                if(this.poomse == 2) labels[0].classList.add("mandatory");
            },
            setCurrentPoomse(number) {
                this.currentPoomse = number;
            }
        },
    }
</script>

<style lang="scss" scoped>

    #poomse_list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: $font-sz-medium;
        width: 100%;
        padding: 0;
        margin: 0;
    
        li {
            flex-grow: 1;
            list-style: none;

            &.hidden {
                display: none;
            }
        }
    
        input {
            display: none;
        }
        
    }

    #poomse_table {
        @extend %section-container;

        background-color: $white-1;
        padding: 1rem;
        border-radius: 15px;
    }

    .poomse_choice {
        display: block;
        box-sizing: border-box;
        width: 100%;
        min-width: 3rem;
        padding: 0.5rem;
        background-color: $white;
        border-radius: 100px;
        border: solid 2px;
        border-color: $white-3;

        &.mandatory {
            background-color: $dark-1;
            border-color: $dark-1;
            color: $white-2;
        }
    }
    .poomse_choice_radio:checked + .poomse_choice {
        outline: solid 3px $blue;
        border-color: $white-1;
    }

    #poomse_presentation {
        h3 {
            margin-top: clamp(2rem, 5vw, 5rem);
            margin-bottom: 0;
        }
        h4 {
            margin-top: 0;
            color: $blue;
        }

        iframe {
            width: 100%;
            max-width: 60rem;
            aspect-ratio: 16 / 9;
        }
    }

    #poomse_img_and_pdf {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: clamp(2rem, 3vw, 3rem);
        margin: 2rem auto;

        .separator{
            height: clamp(2rem, 6vw, 6rem);
            width: 0;
            border: 1px solid $blue;
        }
    }

    #poomse_plan_image, #poomse_plan_pdf {
        @extend %flex-center;

        height: clamp(4rem, 12vw, 12rem);
        aspect-ratio: 1/ 1;
        background-color: $white;
        border: 1px solid $white-3;
        color: $blue-dark;
        font-weight: bold;
        // box-shadow: $shadow-2;
    }

</style>
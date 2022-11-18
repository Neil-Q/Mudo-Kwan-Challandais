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
            <h3>{{currentPoomseName}} <span>{{currentPoomseTrigram}}</span></h3>
            <h4>{{currentPoomseMeaning}}</h4>

            <iframe
                :src="currentPoomseVideoAdress"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>

            <div id="poomse_img_and_pdf">
                <button
                    id="poomse_plan_image"
                    @click="$refs.poomse_img_popup.open()"
                >
                    <svg viewBox="0 0 145.521 132.292" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(-31.806 -7.52319)">
                            <rect class="horizontal" x="31.806" y="7.52319" width="145.521" height="26.4583"/>
                            <rect class="vertical" x="84.7226" y="7.52319" width="39.6875" height="132.292"/>
                            <rect class="horizontal" x="31.806" y="60.4399" width="145.521" height="26.4583"/>
                            <rect class="horizontal" x="31.806" y="113.357" width="145.521" height="26.4583"/>
                            <g class="dots">
                                <circle cx="78.2252" cy="27.8601" r="4.00182"/><circle cx="130.793" cy="27.8601" r="4.00182"/><circle cx="90.9713" cy="60.4399" r="4.00182"/><circle cx="90.9713" cy="86.8982" r="4.00182"/><circle cx="90.9713" cy="73.669" r="4.00182"/><circle cx="90.9713" cy="33.9815" r="4.00182"/><circle cx="90.9713" cy="47.2107" r="4.00182"/><circle cx="90.9713" cy="113.357" r="4.00182"/><circle cx="90.9713" cy="100.127" r="4.00182"/><circle cx="116.678" cy="106.714" r="4.00182"/><circle cx="116.678" cy="93.4853" r="4.00182"/><circle cx="78.2252" cy="132.996" r="4.00182"/><circle cx="130.793" cy="119.776" r="4.00182"/><circle cx="40.341" cy="80.0086" r="4.00182"/><circle cx="78.2252" cy="80.0086" r="4.00182"/><circle cx="59.2831" cy="80.0086" r="4.00182"/><circle cx="130.793" cy="67.2075" r="4.00182"/><circle cx="168.678" cy="67.2075" r="4.00182"/><circle cx="149.736" cy="67.2075" r="4.00182"/><circle cx="59.2831" cy="132.996" r="4.00182"/><circle cx="149.736" cy="119.776" r="4.00182"/>
                            </g>
                        </g>
                    </svg>
                    <span>
                        PLAN
                    </span>
                </button>
                <PopUp id="poomse_img_popup" ref="poomse_img_popup" shape="auto_max">
                    <template v-slot:content>
                        <div class="image_wrapper">
                            <img :src="currentPoomseImage" alt="Plan du poomse en image">
                        </div>
                    </template>
                </PopUp>

                <div class="separator"></div>

                <a id="poomse_plan_pdf" :href="currentPoomsePDF" target="_blank">
                    <svg fill="none" viewBox="2 2 20 20" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    <span>
                        DESCRIPTIF
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import PopUp    from "@/components/PopUp.vue";

    export default {
        name: "PoomseTable",
        components: {
            PopUp
        },
        props: {
            poomse: {
                type: Number,
                default: 0
            }
        },
        watch: {
            poomse: function() {
                        this.updateMandatory()
                        this.currentPoomse = this.poomse;
                    }
        },
        computed: {
            currentPoomseName() {
                return this.poomseDatas[this.currentPoomse - 1].name;
            },
            currentPoomseTrigram() {
                return this.poomseDatas[this.currentPoomse - 1].trigram;
            },
            currentPoomseMeaning() {
                return this.poomseDatas[this.currentPoomse - 1].meaning;
            },
            currentPoomseVideoAdress() {
                return this.rvereAdress + this.poomseDatas[this.currentPoomse - 1].youtubeId + '&start=' + this.poomseDatas[this.currentPoomse - 1].videoStart
            },
            currentPoomseImage() {
                return this.poomseDatas[this.currentPoomse - 1].image;
            },
            currentPoomsePDF() {
                return this.poomseDatas[this.currentPoomse - 1].PDF;
            }
        },
        data() {
            return {
                currentPoomse: 1,
                poomseDatas: [
                    {
                        number: 1,
                        name: "Il Jang",
                        trigram: "☰",
                        meaning: "Le ciel",
                        youtubeId: "WhkjRruCBTo",
                        videoStart: 82,
                        image: require("@/assets/illustrations/poomse/poomse_1.jpg"),
                        PDF: "https://www.fftda.fr/files/file/Grades/Vid%C3%A9o/Taegueug%20Il%20Jang.pdf",
                    },
                    {
                        number: 2,
                        name: "Yi jang",
                        trigram: "☱",
                        meaning: "Le lac",
                        youtubeId: "tGlrUplKHh8",
                        videoStart: 66,
                        image: require("@/assets/illustrations/poomse/poomse_2.jpg"),
                        PDF: "https://www.fftda.fr/files/file/Grades/Vid%C3%A9o/Taegueug%20Y%20Jang.pdf",
                    },
                    {
                        number: 2,
                        name: "Sam Jang",
                        trigram: "☲",
                        meaning: "Le feu",
                        youtubeId: "ksSqKt0UkWo",
                        videoStart: 70,
                        image: require("@/assets/illustrations/poomse/poomse_3.jpg"),
                        PDF: "https://www.fftda.fr/files/file/Grades/Vid%C3%A9o/Taegueug%20Sam%20Jang.pdf",
                    },
                    {
                        number: 4,
                        name: "Sa Jang",
                        trigram: "☳",
                        meaning: "La foudre",
                        youtubeId: "Lt917gacJho",
                        videoStart: 90,
                        image: require("@/assets/illustrations/poomse/poomse_4.jpg"),
                        PDF: "https://www.fftda.fr/files/file/Grades/Vid%C3%A9o/DS_TAEGUEUG_SA_JANG.pdf",
                    },
                    {
                        number: 5,
                        name: "Oh Jang",
                        trigram: "☴",
                        meaning: "Le vent",
                        youtubeId: "VdqNEAHWCBM",
                        videoStart: 73,
                        image: require("@/assets/illustrations/poomse/poomse_5.jpg"),
                        PDF: "https://www.fftda.fr/files/file/Grades/Vid%C3%A9o/DS_TAEGUEUG_OH_JANG.pdf",
                    },
                    {
                        number: 6,
                        name: "Yuk Jang",
                        trigram: "☵",
                        meaning: "L'eau",
                        youtubeId: "jcBwWo4wN7c",
                        videoStart: 55,
                        image: require("@/assets/illustrations/poomse/poomse_6.jpg"),
                        PDF: "https://www.fftda.fr/files/file/Grades/Vid%C3%A9o/Taegueug%20Yuk%20Jang.pdf",
                    },
                    {
                        number: 7,
                        name: "Tchil Jang",
                        trigram: "☶",
                        meaning: "La montagne",
                        youtubeId: "6FUM1p6qqhQ",
                        videoStart: 61,
                        image: require("@/assets/illustrations/poomse/poomse_7.jpg"),
                        PDF: "https://www.fftda.fr/files/file/Grades/Vid%C3%A9o/DS_TAEGUEUG_TCHIL_JANG.pdf",
                    },
                    {
                        number: 8,
                        name: "Pal Jang",
                        trigram: "☷",
                        meaning: "La terre",
                        youtubeId: "Gr_Je2ZkgkI",
                        videoStart: 68,
                        image: require("@/assets/illustrations/poomse/poomse_8.jpg"),
                        PDF: "https://www.fftda.fr/files/file/Grades/Vid%C3%A9o/Taegueug_Pal_Jang_Officiel.pdf",
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

<style lang="scss">
    #poomse_table {
        @extend %section-container;

        background-color: $white-1;
        padding: 1rem;
        border-radius: 15px;
        box-shadow: $shadow-2;
    }
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
            span {
                font-size: $font-sz-xxxl;
            }
        }
        h4 {
            margin-top: 0;
            color: $blue;
        }

        iframe {
            width: 100%;
            max-width: 50rem;
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
        box-sizing: border-box;
        flex-direction: column;
        height: clamp(3rem, 6vw, 12rem);
        aspect-ratio: 1/ 1;
        background-color: $white;
        border: 1px solid $white-3;
        padding: clamp(0rem, 2vw, 2rem);
        cursor: pointer;

        filter: grayscale(1) opacity(0.7);
        transition: 0.5s;

        &:hover {
           filter: grayscale(0.5) opacity(1);
        }

        svg {
            flex: 1;
        }

        span {
            display: none;
        }

    }
    #poomse_plan_image svg {
        .horizontal {
            fill: $blue-light;
        }
        .vertical {
            fill: $white-35;
        }
        .dots {
            fill: $dark-2;
        }
    }
    #poomse_plan_pdf svg {
        color: $blue;
    }

    #poomse_img_popup {
        .image_wrapper {
            @extend %flex-center;
            box-sizing: border-box;
            height: 100%;
            max-height: 100%;

            img {
                max-height: 100%;
                max-width: 100%;
            }
        }
    }

    @media (min-width: 60rem) {
        #poomse_plan_image, #poomse_plan_pdf {
            gap: clamp(0rem, 1vw, 1rem);
            padding: clamp(0rem, 1vw, 2rem);
            color: $dark-2;
            font-weight: bold;
            font-size: $font-sz-medium;
        }
    }
</style>
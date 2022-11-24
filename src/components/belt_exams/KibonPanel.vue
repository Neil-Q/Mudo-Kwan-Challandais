<template>
    <div id="kibon_panel">
        <UnderlinedTitle
            class="blue"
            title="Kibon"
            subtitle="Bases"
        />

        <div class="marking">
            xx pt / xxx pt 
        </div>

        <div id="kibon_table">
            <ul id="kibon_categories_list">
                <li v-for="number in kibonDatas.length" :key="number">
                    <input
                        type="radio"
                        :id="'kibon_category_' + number"
                        name="kibon_categories"
                        @click="changeCurrentCategory(number - 1)"
                    >
                    <label
                        :for="'kibon_category_' + number"
                    >
                        {{kibonDatas[number - 1].name}}
                    </label>
                </li>
            </ul>

            <div v-if="currentCategory.datas">
                <LexiconTable
                    :lexiconArray="currentCategory.datas"
                    :keupLimit="keup"
                    :isOverTwelve="isOverTwelve"
                    discipline="taekwondo"
                />
            </div>

            <div class="subCategoriesWrapper" v-if="currentCategory.subCategories">
                <div v-for="number in currentCategory.subCategories.length" :key="number" class="subcat_panel">
                    <h4>{{currentCategory.subCategories[number - 1].name}}</h4>
                    <LexiconTable
                        :lexiconArray="currentCategory.subCategories[number - 1].datas"
                        :keupLimit="keup"
                        :isOverTwelve="isOverTwelve"
                        discipline="taekwondo"
                    />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import UnderlinedTitle      from "@/components/UnderlinedTitle.vue";
    import LexiconTable         from "@/components/belt_exams/LexiconTable.vue";

    // Import scroll trigger tout recalculate titles triggers when kibon tables lengths changes
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    export default {
        name: "KibonPanel",
        components: {
            UnderlinedTitle,
            LexiconTable
        },
        methods: {
            changeCurrentCategory(number) {
                this.currentCategoryIndex = number;
                setTimeout(() => {ScrollTrigger.refresh()}, 100);
            }
        },
        props: {
            keup: {
                type: Number,
                required: false
            },
            isOverTwelve: {
                type: Boolean,
                required: false
            }
        },
        computed: {
            currentCategory() {
                return this.kibonDatas[this.currentCategoryIndex];
            }
        },
        data() {
            return {
                currentCategoryIndex: 0,
                kibonDatas: [
                    {
                        name: "Général",
                        subCategories: [
                            {
                                name: "Termes généraux",
                                datas: [
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "dojang",
                                        description: "la salle d'entrainement",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "dobok",
                                        description: "la tenue d'entrainement",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "tchaliot",
                                        description: "garde à vous",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "kyongnye",
                                        description: "saluez",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "poomse",
                                        description: "forme",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "tchoumbi",
                                        description: "position de départ",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "kibon",
                                        description: "base",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "keup",
                                        description: "grades ceinture de couleur",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "dan",
                                        description: "grades ceinture noire",
                                        hangeul: "",
                                        audio: ""
                                    },                                                                      
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "shijak",
                                        description: "commencez",
                                        hangeul: "",
                                        audio: ""
                                    },                                    
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "keuman",
                                        description: "arretez",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "chwio",
                                        description: "repos",
                                        hangeul: "",
                                        audio: ""
                                    },                                    
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "baro",
                                        description: "revenez",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 8,
                                        name: "ti",
                                        description: "ceinture",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "chong",
                                        description: "bleu",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "hong",
                                        description: "rouge",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "dwiro dora",
                                        description: "demi-tour",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "kyorugui",
                                        description: "combat",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "balbakosso",
                                        description: "changez de garde",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 5,
                                        keupChild: 5,
                                        name: "wen",
                                        description: "gauche",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 5,
                                        keupChild: 5,
                                        name: "oreun",
                                        description: "droite",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 5,
                                        keupChild: 5,
                                        name: "ho shin soul",
                                        description: "auto défense",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 4,
                                        keupChild: 4,
                                        name: "ann ja",
                                        description: "à genoux",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 3,
                                        keupChild: 3,
                                        name: "kyo sa nim",
                                        description: "instructeur",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 3,
                                        keupChild: 3,
                                        name: "sa beum nim",
                                        description: "Maître",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 3,
                                        keupChild: 3,
                                        name: "hogou",
                                        description: "plastron",
                                        hangeul: "",
                                        audio: ""
                                    },
                                ]
                            },
                            {
                                name: "Termes techniques",
                                datas: [
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "ale",
                                        description: "niveau bas",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "momtong",
                                        description: "niveau moyen",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "oulgoul",
                                        description: "niveau haut",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "ap",
                                        description: "avant / vers devant",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "tchagui",
                                        description: "coup de pied",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "maki",
                                        description: "défense",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "seugi",
                                        description: "position",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "tchireugui",
                                        description: "frappe des extrémités",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "an",
                                        description: "bers l'intérieur",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "bakkat",
                                        description: "vers l'extérieur",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "dolyeu",
                                        description: "circulaire",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "yop",
                                        description: "sur le côté",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 8,
                                        name: "dwitt",
                                        description: "par derrière",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "nelyeu",
                                        description: "descendant",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "eulyeu",
                                        description: "ascendant",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "tchigui",
                                        description: "attaque avec impact fouetté",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "tuyeu",
                                        description: "sauté",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 4,
                                        keupChild: 4,
                                        name: "pyo jeuk",
                                        description: "frappé dans la main",
                                        hangeul: "",
                                        audio: ""
                                    },
                                ]
                            },
                            {
                                name: "Parties du corps",
                                datas: [
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "bal",
                                        description: "la jambe",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "ap tchouk",
                                        description: "le bol du pied",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "dwitt tchouk",
                                        description: "le talon",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "sonn",
                                        description: "la main",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "sonnal",
                                        description: "tranchant de la main",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 8,
                                        name: "han sonnal",
                                        description: "main à la ceinture",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 8,
                                        name: "mok",
                                        description: "le cou",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "joumok",
                                        description: "le poing",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "deung joumok",
                                        description: "le revers poing",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "pyon sonn keut",
                                        description: "l'extrémité des doigts",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "batangsonn",
                                        description: "la paume",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 5,
                                        keupChild: 5,
                                        name: "palkoup",
                                        description: "le coude",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 2,
                                        keupChild: 2,
                                        name: "moureup",
                                        description: "le genou",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 1,
                                        keupChild: 1,
                                        name: "pal",
                                        description: "le bras",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 1,
                                        keupChild: 1,
                                        name: "palmok",
                                        description: "tranchant intérieur du bras (radius)",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 1,
                                        keupChild: 1,
                                        name: "bakkat palmok",
                                        description: "tranchant extérieur du bras (cubitus)",
                                        hangeul: "",
                                        audio: ""
                                    },
                                ]
                            },
                            {
                                name: "Chiffres",
                                datas: [
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "hana",
                                        description: "1",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "doul",
                                        description: "2",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "set",
                                        description: "3",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "net",
                                        description: "4",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "dasot",
                                        description: "5",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "yosot",
                                        description: "6",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "ilgop",
                                        description: "7",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "yeudol",
                                        description: "8",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "ahop",
                                        description: "9",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "yeul",
                                        description: "10",
                                        hangeul: "",
                                        audio: ""
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: "Positions",
                        datas: [
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "tchaliot seugi",
                                description: "position de salut",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "tchoumbi seugi",
                                description: "position de préparation",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "ap seugi",
                                description: "position de marche",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "ap koubi seugi",
                                description: "grande position",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 7,
                                keupChild: 10,
                                name: "joutchoum seugi",
                                description: "position du cavalier ",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 7,
                                keupChild: 10,
                                name: "dwitt koubi seugi",
                                description: "position fléchie vers l’arrière",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 4,
                                keupChild: 4,
                                name: "wen/orun seugi",
                                description: "position pied gauche/ droit ouverts à 90° (talons collés)",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 4,
                                keupChild: 4,
                                name: "dwitt koa seugi",
                                description: "position jambes croisés, talon arrière levé, dans un déplacement vers l’avant",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 3,
                                keupChild: 3,
                                name: "natchoa seugi",
                                description: "grande position du cavalier",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "moa seugi",
                                description: "position pieds joints",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "beum seugi",
                                description: "position du tigre",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "bo joumok",
                                description: "position de préparation avec le poing recouvert de l’autre main",
                                hangeul: "",
                                audio: ""
                            },
                        ]
                    },
                    {
                        name: "Attaques membres inférieurs",
                        subCategories: [
                            {
                                name: "Généralités",
                                datas: [
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "ap bal",
                                        description: "jambe avant",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "dwitt bal",
                                        description: "jambe arrière",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 8,
                                        name: "kouroh",
                                        description: "pas chassé",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "hoeri",
                                        description: "coup de pied avec rotation vers l'avant",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 5,
                                        keupChild: 5,
                                        name: "mon dora",
                                        description: "coup de pied avec rotation vers arrière",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 1,
                                        keupChild: 1,
                                        name: "dou bal dang sang",
                                        description: "deux coups de pieds enchainés sans reposer au sol",
                                        hangeul: "",
                                        audio: ""
                                    },
                                ]
                            },
                            {
                                name: "Coups de pied",
                                datas: [
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "ap tchagui",
                                        description: "coup de pied de face impacté",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "bandal tchagui",
                                        description: "coup de pied semi-circulaire (ascendant 45°)",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "ann tchagui",
                                        description: "coup de pied en demi lune vers l'intérieur ",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "bakkat tchagui",
                                        description: "coup de pied en demi lune vers l'extérieur ",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "dolyeu tchagui",
                                        description: "coup de pied circulaire (minimum 90° - horizontal)",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "yop tchagui",
                                        description: "coup de pied de côté",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 8,
                                        name: "dwitt tchagui",
                                        description: "coup de pied vers l'arrière (cheval)",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "nelyeu tchagui",
                                        description: "coup de pied descendant (marteau)",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "mireu tchagui",
                                        description: "coup de pied de face poussé",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 5,
                                        keupChild: 5,
                                        name: "nakka/foulyeu tchagui",
                                        description: "coup de pied de profil crocheté",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 4,
                                        keupChild: 4,
                                        name: "mon dolyeu tchagui",
                                        description: "coup de pied circulaire retourné avec le talon jambe tendue",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 3,
                                        keupChild: 3,
                                        name: "biteuro tchagui",
                                        description: "coup de pied torsion (ascendant 45° de l'intérieur vers l'extérieur)",
                                        hangeul: "",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 2,
                                        keupChild: 2,
                                        name: "pyo jeuk tchagui",
                                        description: "an tchagui frappé dans la main ouvert du côté opposé",
                                        hangeul: "",
                                        audio: ""
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: "Attaques membres supérieurs",
                        datas: [
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "bande jileugui",
                                description: "coup de poing côté jambe avant",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "baro jileugui",
                                description: "coup de poing côté jambe arrière",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 7,
                                keupChild: 10,
                                name: "dou bon jileugi",
                                description: "coup de poing côté jambe avant suivi de coup de poing jambe arrière",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 7,
                                keupChild: 8,
                                name: "han sonnal mok tchigui",
                                description: "frappe du tranchant de la main niveau cou, vers l'intérieur, côté jambe avant",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 7,
                                keupChild: 8,
                                name: "han sonnal bakkat tchigui",
                                description: "frappe du tranchant de la main vers l'extérieur, côté jambe avant",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "Je bi poom mok chigui",
                                description: "frappe du tranchant de la main dans le cou et defense haute main ouverte simultanées",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "han sonnal je bi poum mok tchigui / je bi poom sonnal mok tchigui",
                                description: "frappe du tranchant de la main niveau cou, vers l'intérieur, côté jambe arrière",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "pyon son keut sewo thireugui",
                                description: "pique de doigts paume sur le côté",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "deung joumok ap tchigui",
                                description: "coup de poing en revers de face",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "deung joumok bakkat tchigui",
                                description: "coup de poing en revers vers l'extérieur",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 5,
                                keupChild: 5,
                                name: "batangsonn teuk tchigui",
                                description: "frappe directe de la paume niveau tête",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 4,
                                keupChild: 4,
                                name: "me joumok nelyeu tchigui",
                                description: "frappe du poing en marteau",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 4,
                                keupChild: 4,
                                name: "palkoup dolyeu tchigui",
                                description: "frappe circulaire du coude vers l'intérieur",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 4,
                                keupChild: 4,
                                name: "palkoup pyo jeuk tchigui",
                                description: "frappe circulaire du coude vers l'intérieur frappé dans la main opposée",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 4,
                                keupChild: 4,
                                name: "palkoup yop tchigui",
                                description: "frappe du coude de profil",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "jetcho jileugi",
                                description: "coup de poing remontant",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "dou jomouk jetcho jileugi",
                                description: "double coup de poing remontant simultané",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "yop jileugi",
                                description: "coup de poing de profil",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 1,
                                keupChild: 1,
                                name: "dang kyeu teuk jileugi",
                                description: "coup de poing remontant en tirant simultanément l'adversaire vers soi",
                                hangeul: "",
                                audio: ""
                            },
                        ]
                    },
                    {
                        name: "Défenses",
                        datas: [
                            {
                                keupAdult: 1,
                                keupChild: 1,
                                name: "in building",
                                description: "lorem ipsum dolor sit amet",
                                hangeul: "",
                                audio: ""
                            },
                        ]
                    },
                ]
            }
        },
        mounted() {
            document.getElementById("kibon_category_1").checked = true;
        }
    }
</script>

<style lang="scss">

    #kibon_panel {
        @extend %section-container;
        @extend %material-panel;

        background-color: $white-1;
    }

    #kibon_table {
        @extend %material-panel;

        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: $white;

        .subCategoriesWrapper {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            h4 {
                display: inline-block;
                margin: 0;
                margin-bottom: 1rem
            }
        }

        .subcat_panel {
            @extend %material-panel;
            background-color: $white-1;
        }
    }

    #kibon_categories_list {
        @extend %tab-list;
    }
</style>
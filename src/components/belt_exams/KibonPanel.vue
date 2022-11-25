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
                                        hangeul: "도장",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "dobok",
                                        description: "la tenue d'entrainement",
                                        hangeul: "도복",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "tchaliot",
                                        description: "garde à vous",
                                        hangeul: "차렷",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "kyongnye",
                                        description: "saluez",
                                        hangeul: "경례",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "poomse",
                                        description: "forme",
                                        hangeul: "품세",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "tchoumbi",
                                        description: "position de départ",
                                        hangeul: "준비",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "kibon",
                                        description: "base",
                                        hangeul: "기본",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "kihap",
                                        description: "cri",
                                        hangeul: "기합",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "keup",
                                        description: "grades ceinture de couleur",
                                        hangeul: "급",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "dan",
                                        description: "grades ceinture noire",
                                        hangeul: "단",
                                        audio: ""
                                    },                                                                      
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "shijak",
                                        description: "commencez",
                                        hangeul: "시작",
                                        audio: ""
                                    },                                    
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "keuman",
                                        description: "arretez",
                                        hangeul: "그만",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "chwio",
                                        description: "repos",
                                        hangeul: "쉬어",
                                        audio: ""
                                    },                                    
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "baro",
                                        description: "revenez",
                                        hangeul: "바로",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 8,
                                        name: "ti",
                                        description: "ceinture",
                                        hangeul: "띠",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "chong",
                                        description: "bleu",
                                        hangeul: "청",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "hong",
                                        description: "rouge",
                                        hangeul: "홍",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "dwiro dora",
                                        description: "demi-tour",
                                        hangeul: "뒤로돌아",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "kyorugui",
                                        description: "combat",
                                        hangeul: "겨루기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "balbakosso",
                                        description: "changez de garde",
                                        hangeul: "발 바겄어",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 5,
                                        keupChild: 5,
                                        name: "wen",
                                        description: "gauche",
                                        hangeul: "왼",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 5,
                                        keupChild: 5,
                                        name: "oreun",
                                        description: "droite",
                                        hangeul: "오른",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 5,
                                        keupChild: 5,
                                        name: "ho shin soul",
                                        description: "auto défense",
                                        hangeul: "호신술",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 4,
                                        keupChild: 4,
                                        name: "ann ja",
                                        description: "à genoux",
                                        hangeul: "앉아",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 3,
                                        keupChild: 3,
                                        name: "kyo sa nim",
                                        description: "instructeur",
                                        hangeul: "교사님",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 3,
                                        keupChild: 3,
                                        name: "sa beum nim",
                                        description: "Maître",
                                        hangeul: "사범님",
                                        audio: ""
                                    },

                                    {
                                        keupAdult: 3,
                                        keupChild: 3,
                                        name: "hogou",
                                        description: "plastron",
                                        hangeul: "호구",
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
                                        hangeul: "아래",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "momtong",
                                        description: "niveau moyen",
                                        hangeul: "몸통",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "oulgoul",
                                        description: "niveau haut",
                                        hangeul: "얼굴",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "ap",
                                        description: "avant / vers devant",
                                        hangeul: "앞",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "tchagui",
                                        description: "coup de pied",
                                        hangeul: "차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "maki",
                                        description: "défense",
                                        hangeul: "막기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "seugi",
                                        description: "position",
                                        hangeul: "서기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "tchigui",
                                        description: "frappe avec mouvement fouetté",
                                        hangeul: "치기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "jireugui",
                                        description: "frappe avec mouvement droit",
                                        hangeul: "지르기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "tchireugui",
                                        description: "frappe des extrémités",
                                        hangeul: "찌르기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "an",
                                        description: "bers l'intérieur",
                                        hangeul: "안",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "bakkat",
                                        description: "vers l'extérieur",
                                        hangeul: "바깥",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "dolyeu",
                                        description: "circulaire",
                                        hangeul: "돌려",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "yop",
                                        description: "sur le côté",
                                        hangeul: "옆",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 8,
                                        name: "dwi",
                                        description: "par derrière",
                                        hangeul: "뒤",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "nelyeu",
                                        description: "descendant",
                                        hangeul: "내려",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "eulyeu",
                                        description: "ascendant",
                                        hangeul: "올려",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "tchigui",
                                        description: "attaque avec impact fouetté",
                                        hangeul: "치기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "tuyeu",
                                        description: "sauté",
                                        hangeul: "뛰어",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 4,
                                        keupChild: 4,
                                        name: "pyo jeuk",
                                        description: "frappé dans la main",
                                        hangeul: "표적",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 3,
                                        keupChild: 3,
                                        name: "biteuro",
                                        description: "torsion",
                                        hangeul: "비틀어",
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
                                        description: "le pied",
                                        hangeul: "발",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "ap tchouk",
                                        description: "le bol du pied",
                                        hangeul: "앞축",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "dwitt tchouk",
                                        description: "le talon",
                                        hangeul: "뒤축",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "sonn",
                                        description: "la main",
                                        hangeul: "손",
                                        audio: "손"
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "sonnal",
                                        description: "tranchant de la main",
                                        hangeul: "손날",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 8,
                                        name: "han sonnal",
                                        description: "main à la ceinture",
                                        hangeul: "한손날",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 8,
                                        name: "mok",
                                        description: "le cou",
                                        hangeul: "목",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "joumok",
                                        description: "le poing",
                                        hangeul: "주먹",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "deung joumok",
                                        description: "le revers poing",
                                        hangeul: "등주먹",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "pyon sonn keut",
                                        description: "l'extrémité des doigts",
                                        hangeul: "편손끝",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "batangsonn",
                                        description: "la paume",
                                        hangeul: "바탕손",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 5,
                                        keupChild: 5,
                                        name: "palkoup",
                                        description: "le coude",
                                        hangeul: "팔굽",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 2,
                                        keupChild: 2,
                                        name: "moureup",
                                        description: "le genou",
                                        hangeul: "무릎",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 1,
                                        keupChild: 1,
                                        name: "pal",
                                        description: "le bras",
                                        hangeul: "팔",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 1,
                                        keupChild: 1,
                                        name: "palmok",
                                        description: "avant bras",
                                        hangeul: "팔목",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 1,
                                        keupChild: 1,
                                        name: "an palmok",
                                        description: "tranchant intérieur du bras (radius)",
                                        hangeul: "안팔목",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 1,
                                        keupChild: 1,
                                        name: "bakkat palmok",
                                        description: "tranchant extérieur du bras (cubitus)",
                                        hangeul: "바깥팔목",
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
                                        hangeul: "하나",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "doul",
                                        description: "2",
                                        hangeul: "둘",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "set",
                                        description: "3",
                                        hangeul: "셋",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "net",
                                        description: "4",
                                        hangeul: "넷",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "dasot",
                                        description: "5",
                                        hangeul: "다섯",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "yosot",
                                        description: "6",
                                        hangeul: "여섯",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "ilgop",
                                        description: "7",
                                        hangeul: "일곱",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "yeudol",
                                        description: "8",
                                        hangeul: "여덟",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "ahop",
                                        description: "9",
                                        hangeul: "아홉",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "yeul",
                                        description: "10",
                                        hangeul: "열",
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
                                hangeul: "차렷",
                                audio: ""
                            },
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "tchoumbi seugi",
                                description: "position de préparation",
                                hangeul: "준비",
                                audio: ""
                            },
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "ap seugi",
                                description: "position de marche",
                                hangeul: "앞서기)",
                                audio: ""
                            },
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "ap koubi seugi",
                                description: "grande position",
                                hangeul: "앞굽이",
                                audio: ""
                            },
                            {
                                keupAdult: 7,
                                keupChild: 10,
                                name: "joutchoum seugi",
                                description: "position du cavalier ",
                                hangeul: "주춤서기",
                                audio: ""
                            },
                            {
                                keupAdult: 7,
                                keupChild: 10,
                                name: "dwitt koubi seugi",
                                description: "position fléchie vers l’arrière",
                                hangeul: "뒷굽이",
                                audio: ""
                            },
                            {
                                keupAdult: 4,
                                keupChild: 4,
                                name: "wen/orun seugi",
                                description: "position pied gauche/ droit ouverts à 90° (talons collés)",
                                hangeul: "왼/오른 서기",
                                audio: ""
                            },
                            {
                                keupAdult: 4,
                                keupChild: 4,
                                name: "dwitt koa seugi",
                                description: "position jambes croisés, talon arrière levé, dans un déplacement vers l’avant",
                                hangeul: "뒤 꼬아서기",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "moa seugi",
                                description: "position pieds joints",
                                hangeul: "모아서기",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "beum seugi",
                                description: "position du tigre",
                                hangeul: "범서기",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "bo joumok tchoumbi",
                                description: "position de préparation avec le poing recouvert de l’autre main",
                                hangeul: "보주먹준비",
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
                                        hangeul: "앞발",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "dwitt bal",
                                        description: "jambe arrière",
                                        hangeul: "뒷발",
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
                                        keupAdult: 5,
                                        keupChild: 5,
                                        name: "mon dora",
                                        description: "coup de pied avec rotation vers arrière",
                                        hangeul: "몸돌아",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 1,
                                        keupChild: 1,
                                        name: "dou bal dang sang",
                                        description: "deux coups de pieds enchainés sans reposer au sol",
                                        hangeul: "두발당성",
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
                                        hangeul: "앞차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 9,
                                        keupChild: 14,
                                        name: "bandal tchagui",
                                        description: "coup de pied semi-circulaire (ascendant 45°)",
                                        hangeul: "반달차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "ann tchagui",
                                        description: "coup de pied en demi lune vers l'intérieur ",
                                        hangeul: "안차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 8,
                                        keupChild: 12,
                                        name: "bakkat tchagui",
                                        description: "coup de pied en demi lune vers l'extérieur ",
                                        hangeul: "바깥차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "dolyeu tchagui",
                                        description: "coup de pied circulaire (minimum 90° - horizontal)",
                                        hangeul: "돌려차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 10,
                                        name: "yop tchagui",
                                        description: "coup de pied de côté",
                                        hangeul: "옆차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 7,
                                        keupChild: 8,
                                        name: "dwi tchagui",
                                        description: "coup de pied vers l'arrière (cheval)",
                                        hangeul: "뒤차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "nelyeu tchagui",
                                        description: "coup de pied descendant (marteau)",
                                        hangeul: "내려차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 6,
                                        keupChild: 6,
                                        name: "mireu tchagui",
                                        description: "coup de pied de face poussé",
                                        hangeul: "밀어차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 5,
                                        keupChild: 5,
                                        name: "nakka/foulyeu tchagui",
                                        description: "coup de pied de profil crocheté",
                                        hangeul: "낚아/후려 차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 4,
                                        keupChild: 4,
                                        name: "mon dolyeu tchagui",
                                        description: "coup de pied circulaire retourné avec le talon jambe tendue",
                                        hangeul: "몸돌려차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 3,
                                        keupChild: 3,
                                        name: "biteuro tchagui",
                                        description: "coup de pied torsion (ascendant 45° de l'intérieur vers l'extérieur)",
                                        hangeul: "비틀어차기",
                                        audio: ""
                                    },
                                    {
                                        keupAdult: 2,
                                        keupChild: 2,
                                        name: "pyo jeuk tchagui",
                                        description: "an tchagui frappé dans la main ouvert du côté opposé",
                                        hangeul: "표적차기",
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
                                hangeul: "반대지르기",
                                audio: ""
                            },
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "baro jileugui",
                                description: "coup de poing côté jambe arrière",
                                hangeul: "바로지르기",
                                audio: ""
                            },
                            {
                                keupAdult: 7,
                                keupChild: 10,
                                name: "dou bon jileugi",
                                description: "coup de poing côté jambe avant suivi de coup de poing jambe arrière",
                                hangeul: "두번지르기",
                                audio: ""
                            },
                            {
                                keupAdult: 7,
                                keupChild: 8,
                                name: "han sonnal mok tchigui",
                                description: "frappe du tranchant de la main niveau cou, vers l'intérieur, côté jambe avant",
                                hangeul: "한손날목치기",
                                audio: ""
                            },
                            {
                                keupAdult: 7,
                                keupChild: 8,
                                name: "han sonnal bakkat tchigui",
                                description: "frappe du tranchant de la main vers l'extérieur, côté jambe avant",
                                hangeul: "한손날바깥치기",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "Je bi poom mok chigui",
                                description: "frappe du tranchant de la main dans le cou et defense haute main ouverte simultanées",
                                hangeul: "제비품목치기",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "han sonnal je bi poum mok tchigui",
                                description: "frappe du tranchant de la main niveau cou, vers l'intérieur, côté jambe arrière",
                                hangeul: "한손날제비품목치기",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "pyon son keut sewo jireugui",
                                description: "pique de doigts paume sur le côté",
                                hangeul: "편손끝세워찌르기",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "deung joumok ap tchigui",
                                description: "coup de poing en revers de face",
                                hangeul: "등주먹 앞치기",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "deung joumok bakkat tchigui",
                                description: "coup de poing en revers vers l'extérieur",
                                hangeul: "등주먹 바깥치기",
                                audio: ""
                            },
                            {
                                keupAdult: 4,
                                keupChild: 4,
                                name: "me joumok nelyeu tchigui",
                                description: "frappe du poing en marteau",
                                hangeul: "메주먹 내려치기",
                                audio: ""
                            },
                            {
                                keupAdult: 4,
                                keupChild: 4,
                                name: "palkoup dolyeu tchigui",
                                description: "frappe circulaire du coude vers l'intérieur",
                                hangeul: "팔굽 돌려치기",
                                audio: ""
                            },
                            {
                                keupAdult: 4,
                                keupChild: 4,
                                name: "palkoup pyo jeuk tchigui",
                                description: "frappe circulaire du coude vers l'intérieur frappé dans la main opposée",
                                hangeul: "팔굽 표적치기",
                                audio: ""
                            },
                            {
                                keupAdult: 4,
                                keupChild: 4,
                                name: "palkoup yop tchigui",
                                description: "frappe du coude de profil",
                                hangeul: "팔굽 옆치기",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "jetcho jileugi",
                                description: "coup de poing remontant",
                                hangeul: "젖혀지르기",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "dou jomouk jetcho jileugi",
                                description: "double coup de poing remontant simultané",
                                hangeul: "두주먹 젖혀지르기",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "yop jileugi",
                                description: "coup de poing de profil",
                                hangeul: "옆지르기",
                                audio: ""
                            },
                            {
                                keupAdult: 1,
                                keupChild: 1,
                                name: "dang kyeu teuk jileugi",
                                description: "coup de poing remontant en tirant simultanément l'adversaire vers soi",
                                hangeul: "당겨특지르기",
                                audio: ""
                            },
                        ]
                    },
                    {
                        name: "Défenses",
                        datas: [
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "ale maki",
                                description: "défense niveau bas",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "momtong maki",
                                description: "défense niveau moyen côté jambe avant",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 9,
                                keupChild: 14,
                                name: "momtong an maki",
                                description: "défense niveau moyen côté jambe arrière",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 7,
                                keupChild: 10,
                                name: "Han sonnal momtong makki",
                                description: "défense avec le tranchant de la main côté jambe avant vers l'extérieur, niveau moyen, l'autre bras poing fermé à la ceinture",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "batangsonn nelyeu maki",
                                description: "blocage vers le bas avec la paume de main",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "sonnal momtong maki",
                                description: "défense avec le tranchant de la main côté jambe avant vers l'extérieur, niveau moyen, l'autre bras au plexus paume vers le haut",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 6,
                                keupChild: 6,
                                name: "momtong bakkat maki",
                                description: "défense niveau moyen vers l'extérieur avec le tranchant externe du bras",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 3,
                                keupChild: 3,
                                name: "han sonnal biteuro eulgoul maki",
                                description: "défense avec tranchant de la main côté jambe arrière, avec torsion du buste, niveau haut",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 3,
                                keupChild: 3,
                                name: "hetcheu maki",
                                description: "blocage double similtané",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 3,
                                keupChild: 3,
                                name: "ale hetcheu maki",
                                description: "blocage double simultané, niveau bas",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "batangsonn momtong maki",
                                description: "blocage vers l'intérieur avec la paume de main",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "batangsonn momtong an maki",
                                description: "blocage vers l'intérieur avec la paume de main, côté jambe arrière",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "sonnal ale maki",
                                description: "blocage bas avec tranchant de la main",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "keudeuro batangson momtong an maki",
                                description: "blocage vers l'intérieur niveau moyen avec la paume de la main côté jambe arrière, l'autre main en soutient sous le coude",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "momtong hetcheu maki",
                                description: "blocage double simultané, niveau moyen, avec le tranchant externe des avants-bras vers l'extérieur",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "kawi maki",
                                description: "blocage double simultané de face, l'un niveau moyen vers l'extérieur avec le tranchant de l'avant bras, l'autre en défense basse",
                                hangeul: "",
                                audio: ""
                            },
                            {
                                keupAdult: 2,
                                keupChild: 2,
                                name: "eut keuro ale maki",
                                description: "blocage double croisé niveau bas",
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
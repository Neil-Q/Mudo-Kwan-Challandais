<template>
    <div id="rank_selector_panel">
        <input id="show_everything_radio" class="radio_inputs" type="radio" name="radio_inputs" checked>
        <label
            class="show_everything"
            for="show_everything_radio"
            @click="
                updateKeup(0);
                lockDropdown(true);"
        >

            <div class="illustration show_everything_illustration">
                <svg viewBox="0 0 478.619 184.762">
                    <g style="stroke-linejoin:round">
                        <path d="m192.044 46.054s-1.475 4.952 0.21 7.375c1.686 2.423 24.86 1.791 24.86 1.791l-11.269-10.22-13.801 1.054z"/>
                        <path d="m9.831 23.198s119.181 32.087 233.779 32.087 214.679-51.187 218.5-53.479c3.819-2.292 12.987 38.963 0.765 48.131-12.225 9.168-80.983 48.896-216.208 48.896-135.226 0-233.015-21.392-239.892-29.032-6.876-7.64-6.876-38.199 3.056-46.603z"/>
                        <path d="m252.014 126.336s-22.156-6.112-28.268-21.392c-6.111-15.279 58.827-29.795 58.827-29.795l-6.112 31.324-24.447 19.863z"/>
                        <path d="m195.479 102.652s30.56 21.392 35.143 19.1c4.584-2.292 58.827-36.671 58.827-36.671l-45.839-33.616-50.423 38.2 2.292 12.987z"/>
                        <path d="m22.818 152.312s125.293-76.398 200.928-106.958 30.56 29.031 30.56 29.031-78.69 38.199-110.778 57.299-81.746 50.424-87.858 51.188c-6.112 0.763-32.852-30.56-32.852-30.56z"/>
                        <path d="m255.967 27.303s-5.29-1.851-14.146 8.46c-8.857 10.312 15.07 8.197 15.07 8.197l-0.924-16.657z"/>
                        <path d="m232.15 28.546s94.734 49.659 127.586 60.355c32.851 10.696 113.832 46.603 116.889 55.771s-27.503 30.559-27.503 30.559-23.685-21.391-54.243-34.379c-30.56-12.987-83.274-34.379-112.306-48.131-29.031-13.751-89.387-47.367-89.387-47.367l38.964-16.808z"/>
                        <path d="m255.834 27.782s-2.292 92.442-4.584 97.026c-2.293 4.584 42.783-12.987 43.546-18.335 0.765-5.349 6.877-50.423 2.293-55.007s-36.672-25.976-41.255-23.684z"/>
                    </g>
                </svg>
            </div>
            <div class="caption">Voir tout</div>
        </label>

        <div class="separator"></div>

        <div class="show_by_keup">
            <input id="minus_twelve_radio" class="radio_inputs" type="radio" name="radio_inputs">
            <label
                class="minus_twelve"
                for="minus_twelve_radio"
                @click="
                    updateIsAdult(false);
                    lockDropdown(false);"
            >
                <div class="illustration">
                    <svg viewBox="0 0 297.834 297.834">
                        <path class="collar_back taekwondoist_svg_part" d="m104.506 184.415c30.002-3.965 60.005-4.201 90.007 0 0 0 2.046 43.213-42.924 43.213s-47.151-34.458-47.083-43.213z"/>
                        <path class="neck taekwondoist_svg_part" d="m169.039 161.833h-39.877v30.225l-19.182 6.442v41.333l38.51 34.018h1.001l38.509-34.018v-41.333l-18.961-6.442z"/>
                        <path class="face taekwondoist_svg_part" d="m234.247 106.553c0-7.098-4.379-13.164-10.578-15.671 0.222-2.471 0.341-4.918 0.341-7.327 0-41.38-33.545-56.194-74.925-56.194s-74.925 14.814-74.925 56.194c0 2.409 0.118 4.856 0.341 7.327-6.199 2.507-10.578 8.573-10.578 15.671 0 9.179 12.356 21.685 21.646 22.107 13.249 26.661 36.74 48.551 63.516 48.551s50.267-21.89 63.516-48.551c9.29-0.422 21.646-12.927 21.646-22.107z"/>
                        <path class="dobok taekwondoist_svg_part" d="m255.944 224.621c-2.925-13.486-13.435-24.034-26.91-27.008l-28.7704-6.35019-51.9374 80.5166-50.1679-80.3248-29.4003 6.15837c-13.475 2.974-23.985 13.522-26.91 27.008l-9.126 42.076c13.14 8.612 28.709 15.764 46.016 21.034 21.242 6.469 45.104 10.102 70.326 10.102 25.092 0 48.839-3.595 69.999-10.001 17.31-5.241 32.886-12.364 46.047-20.945z"/>
                        <path class="collar taekwondoist_svg_part" d="m194.439 184.415-45.4709 81.398-44.4632-81.398-14.8236 8.8157 48.3024 87.8952h-6v16.1469c11.7458 0.76389 23.2567 0.73943 34.5468-0.0257v-16.1111h-6l48.0529-88.036z"/>
                        <path class="hairs taekwondoist_svg_part" d="m216.962 27.481c-24.232-31.546-63.565-24.211-63.565-24.211-23.5-12.695-69.148 13.719-79.167 42.39-6.656 19.048-5.326 33.872-2.151 44.564 0.933 3.142 5.136 12.062 5.136 12.062 2.028 4.558 4.604 10.148 7.635 16.319 0 0-2.452-8.54-2.634-17.808l16.848-34.797s47 22.667 100.167 0.333l14.915 29.377c0.153 11.389-5.117 24.248-5.117 24.248 7.027-6.464 10.803-14.833 13.363-20.885 6.253-14.78 14.691-45.397-5.43-71.592z"/>
                    </svg>
                </div>
                <div class="caption">-12 ans</div>
            </label>

            <input id="over_twelve_radio" class="radio_inputs" type="radio" name="radio_inputs">
            <label
                class="over_twelve"
                for="over_twelve_radio"
                @click="
                    updateIsAdult(true);
                    lockDropdown(false);"
            >
                <div class="illustration">
                    <svg viewBox="0 0 297.834 297.834">
                        <path class="collar_back taekwondoist_svg_part" d="m102.657 174.688c32.7372-4.32648 65.4755-4.584 98.2127 0 0 0 2.23253 47.1526-46.8373 47.1526s-51.4496-37.5994-51.3754-47.1526z"/>
                        <path class="neck taekwondoist_svg_part" d="m230 198.507-26.932-9.96229-2.40263 3.65873c-6.7279-4.33175-11.0472-12.5922-11.0472-21.7315v-7.19056h-77.4868c5.27583-0.35172 0 7.19056 0 7.19056 0 9.13873-4.31935 17.3998-11.0472 21.7315l-2.40263-3.65873-26.932 9.96229c-18.0399 6.67241-32.8001 47.5054-32.8001 69.4011h223.851c0-21.8958-14.7596-62.7287-32.8001-69.4011z"/>
                        <path class="face taekwondoist_svg_part" d="m220.44 98.3996c0.0653-1.5252 0.10139-3.04044 0.10139-4.54075 0-39.8498-31.1906-54.7378-69.6663-54.7378s-69.6663 14.8881-69.6663 54.7378c0 1.51649 0.03732 3.04852 0.103877 4.58989-6.1493-0.571638-10.0562 3.34274-10.0562 10.3386 0 9.13251 7.78459 29.9242 16.8481 23.9049 9.97286 27.4628 30.8062 50.7376 62.7706 50.7376 31.7125 0 52.4674-22.9096 62.5318-50.0895 9.32409 3.5592 17.0869-15.8242 17.0869-24.553 0-6.66931-3.87705-10.5352-10.0537-10.3877z"/>
                        <path class="hairs taekwondoist_svg_part" d="m180.732 4.28788 4.97616 9.95233s-27.9909-20.2157-74.6425-9.95233l4.97617 4.97617c-33.1742 4.35415-54.7378 29.857-54.7378 29.857l16.3896 32.7786 3.51504 30.9785 9.95233 4.97617s2.90297-24.4659 4.97617-29.857l14.9285-4.04314-4.97616 9.95233s35.6623-1.65893 74.6425-19.9047l-4.97617 9.95233s14.5814-0.0025 26.5908-3.81548c3.06532 12.4441 8.2424 37.7156 8.2424 37.7156l9.95233-4.97617 4.97616-48.8286c0-10.8854-5.90919-41.2089-44.7855-49.7617z"/>
                        <path class="dobok taekwondoist_svg_part" d="m276.63 218.559c-3.19166-14.7155-23.3892-26.2251-38.0926-29.4702l-31.3933-6.92912-56.6724 87.8571-54.7416-87.6478-32.0806 6.71981c-14.7035 3.24513-34.901 14.7548-38.0926 29.4702l-16.505 45.912c14.3379 9.39714 37.8733 17.2012 56.7582 22.9516 23.1786 7.05876 57.9453 11.023 85.4668 11.023 27.3796 0 62.0209-3.92275 85.11-10.9128 18.8881-5.7188 42.4311-13.4912 56.792-22.8545z"/>
                        <path class="collar taekwondoist_svg_part" d="m200.789 174.687-49.6164 88.8188-48.5168-88.8188-16.175 9.6194 52.7059 95.9083h-6.547v17.6189c12.8166 0.83354 25.3769 0.80685 37.6963-0.028v-17.58h-6.547l52.4338-96.062z"/>
                    </svg>
                </div>
                <div class="caption">+12 ans</div>
            </label>

            <BeltRankDropdown 
                id="keup_dropdown"
                :discipline="isAdult ? 'taekwondo' : 'taekwondo_children'"
                :keup="keup"
                :locked="lockedDropdown"
                @update-keup="(newKeup) => updateKeup(newKeup)"
            />
        </div>

    </div>
</template>

<script>
    import BeltRankDropdown     from "@/components/belt_exams/BeltRankDropdown.vue";

    export default {
        name: "TaekwondoKeupPanel",
        components: {
            BeltRankDropdown
        },
        data() {
            return {
                isAdult: true,
                keup: 0,
                lockedDropdown: true
            }
        },
        methods: {
            lockDropdown(boolean) {
                this.lockedDropdown = boolean;
            },
            updateIsAdult(boolean) {
                this.isAdult = boolean;
                if(this.isAdult == true && this.keup >= 7) this.updateKeup(0); 
                this.$emit("updateIsAdult", boolean);
            },
            updateKeup(keup) {
                this.keup = keup;
                this.$emit("updateKeup", keup);
            }
        },        
    }
</script>

<style lang="scss" scoped>
    input[type="radio"] {
        display: none;
    }

    #rank_selector_panel{
        box-sizing: border-box;
        border-radius: 30px;
        max-width: 25rem;
        min-width: 15rem;
        margin: auto;
        background-color: $dark;
        box-shadow: $shadow-4;

        display: grid;
        grid-template-columns: 1fr 13fr 1fr;
        grid-template-rows: 1fr 6fr 1fr 1fr 10.5fr 1fr;
    }

    label {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        background-color: var(--color-theme-unselected);
        color: var(--font-color-unselected);
        
        padding: 1rem;
        gap: 0.5rem;
        transition: 0.3s;

        .illustration {
            @extend %flex-center;
            width: 100%;
            flex: 1;
        }
        .caption {
            font-weight: bold;
            text-transform: uppercase;
        }
    }
    .radio_inputs:checked + label {
        background-color: var(--color-theme-selected);
        color: var(--font-color-selected);
        box-shadow: $shadow-4;

        .taekwondoist_svg_part {
            fill: var(--selected) !important;
        }

        .show_everything_illustration {
            fill: $dark-2;
            stroke: $dark-1;
        }
    }

    .show_everything, .show_by_keup {
        --color-theme-selected: #{$white-3};
        --color-theme-unselected: #{$dark-1};
    }
    .show_everything {
        @extend %flex-center;
        --font-color-selected: #{$dark-2};
        --font-color-unselected: #{$dark-3};

        justify-content: space-between;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        font-size: $font-sz-xl;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        padding-left: 15%;
        padding-right: 15%;

        &:hover {
            transform: scale(1.02);
        }

        .illustration {
            fill: $dark-3;
            stroke: $dark-2;
            stroke-width: 5;
        }
    }
    .separator {
        width: 100%;
        height: 0;
        outline: 1px solid $white-4;
        grid-column: 2 / 3;
        grid-row: 4 / 4;
    }
    .show_by_keup {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        grid-column: 2 / 3;
        grid-row: 5 / 6;

        display: grid;
        grid-template-columns: 1fr 5fr 1fr 5fr 1fr; // 13 frames
        grid-template-rows: 1fr 5fr 1fr 2.5fr 1fr;  // 10.5 frames

    }
    #show_everything_radio {

        // If show by keup is not selected
        &:checked ~ .show_by_keup {
            background-color: var(--color-theme-unselected);

            label {
                --color-theme-unselected: #{$dark-2};
                --font-color-unselected: #{$white-4};
            }
            .taekwondoist_svg_part {
                fill: var(--dark-bg);
            }
        }

        // If show by keup is slected
        &:not(:checked) ~ .show_by_keup {
            background-color: var(--color-theme-selected);

            label {
                --color-theme-unselected: #{$white-2};
                --font-color-unselected: #{$dark-2};
            }
            .taekwondoist_svg_part {
                fill: var(--light-bg);
            }
        }
    } 


    .over_twelve, .minus_twelve {
        @extend %flex-center;
        --font-color-selected: #{$white-2};

        font-size: $font-sz-medium;
        border-radius: 10px;
        aspect-ratio: 1 / 1;
        grid-row: 2 / 3;

        &:hover {
            transform: scale(1.05);
            
            .illustration {
                transform: scale(1.05) translateY(-2%);
            }
        }

        .illustration {
            transition: 0.3s;
        }

        .collar_back {
            --dark-bg: #{$dark-25};
            --light-bg: #{$dark-4};
            --selected: #{$dark-1};
        }
        .neck {
            --dark-bg: #{$dark-35};
            --light-bg: #{$white-35};
            --selected: #DDC29B;
        }
        .face {
            --dark-bg: #{$dark-4};
            --light-bg: #{$white-3};
            --selected: #E8D8BF;
        }
        .dobok {
            --dark-bg: #{$dark-4};
            --light-bg: #{$white-3};
            --selected: #{$white-2};
        }
        .collar {
            --dark-bg: #{$dark-3};
            --light-bg: #{$white-4};
            --selected: #{$dark-2};
        }
        .hairs {
            --dark-bg: #{$dark-3};
            --light-bg: #{$white-4};
            --selected: #{$dark-2};
        }
    }
    .minus_twelve {
        --color-theme-selected: #{$blue-light};
        grid-column: 2 / 3;
    }
    .over_twelve {
        --color-theme-selected: #{$blue};
        grid-column: 4 / 5;
    }
    #keup_dropdown {
        grid-column: 2 / 5;
        grid-row: 4 / 5;
    }

    @media (min-width: 60rem) {
        #rank_selector_panel {
            flex-direction: row;
            min-width: 55rem;

            grid-template-columns: 1fr 13fr 1fr 1fr 13fr 1fr;
            grid-template-rows: 1fr 10.5fr 1fr;
        }

        .show_everything {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
        }
        .separator {
            width: 0;
            height: 100%;
            grid-column: 4 / 4;
            grid-row: 2 / 3;
        }
        .show_by_keup {
            grid-column: 5 / 6;
            grid-row: 2 / 3;
        }
    }

</style>
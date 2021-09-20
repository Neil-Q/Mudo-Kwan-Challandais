<template>
    <div class="schedule">
        <div class="schedule_day">            
            <div class="schedule_day_label">
                <p>Mardi</p>
            </div>

            <div class="schedule_session_wrap">
                <div class="schedule_session">
                    <div class="schedule_hours">
                        <p>19H - 21H</p>
                    </div>

                    <div class="schedule_cours_wrap">
                        <div class="schedule_cours tkd_adult">
                            <p>Taekwondo adultes/ados (12 ans +)*</p>
                            <p>Taekwondo enfants (6 à 12 ans)*</p>
                            <p class="small">*cours commun</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="schedule_separator"></div>

        <div class="schedule_day">            
            <div class="schedule_day_label">
                <p>Jeudi</p>
            </div>

            <div class="schedule_session_wrap">
                <div class="schedule_session">
                    <div class="schedule_hours">
                        <p>19H15 - 21H15</p>
                    </div>

                    <div class="schedule_cours_wrap">
                        <div class="schedule_cours hapkimudo">
                            <p>Hapkimudo (12 ans +)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="schedule_separator"></div>

        <div class="schedule_day">            
            <div class="schedule_day_label">
                <p>Samedi</p>
            </div>

            <div class="schedule_session_wrap">
                <div class="schedule_session">
                    <div class="schedule_hours">
                        <p>14H - 15H</p>
                    </div>

                    <div class="schedule_cours_wrap">
                        <div class="schedule_cours tkd_moustique">
                            <p>Taekwondo moustiques (3 à 6 ans)</p>
                        </div>
                    </div>
                </div>

                <div class="schedule_session saturday_second_session">
                    <div class="schedule_hours">
                        <p>15H - 16H30</p>
                    </div>

                    <div class="schedule_cours_wrap">
                        <div class="schedule_cours tkd_adult">
                            <p>Taekwondo adultes/ados (12 ans +)</p>
                        </div>
                    </div>
                </div>

                <div class="schedule_session">
                    <div class="schedule_hours">
                        <p>16H30 - 18H</p>
                    </div>

                    <div class="schedule_cours_wrap">
                        <div class="schedule_cours schedule_cours_double saturday_child_cours tkd_children">
                            <p>Taekwondo enfants (6 à 12 ans)</p>
                            <p class="small">(salle A)</p>
                        </div>
                        <div class="schedule_cours schedule_cours_double hapkimudo">
                            <p>Hapkimudo (12 ans +)</p>
                            <p class="small">(salle B)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "schedule"
}
</script>

<style lang="scss">
.schedule_day {
    display: flex;
    justify-content: space-between;

    .schedule_day_label {
        display: flex;
        width: 25%;
        background-color: var(--red-medium-color);
        padding: 1rem 0 1rem 0;
        
        p {
            color: white;
            margin: auto;
            text-transform: uppercase;
            size: clamp(1.3rem, 1.3vw, 1.5rem);
            font-weight: bold;
        }
    }    
}

.schedule_session_wrap {
    flex-direction: column;
    width: 70%;

    .schedule_session {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .schedule_hours {
            display: flex;
            width: 30%;
            background-color: rgb(40, 40, 40);
            padding: 1rem 0 1rem 0;
    
            p {
                color: white;
                margin: auto;
                text-transform: uppercase;
                size: clamp(1.3rem, 1.3vw, 1.5rem);
                font-weight: bold;
            }
        }
    }

    .saturday_second_session {
        margin: 2rem 0 2rem 0;
    }
}

.schedule_cours_wrap {
    width: 62%;

    .schedule_cours {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        text-align: center;
        border: 5px solid red;
        box-sizing: border-box;
        padding: 1rem 0 1rem 0;

        p {
            margin: auto;
            font-weight: bold;
            align-self: center;
        }

        .small {
            font-size: smaller;
        }

        &.tkd_adult {
            border-color: var(--blue-dark-color);
            color: var(--blue-dark-color);
        }
        &.tkd_children {
            border-color: var(--blue-medium-color);
            color: var(--blue-medium-color);
        }
        &.tkd_moustique {
            border-color: var(--blue-light-color);
            color: var(--blue-light-color);
        }
        &.hapkimudo {
            border-color: var(--red-medium-color);
            color: var(--red-medium-color);
        }

        &.schedule_cours_double{
            height: auto;
        }
    }
    
    .saturday_child_cours {
        margin-bottom: 0.6rem;
    }
}

.schedule_separator {
    width: 100%;
    height: 3px;
    background-color: rgb(40, 40, 40);
    margin: 2.5rem 0 2.5rem 0;
}

@media (max-width: 60em) {
    .schedule_day {
        flex-direction: column;
        
        margin: auto;

        .schedule_day_label {
            width: 100%;
            margin-bottom: 1rem;
        }
    }

    .schedule_session_wrap {
        width: 100%;
        
        .schedule_session {
            .schedule_hours {
                width: 25%;

                p {
                    word-spacing: 100vw;
                }
            }
        }
    }

    .schedule_cours_wrap {
        width: 70%;
    }

    .schedule_separator {
        margin-left: auto;
        margin-right: auto;
    }

}

@media (max-width: 40em) {

    .schedule_session_wrap {
        width: 100%;
        
        .schedule_session {
            flex-direction: column;

            .schedule_hours {
                width: 100%;
                margin-bottom: 1rem;

                p {
                    word-spacing: normal;
                }
            }    
        }
    }

    .schedule_cours_wrap {
        width: 100%;
    }

}

</style>
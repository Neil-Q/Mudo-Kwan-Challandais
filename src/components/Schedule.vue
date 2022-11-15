<template>
    <div id="courses_schedule">
        <div class="schedule_day">            
            <div class="day">Mardi</div>

            <div class="sessions_wrap">
                <div class="session">
                    <div class="hours">18H30 - 19H30</div>

                    <div class="session_classes">
                        <div class="class blue">
                            <p>Taekwondo enfants (6 à 12 ans)</p>
                        </div>
                    </div>
                </div>

                <div class="session">
                    <div class="hours">19H30 - 21H30</div>

                    <div class="session_classes">
                        <div class="class blue_dark">
                            <p>Taekwondo adultes/ados (12 ans +)</p>
                            <!-- <p>Taekwondo enfants (6 à 12 ans)*</p> -->
                            <!-- <p class="small">*cours commun</p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="separator"></div>

        <div class="schedule_day">            
            <div class="day">Jeudi</div>

            <div class="sessions_wrap">
                <div class="session">
                    <div class="hours">19H15 - 21h15</div>

                    <div class="session_classes">
                        <div class="class red">
                            <p>Hapkimudo (12 ans +)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="separator"></div>

        <div class="schedule_day">            
            <div class="day">Samedi</div>
            
            <div class="sessions_wrap">
                <div class="session">
                    <div class="hours">14h - 15</div>
                    <div class="session_classes">
                        <div class="class blue_light">
                            <p>Taekwondo moustiques (3 à 6 ans)</p>
                        </div>
                    </div>
                </div>

                <div class="session">
                    <div class="hours">15h - 16h30</div>
                    <div class="session_classes">
                        <div class="class blue_dark">
                            <p>Taekwondo adultes/ados (12 ans +)</p>
                        </div>
                    </div>
                </div>

                <div class="session">
                    <div class="hours"><span>16h30 - 18h</span></div>
                    <div class="session_classes">
                        <div class="class blue">
                            <p>Taekwondo enfants (6 à 12 ans)</p>
                            <p class="small">(salle A)</p>
                        </div>
                        <div class="class red">
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

<style lang="scss" scoped>
#courses_schedule {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    font-weight: bold;
    color: white;
    text-align: center;
}

.day {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:$red;
    padding: 1rem;
    text-transform: uppercase;
}
.hours {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $dark;
    padding: 1rem;
}
.class {
    padding: 1rem;
    border: 5px solid;

    &.blue_light {
        border-color: $blue-light;
        color: $blue-light;
    }
    &.blue {
        border-color: $blue;
        color: $blue;
    }
    &.blue_dark {
        border-color: $blue-dark;
        color: $blue-dark;
    }

    &.red {
        border-color:$red;
        color:$red;
    }

    p {
        margin: 0;
    }

    .small {
        font-size: 0.8rem;
    }
}

.schedule_day{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    column-gap: 2rem;
}
.sessions_wrap {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}
.session {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    column-gap: 2rem;
    width: 100%;
}
.session_classes {
    display: flex;
    flex-direction: column;
    flex: 1;
    row-gap: 0.5rem;
}

.separator {
    width: 100%;
    height: 3px;
    background-color: $dark;
    margin: 1.5rem 0;
}

@media (min-width: 40em) {
    .session {
        flex-direction: row;
    }

    .hours {
        width: 25%;
    }
}

@media (min-width: 60em) {
    .schedule_day {
        flex-direction: row;
    }

    .sessions_wrap {
        flex: 1;
    }

    .day {
        width: 25%;
    }
}
</style>
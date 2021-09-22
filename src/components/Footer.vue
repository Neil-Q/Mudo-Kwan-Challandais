<template>
    <footer>
        <div id="footer_main">
            <div id="footer_contact">
                <div id="footer_contact_infos">
                    <p>Salle des Arts Martiaux A, bvd Jean Yole 85300 - Challans</p>
                    <p>E-mail: secretaire.tkdchallans@gmail.com / entraineur.mudokwanchallandais@gmail.com</p>
                    <p>Tel: 06 49 74 06 45</p>
                    <button>Contact</button>
                </div>
                <div id="footer_social_networks">
                    <a href="https://www.facebook.com/taekwondochallans" target="_blank"><img src="../assets/icons/facebook_white.svg" alt="Icone facebook" /></a>
                    <a href="https://www.instagram.com/mudo_kwan_challandais/" target="_blank"><img src="../assets/icons/instagram_white.svg" alt="Icone facebook" /></a>
                </div>
            </div>
            <div id="footer_sponsors">
                <div id="footer_sponsors_wrapper">
                    <div class="sponsor"><img src="../assets/mudo_kwan_logo.png" alt="Logo du Mudo Kwan Challandais" /></div>
                    <div class="sponsor"><img src="../assets/hapkimudo_2_logo_medium.png" alt="Logo de l'école hapkimudo" /></div>
                    <div class="sponsor"><img src="../assets/FFTDA_logo_small.png" alt="Logo de la FFTDA" /></div>
                    <div class="sponsor"><img src="../assets/challans_logo_large.png" alt="Logo de la ville de Challans" /></div>
                </div>
            </div>
        </div>
        <div id="footer_map">

        </div>
    </footer>
</template>

<script>
export default {
    name: "footer"
}
</script>

<style lang="scss">
footer {
    display: flex;
}

#footer_main {
    width: 66%;
    color: white;

    #footer_contact {
        background-color: var(--red-medium-color);
        padding: 2rem 0 3rem 0;

        #footer_contact_infos {
            text-align: left;
            width: 90%;
            max-width: 45rem;
            margin: auto;
            margin-bottom: 3rem;

            button {
                background-color: transparent;
                border: white 2px solid;
                color: white;
                padding: 0.5rem 2rem 0.5rem 2rem;
                font-size: 1rem;
                text-transform: uppercase;
                font-weight: bold;
                cursor: pointer;
                transition: 0.5s;

                &:hover {
                    background-color: rgba($color: black, $alpha: 0.2);
                    border-radius: 20px;
                }
            }
        }

        #footer_social_networks {
            display: flex;
            width: 90%;
            max-width: 45rem;
            height: 3rem;
            margin: auto;

            img{
                height: 3rem;
                margin-right: 5rem;
                transition: 0.3s;

                &:hover {
                    transform: translateY(-0.5rem);
                }
            }
        }
    }

    #footer_sponsors {
        display: flex;
        background-color: rgb(40, 40, 40);
        height: 15rem;

        #footer_sponsors_wrapper {
            display: grid;
            grid-template-columns: repeat(4, 7rem);
            grid-template-rows: 7rem;
            justify-content: space-between;
            align-self: center;
            width: 90%;
            max-width: 45rem;
            margin: auto;

            .sponsor{
                display: flex;
                height: 100%;
                width: 100%;
                background: white;

                img {
                    align-self: center;
                    max-height: 90%;
                    max-width: 90%;
                    display: block;
                    margin: auto;
                }
            }
        }
    }
    
}

#footer_map {
    width: 34%;
    background-color: var(--blue-dark-color);
}

@media (max-width: 60em) {
    footer {
        flex-direction: column;
    }

    #footer_main {
        width: 100%;
        #footer_contact {
        
            #footer_contact_infos {
                text-align: center;
            }

            #footer_social_networks {
                justify-content: space-between;
                width: 10rem;

                img {
                    margin: 0;
                }
            }
        }

    }

    #footer_map {
        height: 100vh;
        width: 100%;
    }
}

@media (max-width: 40em) {
    #footer_main #footer_sponsors {
        height: auto;
        padding: 2rem;

        #footer_sponsors_wrapper {
            width: auto;
            grid-template-columns: repeat(2, clamp(7rem, 25vw, 10rem));
            grid-template-rows: repeat(2, clamp(7rem, 25vw, 10rem));
            row-gap: 3rem;
            column-gap: 3rem;
        }
    }
}
</style>
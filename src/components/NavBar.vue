<template>
    <nav id="nav_bar">
            <div id="nav_home">
                <router-link class="menu_item_link full" to="/">MUDO KWAN CHALLANDAIS</router-link>
                <router-link class="menu_item_link short" to="/">MUDO KWAN <br />CHALLANDAIS</router-link>
            </div>

            <div id="nav_bar_menu">
                <div class="menu_item">
                    <router-link class="menu_item_link" to="/le_club">Le club</router-link>
                </div>

                <div class="menu_item menu_item_drop">
                    <router-link class="menu_item_link" to="/le_club">Taekwondo</router-link>

                    <!--
                    <div class="drop_submenu">
                        <div><a>Présentation</a></div>
                        <div><a>Ressources</a></div>
                    </div>
                    -->
                </div>

                <div class="menu_item menu_item_drop">
                    <router-link class="menu_item_link" to="/le_club">Hapkimudo</router-link>
                    
                    <!--
                    <div class="drop_submenu">
                        <div><a>Présentation</a></div>
                        <div><a>Ressources</a></div>
                    </div>
                    -->
                </div>

                <div class="menu_item menu_item_drop">
                    <router-link class="menu_item_link" to="/le_club">Infos & contact</router-link>

                    <!--
                    <div class="drop_submenu">
                        <div><a>Inscriptions et tarifs</a></div>
                        <div><a>FAQ</a></div>
                        <div><a>Contact</a></div>
                    </div>
                    -->
                </div>
            </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style lang="scss">
#nav_bar {
    font-family: Helvetica, Arial, sans-serif;
    position: absolute;
    top: 0px;
    background-color: var(--red-medium-color);
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem clamp(0.1rem, 3vw, 5rem) 0.5rem clamp(0.1rem, 3vw, 5rem);
    z-index: 1000;

    &.sticky {
        position: sticky;
        position: -webkit-sticky;
        top: 0px;
    }

    &.transparent {
        background-color: transparent;
    }

    &.blue {
        background-color: var(--blue-dark-color);
    }
}

#nav_home {
    display: flex;
    background-color: #262626;
    border-radius: 0.2em;
    padding: 0 clamp(0.1rem, 2vw, 1rem) 0 clamp(0.1rem, 2vw, 1rem);
    font-size: clamp(0.1rem, 2vw, 1.3rem);

    .short {
        display: none;
    }
}

#nav_bar_menu {
    display: flex;
}

.menu_item {
    display: flex;
    align-self: center;
    height: clamp(0.1rem, 6vw, 3rem);
    padding : 0 clamp(0.1rem, 1vw, 1rem) 0 clamp(0.1rem, 1vw, 1rem);
    border-radius: 4px;
    margin-left: clamp(0.1rem, 1vw, 1rem);
    font-size: clamp(0.1rem, 1.7vw, 1.1rem);

    &:hover {
        background-color: rgba($color: black, $alpha: 0.1);
    }
}

.menu_item_link {
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    color: white;
    font-weight: bold;
    align-self: center;
    cursor: pointer;
}

.menu_item_drop:hover > .drop_submenu {
    opacity: 1;
}

.drop_submenu{
    background-color: var(--red-medium-color);
    border-radius: 0 0 0.2em 0.2em;
    text-align: left;

    z-index: 1000;
    position: absolute;
    transform-origin: top;
    transform: translateY(clamp(0.1rem, calc(6vw + 0.5rem), 3.5rem)) translateX(clamp(calc(-1rem + 1px), calc(-1vw + 1px), 0.1rem));

    width: clamp(0.1rem, 20vw, 13.5rem);
    font-size: clamp(0.1rem, 2vw, 1.2rem);
    padding-left: clamp(0.1rem, 1vw, 1rem);
    padding-top: clamp(0.1rem, 1vw, 1rem);

    transition: 0.5s;
    opacity: 0;

    div {
        margin-bottom: 1rem;
    }
    a {
        
        text-decoration: none;
        color: white;
        cursor: pointer;

        &:hover {
            font-weight: bold;
        }
    }
}

@media (max-width: 40em) {

    #nav_home {

        font-size: 2.4vw;

        height: 8vw;
        .full {
            display: none;
        }
        .short {
            display: inline-block;
        }
    }

    .menu_item {
        font-size: 2vw;
    }

    .drop_submenu {
        transform: translateY(calc(6.5vw + 0.5rem));
    }
}
</style>
<template>
    <nav id="nav_bar">
            <router-link id="nav_home" class="menu_item" to="/"><div>Mudo Kwan</div><div>Challandais</div></router-link>

            <ul id="nav_bar_menu">
                <li>
                    <router-link class="menu_item" to="/le_club">Le club</router-link>
                </li>

                <li class="nav_dropdown">
                    <div class="menu_item">Taekwondo</div>
                    <ul class="dropdown_submenu">
                        <li><router-link class="dropdown_item"  to="/">Histoire</router-link></li>
                        <li><router-link class="dropdown_item"  to="/">Présentation</router-link></li>
                        <li><router-link class="dropdown_item"  to="/">Baby taekwondo</router-link></li>
                        <li><router-link class="dropdown_item"  to="/">Passages de grade</router-link></li>
                    </ul>
                </li>

                <li class="nav_dropdown">
                    <div class="menu_item">Hapkimudo</div>
                    <ul class="dropdown_submenu">
                        <li><router-link class="dropdown_item"  to="/">Histoire</router-link></li>
                        <li><router-link class="dropdown_item"  to="/">Présentation</router-link></li>
                        <li><router-link class="dropdown_item"  to="/">Passages de grade</router-link></li>
                    </ul>
                </li>

                <li class="nav_dropdown">
                    <div class="menu_item">Infos & contact</div>
                    <ul class="dropdown_submenu">
                        <li><router-link class="dropdown_item"  to="/">Inscriptions et tarifs</router-link></li>
                        <li><router-link class="dropdown_item"  to="/">FAQ</router-link></li>
                        <li><router-link class="dropdown_item"  to="/">Contact</router-link></li>
                        <li><router-link class="dropdown_item"  to="/">Boutique</router-link></li>
                    </ul>
                </li>
            </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBarBis"
}
</script>

<style lang="scss" scoped>
    #nav_bar {
        --nav-font-size: clamp(0.8em, 1.7vw, 1.1em);

        width: 100%;
        position: sticky;
        position: -webkit-sticky;
        top: 0px;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0.8em 3vw;
        background-color: var(--red-medium-color);
        color: white;
        font-size: clamp(0.8em, 1.7vw, 1.1em);

        .transparent {
            background-color: transparent;

            &:hover {
                background-color: rgba($color: #000000, $alpha: 0.7);
            }
        }

        .blue {
            background-color: var(--blue-medium-color);
        }

        a {
            text-decoration: none;
            color: white;
        }

        li {
            margin-left: 0;
            padding: 0;
            list-style: none;
        }
    }

    #nav_home {
        display: flex;
        gap: 0.4em;
        background-color: rgba($color: #000000, $alpha: 0.2);

        &:hover {
            background-color: var(--dark-color);
        }

        &.active {
            background-color: var(--dark-color);
        }
    }

    #nav_bar_menu {
        display: flex;
        align-items: center;
        gap: 0.5em;
        margin: 0;
    }

    .menu_item {
        color: white;
        font-size: 1em;
        height: auto;
        margin: 0;
        border-radius: 4px;
        padding: 0.5em 1em;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            background-color: rgba($color: #000000, $alpha: 0.2);
        }
    }

    .nav_dropdown {
        position: relative;

        &:hover .dropdown_submenu {
            display: block;
        }
    }

    .dropdown_submenu {
        position: absolute;
        display: none;
        width: 12em;
        left: 0px;
        padding-top: 1em;
        padding-left: 0;
        background-color: var(--red-medium-color);
        border-radius: 4px;
        text-align: left;
    }

    .dropdown_item {
        display: block;
        padding: 0.5em 1em;

        &:hover {
            background-color: rgba($color: #000000, $alpha: 0.2);
        }
    }

    @media (max-width: 60em) {
        #nav_home {
            flex-direction: column;
        }
    }

    @media (max-width: 40em) {
        #nav_home {
            background-color: blue;
        }
    }
</style>
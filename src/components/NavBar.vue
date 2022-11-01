<template>
    <nav id="nav_bar">
            <router-link id="nav_home" class="menu_item" to="/">Mudo Kwan<span> Challandais</span></router-link>

            <ul id="nav_bar_menu">
                <li>
                    <router-link class="menu_item" to="/le_club">Le club</router-link>
                </li>

                <li class="nav_dropdown">
                    <div class="menu_item">Taekwondo</div>
                    <div class="dropdown_submenu">
                        <div class="dropdown_spacer"></div>
                        <ul>
                            <li><router-link class="dropdown_item"  to="/histoire_du_taekwondo">Histoire</router-link></li>
                            <li><router-link class="dropdown_item"  to="/">Présentation</router-link></li>
                            <li><router-link class="dropdown_item"  to="/">Baby taekwondo</router-link></li>
                            <li><router-link class="dropdown_item"  to="/">Passages de grade</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="nav_dropdown">
                    <div class="menu_item">Hapkimudo</div>
                    <div class="dropdown_submenu">
                        <div class="dropdown_spacer"></div>
                        <ul>
                            <li><router-link class="dropdown_item"  to="/">Histoire</router-link></li>
                            <li><router-link class="dropdown_item"  to="/">Présentation</router-link></li>
                            <li><router-link class="dropdown_item"  to="/">Passages de grade</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="nav_dropdown">
                    <div class="menu_item">Infos & contact</div>
                    <div class="dropdown_submenu">
                        <div class="dropdown_spacer"></div>
                        <ul>
                            <li><router-link class="dropdown_item"  to="/">Inscriptions et tarifs</router-link></li>
                            <li><router-link class="dropdown_item"  to="/">FAQ</router-link></li>
                            <li><router-link class="dropdown_item"  to="/">Contact</router-link></li>
                            <li><router-link class="dropdown_item"  to="/">Boutique</router-link></li>
                        </ul>
                    </div>
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
        --vert-padding: clamp(0px, 2vw, 12px);

        width: 100%;
        max-width: 100vw;
        position: sticky;
        position: -webkit-sticky;
        top: 0px;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: var(--vert-padding) clamp(0px, 2vw, 30px);
        background-color: var(--red-medium-color);
        color: white;
        font-size: clamp(0px, 1.7vw, 1.1rem);

        a {
            text-decoration: none;
            color: inherit;
        }

        li {
            margin-left: 0;
            padding: 0;
            list-style: none;
        }
    }

    // For different color schemes
    #nav_bar {
        &.transparent {
            background-color: transparent;
            background-color: #00000050;

            .dropdown_submenu ul{
                background-color: #00000080;
            }

            &:hover {
                background-color: #00000080;
            }
        }

        &.blue {
            background-color: var(--blue-medium-color);

            .dropdown_submenu ul{
                background-color: var(--blue-medium-color);
            }
        }
    }

    #nav_home {
        display: flex;
        background-color: rgba($color: #000000, $alpha: 0.2);
        width: auto;
        white-space:pre;

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
        margin: 0;
        padding: 0;
    }

    .menu_item {
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
        padding-left: 0;
        border-radius: 4px;
        text-align: left;

        .dropdown_spacer {
            height: var(--vert-padding);
        }

        ul {
            background-color: var(--red-medium-color);
            border-radius: 0 0 4px 4px;
            padding: 0;
        }
    }

    .dropdown_item {
        display: block;
        padding: clamp(8px, 2vh, 12px);

        &:hover {
            background-color: rgba($color: #000000, $alpha: 0.2);
        }
    }

    @media (max-width: 60em) {
        #nav_bar {
            font-size: 2.2vw;
        }

        #nav_home span{
            display: none;
        }
    }

    @media (max-width: 40em) {
        #nav_bar {
            font-weight: bold;
        }
    }
</style>
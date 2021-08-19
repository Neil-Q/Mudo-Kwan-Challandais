<template>
    <nav id="nav_bar">
        <div id="nav_wrap">
            <div id="nav_home">
                <a class="menu_item">MUDO KWAN CHALLANDAIS</a>
            </div>
            <ul id="nav_bar_menu">
                <li><a class="menu_item">Le club</a></li>                
                <li class="drop_item"><a class="menu_item">Taekwondo v</a>
                    <ul class="drop_submenu">
                        <li><a>Présentation</a></li>
                        <li><a>Ressources pédagogiques</a></li>
                    </ul>
                </li>
                <li class="drop_item"><a class="menu_item">Hapkimudo v</a>
                    <ul class="drop_submenu">
                        <li><a>Présentation</a></li>
                        <li><a>Ressources pédagogiques</a></li>
                    </ul>
                </li>
                <li class="drop_item"><a class="menu_item">Contact/infos v</a>
                    <ul class="drop_submenu">
                        <li><a>Inscriptions et tarifs</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style lang="scss">
li {list-style-type: none; display: flex;}
ul {padding: 0;}

#nav_bar {
    display: flex;
    height: 5em;
    background: var(--red-medium-color);

}

#nav_wrap{
    display: flex;
    justify-content: space-between;
    margin: 0 5em 0 5em;
    width: 100%;
}

#nav_home {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #262626;
    height: 3em;
    padding: 0 1em 0 1em;
    border-radius: 0.2em;
}

#nav_bar_menu {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 40em;
    margin: 0;

    .menu_item:hover {
        text-decoration: underline;
    }
}

.menu_item {
    color: white;
    font-size: 1.3em;
    font-weight: bold;
    align-self: center;
    cursor: pointer;
}

.drop_item{
    position: relative;

    &:hover > .drop_submenu {
        transform: scaleY(1);
        opacity: 1;
    }
}

.drop_submenu{
    background-color: var(--red-medium-color);
    position: absolute;
    top: 5em;
    z-index: 1000;
    width: 8em;
    padding: 1em;
    font-size: 1em;
    border-radius: 0 0 0.2em 0.2em;
    transform-origin: top;
    transition: 0.25s;
    transform: scaleY(0);
    opacity: 0;

    a {
        padding-bottom: 1em;
        text-decoration: none;
        color: white;
        text-align: left;
        cursor: pointer;

        &:hover {
            font-weight: bold;
        }
    }
}



@media (max-width: 1200px) {
    #nav_wrap {
        margin: 0 6vw 0 6vw;
    }
    #nav_bar_menu {
        width: 53.5vw;
    }
}

@media (max-width: 992px) {
    #nav_bar {
        height: 8vw;
    }
    #nav_wrap {
        margin: 0 calc(7vw - 1em) 0 calc(7vw - 1em);
    }
    #nav_home {
        height: 4.8vw;
        padding: 0 1.7vw 0 1.7vw;
    }
    #nav_bar_menu {
        width: 55vw;
    }

    .menu_item {
        font-size: 2.1vw;
        font-weight: bolder;
    }

    .drop_submenu{
    top: 8vw;
    width: 16vw;
    padding: 1vw;

    a {
        text-decoration: none;
        color: white;
        text-align: left;
        font-size: 2vw;
    }
}
}
</style>
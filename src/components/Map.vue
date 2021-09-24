<template>
    <div id="mapid">

    </div>
</template>

<script>
import leaflet from "leaflet";

export default {
    name: "map",
    components: {
    },
    data() {
        return {
            zoom: 2
        };
    },
    mounted() {
        let myMap = leaflet.map('mapid').setView([46.845001, -1.877986], 14);

        leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJ0cm9zcyIsImEiOiJja3R2Zm5tN3gwa2hkMm5tcGlkMGpmdnZyIn0.POJnnhH_z5w5HutOD3thkw', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            minZoom: 7,
            maxZoom: 18,
            id: 'artross/cktvgxubr1akh17pcy0snvypg',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiYXJ0cm9zcyIsImEiOiJja3R2Zm5tN3gwa2hkMm5tcGlkMGpmdnZyIn0.POJnnhH_z5w5HutOD3thkw'
        }).addTo(myMap);

        let mudoKwanIcon = leaflet.icon({
            iconUrl: require("../assets/mudo_kwan_map_marker.png"),
            iconSize: [50, 75],
            iconAnchor: [25, 74],
        })

        leaflet.marker([46.840801, -1.877986], {icon: mudoKwanIcon}).addTo(myMap);
    }
};
</script>

<style lang="scss">
    #mapid {
        width: 100%;
        height: 100%;
    }
</style>
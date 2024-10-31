<template>
  <map-section
    class="mobileL:mb-mobileL mobile:mb-mobile tablet:mb-tablet desktop:mb-desktop desktopL:mb-desktopL"
  >
    <div
      class="z-[2] desktopL:h-[414px] desktopL:w-[540px] desktop:h-[368px] desktop:w-[479px] tablet:h-[299px] tablet:w-[390px] tablet:mr-24 mobileL:h-[375px] mobileL:w-[490px] mobile:aspect-ratio proportions"
    >
      <google-map
        class="radiusMask"
        :zoom="zoom"
        :center="center"
        @zoom_changed="handleZoom"
        :options="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true,
          disableDefaultUi: false,
          styles: mapStyles,
          minZoom: 5,
          maxZoom: 16,
        }"
        ref="map"
      >
        <div v-if="zoom < maxZoom">
          <google-marker
            v-for="(marker, index) in markers"
            :key="index"
            :options="{
              position: marker.position,
              clickable: true,
              draggable: false,
              title: marker.label.text,
              icon: { url: markerIcon, labelOrigin: { x: 0, y: 8 } },
              label: {
                text: marker.label,
                className: 'marker-label',
                fontWeight: 'bold',
                color: '#4760ff',
              },
            }"
            @click="handleClick"
          ></google-marker>
        </div>
        <div v-else>
          <google-polygon
            v-for="(marker, index) in markers"
            :key="index"
            :options="{
              paths: marker.path,
              editable: false,
              options: {
                strokeColor: '#e7edfa',
                fillColor: '#4760ff',
                strokeWeight: 1,
              },
            }"
          >
          </google-polygon>
        </div>
      </google-map>
    </div>
  </map-section>
</template>
<script>
import { mapStyles, markers, centers } from "@/utils/mapData";
import localesMetadata from "@/mixins/localesMetadata";

export default {
  name: "homeMapSection",
  components: {
    "google-map": async () => await import("@/components/map/googleMap.vue"),
    "google-marker": async () =>
      await import("@/components/map/googleMarker.vue"),
    "google-polygon": async () =>
      await import("@/components/map/googlePolygon.vue"),
    "map-section": async () =>
      await import("@/components/sections/mapSection/baseMapSection.vue"),
  },
  mixins: [localesMetadata],
  data() {
    return {
      zoom: 5,
      maxZoom: 9,
      mapStyles: mapStyles,
      markerIcon: require("@/static/mapSection/map-marker.svg"),
    };
  },
  methods: {
    handleZoom(mapZoomValue) {
      this.zoom = mapZoomValue;
    },
    handleClick(marker) {
      this.$refs.map.$mapObject.setCenter(marker.latLng);
      this.zoom = 9;
    },
  },
  computed: {
    markers() {
      return markers[this.localeMetadata.country];
    },
    center() {
      return centers(this.localeMetadata.country)["position"];
    },
  },
};
</script>
<style lang="scss" scoped>
:deep(.marker-label) {
  @apply leading-[16px] pl-[120px] w-[200px] text-left;
}

:deep(#map) {
  @media (max-width: 599px) {
    @apply relative pb-[75%] h-[0];
  }
}

.proportions {
  @media (max-width: 599px) {
    @apply w-[475px] ml-[-8px];
  }

  @media (max-width: 490px) {
    @apply w-full;
  }
}

.radiusMask {
  width: 100%;
  height: 100%;
  mask-image: url(@/static/mapSection/radiusMapMask.svg);
  mask-size: contain;
  mask-repeat: round;
  mask-position: left; // Check it personally and test with center left
}
</style>

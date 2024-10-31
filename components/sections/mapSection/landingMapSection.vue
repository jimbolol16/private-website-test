<template>
  <map-section
    class="mobileL:mt-mobileL mobile:mt-mobile tablet:mt-tablet desktop:mt-desktop desktopL:mt-desktopL"
    v-if="marker"
  >
    <div
      class="z-[2] desktopL:h-[414px] desktopL:w-[540px] desktop:h-[368px] desktop:w-[479px] tablet:h-[299px] tablet:w-[390px] tablet:mr-24 mobileL:h-[375px] mobileL:w-[490px] mobile:aspect-ratio proportions"
    >
      <google-map
        class="radiusMask"
        :zoom="zoom"
        :center="marker.position"
        :options="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true,
          disableDefaultUi: false,
          styles: mapStyles,
          minZoom: 9,
          maxZoom: 16,
        }"
      >
        <google-polygon
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
      </google-map>
    </div>
  </map-section>
</template>
<script>
import { mapStyles, getMarker } from "@/utils/mapData";
import localesMetadata from "@/mixins/localesMetadata";

export default {
  name: "landingMapSection",
  components: {
    "google-map": async () => await import("@/components/map/googleMap.vue"),
    "google-polygon": async () =>
      await import("@/components/map/googlePolygon.vue"),
    "map-section": async () =>
      await import("@/components/sections/mapSection/baseMapSection.vue"),
  },
  mixins: [localesMetadata],
  data() {
    return {
      zoom: 9,
      mapStyles: mapStyles,
    };
  },
  computed: {
    marker() {
      return getMarker(this.localeMetadata.country, this.$route.params.city);
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

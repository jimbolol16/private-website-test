<template>
  <div
    v-intersect="{
      onChange: setIntersection,
      observerOptions: {
        threshold: 1,
        rootMargin: '0px 0px 0px 0px',
      },
    }"
  >
    <nuxt-img
      :provider="$config.img_provider"
      class="h-full w-full"
      :src="`/mapSection/${localeMetadata.country}.webp`"
      alt="splash"
      loading="lazy"
      sizes="xl:468px lg:468px md:390px sm:468px xs:328px"
      width="468"
      v-if="!initialized"
    />
    <div id="map" class="h-full w-full" v-else>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import localesMetadata from "@/mixins/localesMetadata";

export default {
  name: "googleMaps",
  props: {
    zoom: {
      type: Number,
      required: true,
      twoWay: true,
    },
    center: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mixins: [localesMetadata],
  data() {
    return {
      $mapObject: null,
      initialized: false,
    };
  },
  methods: {
    setIntersection(v) {
      if (v) {
        if (!window.google) {
          this.installGoogleMaps();
        } else {
          this.initMap();
        }
      }
    },
    initMap() {
      if (this.$mapObject) {
        return;
      }
      this.initialized = true;

      this.$nextTick(() => {
        this.$mapObject = new window.google.maps.Map(
          document.getElementById("map"),
          {
            center: this.center,
            zoom: this.zoom,
            ...this.options,
          }
        );

        // Set listeners
        this.$mapObject.addListener("zoom_changed", () => {
          this.$emit("zoom_changed", this.$mapObject.getZoom());
        });

        this.$mapObject.addListener("click", (event) => {
          this.$emit("click", event);
        });

        // Propagate to parent or sibling nodes
        this.$nuxt.$emit("map_initialized");
      });
    },
    installGoogleMaps() {
      const script = document.createElement("script");
      script.setAttribute(
        "src",
        `https://maps.googleapis.com/maps/api/js?key=${this.$config.mapKey}&callback=initMap`
      );
      script.setAttribute("async", true);
      script.setAttribute("defer", true);
      window.initMap = this.initMap;

      document.head.appendChild(script);
    },
  },
  watch: {
    zoom(zoom) {
      if (this.$mapObject) {
        this.$mapObject.setZoom(zoom);
      }
    },
    center(center) {
      if (this.$mapObject) {
        this.$mapObject.setCenter(center);
      }
    },
  },
  beforeDestroy() {
    if (this.$mapObject) {
      window.google.maps.event.clearListeners(this.$mapObject, "zoom_changed");
      window.google.maps.event.clearListeners(this.$mapObject, "click");
    }
  },
};
</script>
<style lang="scss" scoped>
:deep(.marker-label) {
  @apply leading-[16px] pl-[120px] w-[200px] text-left;
}
</style>

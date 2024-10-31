const googleMapMixin = {
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.$nuxt.$on("map_initialized", () => {
      this.addObject();
    });

    // For nested component (in slots), we need to call it on mounted and check the window.google variable
    this.addObject();
  },
  data() {
    return {
      $googleObject: null,
      objectType: null,
    };
  },
  methods: {
    addObject() {
      if (
        !window.google ||
        (window.google && this.$googleObject && !this.$parent.$mapObject)
      ) {
        return;
      }

      if (!this.objectType) {
        throw new Error("Wrong object type found");
      }

      this.$googleObject = new window.google.maps[this.objectType]({
        ...this.options,
      });
      this.$googleObject.setMap(this.$parent.$mapObject);

      this.$googleObject.addListener("click", (event) => {
        this.$emit("click", event);
      });
    },
  },
  beforeDestroy() {
    this.$nuxt.$off("map_initialized");
    window.google.maps.event.clearListeners(this.$googleObject, "zoom_changed");
  },
  destroyed() {
    if (this.$googleObject) {
      this.$googleObject.setMap(null);
    }
  },
};

export default googleMapMixin;

<template>
  <div
    class="flex flex-row mobileL:flex-col mobile:flex-col mobileL:space-y-7 mobile:space-y-6 justify-center desktopL:space-x-6 desktop:space-x-6 tablet:space-x-6 desktopL:justify-start desktop:justify-start"
  >
    <div class="flex mobileL:w-full justify-center">
      <div class="flex w-fit">
        <ui-button
          :arrow="true"
          :type="colorButton"
          color="white-content"
          @click="handleClick"
        >
          {{ $t("hero_cta") }}
        </ui-button>
      </div>
    </div>

    <div
      class="inline-flex items-center text-white cursor-pointer mobileL:justify-center mobile:justify-center w-fit mobileL:w-full mobile:w-full"
      v-if="$t('hero_play_link') !== ' '"
    >
      <a
        class="inline-flex space-x-2 items-center"
        :href="$t('hero_play_link')"
        target="_blank"
      >
        <play-icon
          class="w-9 h-9 mobile:w-6 mobile:h-6 hover:opacity-80"
          :type="colorPlay"
        ></play-icon>
        <h5 class="font-bold mobile:font-[18px]" :class="`text-${colorPlay}`">
          {{ $t("hero_play_text") }}
        </h5>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "uiBottonAndVideo",
  components: {
    "ui-button": async () => await import("@/components/uiButton.vue"),
    "play-icon": async () => await import("@/components/icons/PlayIcon.vue"),
  },
  props: {
    colorButton: {
      type: String,
      values: () => ["default", "white", "pink"],
      default: "default",
    },
    colorPlay: {
      type: String,
      values: () => ["white", "dark"],
      default: "dark",
    },
    hidePlay: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$router.push({ path: this.localePath("/prices") });
    },
  },
};
</script>
<i18n lang="yaml" locale="es">
hero_play_link: "https://www.youtube.com/watch?v=IZV3dIjdTS4"
hero_play_text: "Mira cómo funcionamos"
hero_cta: "Tarifas"
</i18n>
<i18n lang="yaml" locale="fr">
hero_play_link: "https://www.youtube.com/watch?v=bmnC5z3n5Pk"
hero_play_text: "Découvrez comment nous travaillons"
hero_cta: "Tarifs"
</i18n>
<i18n lang="yaml" locale="it">
hero_play_link: "https://www.youtube.com/watch?v=s3zE430RzPY"
hero_play_text: "Scopri come lavoriamo"
hero_cta: "Tariffe"
</i18n>
<i18n lang="yaml" locale="pt">
hero_play_link: " "
hero_play_text: "Veja como trabalhamos"
hero_cta: "Preços"
</i18n>
<i18n lang="yaml" locale="mx">
hero_play_link: " "
hero_play_text: "Mira cómo funcionamos"
hero_cta: "Tarifas"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/uiButtonAndVideo/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/uiButtonAndVideo/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/uiButtonAndVideo/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/uiButtonAndVideo/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/uiButtonAndVideo/en_mx.yaml"
></i18n>

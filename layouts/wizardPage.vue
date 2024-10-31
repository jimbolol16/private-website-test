<template>
  <div class="bg-white h-full">
    <!-- Background image -->
    <div class="absolute left-0 top-0 z-0 right-0">
      <div class="relative">
        <div class="overflow-hidden top-0">
          <nuxt-img
            :provider="$config.img_provider"
            src="/background/grad-prices-wizard.svg"
            :alt="$t('alt')"
          />
        </div>
      </div>
    </div>
    <ui-header :displayCitySelector="false"></ui-header>
    <section
      class="grid-layout mobile:pt-20 pt-32 desktopL:my-auto desktop:my-auto"
      v-if="!hideSectionHeader"
    >
      <h1
        class="col-span-full col-start-1 tablet:col-start-2 tablet:col-span-10 desktopL:text-[44px] desktopL:leading-[53px] desktop:text-[44px] desktop:leading-[53px] tablet:text-[44px] tablet:leading-[53px] mobileL:text-[44px] mobileL:leading-[53px]"
      >
        {{ $t(`title_${titleOrigin}`) }}
      </h1>
    </section>

    <nuxt />
    <ui-whatsapp-widget></ui-whatsapp-widget>
  </div>
</template>
<script>
import injectGclid from "@/mixins/injectGclid";
import nuxtI18nHeadFixer from "@/mixins/canonicals";
import { mapState } from "vuex";

export default {
  name: "wizardPage",
  components: {
    "ui-header": async () => await import("@/components/header/uiHeader.vue"),
    "ui-whatsapp-widget": async () =>
      await import("@/components/uiWhatsappWidget.vue"),
  },
  head() {
    return this.nuxtI18nHeadFixer();
  },
  mixins: [injectGclid, nuxtI18nHeadFixer],
  computed: {
    ...mapState("pricesWizard", {
      origin: (state) => state.origin,
    }),
    titleOrigin() {
      return this.origin || "warehouses";
    },
    hideSectionHeader() {
      const splittedCurrentRoute = this.$route.path.split("/");
      const currentPath = splittedCurrentRoute[splittedCurrentRoute.length - 1];

      return currentPath.toLowerCase() === "resume";
    },
  },
};
</script>
<i18n lang="yaml" locale="es">
title_storages: "Precio de guardamuebles a domicilio Box2box"
title_warehouses: "Precio de trasteros a domicilio Box2box"
alt: "precios"
</i18n>
<i18n lang="yaml" locale="fr">
title_storages: "Prix du garde-meubles à domicilie Box2box"
title_warehouses: "Prix du stockage à domicile Box2box"
alt: "prix"
</i18n>
<i18n lang="yaml" locale="it">
title_storages: "Prezzo del magazzino a domicilio Box2box"
title_warehouses: "Prezzo del deposito a domicilio Box2box"
alt: "prezzi"
</i18n>
<i18n lang="yaml" locale="pt">
title_storages: "Preços de guardamóveis a domicilio Box2box"
title_warehouses: "Preços de armazém a domicilio Box2box"
alt: "preços"
</i18n>
<i18n lang="yaml" locale="mx">
title_storages: "Precio de mini bodegas a domicilio Box2box"
title_warehouses: "Precio de mini bodegas a domicilio Box2box"
alt: "precios"
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/layouts/wizardPage.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/layouts/wizardPage.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/layouts/wizardPage.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/layouts/wizardPage.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/layouts/wizardPage.yaml"></i18n>

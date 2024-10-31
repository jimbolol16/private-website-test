<template>
  <div class="mobile:col-span-4 mobileL:col-span-8 col-span-12">
    <!-- Background image -->
    <div class="absolute left-0 z-0">
      <div class="relative">
        <div class="overflow-hidden top-0">
          <nuxt-img
            :provider="$config.img_provider"
            src="/background/grad-business.svg"
            alt="gradbusiness"
            class="max-h-[2256px] opacity-60"
          />
        </div>
      </div>
    </div>
    <section class="grid-layout section-vertical-padding pt-mobileL">
      <div class="row-start-2 col-span-3 mb-6">
        <div class="flex w-full justify-center mb-[90px]">
          <div class="flex flex-col space-y-6">
            <ui-card-guarantee>
              <template v-slot:image>
                <nuxt-img
                  :provider="$config.img_provider"
                  src="/business/security.svg"
                  alt="security"
                />
              </template>
              <template v-slot:title> {{ $t("title_card_1") }} </template>
              <template v-slot:subtitle>{{ $t("subtitle_card_1") }}</template>
              <template v-slot:body>{{ $t("body_card_1") }}</template>
            </ui-card-guarantee>
          </div>
        </div>
      </div>
      <div class="row-start-2 col-span-3 mb-6">
        <div class="flex w-full justify-center mb-[90px]">
          <div class="flex flex-col space-y-6">
            <ui-card-guarantee>
              <template v-slot:image>
                <nuxt-img
                  :provider="$config.img_provider"
                  src="/business/inventory.svg"
                  alt="inventory"
                />
              </template>
              <template v-slot:title> {{ $t("title_card_2") }} </template>
              <template v-slot:subtitle>{{ $t("subtitle_card_2") }}</template>
              <template v-slot:body>{{ $t("body_card_2") }}</template>
            </ui-card-guarantee>
          </div>
        </div>
      </div>
      <div class="row-start-2 col-span-3 mb-6">
        <div class="flex w-full justify-center mb-[90px]">
          <div class="flex flex-col space-y-6">
            <ui-card-guarantee>
              <template v-slot:image>
                <nuxt-img
                  :provider="$config.img_provider"
                  src="/business/quality.svg"
                  alt="quality"
                />
              </template>
              <template v-slot:title> {{ $t("title_card_3") }} </template>
              <template v-slot:subtitle>{{ $t("subtitle_card_3") }}</template>
              <template v-slot:body>{{ $t("body_card_3") }}</template>
            </ui-card-guarantee>
          </div>
        </div>
      </div>
      <div class="row-start-2 col-span-3 mb-6">
        <div class="flex w-full justify-center mb-[90px]">
          <div class="flex flex-col space-y-6">
            <ui-card-guarantee>
              <template v-slot:image>
                <nuxt-img
                  :provider="$config.img_provider"
                  src="/business/insurance.svg"
                  alt="insurance"
                />
              </template>
              <template v-slot:title> {{ $t("title_card_4") }} </template>
              <template v-slot:subtitle>{{ $t("subtitle_card_4") }}</template>
              <template v-slot:body>{{ $t("body_card_4") }}</template>
            </ui-card-guarantee>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: "ourGuarantee",
  components: {
    "ui-card-guarantee": async () =>
      await import("@/components/common/uiCardGuarantee.vue"),
  },
};
</script>
<i18n lang="yaml" locale="es">
title_card_1: "Seguridad"
title_card_2: "Inventario"
title_card_3: "Calidad"
title_card_4: "Seguro"
subtitle_card_1: "Videovigilancia 24h al día"
subtitle_card_2: "Con tan solo un clic "
subtitle_card_3: "Condiciones óptimas"
subtitle_card_4: "Almacenaje y transporte"
body_card_1: "Instalaciones equipadas con sistemas de videovigilancia y alarmas."
body_card_2: "Podrás elegir los objetos que quieras recuperar desde el inventario online."
body_card_3: "Garantizamos el mejor control de la temperatura y la humedad."
body_card_4: "Seguro incluido en todos nuestros contratros."
</i18n>
<i18n lang="yaml" locale="fr">
title_card_1: ""
title_card_2: ""
title_card_3: ""
title_card_4: ""
subtitle_card_1: ""
subtitle_card_2: ""
subtitle_card_3: ""
subtitle_card_4: ""
body_card_1: ""
body_card_2: ""
body_card_3: ""
body_card_4: ""
</i18n>
<i18n lang="yaml" locale="it">
title_card_1: ""
title_card_2: ""
title_card_3: ""
title_card_4: ""
subtitle_card_1: ""
subtitle_card_2: ""
subtitle_card_3: ""
subtitle_card_4: ""
body_card_1: ""
body_card_2: ""
body_card_3: ""
body_card_4: ""
</i18n>
<i18n lang="yaml" locale="pt">
title_card_1: ""
title_card_2: ""
title_card_3: ""
title_card_4: ""
subtitle_card_1: ""
subtitle_card_2: ""
subtitle_card_3: ""
subtitle_card_4: ""
body_card_1: ""
body_card_2: ""
body_card_3: ""
body_card_4: ""
</i18n>
<i18n lang="yaml" locale="mx">
title_card_1: ""
title_card_2: ""
title_card_3: ""
title_card_4: ""
subtitle_card_1: ""
subtitle_card_2: ""
subtitle_card_3: ""
subtitle_card_4: ""
body_card_1: ""
body_card_2: ""
body_card_3: ""
body_card_4: ""
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/logistics/ourGarantee.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/logistics/ourGarantee.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/logistics/ourGarantee.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/logistics/ourGarantee.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/logistics/ourGarantee.yaml"
></i18n>

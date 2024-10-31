<template>
  <div class="flex w-full flex-col pt-16">
    <div class="bg-[#E7EDFA4D] w-full h-[1px]"></div>
    <div class="grid-layout">
      <!-- Left side -->
      <div
        class="col-start-1 col-span-5 row-start-1 mt-16 mobileL:row-start-2 mobileL:col-span-full mobile:row-start-4 mobile:col-span-full"
      >
        <div
          class="flex flex-col w-full space-y-6 mobileL:justify-center mobileL:items-center mobileL:text-center"
        >
          <logo-icon class="fill-white"></logo-icon>
          <p class="p2">
            {{ $t("foo_middle_body") }}
          </p>

          <div
            class="flex flex-col space-y-6 w-full items-start mobileL:flex-row mobileL:space-y-0 mobileL:justify-between"
          >
            <div class="flex flex-col items-start">
              <h5 class="mb-2">{{ $t("foo_middle_contact_title") }}</h5>
              <div class="inline-flex space-x-2 text-[#94A2B3] items-center">
                <phone-icon class="stroke-[#94A2B3] h-4 w-4"></phone-icon>
                <a
                  class="text-[15px] font-normal"
                  :href="`tel:${$t('foo_middle_contact_phone_href')}`"
                  >{{ $t("foo_middle_contact_phone") }}</a
                >
              </div>
              <div class="inline-flex space-x-2 text-[#94A2B3] items-center">
                <email-icon class="stroke-[#94A2B3] h-4 w-4"></email-icon>
                <a
                  class="text-[15px] font-normal"
                  :href="`mailto:${$t('foo_middle_contact_email')}`"
                  >{{ $t("foo_middle_contact_email") }}</a
                >
              </div>
              <div class="inline-flex space-x-2 text-[#94A2B3]">
                <calendar-icon
                  class="stroke-[#94A2B3] h-4 w-4 mt-1"
                ></calendar-icon>
                <div class="flex flex-col items-start">
                  <p class="text-[15px] font-normal">
                    {{ $t("foo_middle_contact_open_1") }}
                  </p>
                  <p
                    class="text-[15px] font-normal subparagraph"
                    v-if="$t('foo_middle_contact_open_2') !== ' '"
                  >
                    {{ $t("foo_middle_contact_open_2") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right side -->
      <div
        class="col-start-6 col-span-2 row-start-1 mt-10 mobileL:col-start-1 mobileL:col-span-3 mobile:col-start-2 mobile:col-span-2 mobile:row-start-1"
      >
        <div
          class="flex flex-col mobileL:items-center mobileL:text-center mobile:text-center"
        >
          <h5>{{ $t("foo_middle_col_1_title") }}</h5>
          <div class="listing mt-9 space-y-5 flex flex-col">
            <nuxt-link :to="localePath('/about')">{{
              $t("foo_middle_col_1_row_1")
            }}</nuxt-link>
            <a
              href="https://www.box2boxstorage.com/blog/es"
              target="_blank"
              v-if="localeMetadata.country === 'es'"
              >{{ $t("foo_middle_col_1_row_6") }}</a
            >
            <nuxt-link :to="localePath('/legal')">{{
              $t("foo_middle_col_1_row_3")
            }}</nuxt-link>
            <nuxt-link :to="localePath('/legal/privacy')">{{
              $t("foo_middle_col_1_row_2")
            }}</nuxt-link>
            <nuxt-link :to="localePath('/legal/cookies')">{{
              $t("foo_middle_col_1_row_4")
            }}</nuxt-link>
            <nuxt-link :to="localePath('/legal/conditions')">{{
              $t("foo_middle_col_1_row_5")
            }}</nuxt-link>
            <a
              :href="$t('foo_middle_demand_href')"
              target="blank"
              v-if="localeMetadata.country === 'pt'"
            >
              {{ $t("foo_middle_demand_name") }}
            </a>
          </div>
        </div>
      </div>

      <div
        class="col-start-8 col-span-2 row-start-1 mt-10 mobileL:col-start-4 mobileL:col-span-2 mobile:col-start-2 mobile:col-span-2 mobile:row-start-2"
      >
        <div
          class="flex flex-col mobileL:items-center mobileL:text-center mobile:text-center tablet:text-center"
        >
          <h5>{{ $t("foo_middle_col_2_title") }}</h5>
          <div class="listing mt-9 space-y-5 flex flex-col">
            <nuxt-link
              class="capitalize"
              :to="localePath(`/warehouses/${city.key}`)"
              v-for="(city, index) in cities"
              :key="index"
            >
              {{ city.name }}
            </nuxt-link>
          </div>
        </div>
      </div>

      <div
        class="col-start-10 col-span-2 row-start-1 mt-10 mobileL:col-start-6 mobileL:col-span-full mobile:col-start-2 mobile:col-span-2 mobile:row-start-3 tablet:col-span-3"
        v-if="localeMetadata.country !== 'mx'"
      >
        <div
          class="flex flex-col mobileL:items-center mobileL:text-center mobile:text-center tablet:text-center"
        >
          <h5>{{ $t("foo_middle_col_3_title") }}</h5>
          <div class="listing mt-9 space-y-5 flex flex-col">
            <nuxt-link
              class="capitalize"
              :to="localePath(`/storages/${city.key}`)"
              v-for="(city, index) in cities"
              :key="index"
            >
              {{ city.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import warehouseFetchMixin from "@/mixins/warehouseFetch";
import localesMetadata from "@/mixins/localesMetadata";
import { mapState } from "vuex";

export default {
  name: "footerSection",
  components: {
    "logo-icon": async () => await import("@/components/icons/LogoIcon.vue"),
    "phone-icon": async () =>
      await import("~/components/icons/PhoneIconAlternative.vue"),
    "email-icon": async () => await import("@/components/icons/EmailIcon.vue"),
    "calendar-icon": async () =>
      await import("@/components/icons/CalendarIcon.vue"),
  },
  mixins: [warehouseFetchMixin, localesMetadata],
  computed: {
    ...mapState("landingCities", {
      city: (state) => state.city,
    }),
  },
};
</script>
<style lang="scss" scoped>
:deep(p) {
  @apply leading-[25px] text-[#94A2B3] desktopL:max-w-[320px] desktop:max-w-[320px] tablet:max-w-[320px];
}
:deep(.subparagraph) {
  @apply leading-[14px];
}
:deep(h5) {
  @apply text-white font-bold;
}
.listing {
  a {
    @apply cursor-pointer hover:underline text-white mobileL:font-manrope mobileL:font-normal mobileL:text-[16px] mobileL:leading-6;
  }
}
</style>
<i18n lang="yaml" locale="es">
foo_middle_body: "Tu trastero a Domicilio"
foo_middle_col_1_title: "Compañía"
foo_middle_col_2_title: "Trasteros"
foo_middle_col_3_title: "Guardamuebles"
foo_middle_col_1_row_1: "Sobre nosotros"
foo_middle_col_1_row_2: "Política de privacidad"
foo_middle_col_1_row_3: "Aviso legal"
foo_middle_col_1_row_4: "Política de cookies"
foo_middle_col_1_row_5: "Condiciones generales"
foo_middle_col_1_row_6: "Blog"
foo_middle_contact_title: "Contacto"
foo_middle_contact_phone: "919 033 033"
foo_middle_contact_phone_href: "+34919033033"
foo_middle_contact_email: "hola@box2boxstorage.com"
foo_middle_contact_open_1: "Lunes - Viernes (9:00h a 19:00h)"
foo_middle_contact_open_2: "Sábado (9:00h a 18:00h)"
foo_middle_demand_name: ""
foo_middle_demand_href: ""
</i18n>
<i18n lang="yaml" locale="fr">
foo_middle_body: "Votre pièce de rangement à la maison"
foo_middle_col_1_title: "Entreprise"
foo_middle_col_2_title: "Stockage"
foo_middle_col_3_title: "Garde-meubles"
foo_middle_col_1_row_1: "A propos de nous"
foo_middle_col_1_row_2: "Politique de confidentialité"
foo_middle_col_1_row_3: "Avis juridique"
foo_middle_col_1_row_4: "Politique en matière de cookies"
foo_middle_col_1_row_5: "Conditions générales"
foo_middle_col_1_row_6: "Blog"
foo_middle_contact_title: "Contact"
foo_middle_contact_phone: "06 26 56 54 74"
foo_middle_contact_phone_href: "+33626565474"
foo_middle_contact_email: "contact@box2boxstorage.com"
foo_middle_contact_open_1: "Lundi - Vendredi (10:00h à 19:00h)"
foo_middle_contact_open_2: " "
foo_middle_demand_name: ""
foo_middle_demand_href: ""
</i18n>
<i18n lang="yaml" locale="it">
foo_middle_body: "Il tuo deposito a domicilio"
foo_middle_col_1_title: "Imprese"
foo_middle_col_2_title: "Depositi "
foo_middle_col_3_title: "Magazzino"
foo_middle_col_1_row_1: "Su di noi "
foo_middle_col_1_row_2: "Informativa sulla privacy"
foo_middle_col_1_row_3: "Note legali"
foo_middle_col_1_row_4: "Politica sui cookie"
foo_middle_col_1_row_5: "Condizioni generali"
foo_middle_col_1_row_6: "Blog"
foo_middle_contact_title: "Contatto"
foo_middle_contact_phone: "02 8294 2526"
foo_middle_contact_phone_href: "+390282942526"
foo_middle_contact_email: "info@box2boxstorage.com"
foo_middle_contact_open_1: "Lunedì - Venerdí (9:00h alle 18:00h)"
foo_middle_contact_open_2: " "
foo_middle_demand_name: ""
foo_middle_demand_href: ""
</i18n>
<i18n lang="yaml" locale="pt">
foo_middle_body: "O teu armazém a domicilio"
foo_middle_col_1_title: "Empresa"
foo_middle_col_2_title: "Armazéns"
foo_middle_col_3_title: "Guarda-móveis"
foo_middle_col_1_row_1: "Sobre nós"
foo_middle_col_1_row_2: "Política de privacidade"
foo_middle_col_1_row_3: "Aviso legal"
foo_middle_col_1_row_4: "Política de cookies"
foo_middle_col_1_row_5: "Condições gerais"
foo_middle_col_1_row_6: "Blog"
foo_middle_contact_title: "Contacto"
foo_middle_contact_phone: "21 020 33 66"
foo_middle_contact_phone_href: "+351210203366"
foo_middle_contact_email: "contacto@box2boxstorage.com"
foo_middle_contact_open_1: "Segunda - Sexta (9:00h as 18:00h)"
foo_middle_contact_open_2: " "
foo_middle_demand_name: "Livro de elogios e reclamações"
foo_middle_demand_href: "https://www.livroreclamacoes.pt/Inicio/"
</i18n>
<i18n lang="yaml" locale="mx">
foo_middle_body: "Tu mini bodega a Domicilio"
foo_middle_col_1_title: "Compañía"
foo_middle_col_2_title: "Mini Bodegas"
foo_middle_col_3_title: "Mini Bodegas"
foo_middle_col_1_row_1: "Sobre nosotros"
foo_middle_col_1_row_2: "Política de privacidad"
foo_middle_col_1_row_3: "Aviso legal"
foo_middle_col_1_row_4: "Política de cookies"
foo_middle_col_1_row_5: "Condiciones generales"
foo_middle_col_1_row_6: "Blog"
foo_middle_contact_title: "Contacto"
foo_middle_contact_phone: "55 8037 4700"
foo_middle_contact_phone_href: "+525580374700"
foo_middle_contact_email: "atencion@box2boxstorage.com"
foo_middle_contact_open_1: "Lunes - Viernes (9:00h a 18:00h)"
foo_middle_contact_open_2: " "
foo_middle_demand_name: ""
foo_middle_demand_href: ""
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/middleSection/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/middleSection/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/middleSection/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/middleSection/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/middleSection/en_mx.yaml"
></i18n>

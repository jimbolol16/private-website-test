<template>
  <div
    class="relative overflow-y-hidden desktopL:h-[752px] desktop:h-[664px] tablet:h-[640px] mobileL:h-[580px] mobile:h-[412px]"
  >
    <!-- Dots image -->
    <div
      class="absolute right-0 mr-6 z-[1] mt-[520px] desktopL:mt-[616px] mobile:hidden mobileL:hidden"
    >
      <div class="relative">
        <div class="overflow-hidden">
          <nuxt-img
            :provider="$config.img_provider"
            src="/sectionTen/dots.svg"
            alt="dots"
            sizes="xl:473px lg:473px md:473px"
            width="473"
          />
        </div>
      </div>
    </div>

    <!-- Persons image -->
    <div
      class="absolute z-[4] desktopL:mt-[432px] desktop:mt-[392px] tablet:-bottom-[8px] mobileL:-bottom-[4px] mobile:-bottom-[4px] left-0 right-0 mx-auto"
    >
      <div class="relative overflow-hidden flex justify-center">
        <nuxt-img
          :provider="$config.img_provider"
          src="/sectionTen/persons.webp"
          alt="people"
          class="desktopL:w-[1512px]"
          format="webp"
          sizes="xl:1512px lg:1313px md:1240px sm:905px xs:600px"
          width="1313"
        />
      </div>
    </div>

    <!-- Persons background image -->
    <div
      class="absolute z-[3] desktopL:mt-[520px] desktop:mt-[480px] tablet:-bottom-[110px] mobile:-bottom-[40px] mobileL:-bottom-[56px] left-0 right-0 mx-auto"
    >
      <div class="relative overflow-hidden">
        <div class="overflow-hidden flex justify-center">
          <nuxt-img
            :provider="$config.img_provider"
            src="/sectionTen/persons-background.svg"
            alt="peoplebackground"
            sizes="xl:1544px lg:1425px"
            width="1425"
          />
        </div>
      </div>
    </div>

    <!-- Left border square -->
    <div
      class="invisible desktopL:visible desktop:visible absolute left-0 z-[1] mt-[528px] desktopL:mt-[468px]"
    >
      <div class="relative">
        <div class="overflow-hidden">
          <nuxt-img
            :provider="$config.img_provider"
            src="/sectionTen/left-square.svg"
            alt="leftsquare"
            class="desktop:block hidden"
            sizes="xl:67px lg:67px"
            width="67"
          />
          <nuxt-img
            :provider="$config.img_provider"
            src="/sectionTen/left-square-xl.svg"
            alt="leftsquarexl"
            class="desktopL:block hidden"
          />
        </div>
      </div>
    </div>

    <!-- Right border square -->
    <div
      class="invisible desktopL:visible desktop:visible absolute right-0 desktopL:right-16 z-[1] mt-[368px] desktopL:mt-[432px]"
    >
      <div class="relative">
        <div class="overflow-hidden">
          <nuxt-img
            :provider="$config.img_provider"
            src="/sectionTen/right-square.svg"
            alt="rightsquare"
            class="desktop:block hidden"
            sizes="xl:78px lg:78px"
            width="78"
          />
          <nuxt-img
            :provider="$config.img_provider"
            src="/sectionTen/right-square-xl.svg"
            alt="rightsquarexl"
            class="desktopL:block hidden"
            sizes="xl:139px lg:78px"
            width="139"
          />
        </div>
      </div>
    </div>

    <div
      class="subgrid-layout desktopL:pt-[176px] desktop:pt-[176px] tablet:pt-[152px] mobileL:pt-[152px] mobile:pt-[90px]"
    >
      <h2
        class="col-span-12 col-start-1 row-start-2 mt-2 text-center mobile:col-span-4 mobileL:col-span-8"
      >
        {{ $t("sec10_title") }}
      </h2>
      <p
        class="p2 mx-16 desktopL:col-start-4 desktop:col-start-3 row-start-3 desktopL:col-end-10 desktop:col-end-11 text-center mt-8 tablet:col-start-2 tablet:col-end-12 mobileL:col-start-1 mobileL:col-end-9 mobile:col-start-1 mobile:col-end-5 mobile:mx-0 mobileL:mx-0"
      >
        {{ $t("sec10_subtitle") }}
      </p>
      <nuxt-img
        :provider="$config.img_provider"
        src="/sectionTen/central-square.webp"
        class="mt-4 col-start-4 col-end-10 mobile:col-start-2 mobile:col-end-4 mobileL:col-start-3 mobileL:col-end-7 row-start-4 z-[2] tablet:mt-[104px] w-full"
        alt="centralsquare"
        loading="lazy"
        sizes="xl:744px lg:552px md:441px sm:292px xs:172px"
        width="552"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "sectionTen",
};
</script>
<i18n lang="yaml" locale="es">
sec10_title: "Nuestro equipo de expertos"
sec10_subtitle: "Nos esforzamos para darte siempre el mejor servicio, y lo hacemos con pasión."
</i18n>
<i18n lang="yaml" locale="fr">
sec10_title: "Notre équipe d'experts"
sec10_subtitle: "Nous essayons de toujours vous offrir le meilleur service, et nous le faisons avec passion."
</i18n>
<i18n lang="yaml" locale="it">
sec10_title: "Il nostro staff di esperti"
sec10_subtitle: "Ci impegnamo a offrirti sempre il miglior servizio, e lo facciamo con passione"
</i18n>
<i18n lang="yaml" locale="pt">
sec10_title: "A nossa equipa de profissionais "
sec10_subtitle: "Esforçamo-nos por dar sempre o melhor serviço, e fazemo-lo com paixão."
</i18n>
<i18n lang="yaml" locale="mx">
sec10_title: "Nuestro equipo de expertos"
sec10_subtitle: "Nos esforzamos para darte siempre el mejor servicio, y lo hacemos con pasión."
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/sections/sectionTen.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/sections/sectionTen.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/sections/sectionTen.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/sections/sectionTen.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/sections/sectionTen.yaml"></i18n>

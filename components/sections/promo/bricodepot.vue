<template>
  <promo-banner>
    <template v-slot:image>
      <nuxt-img
        :provider="$config.img_provider"
        class="w-[300px]"
        src="/promo/bricodepot.png"
        alt="bricodepot"
      />
    </template>
    <template v-slot:titles>
      <h4 class="text-dark text-[22px]">
        {{ $t("title1") }}
        <span class="text-electric"> {{ $t("free") }} </span>
      </h4>
      <h4 class="text-dark text-[22px]">
        {{ $t("title2") }}
        <span class="text-electric"> {{ $t("span2") }} </span>
      </h4>
      <h4 class="text-dark text-[22px]">
        {{ $t("title3") }} <span class="text-electric"> {{ $t("free") }} </span>
      </h4>
    </template>
    <template v-slot:conditions>
      <p class="text-[9px] font-normal leading-4">
        <b>{{ $t("condition1Title") }}:</b> {{ $t("condition1") }}
      </p>
      <p class="text-[9px] font-normal leading-4">
        <b>{{ $t("condition2Title") }}:</b> {{ $t("condition2") }}
      </p>
      <p class="text-[9px] font-normal leading-4">
        <b>{{ $t("condition3Title") }}:</b> {{ $t("condition3") }}
      </p>
    </template>
  </promo-banner>
</template>

<script>
export default {
  name: "bricodepotBanner",
  components: {
    "promo-banner": async () =>
      await import("@/components/sections/promo/banners/promoBanner.vue"),
  },
};
</script>
<i18n lang="yaml" locale="es">
title1: "Tu trastero 1 mes"
title2: "Utiliza tu código"
title3: "Recogida"
span2: "una vez al año"
free: "GRATIS"
condition1Title: "Código"
condition2Title: "3X2"
condition3Title: "Transporte"
condition1: "Este mismo código se podrá usar en un plazo máximo de 1 año. Tiene una validez de un año. Una vez canjeado, se puede volver a utilizar al año siguiente, empezando a contar los días desde el momento de la entrega del código"
condition2: "La oferta consiste en 1 mes gratis de alquiler de trastero. El periodo mínimo de contratación es de 3 meses, por lo que el primer mes, saldría completamente gratuito y sólo abonará los 2 meses restantes."
condition3: "el precio del transporte será el mismo que se indica en la web. Recogida GRATIS hasta los 6m2. Para espacios superiores, el precio de la recogida tendrá un descuento de un 50%. Entregas a partir de 29€/mes."
</i18n>
<i18n lang="yaml" locale="fr">
title1: "Votre espace de stockage 1 mois"
title2: "Utilisez votre code"
title3: "Collection"
span2: "une fois par an"
free: "GRATUIT"
condition1Title: "Code"
condition2Title: "3X2"
condition3Title: "Transport"
condition1: "Le même code peut être utilisé pour une période maximale de 1 an. Il est valable une fois par an, une fois utilisé, il ne peut être réutilisé que l'année suivante, en commençant à compter les jours à partir du moment de la remise du code."
condition2: "L'offre consiste en un mois gratuit de location d'un espace de stockage. La durée minimale du contrat est de 3 mois, le premier mois est donc entièrement gratuit et vous ne payez que pour les deux mois restants."
condition3: "le prix du transport sera le même que celui indiqué sur le site web. Collecte GRATUITE jusqu'à 6m2. Pour les espaces plus grands, le prix de la collecte sera réduit de 50%. Livraisons à partir de 29€/mois."
</i18n>
<i18n lang="yaml" locale="it">
title1: "Il tuo deposito 1 mese"
title2: "Utilizza il tuo codice"
title3: "Ritiro"
span2: "una volta all’anno"
free: "GRATIS"
condition1Title: "Codice"
condition2Title: "3x2"
condition3Title: "Trasporto"
condition1: "Il codice potrà essere usato annualmente. Ha valore una volta all'anno, una volta utilizato, sarà possibile riusarlo l'anno sucessivo, i giorni di validità cominciano dal momento in cui é stato generato il codice per l'utente "
condition2: "L'offerta consiste in 1 mese omaggio per la sensualità di un deposito. Il periodo minimo di permanenza del contratto sono 3 mesi, di conseguenza il primo mese sarà completamente gratuito e si pagheranno solamente le due restanti mensualità  "
condition3: "Il costo del trasporto sarà il medesimo indicato nella pagina web. Ritiro GRATIS fino a 6m2. Per spazi superiori, il prezo di ritiro avrà uno sconto del 50%. Consegna a partire da 29€ al mese."
</i18n>
<i18n lang="yaml" locale="pt">
title1: "O teu armazém 1 mês"
title2: "Utiliza o teu código"
title3: "Recolha"
span2: "uma vez por ano"
free: "GRATIS"
condition1Title: "Código"
condition2Title: "3X2"
condition3Title: "Transporte"
condition1: "Este código pode ser utilizado por um período máximo de 1 ano. É válido uma vez por ano, uma vez usado, pode ser utilizado novamente no ano seguinte, começando a contar os dias a partir do momento da entrega do código."
condition2: "A oferta consiste em 1 mês de aluguer gratuito de armazenamento. O período mínimo do contrato é de 3 meses, pelo que o primeiro mês será completamente gratuito e só pagará pelos restantes 2 meses."
condition3: "O preço do transporte será o mesmo que o indicado no website. Recolha GRATUITA até 6m2. Para espaços maiores, o preço da recolha será descontado em 50%. Entregas a partir de 29 euros/mês."
</i18n>
<i18n lang="yaml" locale="mx">
title1: "Tu mini bodega 1 mes"
title2: "Utiliza tu código"
title3: "Recogida"
span2: "una vez al año"
free: "GRATIS"
condition1Title: "Código"
condition2Title: "3X2"
condition3Title: "Transporte"
condition1: "Este mismo código se podrá usar en un plazo máximo de 1 año. Tiene una validez de un año. Una vez canjeado, se puede volver a utilizar al año siguiente, empezando a contar los días desde el momento de la entrega del código"
condition2: "La oferta consiste en 1 mes gratis de renta de mini bodega. El periodo mínimo de contratación es de 3 meses, por lo que el primer mes, saldría completamente gratuito y sólo abonará los 2 meses restantes."
condition3: "el precio del transporte será el mismo que se indica en la web. Recogida GRATIS hasta los 6m2. Para espacios superiores, el precio de la recogida tendrá un descuento de un 50%. Entregas a partir de 29€/mes."
</i18n>

<i18n lang="yaml" locale="es-en" src="@/i18n/components/bricodepot.yaml"></i18n>
<i18n lang="yaml" locale="fr-en" src="@/i18n/components/bricodepot.yaml"></i18n>
<i18n lang="yaml" locale="it-en" src="@/i18n/components/bricodepot.yaml"></i18n>
<i18n lang="yaml" locale="pt-en" src="@/i18n/components/bricodepot.yaml"></i18n>
<i18n lang="yaml" locale="mx-en" src="@/i18n/components/bricodepot.yaml"></i18n>

<template>
  <div>
    <ui-generic-modal @close="$emit('close')" :disableScroll="disableScroll">
      <template slot="text">
        <table class="table-fixed">
          <colgroup>
            <col span="1" class="w-[50%]" />
            <col span="1" class="w-[50%]" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">{{ $t("leg_row1_title") }}</td>
              <td class="body">{{ $t("leg_row1_body") }}</td>
            </tr>

            <tr class="border-b border-[#E3E6E9] border-solid">
              <td colspan="100%"></td>
            </tr>

            <tr>
              <td class="title">{{ $t("leg_row2_title") }}</td>
              <td class="body">
                {{ $t("leg_row2_body") }}
                <span class="inline-flex cursor-pointer" @click="handleClick"
                  ><info-icon class="h-3 w-3 fill-salmon"></info-icon
                ></span>
              </td>
            </tr>

            <tr class="border-b border-[#E3E6E9] border-solid">
              <td colspan="100%"></td>
            </tr>

            <tr>
              <td class="title">
                {{ $t("leg_row3_title") }}
              </td>
              <td class="body">
                {{ $t("leg_row3_body") }}
                <span class="inline-flex cursor-pointer" @click="handleClick"
                  ><info-icon class="h-3 w-3 fill-salmon"></info-icon
                ></span>
              </td>
            </tr>

            <tr class="border-b border-[#E3E6E9] border-solid">
              <td colspan="100%"></td>
            </tr>

            <tr>
              <td class="title">{{ $t("leg_row4_title") }}</td>
              <td class="body">
                {{ $t("leg_row4_body1") }}
                <ul class="list-disc pl-7">
                  <li>
                    {{ $t("leg_row4_body2") }}
                    <span
                      class="inline-flex cursor-pointer"
                      @click="handleClick"
                      ><info-icon class="h-3 w-3 fill-salmon"></info-icon
                    ></span>
                  </li>
                </ul>
              </td>
            </tr>

            <tr class="border-b border-[#E3E6E9] border-solid">
              <td colspan="100%"></td>
            </tr>

            <tr>
              <td class="title">{{ $t("leg_row5_title") }}</td>
              <td class="body">
                {{ $t("leg_row5_body") }}
                <a
                  class="text-electric underline cursor-pointer"
                  :href="`mailto:${$t('leg_row5_href')}`"
                  >{{ $t("leg_row5_name") }}</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </ui-generic-modal>
  </div>
</template>
<script>
export default {
  name: "uiLegalModal",
  components: {
    "ui-generic-modal": async () =>
      await import("@/components/uiGenericModal.vue"),
    "info-icon": async () => await import("@/components/icons/InfoIcon.vue"),
  },
  props: {
    disableScroll: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleClick() {
      this.$router.push({ path: this.localePath("/legal/privacy") });
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  @apply font-manrope font-bold text-[16px] leading-6 text-left;
}

.body {
  @apply font-manrope font-normal text-[16px] leading-6 text-justify;
}

td {
  @apply pt-2;
}
</style>
<i18n lang="yaml" locale="es">
leg_row1_title: "¿Quién trata tus datos?"
leg_row1_body: 'BOX2BOX, S.L. (en adelante, "Titular")'
leg_row2_title: "¿Por qué tratamos los datos que te pedimos?"
leg_row2_body: "Se tratan tus datos para poder prestarte los servicios solicitados."
leg_row3_title: "¿Cuál es la legitimación para este tratamiento de tus datos?"
leg_row3_body: "Estos datos son necesarios para llevar a cabo la resolución de consultas que puedas plantearnos o para la prestación de los servicios que se hayan solicitado a través del Sitio Web."
leg_row4_title: "¿Cuáles son mis derechos?"
leg_row4_body1: "El interesado tiene derecho a ejercitar su derecho de:"
leg_row4_body2: "Acceso, rectificación, supresión, oposición, portabilidad de los Datos, limitación del Tratamiento y a no ser objeto de decisiones automatizadas individualizadas."
leg_row5_title: "¿Tienes dudas?"
leg_row5_body: "Tanto si tienes alguna sugerencia como si quieres darte de baja ponte en contacto con nosotros enviando un email a la siguiente dirección:"
leg_row5_href: "hola@box2boxstorage.com"
leg_row5_name: "hola@box2boxstorage.com"
</i18n>
<i18n lang="yaml" locale="fr">
leg_row1_title: "Qui traite vos données ?"
leg_row1_body: 'BOX2BOX, SARL. (ci-après dénommé le "Titulaire")'
leg_row2_title: "Pourquoi traitons-nous les données que nous vous demandons ?"
leg_row2_body: "Vos données sont traitées afin de vous fournir les services demandés."
leg_row3_title: "Quelle est la légitimité de ce traitement de vos données ?"
leg_row3_body: "Ces données sont nécessaires pour mener à bien la résolution des questions que vous pouvez nous poser ou pour fournir les services qui ont été demandés sur le site web."
leg_row4_title: "Quels sont mes droits ?"
leg_row4_body1: "La personne concernée a le droit d'exercer son droit à :"
leg_row4_body2: "Accès, rectification, effacement, opposition, portabilité des données, limitation du traitement et droit de ne pas faire l'objet de décisions individualisées automatisées."
leg_row5_title: "Vous avez des doutes ?"
leg_row5_body: "Si vous avez des suggestions ou si vous voulez vous désabonner, veuillez nous contacter en envoyant un courriel à l'adresse suivante :"
leg_row5_href: "contact@box2boxstorage.com"
leg_row5_name: "contact@box2boxstorage.com"
</i18n>
<i18n lang="yaml" locale="it">
leg_row1_title: "Chi tratta i vostri dati?"
leg_row1_body: 'BOX2BOX, S.L. (di seguito denominata "Proprietario")'
leg_row2_title: "Perché trattiamo i dati che vi chiediamo?"
leg_row2_body: "I vostri dati sono trattati per fornirvi i servizi richiesti."
leg_row3_title: "Qual è la legittimità di questo trattamento dei vostri dati?"
leg_row3_body: "Questi dati sono necessari per risolvere le richieste dell'utente o per fornire i servizi richiesti attraverso il sito web."
leg_row4_title: "Quali sono i miei diritti?"
leg_row4_body1: "L'interessato ha il diritto di esercitare il proprio diritto a:"
leg_row4_body2: "Accesso, rettifica, cancellazione, opposizione, portabilità dei dati, limitazione del trattamento e diritto a non essere oggetto di decisioni automatizzate personalizzate."
leg_row5_title: "Avete dei dubbi?"
leg_row5_body: "Per qualsiasi suggerimento o se si desidera annullare l'iscrizione, si prega di contattarci inviando un'e-mail al seguente indirizzo:"
leg_row5_href: "info@box2boxstorage.com"
leg_row5_name: "info@box2boxstorage.com"
</i18n>
<i18n lang="yaml" locale="pt">
leg_row1_title: "Quem processa os seus dados?"
leg_row1_body: 'STUFF2BOX UNIP LDA (adiante designado por "Proprietário")'
leg_row2_title: "Porque processamos os dados que lhe pedimos?"
leg_row2_body: "Os seus dados são processados de modo a fornecer-lhe os serviços solicitados."
leg_row3_title: "Qual é a legitimidade para este tratamento dos seus dados?"
leg_row3_body: "Estes dados são necessários para levar a cabo a resolução de questões que possa levantar connosco ou para fornecer os serviços que tenham sido solicitados através do Website."
leg_row4_title: "Quais são os meus direitos?"
leg_row4_body1: "O titular dos dados tem o direito de exercer o seu direito:"
leg_row4_body2: "Acesso, rectificação, eliminação, oposição, portabilidade dos dados, limitação do processamento e o direito de não estar sujeito a decisões individualizadas automatizadas."
leg_row5_title: "Tem dúvidas?"
leg_row5_body: "Se tiver alguma sugestão ou se quiser cancelar a sua inscrição, por favor contacte-nos enviando um e-mail para o seguinte endereço:"
leg_row5_href: "contacto@box2boxstorage.com"
leg_row5_name: "contacto@box2boxstorage.com"
</i18n>
<i18n lang="yaml" locale="mx">
leg_row1_title: "¿Quién trata tus datos?"
leg_row1_body: 'BOX2BOX, S.L. (en adelante, "Titular")'
leg_row2_title: "¿Por qué tratamos los datos que te pedimos?"
leg_row2_body: "Se tratan tus datos para poder prestarte los servicios solicitados."
leg_row3_title: "¿Cuál es la legitimación para este tratamiento de tus datos?"
leg_row3_body: "Estos datos son necesarios para llevar a cabo la resolución de consultas que puedas plantearnos o para la prestación de los servicios que se hayan solicitado a través del Sitio Web."
leg_row4_title: "¿Cuáles son mis derechos?"
leg_row4_body1: "El interesado tiene derecho a ejercitar su derecho de:"
leg_row4_body2: "Acceso, rectificación, supresión, oposición, portabilidad de los Datos, limitación del Tratamiento y a no ser objeto de decisiones automatizadas individualizadas."
leg_row5_title: "¿Tienes dudas?"
leg_row5_body: "Tanto si tienes alguna sugerencia como si quieres darte de baja ponte en contacto con nosotros enviando un email a la siguiente dirección:"
leg_row5_href: "atencion@box2boxstorage.com"
leg_row5_name: "atencion@box2boxstorage.com"
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/components/uiLegalModal/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/components/uiLegalModal/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/components/uiLegalModal/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/components/uiLegalModal/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/components/uiLegalModal/en_mx.yaml"
></i18n>

<template>
  <ui-descriptive-section
    :secondaryTitle="$t('who_title_suffix')"
    :subTitle="$t('who_subtitle')"
    :body="$t('who_body')"
  >
  </ui-descriptive-section>
</template>

<script>
export default {
  name: "businessGeneralDescription",
  components: {
    "ui-descriptive-section": async () =>
      await import("@/components/common/uiDescriptiveSection.vue"),
  },
};
</script>

<i18n lang="yaml" locale="es">
who_title_suffix: "La solución a tus problemas de espacio"
who_subtitle: "Somos la solución completa de transporte y almacenaje puerta a puerta. ¡Ahorra tiempo y dinero con nosotros!"
who_body: "Nuestro concepto de almacenaje es funcional, completo, flexible y sostenible. Incluye embalaje y transporte. Siempre con un inventario online que te ayudará a pedir los objetos que necesitas dónde y cuándo quieras. <br><br> Estamos comprometidos con el medioambiente, por eso, plantamos 1 árbol por cada 6 clientes, y así, reducimos la huella de carbono que generamos."
</i18n>
<i18n lang="yaml" locale="fr">
who_title_suffix: "La solution à vos problèmes d'espace"
who_subtitle: "Nous sommes la solution complète de transport et de stockage de porte à porte. Économisez du temps et de l'argent avec nous !"
who_body: "Notre concept de stockage est fonctionnel, complet, flexible et durable. Il comprend l'emballage et le transport. Toujours avec un inventaire en ligne pour vous aider à commander les articles dont vous avez besoin où et quand vous le voulez. <br><br> Nous nous engageons en faveur de l'environnement, c'est pourquoi nous plantons 1 arbre pour 6 clients, réduisant ainsi notre empreinte carbone."
</i18n>
<i18n lang="yaml" locale="it">
who_title_suffix: "La soluzione ai tuoi problemi di spazio"
who_subtitle: "Siamo la perfetta soluzione di trasporto e stocaggio porta a porta. Risparmia tempo e denaro con noi!"
who_body: "Il nostro concetto di imagazzinamento é funzionale, completo, flessibile e sostenibile. Include imballaggio e trasporto. Un inventario digitale sarà sempre a disposizione, in modo da permetterti di richiedere gli ogetti desiderati dove e quando vorrai. <br><br> La responsabilità sociale è profondamente radicata nella nostra cultura aziendale. L'ambiente é importante, per questo piantiamo un albero ogni 6 clienti, in modo da ridurre il nostro impatto sulle emissioni generate "
</i18n>
<i18n lang="yaml" locale="pt">
who_title_suffix: "A solução para os seus problemas de espaço"
who_subtitle: "Somos a solução completa de transporte e armazenamento porta-a-porta - poupe tempo e dinheiro connosco!"
who_body: "O nosso conceito de armazenamento é funcional, completo, flexível e sustentável. Inclui a embalagem e o transporte. Sempre com um inventário online para o ajudar a solicitar os artigos de que necessita, onde e quando quiser. <br><br> Estamos comprometidos com o ambiente, por isso plantamos 1 árvore para cada 6 clientes, reduzindo assim a pegada de carbono que geramos."
</i18n>
<i18n lang="yaml" locale="mx">
who_title_suffix: "La solución a tus problemas de espacio"
who_subtitle: "Somos la solución completa de transporte y almacenaje puerta a puerta. ¡Ahorra tiempo y dinero con nosotros!"
who_body: "Nuestro concepto de almacenaje es funcional, completo, flexible y sostenible. Incluye embalaje y transporte. Siempre con un inventario online que te ayudará a pedir los objetos que necesitas dónde y cuándo quieras. <br><br> Estamos comprometidos con el medioambiente, por eso, plantamos 1 árbol por cada 6 clientes, y así, reducimos la huella de carbono que generamos."
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/sections/businessGeneralDescription.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/sections/businessGeneralDescription.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/sections/businessGeneralDescription.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/sections/businessGeneralDescription.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/sections/businessGeneralDescription.yaml"
></i18n>

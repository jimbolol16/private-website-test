<template>
  <ui-legal :sectionName="sectionName">
    <ui-legal-item
      class="mt-6 break-words"
      v-for="(item, index) in content"
      :key="index"
      :title="item.title"
      :body="item.body"
    >
    </ui-legal-item>
  </ui-legal>
</template>
<script>
export default {
  name: "privacyView",
  layout: "legalLayout",
  scrollToTop: true,
  components: {
    "ui-legal": async () => await import("@/components/legal/uiLegal.vue"),
    "ui-legal-item": async () =>
      await import("@/components/legal/uiLegalItem.vue"),
  },
  head() {
    return {
      title: this.$t("title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("meta_description"),
        },
      ],
    };
  },
  meta: {
    pageName: "privacyPolicy",
  },
  data() {
    return {
      sectionName: this.$t("sectionName"),
      content: [
        {
          title: this.$t("1.title"),
          body: this.$t("1.body"),
        },
        {
          title: this.$t("2.title"),
          body: this.$t("2.body"),
        },
        {
          title: this.$t("3.title"),
          body: this.$t("3.body"),
        },
        {
          title: this.$t("4.title"),
          body: this.$t("4.body"),
        },
        {
          title: this.$t("5.title"),
          body: this.$t("5.body"),
        },
        {
          title: this.$t("6.title"),
          body: this.$t("6.body"),
        },
        {
          title: this.$t("7.title"),
          body: this.$t("7.body"),
        },
        {
          title: this.$t("8.title"),
          body: this.$t("8.body", {
            url_path: this.localePath("/"),
            url: this.$config.siteURL,
          }),
        },
        {
          title: this.$t("9.title"),
          body: this.$t("9.body"),
        },
        {
          title: this.$t("10.title"),
          body: this.$t("10.body"),
        },
        {
          title: this.$t("11.title"),
          body: this.$t("11.body"),
        },
        {
          title: this.$t("12.title"),
          body: this.$t("12.body", {
            cookies: this.localePath("/legal/cookies"),
          }),
        },
        {
          title: this.$t("13.title"),
          body: this.$t("13.body"),
        },
        {
          title: this.$t("14.title"),
          body: this.$t("14.body"),
        },
      ],
    };
  },
};
</script>
<i18n lang="yaml" locale="es">
title: "Política de privacidad | Box2box"
meta_description: "box2box SL, dispone el Reglamento (UE) 2016/679 de 27 de abril de 2016 (RGPD), Ley Orgánica 3/2018 de 5 de diciembre (LOPDGDD)"
sectionName: "Política de privacidad"
1:
  title: "Identificación del responsable del tratamiento y datos de contacto"
  body: |
    La presente Política de Privacidad se ha elaborado de conformidad con el Reglamento
    General de Protección de Datos de la UE 2016/679 del Parlamento Europeo y del
    Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo
    que respecta al tratamiento de datos personales y a la libre circulación de estos datos
    y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de
    datos), y la Ley Orgánica 3/2018 del 5 de diciembre, de Protección de Datos de
    Carácter Personal y Garantía de los Derechos Digitales.<br><br>

    Le informamos de que el responsable del tratamiento de sus datos personales es
    BOX2BOX, S.L., (en adelante, <b>"Box2Box"</b>), con N.I.F.: B87985115 y domicilio en CALLE
    RIOS ROSAS 36 – 6IZQ – 28003 Madrid.<br><br>

    El acceso y/o uso del Sitio Web le atribuye la condición de usuario (en adelante, el
    <b>"Usuario"</b> o los <b>"Usuarios"</b>) del mismo e implica la aceptación, desde dicho acceso y/o
    uso, de la presente Política de Privacidad.<br><br>

    Si tiene alguna duda, el Usuario podrá contactar con Box2Box en la siguiente dirección
    de correo electrónico: <a class="text-electric underline" href="mailto:hola@box2boxstorage.com">hola@box2boxstorage.com</a><br>
2:
  title: "Categorías de datos"
  body: |
    Los datos recabados a través del Sitio Web corresponden a la categoría de datos
    identificativos de contacto: Nombre y Apellidos, Teléfono y Correo electrónico, así
    como la dirección IP desde donde accede al formulario de recogida de datos.<br>
3:
  title: "Legitimación para el tratamiento"
  body: |
    Box2Box está legitimada para tratar sus datos de contacto:
    <ul class='list-disc pl-8'>
        <li> En base al interés legítimo de Box2Box para atender a los requerimientos de
        información por parte de los Usuarios a través del Sitio Web, así como para
        poder prestarles sus servicios.</li>
        <li> En base al consentimiento explícito prestado por el Usuario en el caso de envío
        de comunicaciones comerciales.</li>
    </ul>
4:
  title: "Finalidades del tratamiento"
  body: |
    Sus datos de carácter personal recabados por Box2Box podrán ser utilizados para las
    siguientes finalidades:
    <ul class='list-disc pl-8'>
        <li> Gestionar las consultas planteadas a través del correo electrónico o Sitio Web.</li>
        <li> Prestar los servicios solicitados en base a una relación contractual. </li>
        <li> El envío de comunicaciones comerciales sobre sus servicios mediante correo
        electrónico u otros medios de comunicación electrónica equivalentes.</li>
    </ul>

    Le recordamos que el Usuario puede oponerse al envío de comunicaciones
    comerciales por cualquier vía y en cualquier momento, remitiendo un correo
    electrónico a la dirección indicada anteriormente.<br>
5:
  title: "Conservación de los datos"
  body: |
    Los datos personales proporcionados se conservarán mientras el Usuario no manifieste
    su voluntad de darse de baja de los servicios y durante el plazo por el cuál pudieran
    derivarse responsabilidades legales por los servicios prestados.<br>
6:
  title: "Destinatarios"
  body: |
    Sus datos solo serán tratados por Box2Box para la adecuada prestación de los servicios
    ofrecidos en el Sitio Web.<br><br>

    No se prevén cesiones de datos ni transferencias internacionales de datos, a excepción
    de las autorizadas por la legislación fiscal, mercantil y de telecomunicaciones, así como
    en aquellos casos en los que una autoridad judicial lo requiera.<br>
7:
  title: "Veracidad de los datos facilitados por el Usuario"
  body: |
    El Usuario garantiza que los datos personales facilitados son veraces y se hace
    responsable de comunicar a Box2Box cualquier modificación de estos. El Usuario
    responderá, en cualquier caso, de la veracidad de los datos facilitados, reservándose
    Box2Box el derecho a excluir de los servicios registrados a todo Usuario que haya
    facilitado datos falsos, sin perjuicio de las demás acciones que procedan en Derecho.<br>
8:
  title: "Derechos en relación con sus datos"
  body: |
    El Usuario tiene derecho a:
    <ul class='list-disc pl-8'>
        <li> Acceder a sus datos personales.</li>
        <li> Solicitar la rectificación de los datos inexactos. </li>
        <li> Solicitar su supresión.</li>
        <li> Solicitar la limitación del tratamiento de sus datos.</li>
        <li> Oponerse al tratamiento de sus datos.</li>
        <li> Solicitar su portabilidad.</li>
        <li> No ser objeto de decisiones individuales automatizadas.</li>
    </ul><br>
    El Usuario puede ejercer todos estos derechos en la siguiente dirección de email
    <a class="text-electric underline" href="mailto:hola@box2boxstorage.com">hola@box2boxstorage.com</a> indicando el motivo de su petición y aportando una copia de su
    D.N.I.<br><br>

    El Usuario puede también enviar su petición por correo ordinario a la siguiente
    dirección, aportando una copia de su D.N.I.:<br><br>
    <span class="text-center uppercase flex flex-col justify-center">
      <span>BOX2BOX SL</span>
      <span>CALLE RIOS ROSAS 36 – 6IZQ</span>
      <span>28003 Madrid</span>
    </span><br><br>

    Asimismo, le informamos de que tiene derecho a presentar una reclamación ante la
    Agencia Española de Protección de Datos si considera que se ha cometido una
    infracción de la legislación en materia de protección de datos respecto al tratamiento
    de sus datos personales.<br>
9:
  title: "Seguridad de los datos"
  body: |
    Box2Box ha adoptado los niveles de seguridad requeridos por la normativa aplicable
    adecuados a la naturaleza de los datos que son objeto de tratamiento en cada
    momento y ha establecido todos los medios técnicos a su alcance para evitar la
    pérdida, mal uso, alteración, acceso no autorizado y robo de los datos que el Usuario
    facilite a través del Sitio Web, sin perjuicio de informarle de que las medidas de
    seguridad en Internet no son inexpugnables.<br><br>

    Box2Box se compromete a cumplir con el deber de secreto y confidencialidad respecto
    de los datos personales de acuerdo con la legislación aplicable.<br>
10:
  title: "Revisión de la Política de Privacidad"
  body: |
    Box2Box se reserva el derecho de revisar su Política de Privacidad en el momento que
    considere oportuno. Por esta razón, le rogamos que compruebe de forma regular esta
    Política de Privacidad para leer la versión más reciente de la misma.<br><br>

    No obstante, cualquier cambio que se produzca en la presente Política de Privacidad se
    comunicará al Usuario.<br>
11:
  title: "Links a páginas web"
  body: |
    El Sitio Web podría contener links a páginas web de compañías y entidades de
    terceros. Box2Box no puede hacerse responsable de la forma en la que estas
    compañías tratan la protección de la privacidad y de los datos personales, por lo que le
    aconsejamos que lea detenidamente las Políticas de Privacidad de estas páginas web
    que no son propiedad de Box2Box con relación al uso, procesamiento y protección de
    datos personales.<br>
12:
  title: "Cookies"
  body: |
    Box2box utiliza cookies propias y de terceros en el Sitio Web.
    Puedes encontrar toda la información sobre nuestras cookies y las cookies de terceros utilizadas en el Sitio Web <a class="text-electric underline" href="{cookies}">aquí</a>.
    Puedes cambiar la configuración de las cookies <a class="text-electric underline" href="{cookies}">aquí</a>.<br>
13:
  title: "Productos de Google"
  body: |
    <b>Google Analytics</b><br><br>
    Este sitio web utiliza Google Analytics, un servicio de analítica web de Google Inc. («Google»).
    Google Analytics utiliza cookies. La información generada por la cookie sobre el uso que el usuario hace de este Sitio Web se transmite habitualmente a un servidor de Google en Estados Unidos, donde se almacena.
    No obstante, mediante la anonimización de la dirección IP en este Sitio Web, Google acorta su dirección IP dentro de los Estado miembros de la Unión Europea o en otros Estados signatarios del Acuerdo sobre el Espacio Económico Europeo.
    Solo en casos excepcionales se transmitirá la dirección IP completa a un servidor de Google en Estados Unidos, donde será acortada.<br><br>

    Google utiliza esta información por encargo de Box2box para analizar el uso que el usuario hace de este Sitio Web,
    para generar informes sobre las actividades en el Sitio Web y para prestar a Box2box del Sitio Web otros servicios relacionados con la utilización del sitio web y de Internet.
    Las direcciones IP transmitidas por su navegador en el marco de Google Analytics no se combinarán con otros datos de Google. <br><br>

    El usuario puede evitar la instalación de cookies mediante la configuración de las opciones correspondientes de su navegador.
    Sin embargo, el usuario debe tener en cuenta que, en ese caso, es posible que no pueda utilizar todas las funciones de este sitio web.
    También puede impedir que Google procese los datos generados por la utilización de este sitio web (incluida su dirección IP) y recopilados por las cookies, descargando e instalando el complemento del navegador disponible en el siguiente enlace:
    <a class="text-electric underline" href="https://tools.google.com/dlpage/gaoptout?hl=es" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=es</a>. <br><br>

    En particular, cabe señalar que Google Analytics ha ampliado el código «gat._anonymizeIp();» para posibilitar el registro anonimizado de direcciones IP o un denominado «enmascaramiento de IP».
    Utilizamos este código para llevar a cabo la pertinente anonimización. <br><br>

    Puede evitar la recogida de datos por parte de Google Analytics haciendo clic en el enlace mostrado a continuación.
    Al hacerlo, se instalará una cookie de inhabilitación que bloqueará en el futuro la recogida de sus datos durante su visita a este sitio web.
    <a class="text-electric underline" href="javascript:gaOptOut()">Desactivar Google Analytics.</a><br><br>

    Además, Google Analytics se utiliza en este sitio web para analizar con fines estadísticos datos procedentes de AdWords y de la cookie de doble clic.
    Si desea impedirlo, puede desactivarlo en el administrador de preferencias de anuncios Google Analytics y AdWords. <br><br>

    <b>Conversiones de Google Ads</b><br><br>
    Mediante el uso de Conversiones de Google Ads podemos incluir anuncios de nuestros servicios en sitios web externos.
    Los datos de campaña nos permiten determinar la eficacia de cada una de las medidas publicitarias.
    La mencionada medida de publicidad personalizada se adopta sobre la base del art. 6, apartado 1, letra f) del RGPD sujeto a la declaración de un interés legítimo.
    Nuestro interés legítimo reside en la visualización de publicidad específica para el grupo destinatario.
    De ese modo queremos garantizar que mostraremos a los usuarios anuncios publicitarios que sean de su interés. <br><br>

    La reproducción de los medios publicitarios por parte de Google tiene lugar mediante los denominados «servidores de anuncios».
    A tal fin utilizamos cookies de servidores de anuncios que permiten medir determinados parámetros para la medición del éxito, tales como la visualización de anuncios o los clics de usuarios.
    Cuando el usuario accede a nuestro sitio web a través de un anuncio de Google, Google Adwords guarda una cookie en su dispositivo.
    Estas cookies no están concebidas para identificarle personalmente, y por regla general se borran al cabo de 30 días.
    Para estas cookies, por regla general se guardan como valores de análisis la ID unívoca de la cookie, el número de anuncios publicitarios por emplazamiento (frecuencia), el último clic (relevante para la medición de conversiones) e información sobre inhabilitación (que indica que el usuario ya no desea que se le muestren anuncios).
    Para esta cookie, el ID de cookie único, el número de anuncios publicitarios por emplazamiento (frecuencia), el último clic (relevante para la medición de conversaciones) e información sobre inhabilitación (que indica que el usuario ya no desea que se le muestren anuncios), se almacenan normalmente como valores de análisis. <br><br>

    Dado que no podemos ejercer ninguna influencia sobre el alcance y la utilización de los datos que se recaban mediante esta herramienta de Google,
    encontrará más información en <a class="text-electric underline" href="https://policies.google.com/privacy?hl=es" target="_blank">https://policies.google.com/privacy?hl=es</a>. <br><br>

    Puede desactivar la utilización de cookies por parte de Google accediendo a la página <a class="text-electric underline" href="https://policies.google.com/technologies/ads?hl=es" target="_blank"> https://policies.google.com/technologies/ads?hl=es</a>.
    También puede desactivar las cookies de seguimiento de conversiones, configurando su navegador de forma que bloquee las cookies procedentes del dominio «googleadservices.com».
    Sin embargo, tenga en cuenta que, en ese caso, es posible que no pueda utilizar todas las funciones de este sitio web. <br><br>

    <b>Google Ads Sense y Google DoubleClick </b><br><br>
    Utilizamos los servicios de publicidad, concretamente, Google DoubleClick for Publishers y Google AdSense.
    Google utiliza estas cookies para hacer que la publicidad sea más atractiva para los usuarios y más valiosa para los editores y anunciantes.
    Las cookies suelen utilizarse para seleccionar anuncios basados en contenido que es relevante para un usuario, mejorar los informes de rendimiento de la campaña y evitar mostrar anuncios que el usuario ya haya visto.
    Google DoubleClick for Publisher y Google AdSense, es un servicio de publicidad web prestado por Google, Inc.
    El usuario puede consultar aquí: <a class="text-electric underline" href="https://policies.google.com/technologies/cookies?hl=es#types-of-cookies" target="_blank">https://policies.google.com/technologies/cookies?hl=es#types-of-cookies</a>
    el tipo de cookies utilizadas por Google y su política de privacidad <a class="text-electric underline" href="https://policies.google.com/privacy?hl=es" target="_blank">https://policies.google.com/privacy?hl=es</a>.
    Google DoubleClick for Publisher y Google AdSense trabajan con proveedores de tecnología publicitaria que han acordado cumplir con su política de uso de datos,
    puede encontrar la lista de proveedores de Google DoubleClick for Publisher aquí: <a class="text-electric underline" href="https://support.google.com/admanager/answer/9012903?hl=es&ref_topic=9007190" target="_blank">https://support.google.com/admanager/answer/9012903?hl=es&ref_topic=9007190</a>
    para Google AdSense aquí: <a class="text-electric underline" href="https://support.google.com/adsense/answer/9012903?hl=es&ref_topic=7670012 " target="_blank">https://support.google.com/adsense/answer/9012903?hl=es&ref_topic=7670012</a>
    <br>
14:
  title: "Aceptación y Consentimiento"
  body: |
    El Usuario declara haber sido informado de las condiciones sobre protección de datos
    personales, aceptando y consintiendo el tratamiento de estos por parte de Box2Box,
    en la forma y para las finalidades indicadas en la presente Política de Privacidad.<br>
</i18n>
<i18n lang="yaml" locale="fr">
title: "Politique de confidentialité | Box2box"
meta_description: "box2box SL, en tant que responsable du site Web, conformément aux dispositions du règlement (UE) 2016/679 du 27 avril 2016 (RGPD), de la loi organique 3/2018 du 5 décembre (LOPDGDD) et des autres réglementations légales en vigueur en matière de protection des données personnelles."
sectionName: "Politique de confidentialité"
1:
  title: "Identification du responsable du traitement et coordonnées"
  body: |
    La présente politique de confidentialité a été élaborée conformément au Règlement général sur la
    protection des données 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la
    protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la
    libre circulation de ces données, et abrogeant la directive 95/46/CE (Règlement général sur la
    protection des données), et à la loi organique 3/2018 du 5 décembre, relative à la protection des
    données personnelles et à la garantie des droits numériques.<br><br>

    Veuillez noter que le contrôleur de vos données personnelles est de BOX2BOX, SARL, (ci-après, <b>"Box2Box"</b>),
    avec N.I.F. : 879 693 943 et adresse à 128 rue de la Boétiet.<br><br>

    L'accès et / ou l'utilisation du site Web, vous donne le statut d'utilisateur (ci-après, l'
    <b>"Utilisateur"</b> ou <b>"Utilisateurs"</b>) de la même et implique l'acceptation, de cet accès et / ou l'utilisation, cette
    politique de confidentialité.<br><br>

    Pour toute question, l'Utilisateur peut contacter Box2Box à l'adresse électronique suivante : <a class="text-electric underline" href="mailto:contact@box2boxstorage.com">contact@box2boxstorage.com</a><br>
2:
  title: "Catégories de données"
  body: |
    Les données collectées par le biais du site Web correspondent à la catégorie des données
    d'identification des contacts : nom et prénom, téléphone et courriel, ainsi que l'adresse IP à partir de
    laquelle vous accédez au formulaire de collecte de données.<br>
3:
  title: "Légitimation du traitement"
  body: |
    Box2Box a le droit de traiter vos données de contact :
    <ul class='list-disc pl-8'>
        <li> Sur la base de l'intérêt légitime de Box2Box à répondre aux demandes d'information des
        utilisateurs à travers le Site, ainsi qu'à leur fournir ses services.</li>
        <li> Sur la base du consentement explicite donné par l'utilisateur en cas d'envoi de communications
        commerciales.</li>
    </ul>
4:
  title: "Finalités du traitement"
  body: |
    Vos données personnelles collectées par Box2Box peuvent être utilisées aux fins suivantes :
    <ul class='list-disc pl-8'>
        <li> Gérer les questions posées par courrier électronique ou par le site Web.</li>
        <li> Fournir les services demandés sur la base d'une relation contractuelle. </li>
        <li> L'envoi de communications commerciales sur ses services par courrier électronique ou tout autre
        moyen de communication électronique équivalent.</li>
    </ul>

    Nous vous rappelons que l'Utilisateur peut s'opposer à l'envoi de communications commerciales par
    tout moyen et à tout moment en envoyant un e-mail à l'adresse indiquée ci-dessus.<br>
5:
  title: "Rétention des données"
  body: |
    Les données personnelles fournies seront conservées tant que l'utilisateur n'exprimera pas sa volonté
    de se désinscrire des services et pendant la période pendant laquelle des responsabilités légales
    peuvent découler des services fournis.<br>
6:
  title: "Les destinataires"
  body: |
    Vos données ne seront traitées par Box2Box que pour la bonne prestation des services offerts sur le
    Site.<br><br>

    Aucun transfert de données ou transfert international de données, sauf ceux autorisés par la
    législation fiscale, commerciale et des télécommunications, ainsi que dans les cas où une autorité
    judiciaire l'exige.<br>
7:
  title: "L'exactitude des données fournies par l'utilisateur"
  body: |
    L'iutilisateur garantit que les données personnelles fournies sont véridiques et est responsable de
    communiquer à Box2Box tout changement de celles-ci. L'utilisateur répondra, dans tous les cas, de
    la véracité des données fournies, Box2Box se réserve le droit d'exclure des services enregistrés à
    tout Utilisateur qui a fourni de fausses données, sans préjudice d'autres actions qui peuvent être
    appropriées en droit.<br>
8:
  title: "Droits relatifs à vos données"
  body: |
    L'utilisateur a le droit de :
    <ul class='list-disc pl-8'>
        <li> Accéder à leurs données personnelles.</li>
        <li> Demander la rectification de données inexactes.</li>
        <li> Demander sa suppression.</li>
        <li> Demander la limitation du traitement de ses données.</li>
        <li> S'opposer au traitement de leurs données.</li>
        <li> Demandez leur portabilité.</li>
        <li> Ne pas faire l'objet de décisions individuelles automatisées.</li>
    </ul><br>
    L'utilisateur peut exercer tous ces droits à l'adresse électronique suivante :
    <a class="text-electric underline" href="mailto:contact@box2boxstorage.com">contact@box2boxstorage.com</a> en
    indiquant le motif de sa demande et en fournissant une copie de sa carte d'identité nationale.<br><br>

    L'utilisateur peut également envoyer sa demande par courrier ordinaire à l'adresse suivante, en
    fournissant une copie de sa carte d'identité:<br><br>
    <span class="text-center uppercase flex flex-col justify-center">
      <span>BOX2BOX SARL</span>
      <span>128 RUE DE LA BOÉTIET</span>
      <span>78008 Paris 8</span>
    </span><br><br>

    Nous vous informons également que vous avez le droit de déposer une plainte auprès de l'Agence
    française de protection des données si vous considérez qu'une violation de la législation sur la
    protection des données a été commise en ce qui concerne le traitement de vos données personnelles.<br>
9:
  title: "Sécurité des données"
  body: |
    Box2Box a adopté les niveaux de sécurité requis par la loi applicable appropriés à la nature des
    données traitées à tout moment et a établi tous les moyens techniques à sa disposition pour éviter la
    perte, l'abus, l'altération, l'accès non autorisé et le vol des données fournies par l'Utilisateur à travers
    le Site Web, sans préjudice de vous informer que les mesures de sécurité sur Internet ne sont pas
    inexpugnables.<br><br>

    Box2Box s'engage à respecter le devoir de secret et de confidentialité des données personnelles
    conformément à la loi applicable.<br>
10:
  title: "Révision de la politique de confidentialité"
  body: |
    Box2Box se réserve le droit de réviser sa politique de confidentialité à tout moment qu'elle juge
    approprié. C'est pourquoi nous vous invitons à consulter régulièrement cette politique de
    confidentialité pour en lire la version la plus récente.<br><br>

    Toutefois, toute modification de la présente politique de confidentialité sera communiquée à
    l'utilisateur.<br>
11:
  title: "Liens vers des sites web"
  body: |
    Le site web peut contenir des liens vers des sites web de sociétés et d'entités tierces. Box2Box ne
    peut pas être responsable de la manière dont ces sociétés traitent la protection de la vie privée et des
    données personnelles, nous vous conseillons donc de lire attentivement les politiques de
    confidentialité de ces sites web qui ne sont pas détenus par Box2Box concernant l'utilisation, le
    traitement et la protection des données personnelles.<br>
12:
  title: "Cookies"
  body: |
    Box2box utilise ses propres cookies et ceux de tiers sur le site web.
    Vous pouvez trouver toutes les informations sur nos cookies et les cookies tiers utilisés sur le site Web <a class="text-electric underline" href="{cookies}">ici</a>.
    Vous pouvez modifier vos paramètres de cookies <a class="text-electric underline" href="{cookies}">ici</a>.<br>
13:
  title: "Produits Google"
  body: |
    <b>Google Analytics</b><br><br>
    Ce site Web utilise Google Analytics, un service d'analyse du Web fourni par Google Inc
    ("Google"). Google Analytics utilise des cookies. Les informations générées par les cookies
    concernant votre utilisation de ce site Web sont généralement transmises à un serveur de Google
    aux États-Unis et y sont stockées. Toutefois, en anonymisant votre adresse IP sur ce site Web,
    Google raccourcit votre adresse IP dans les États membres de l'Union européenne ou dans d'autres
    États signataires de l'accord sur l'Espace économique européen. Ce n'est que dans des cas
    exceptionnels que l'adresse IP complète sera transmise à un serveur de Google aux États-Unis et y
    sera raccourcie.<br><br>

    Google utilise ces informations pour le compte de Box2box afin d'analyser votre utilisation du site,
    de compiler des rapports sur les activités du site et de fournir à Box2box d'autres services liés à
    l'utilisation du site et d'Internet. Les adresses IP transmises par votre navigateur dans le cadre de
    Google Analytics ne seront pas combinées avec d'autres données de Google. <br><br>

    L'utilisateur peut empêcher l'installation de cookies en paramétrant les options correspondantes dans
    son navigateur. Toutefois, les utilisateurs doivent noter que, dans ce cas, ils ne pourront peut-être
    pas utiliser toutes les fonctions de ce site web. Vous pouvez également empêcher Google de traiter
    les données générées par l'utilisation de ce site (y compris votre adresse IP) et collectées par les
    cookies en téléchargeant et en installant le plug-in de navigateur disponible au lien suivant :
    <a class="text-electric underline" href="https://tools.google.com/dlpage/gaoptout?hl=fr" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=fr</a>. <br><br>

    Il convient notamment de noter que Google Analytics a étendu le code "gat._anonymizeIp();" pour permettre l'enregistrement anonymisé des adresses IP ou ce que l'on appelle le "masquage IP".
    Nous utilisons ce code pour effectuer l'anonymisation correspondante. <br><br>

    Vous pouvez empêcher la collecte de données par Google Analytics en cliquant sur le lien ci-dessous.
    Ce faisant, un cookie de désactivation sera créé et bloquera la collecte future de vos
    données lors de votre visite sur ce site web. Désactiver Google Analytics.
    <a class="text-electric underline" href="javascript:gaOptOut()">Désactiver Google Analytics.</a><br><br>

    En outre, Google Analytics est utilisé sur ce site web pour analyser les données provenant
    d'AdWords et du cookie double-clic à des fins statistiques. Si vous souhaitez empêcher cela, vous
    pouvez le désactiver dans le gestionnaire des préférences de Google Analytics et AdWords Ads. <br><br>

    <b>Conversions Google Ads</b><br><br>
    En utilisant Google Ads Conversions, nous sommes en mesure de placer des annonces pour nos
    services sur des sites web externes. Les données relatives aux campagnes nous permettent de
    déterminer l'efficacité des mesures publicitaires individuelles. La mesure de publicité personnalisée
    susmentionnée est prise sur la base de l'article 6, paragraphe 1, point f), du GDPR, sous réserve de
    la déclaration d'un intérêt légitime. Notre intérêt légitime réside dans l'affichage de publicités
    ciblées. De cette façon, nous voulons nous assurer que nous montrons aux utilisateurs des publicités
    qui les intéressent. <br><br>

    La reproduction des supports publicitaires par Google s'effectue par le biais de ce que l'on appelle
    des "serveurs d'annonces". Nous utilisons à cette fin des cookies de serveur publicitaire, qui nous
    permettent de mesurer certains paramètres de mesure du succès, tels que les vues de la publicité ou
    les clics des utilisateurs. Lorsque l'utilisateur accède à notre site web via une annonce Google,
    Google Adwords enregistre un cookie sur l'appareil de l'utilisateur. Ces cookies ne sont pas conçus
    pour vous identifier personnellement et sont généralement supprimés après 30 jours. Pour ces
    cookies, l'ID unique du cookie, le nombre d'annonces par placement (fréquence), le dernier clic
    (pertinent pour la mesure de la conversion) et les informations d'opt-out (indiquant que l'utilisateur
    ne souhaite plus recevoir d'annonces) sont généralement enregistrés comme valeurs d'analyse. Pour
    ce cookie, l'ID unique du cookie, le nombre d'annonces par placement (fréquence), le dernier clic
    (pertinent pour la mesure de la conversation) et les informations d'exclusion (indiquant que
    l'utilisateur ne souhaite plus recevoir d'annonces) sont normalement stockés comme valeurs
    analytiques.<br><br>

    Comme nous n'avons aucune influence sur la portée et l'utilisation des données collectées par cet
    outil Google, vous trouverez de plus amples informations à l'adresse <a class="text-electric underline" href="https://policies.google.com/privacy?hl=fr" target="_blank">https://policies.google.com/privacy?hl=fr</a>. <br><br>

    Vous pouvez désactiver l'utilisation des cookies par Google en allant sur <a class="text-electric underline" href="https://policies.google.com/technologies/ads?hl=fr" target="_blank"> https://policies.google.com/technologies/ads?hl=fr</a>.
    Vous pouvez également désactiver les cookies
    de suivi des conversions en paramétrant votre navigateur de manière à bloquer les cookies du
    domaine "googleadservices.com". Toutefois, veuillez noter que, dans ce cas, il se peut que vous
    ne puissiez pas utiliser toutes les fonctions de ce site web. <br><br>

    <b>Google Ads Sense et Google DoubleClick </b><br><br>
    Nous utilisons des services publicitaires, à savoir Google DoubleClick for Publishers et Google
    AdSense. Google utilise ces cookies pour rendre la publicité plus attrayante pour les utilisateurs et
    plus intéressante pour les éditeurs et les annonceurs. Les cookies sont généralement utilisés pour
    sélectionner des annonces basées sur un contenu pertinent pour un utilisateur, améliorer les rapports
    sur les performances des campagnes et éviter de montrer des annonces que l'utilisateur a déjà vues.
    Google DoubleClick for Publisher et Google AdSense, sont des services de publicité sur Internet
    fournis par Google, Inc.,L'utilisateur peut consulter ici : <a class="text-electric underline" href="https://policies.google.com/technologies/cookies?hl=fr#types-of-cookies" target="_blank">https://policies.google.com/technologies/cookies?hl=fr#types-of-cookies</a>
    le type de cookies utilisés par Google et sa politique de confidentialité <a class="text-electric underline" href="https://policies.google.com/privacy?hl=fr" target="_blank">https://policies.google.com/privacy?hl=fr</a>.
    Google DoubleClick for Publisher et Google AdSense travaillent avec des fournisseurs de technologies
    publicitaires qui ont accepté de se conformer à leur politique d'utilisation des données. Vous
    trouverez la liste des fournisseurs de Google DoubleClick for Publisher ici : <a class="text-electric underline" href="https://support.google.com/admanager/answer/9012903?hl=fr&ref_topic=9007190" target="_blank">https://support.google.com/admanager/answer/9012903?hl=fr&ref_topic=9007190</a>
    et pour Google AdSense ici: <a class="text-electric underline" href="https://support.google.com/adsense/answer/9012903?hl=fr&ref_topic=7670012 " target="_blank">https://support.google.com/adsense/answer/9012903?hl=fr&ref_topic=7670012</a>
    <br>
14:
  title: "Acceptation et consentement"
  body: |
    L'utilisateur déclare avoir été informé des conditions de protection des données personnelles,
    accepter et consentir au traitement de celles-ci par Box2Box, de la manière et aux fins énoncées
    dans la présente Politique de confidentialité.<br>
</i18n>
<i18n lang="yaml" locale="it">
title: "Informativa sulla privacy | Box2box"
meta_description: "box2box SL, in qualità di responsabile del Sito web, in conformità con le disposizioni del Regolamento (UE) 2016/679 del 27 aprile 2016 (RGPD), della Legge Organica 3/2018 del 5 dicembre (LOPDGDD) e delle altre norme giuridiche vigenti in materia di protezione dei dati personali."
sectionName: "Politica sulla Privacitá"
1:
  title: "Identificazione del responsabile del trattamento e dati di contatto"
  body: |
    La presente Informativa sulla privacy è stata redatta in conformità al Regolamento generale sulla protezione
    dei dati UE 2016/679 del Parlamento europeo e del Consiglio, del 27 aprile 2016, relativo alla protezione delle
    persone fisiche con riguardo al trattamento dei dati personali, nonché alla libera circolazione di tali dati e
    che abroga la direttiva 95/46/CE (regolamento generale sulla protezione dei dati), e alla Legge organica 3/2018,
    del 5 dicembre, sulla protezione dei dati personali e la garanzia dei diritti digitali.<br><br>

    Si ricorda che il titolare del trattamento dei dati personali è BOX2BOX, S.L., (di seguito "Box2Box"),
    con N.I.F.: B87985115 e indirizzo in CALLE RIOS ROSAS 36 - 6IZQ - 28003 Madrid.<br><br>

    L'accesso e/o l'utilizzo del Sito web, conferisce all'utente lo status di utente (di seguito "Utente" o "Utenti")
    dello stesso e implica l'accettazione, da parte di tale accesso e/o utilizzo, della presente Informativa sulla privacy<br><br>

    In caso di domande, è possibile contattare box2box al seguente indirizzo
    e-mail:  <a class="text-electric underline" href="mailto:info@box2boxstorage.com">info@box2boxstorage.com</a><br>
2:
  title: "Categorie di dati"
  body: |
    I dati raccolti attraverso il Sito corrispondono alla categoria dei dati identificativi del contatto:
    Nome e Cognome, Telefono ed Email, oltre all'indirizzo IP da cui si accede al modulo di raccolta dati.<br>
3:
  title: "Legittimazione del trattamento"
  body: |
    Box2Box è autorizzata a trattare i dati di contatto:
    <ul class='list-disc pl-8'>
        <li> Sulla base del legittimo interesse di box2box a soddisfare le richieste di informazioni da parte degli Utenti attraverso il Sito, nonché a fornire loro i propri servizi.</li>
        <li> Sulla base del consenso esplicito fornito dall'utente nel caso di invio di comunicazioni commerciali..</li>
    </ul>
4:
  title: "Finalità del trattamento"
  body: |
    I dati personali raccolti da box2box possono essere utilizzati per le seguenti finalità:
    <ul class='list-disc pl-8'>
        <li> Gestire le richieste di informazioni sollevate tramite e-mail o sito web.</li>
        <li> Fornire i servizi richiesti sulla base di un rapporto contrattuale. </li>
        <li> Invio di comunicazioni commerciali sui propri servizi tramite e-mail o altri mezzi di comunicazione
        elettronica equivalenti.</li>
    </ul>

    Ricordiamo che l'Utente può opporsi all'invio di comunicazioni commerciali con qualsiasi mezzo e in qualsiasi
    momento inviando una e-mail all'indirizzo sopra indicato.<br>
5:
  title: "Conservazione dei dati"
  body: |
    I dati personali forniti saranno conservati per tutto il tempo in cui l'Utente non esprimerà la volontà
    di cancellarsi dai servizi e per il periodo di tempo in cui possono sorgere responsabilità legali dai servizi forniti.<br>
6:
  title: "Destinatari"
  body: |
    I Suoi dati saranno trattati da box2box esclusivamente per la corretta erogazione dei servizi offerti sul Sito. <br><br>

    Nessun trasferimento di dati o trasferimenti internazionali di dati, ad eccezione di quelli autorizzati dalla legislazione fiscale,
    commerciale e delle telecomunicazioni, nonché nei casi in cui l'autorità giudiziaria lo richieda.  <br>
7:
  title: "Accuratezza dei dati forniti dall'Utente"
  body: |
    L'Utente garantisce che i dati personali forniti sono veritieri ed è responsabile di comunicare a Box2Box qualsiasi variazione degli stessi.
    L'Utente risponderà, in ogni caso, della veridicità dei dati forniti; Box2Box si riserva il diritto di escludere dai servizi registrati l'Utente
    che abbia fornito dati falsi, fatte salve le altre azioni che potranno essere opportune in sede legale.<br>
8:
  title: "Diritti in relazione ai vostri dati"
  body: |
    L'Utente ha il diritto di:
    <ul class='list-disc pl-8'>
        <li> Accedere ai loro dati personali.</li>
        <li> Richiedere la rettifica di dati inesatti..</li>
        <li> Chiedere la sua cancellazione.</li>
        <li> Chiedere la limitazione del trattamento dei propri dati.</li>
        <li> Opporsi al trattamento dei propri dati.</li>
        <li> Richiedete la loro portabilità.</li>
        <li> Non essere soggetti a decisioni individuali automatizzate.</li>
    </ul><br>
    L'Utente può esercitare tutti questi diritti al seguente indirizzo e-mail
    <a class="text-electric underline" href="mailto:info@box2boxstorage.com">info@box2boxstorage.com</a> indicando il motivo della sua richiesta e fornendo una copia
    della sua carta d'identità nazionale.<br><br>

    Gli utenti possono anche inviare la loro richiesta per posta ordinaria al seguente indirizzo,
    fornendo una copia della carta d'identità:<br><br>
    <span class="text-center uppercase flex flex-col justify-center">
      <span>BOX2BOX SL</span>
      <span>CALLE RIOS ROSAS 36 – 6IZQ</span>
      <span>28003 Madrid</span>
    </span><br><br>

    Vi informiamo inoltre che avete il diritto di presentare un reclamo all'Agenzia spagnola per la protezione dei
    dati se ritenete che sia stata commessa una violazione della legislazione sulla protezione dei dati in
    relazione al trattamento dei vostri dati personali.<br>
9:
  title: "Sicurezza dei dati"
  body: |
    Box2Box ha adottato i livelli di sicurezza richiesti dalla normativa applicabile adeguati alla natura dei dati
    trattati in ogni momento e ha predisposto tutti i mezzi tecnici a sua disposizione per prevenire la perdita,
    l'uso improprio, l'alterazione, l'accesso non autorizzato e il furto dei dati forniti dall'utente attraverso il Sito,
    fermo restando di informare l'utente che le misure di sicurezza di Internet non sono inespugnabili.<br><br>

    Box2Box si impegna a rispettare il dovere di segretezza e riservatezza dei dati personali in conformità alla legge applicabile.<br>
10:
  title: "Revisione dell'Informativa sulla privacitá"
  body: |
    Box2Box si riserva il diritto di rivedere la propria Informativa sulla privacy in qualsiasi momento lo ritenga opportuno.
    Per questo motivo, si prega di controllare regolarmente la presente Informativa sulla privacy per leggerne la versione più recente.  <br><br>

    Tuttavia, eventuali modifiche alla presente Informativa sulla privacy saranno comunicate all'Utente.<br>
11:
  title: "Collegamenti a siti web"
  body: |
    Il Sito può contenere link a siti web di società ed enti terzi. Box2Box non può essere responsabile del modo in
    cui queste società trattano la protezione della privacy e dei dati personali, pertanto si consiglia di leggere
    attentamente le politiche sulla privacy di questi siti web che non sono di proprietà di Box2Box in relazione all'uso,
    al trattamento e alla protezione dei dati personali.<br>

12:
  title: "Cookies"
  body: |
    Box2box utilizza sul sito web cookie propri e di terze parti.
    Tutte le informazioni sui nostri cookie e sui cookie di terze parti utilizzati sul sito web sono disponibili qui.
    È possibile modificare le impostazioni dei cookie <a class="text-electric underline" href="{cookies}">qui</a>.<br>
13:
  title: "Prodotti Google"
  body: |
    <b>Google Analytics</b><br><br>
    Questo sito web utilizza Google Analytics, un servizio di analisi web fornito da Google Inc. («Google»).
    Google Analytics utilizza i cookie. Le informazioni generate dal cookie sull'utilizzo di questo sito web
    da parte dell'utente vengono solitamente trasmesse a un server di Google negli Stati Uniti e lì memorizzate.
    Tuttavia, anonimizzando il vostro indirizzo IP su questo sito web, Google accorcia il vostro indirizzo IP all'interno
    degli Stati membri dell'Unione Europea o in altri Stati firmatari dell'Accordo sullo Spazio Economico Europeo.
    Solo in casi eccezionali l'indirizzo IP completo viene trasmesso a un server di Google negli Stati Uniti e lì abbreviato.<br><br>

    Google utilizza queste informazioni per conto di Box2box allo scopo di analizzare l'utilizzo del sito web da parte degli utenti,
    compilare report sulle attività del sito web e fornire a Box2box ulteriori servizi relativi all'utilizzo del sito web e di Internet.
    Gli indirizzi IP trasmessi dal vostro browser nell'ambito di Google Analytics non vengono combinati con altri dati di Google. <br><br>

    L'utente può impedire l'installazione dei cookie impostando le opzioni corrispondenti nel proprio browser.
    Tuttavia, gli utenti devono tenere presente che in questo caso potrebbero non essere in grado di utilizzare tutte le funzioni di questo sito web.
    Potete anche impedire a Google di elaborare i dati generati dall'utilizzo di questo sito web (compreso il vostro indirizzo IP) e
    raccolti dai cookie scaricando e installando il plug-in del browser disponibile al seguente link:
    <a class="text-electric underline" href="https://tools.google.com/dlpage/gaoptout?hl=it" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=it</a>. <br><br>

    In particolare, va notato che Google Analytics ha esteso il codice «gat._anonymizeIp();» per consentire la registrazione anonima degli indirizzi IP o
    il cosiddetto "mascheramento IP". Utilizziamo questo codice per eseguire la relativa anonimizzazione. <br><br>

    È possibile impedire la raccolta dei dati da parte di Google Analytics cliccando sul link sottostante.
    In questo modo, verrà impostato un cookie di opt-out che bloccherà la futura raccolta dei vostri dati durante la vostra visita a questo sito web.
    <a class="text-electric underline" href="javascript:gaOptOut()">Disattivare Google Analytics.</a><br><br>

    Inoltre, su questo sito web viene utilizzato Google Analytics per analizzare i dati di AdWords e il cookie del doppio clic a fini statistici.
    Se si desidera impedirlo, è possibile disattivarlo nella gestione delle preferenze degli annunci di Google Analytics e AdWords. <br><br>

    <b>Conversioni di Google Ads</b><br><br>
    Utilizzando Google Ads Conversions, possiamo inserire annunci pubblicitari per i nostri servizi su siti web esterni.
    I dati della campagna ci consentono di determinare l'efficacia delle singole misure pubblicitarie.
    La suddetta misura pubblicitaria personalizzata viene adottata sulla base dell'articolo 6, paragrafo 1, lettera f), del GDPR,
    previa dichiarazione di un interesse legittimo. Il nostro legittimo interesse consiste nella visualizzazione di pubblicità mirata.
    In questo modo, vogliamo assicurarci di mostrare agli utenti annunci pubblicitari che siano di loro interesse. <br><br>

    La riproduzione dei mezzi pubblicitari da parte di Google avviene tramite i cosiddetti "server pubblicitari".
    A tal fine utilizziamo i cookie degli ad server, che ci consentono di misurare determinati parametri per misurare il successo,
    come le visualizzazioni degli annunci o i clic degli utenti. Quando l'utente accede al nostro sito web tramite un annuncio di Google,
    Google Adwords salva un cookie sul dispositivo dell'utente. Questi cookie non sono progettati per identificare l'utente e vengono generalmente eliminati
    dopo 30 giorni. Per questi cookie, l'ID univoco del cookie, il numero di annunci per posizionamento (frequenza),
    l'ultimo clic (rilevante per la misurazione delle conversioni) e le informazioni di opt-out (che indicano che l'utente non desidera più che gli vengano mostrati annunci)
    sono generalmente salvati come valori di analisi. Per questo cookie, l'ID univoco del cookie, il numero di annunci per posizionamento (frequenza), l'ultimo clic
    (rilevante per la misurazione della conversazione) e le informazioni di opt-out (che indicano che l'utente non desidera più che gli vengano mostrati annunci)
    sono normalmente memorizzati come valori di analisi. <br><br>

    Poiché non abbiamo alcuna influenza sulla portata e sull'utilizzo dei dati raccolti da questo strumento di Google,
    è possibile trovare ulteriori informazioni su <a class="text-electric underline" href="https://policies.google.com/privacy?hl=it" target="_blank">https://policies.google.com/privacy?hl=it </a>. <br><br>

    È possibile disattivare l'utilizzo dei cookie da parte di Google accedendo a <a class="text-electric underline" href="https://policies.google.com/technologies/ads?hl=it" target="_blank"> https://policies.google.com/technologies/ads?hl=it</a>.
    È inoltre possibile disabilitare i cookie di monitoraggio delle conversioni impostando il browser in modo da bloccare i cookie provenienti dal dominio "googleadservices.com".
    Tuttavia, si prega di notare che in questo caso potreste non essere in grado di utilizzare tutte le funzioni di questo sito web. <br><br>

    <b>Google Ads Sense e Google DoubleClick</b><br><br>
    Utilizziamo servizi pubblicitari, in particolare Google DoubleClick for Publishers e Google AdSense. Google utilizza questi cookie per rendere la pubblicità più
    interessante per gli utenti e più preziosa per gli editori e gli inserzionisti. I cookie vengono solitamente utilizzati per selezionare gli annunci
    in base ai contenuti rilevanti per l'utente, per migliorare la reportistica sulle prestazioni delle campagne e per evitare di mostrare annunci già visti dall'utente.
    Google DoubleClick for Publisher e Google AdSense, è un servizio di pubblicità sul web fornito da Google, Inc.,
    L'utente può consultare qui: <a class="text-electric underline" href="https://policies.google.com/technologies/cookies?hl=it#types-of-cookies" target="_blank">https://policies.google.com/technologies/cookies?hl=it#types-of-cookies</a>
    il tipo di cookie utilizzati da Google e la sua politica sulla privacy href="https://policies.google.com/privacy?hl=it" target="_blank">https://policies.google.com/privacy?hl=it</a>.
    Google DoubleClick for Publisher e Google AdSense collaborano con fornitori di tecnologie pubblicitarie che hanno accettato di rispettare la loro politica di utilizzo dei dati;
    l'elenco dei fornitori di Google DoubleClick for Publisher è disponibile qui: <a class="text-electric underline" href="https://support.google.com/admanager/answer/9012903?hl=it&ref_topic=9007190" target="_blank">https://support.google.com/admanager/answer/9012903?hl=it&ref_topic=9007190</a>
    e per Google AdSense qui: <a class="text-electric underline" href="https://support.google.com/adsense/answer/9012903?hl=it&ref_topic=7670012 " target="_blank">https://support.google.com/adsense/answer/9012903?hl=it&ref_topic=7670012</a>
    <br>
14:
  title: "Accettazione e consenso"
  body: |
    L'Utente dichiara di essere stato informato delle condizioni di protezione dei dati personali, accettando e acconsentendo al trattamento degli stessi da parte di Box2Box, con le modalità e per le finalità indicate nella presente Politica sulla Privacitá.<br>
</i18n>
<i18n lang="yaml" locale="pt">
title: "Política de Privacidade | Box2box"
meta_description: "box2box SL, como responsável pelo Website, em conformidade com as disposições do Regulamento (UE) 2016/679 de 27 de Abril de 2016 (RGPD), Lei Orgânica 3/2018 de 5 de Dezembro (LOPDGDD) e outra legislação em vigor sobre a protecção de dados pessoais."
sectionName: "Política de privacidade"
1:
  title: "Identificação do controlador e dados de contacto"
  body: |
    Esta Política de Privacidade foi preparada em conformidade com o Regulamento Geral de Protecção de
    Dados 2016/679 do Parlamento Europeu e do Conselho de 27 de Abril de 2016 relativo à protecção das
    pessoas singulares no que diz respeito ao tratamento de dados pessoais e à livre circulação desses dados e
    que revoga a Directiva 95/46/CE (Regulamento Geral de Protecção de Dados), e a Lei Orgânica 3/2018 de
    5 de Dezembro, relativa à Protecção de Dados Pessoais e Garantia dos Direitos Digitais.<br><br>

    Note que o controlador dos seus dados pessoais é STUFF2BOX UNIP LDA, (en adelante, <b>"Box2Box"</b>), com Tax Number: 515873500 e
    endereço em Av. Fontes Pereira Melo - Palácio Sotto Mayor Galería A 16, C.P. 1050-121, LISBOA.<br><br>

    O acesso e/ou utilização do Website, dá-lhe o estatuto de utilizador (doravante, el
    <b>"Utilizador"</b> ou <b>"Utilizadores"</b>) do mesmo e implica a aceitação, a partir desse acesso e/ou utilização,
    da presente Política de Privacidade.<br><br>

    Se tiver alguma questão, o Utilizador pode contactar a Box2Box através do seguinte endereço de correio
    electrónico:<a class="text-electric underline" href="mailto:contacto@box2boxstorage.com">contacto@box2boxstorage.com</a><br>
2:
  title: "Categorías de dados"
  body: |
    Os dados recolhidos através do Website correspondem à categoria de dados de identificação de contacto:
    Nome e Apelido, Telefone e Email, assim como o endereço IP a partir do qual se acede ao formulário de
    recolha de dados.<br>
3:
  title: "Legitimação para o tratamento"
  body: |
    A Box2Box tem o direito de processar os seus dados de contacto:
    <ul class='list-disc pl-8'>
        <li> Com base no interesse legítimo da Box2Box em satisfazer os pedidos de informação dos Utilizadores
        através do Website, bem como em fornecer-lhes os seus serviços.</li>
        <li> Com base no consentimento explícito dado pelo utilizador no caso do envio de comunicações comerciais.</li>
    </ul>
4:
  title: "Finalidades de processamento"
  body: |
    Os seus dados pessoais recolhidos pela Box2Box podem ser utilizados para os seguintes fins:
    <ul class='list-disc pl-8'>
        <li> Gerir as questões levantadas através de e-mail ou Website.</li>
        <li> Prestar os serviços solicitados com base numa relação contratual.</li>
        <li> Envio de comunicações comerciais sobre os seus serviços por correio electrónico ou outros meios
        equivalentes de comunicação electrónica.</li>
    </ul>

    Recordamos que o Utilizador pode opor-se ao envio de comunicações comerciais por qualquer meio e em
    qualquer altura, enviando um e-mail para o endereço indicado acima.<br>
5:
  title: "Retenção de dados"
  body: |
    Os dados pessoais fornecidos serão mantidos enquanto o Utilizador não expressar o seu desejo de
    cancelar a sua inscrição nos serviços e pelo período de tempo durante o qual possam surgir
    responsabilidades legais decorrentes dos serviços prestados.<br>
6:
  title: "Destinatários"
  body: |
    Os seus dados só serão processados pela Box2Box para a correcta prestação dos serviços oferecidos no
    Website.<br><br>

    Nenhuma transferência de dados ou transferências internacionais de dados, excepto as autorizadas pela
    legislação fiscal, comercial e de telecomunicações, bem como nos casos em que uma autoridade judicial o
    exija.<br>
7:
  title: "Precisão dos dados fornecidos pelo Utilizador"
  body: |
    O Utilizador garante que os dados pessoais fornecidos são verdadeiros e é responsável por comunicar à
    Box2Box qualquer alteração dos mesmos. O Utilizador responderá, em qualquer caso, à veracidade dos
    dados fornecidos, a Box2Box reserva-se o direito de excluir dos serviços registados qualquer Utilizador que
    tenha fornecido dados falsos, sem prejuízo de outras acções que possam ser apropriadas por lei.<br>
8:
  title: "Direitos em relação aos seus dados"
  body: |
    O Utilizador tem o direito de o fazer:
    <ul class='list-disc pl-8'>
        <li> Acesso aos seus dados pessoais.</li>
        <li> Requerir a rectificação de dados incorrectos.</li>
        <li> Pedir a sua eliminação.</li>
        <li> Pedir a limitação do tratamento dos seus dados.</li>
        <li> Oppose o tratamento dos seus dados.</li>
        <li> Pedir a sua portabilidade.</li>
        <li> Não estar sujeito a decisões individuais automatizadas.</li>
    </ul><br>
    O Utilizador pode exercer todos estes direitos no seguinte endereço electrónico
    <a class="text-electric underline" href="mailto:contacto@box2boxstorage.com">contacto@box2boxstorage.com</a> indicando o motivo do seu pedido e
    fornecendo uma cópia do seu Cartão de Cidadão.<br><br>

    Os utilizadores podem também enviar o seu pedido por correio normal para o seguinte endereço,
    fornecendo uma cópia do seu cartão de cidadão:<br><br>
    <span class="text-center uppercase flex flex-col justify-center">
      <span>STUFF2BOX UNIP LDA</span>
      <span>Av. Fontes Pereira Melo - Palácio Sotto Mayor Galería A 16</span>
      <span>1050-121, LISBOA</span>
    </span><br><br>

    Informamos também que tem o direito de apresentar uma queixa à Agência Portuguesa de Protecção de
    Dados se considerar que foi cometida uma violação da legislação de protecção de dados no que diz
    respeito ao tratamento dos seus dados pessoais.<br>
9:
  title: "Segurança de dados"
  body: |
    A Box2Box adoptou os níveis de segurança exigidos pela lei aplicável, adequados à natureza dos dados
    que estão a ser tratados a todo o momento, e estabeleceu todos os meios técnicos à sua disposição para
    evitar a perda, má utilização, alteração, acesso não autorizado e roubo dos dados fornecidos pelo Utilizador
    através do Website, sem prejuízo de informar que as medidas de segurança na Internet não são
    inexpugnáveis.<br><br>

    A Box2Box compromete-se a cumprir o dever de sigilo e confidencialidade dos dados pessoais, de acordo
    com a legislação aplicável.<br>
10:
  title: "Revisão da Política de Privacidade"
  body: |
    A Box2Box reserva-se o direito de rever a sua Política de Privacidade em qualquer altura que considere
    apropriado. Por esta razão, consulte regularmente esta Política de Privacidade para ler a versão mais
    recente da mesma.<br><br>

    No entanto, quaisquer alterações a esta Política de Privacidade serão comunicadas ao Utilizador.<br>
11:
  title: "Links para sitios web"
  body: |
    O Website pode conter links para websites de empresas e entidades terceiras. A Box2Box não pode ser
    responsável pela forma como estas empresas tratam a protecção da privacidade e dos dados pessoais,
    pelo que aconselhamos a ler atentamente as políticas de privacidade destes websites que não são
    propriedade da Box2Box relativamente à utilização, processamento e protecção de dados pessoais.<br>
12:
  title: "Cookies"
  body: |
    A Box2box utiliza os seus próprios cookies e cookies de terceiros no Website.
    Pode encontrar todas as informações sobre as nossas cookies e as de terceiros utilizados no Website <a class="text-electric underline" href="{cookies}">aqui</a>.
    Pode alterar as suas definições de cookies <a class="text-electric underline" href="{cookies}">aqui</a>.<br>
13:
  title: "Productos de Google"
  body: |
    <b>Google Analytics</b><br><br>
    Este website utiliza Google Analytics, um serviço de análise da web fornecido pela Google Inc ("Google"). O
    Google Analytics utiliza cookies. A informação gerada pelo cookie sobre a sua utilização deste website é
    geralmente transmitida para um servidor Google nos EUA e aí armazenada. Contudo, ao tornar o seu
    endereço IP anónimo neste website, o Google reduz o seu endereço IP nos Estados Membros da União
    Europeia ou noutros Estados signatários do Acordo sobre o Espaço Económico Europeu. Apenas em casos
    excepcionais, o endereço IP completo será transmitido para um servidor Google nos EUA e abreviado.<br><br>

    O Google utiliza esta informação em nome da Box2box para analisar a sua utilização deste website, para
    gerar relatórios sobre as actividades do website e para fornecer à Box2box outros serviços relacionados
    com a utilização do website e da Internet. Os endereços IP transmitidos pelo seu navegador no âmbito do
    Google Analytics não serão combinados com outros dados do Google. <br><br>

    O utilizador pode impedir a instalação de cookies, configurando as opções correspondentes no seu
    navegador. No entanto, deve ter em conta que, neste caso, poderá não ser possível utilizar todas as
    funções deste sítio web. Pode também impedir a Google de processar os dados gerados pela utilização
    deste website (incluindo o seu endereço IP) e recolhidos pelos cookies, descarregando e instalando o plug-
    in do navegador disponível no seguinte link:
    <a class="text-electric underline" href="https://tools.google.com/dlpage/gaoptout?hl=pt" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=pt</a>. <br><br>

    Em particular, é de notar que o Google Analytics alargou o código "gat._anonymizeIp();" para permitir a
    gravação anónima de endereços IP ou o chamado "masking IP". Utilizamos este código para efectuar a
    anonimização relevante.<br><br>

    Pode impedir a recolha de dados pelo Google Analytics, clicando no link abaixo. Ao fazê-lo, será criado um
    cookie de auto-exclusão que bloqueará a futura recolha dos seus dados durante a sua visita a este website.
    <a class="text-electric underline" href="javascript:gaOptOut()">Desactivar o Google Analytics.</a><br><br>

    Além disso, o Google Analytics é utilizado neste website para analisar os dados do AdWords e o cookie de
    duplo clique para fins estatísticos. Se desejar evitar isto, pode desactivá-lo no Google Analytics e no
    AdWords Ads Preferences Manager. <br><br>

    <b>Conversões de Google Ads</b><br><br>
    Ao utilizar o Google Ads Conversions, somos capazes de colocar anúncios para os nossos serviços em
    websites externos. Os dados da campanha permitem-nos determinar a eficácia das medidas publicitárias
    individuais. A referida medida de publicidade personalizada é tomada com base no art. 6, apartado (1), letra
    (f) do GDPR, sujeita à declaração de um interesse legítimo. O nosso interesse legítimo reside na exibição
    de publicidade direccionada. Desta forma, queremos garantir que mostramos aos utilizadores anúncios que
    sejam do seu interesse. <br><br>

    A reprodução dos meios de publicidade pelo Google é feita através dos chamados "servidores de
    publicidade". Utilizamos cookies de servidor de anúncios para este fim, que nos permitem medir certos
    parâmetros para medir o sucesso, tais como vistas de anúncios ou cliques do utilizador. Quando o utilizador
    acede ao nosso website através de um anúncio do Google, o Google Adwords guarda um cookie no
    dispositivo do utilizador. Estas cookies não são concebidas para o identificar pessoalmente e são
    geralmente apagados após 30 dias. Para estas cookies, o ID único da cookie, o número de anúncios por
    colocação (frequência), o último clique (relevante para medição de conversão) e informação de opt-out
    (indicando que o utilizador já não deseja ser mostrado anúncios) são geralmente guardados como valores
    de análise. <br><br>

    Como não temos qualquer influência no âmbito e utilização dos dados recolhidos por esta ferramenta do Google,
    mais informação pode ser encontrada em <a class="text-electric underline" href="https://policies.google.com/privacy?hl=pt" target="_blank">https://policies.google.com/privacy?hl=pt</a>. <br><br>

    Pode desactivar a utilização de cookies pelo Google, indo a <a class="text-electric underline" href="https://policies.google.com/technologies/ads?hl=pt" target="_blank"> https://policies.google.com/technologies/ads?hl=pt</a>.
    Também pode desactivar os cookies de seguimento de conversões definindo o seu navegador para
    bloquear cookies do domínio "googleadservices.com". No entanto, note que, neste caso, poderá não ser
    possível utilizar todas as funções deste website. <br><br>

    <b>Google Ads Sense e Google DoubleClick </b><br><br>
    Google utiliza estes cookies para tornar a publicidade mais apelativa para os utilizadores e mais valiosa
    para as editoras e anunciantes. Os cookies são tipicamente utilizados para seleccionar anúncios com base
    em conteúdos relevantes para um utilizador, melhorar os relatórios de desempenho da campanha e evitar
    mostrar anúncios que o utilizador já tenha visto. Google DoubleClick for Publisher e Google AdSense, é um
    serviço de publicidade na web fornecido pela Google, Inc. O utilizador pode consultar aqui: <a class="text-electric underline" href="https://policies.google.com/technologies/cookies?hl=pt#types-of-cookies" target="_blank">https://policies.google.com/technologies/cookies?hl=pt#types-of-cookies</a>
    o tipo de cookies utilizados pela Google e a sua política de privacidade <a class="text-electric underline" href="https://policies.google.com/privacy?hl=pt" target="_blank">https://policies.google.com/privacy?hl=pt</a>.
    Google DoubleClick for Publisher e Google AdSense trabalham com fornecedores de tecnologia de publicidade que concordaram
    em cumprir a sua política de utilização de dados, pode encontrar a lista de fornecedores de Google
    DoubleClick for Publisher aqui: <a class="text-electric underline" href="https://support.google.com/admanager/answer/9012903?hl=pt&ref_topic=9007190" target="_blank">https://support.google.com/admanager/answer/9012903?hl=pt&ref_topic=9007190</a>
    e para o Google AdSense aqui: <a class="text-electric underline" href="https://support.google.com/adsense/answer/9012903?hl=pt&ref_topic=7670012 " target="_blank">https://support.google.com/adsense/answer/9012903?hl=pt&ref_topic=7670012</a>
    <br>
14:
  title: "Aceitação e Consentimento"
  body: |
    O Utilizador declara ter sido informado das condições de protecção de dados pessoais, aceitando e
    consentindo o seu tratamento pela Box2Box, na forma e para os fins indicados na presente Política de
    Privacidade.<br>
</i18n>
<i18n lang="yaml" locale="mx">
title: "Política de privacidad | Box2box"
meta_description: "Política de privacidad de GRUPO BOX2BOX MESTORAGE SAPI DE CV"
sectionName: "Política de privacidad"
1:
  title: "Identificación del responsable del tratamiento y datos de contacto"
  body: |
    De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares,
    GRUPO BOX2BOX MESTORAGE SAPI DE CV  (en adelante “<b>BOX2BOX</b>”)
    pone a su disposición el siguiente aviso de privacidad.<br><br>

    <b>BOX2BOX</b>, es responsable del uso y protección de sus datos personales,
    en este sentido y atendiendo las obligaciones legales establecidas en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares,
    a través de este instrumento se informa a los titulares de los datos, la información que de ellos se recaba y los fines que se le darán a dicha información.<br><br>

    Además de lo anterior, informamos a usted que BOX2BOX, tiene su domicilio ubicado en:<br><br>
    <span class="text-center uppercase flex flex-col justify-center">
      <span>Carretera Estatal 200 km 16070-70, interior 81</span>
      <span>San Isidro, El Marqués, Querétaro, CP. 76246</span>
    </span><br>

    El acceso y/o uso del Sitio Web le atribuye la condición de usuario (en adelante, el
    <b>"Usuario"</b> o los <b>"Usuarios"</b>) del mismo e implica la aceptación, desde dicho acceso y/o
    uso, de la presente Política de Privacidad.<br><br>

    Si tiene alguna duda, el Usuario podrá contactar con Box2Box en la siguiente dirección
    de correo electrónico: <a class="text-electric underline" href="mailto:atencion@box2boxstorage.com">atencion@box2boxstorage.com</a><br>
2:
  title: "Categorías de datos"
  body: |
    Los datos recabados a través del Sitio Web corresponden a la categoría de datos
    identificativos de contacto: Nombre y Apellidos, Teléfono y Correo electrónico, así
    como la dirección IP desde donde accede al formulario de recogida de datos.<br>
3:
  title: "Legitimación para el tratamiento"
  body: |
    Box2Box está legitimada para tratar sus datos de contacto:
    <ul class='list-disc pl-8'>
        <li> En base al interés legítimo de Box2Box para atender a los requerimientos de
        información por parte de los Usuarios a través del Sitio Web, así como para
        poder prestarles sus servicios.</li>
        <li> En base al consentimiento explícito prestado por el Usuario en el caso de envío
        de comunicaciones comerciales.</li>
    </ul>
4:
  title: "Finalidades del tratamiento"
  body: |
    Sus datos de carácter personal recabados por Box2Box podrán ser utilizados para las
    siguientes finalidades:
    <ul class='list-disc pl-8'>
        <li> Gestionar las consultas planteadas a través del correo electrónico o Sitio Web.</li>
        <li> Prestar los servicios solicitados en base a una relación contractual. </li>
        <li> El envío de comunicaciones comerciales sobre sus servicios mediante correo
        electrónico u otros medios de comunicación electrónica equivalentes.</li>
    </ul>

    Le recordamos que el Usuario puede oponerse al envío de comunicaciones
    comerciales por cualquier vía y en cualquier momento, remitiendo un correo
    electrónico a la dirección indicada anteriormente.<br>
5:
  title: "Conservación de los datos"
  body: |
    Los datos personales proporcionados se conservarán mientras el Usuario no manifieste
    su voluntad de darse de baja de los servicios y durante el plazo por el cuál pudieran
    derivarse responsabilidades legales por los servicios prestados.<br>
6:
  title: "Destinatarios"
  body: |
    Sus datos solo serán tratados por Box2Box para la adecuada prestación de los servicios
    ofrecidos en el Sitio Web.<br><br>

    Por otra parte, informamos a usted, que sus datos personales no serán compartidos con ninguna autoridad,
    empresa, organización o persona distintas a nosotros y
    serán utilizados exclusivamente para los fines señalados.<br>
7:
  title: "Veracidad de los datos facilitados por el Usuario"
  body: |
    El Usuario garantiza que los datos personales facilitados son veraces y se hace
    responsable de comunicar a Box2Box cualquier modificación de estos. El Usuario
    responderá, en cualquier caso, de la veracidad de los datos facilitados, reservándose
    Box2Box el derecho a excluir de los servicios registrados a todo Usuario que haya
    facilitado datos falsos, sin perjuicio de las demás acciones que procedan en Derecho.<br>
8:
  title: "Derechos en relación con sus datos"
  body: |
    El Usuario tiene derecho a:
    <ul class='list-disc pl-8'>
        <li> Conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso).</li>
        <li> Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación).</li>
        <li> De igual manera, tiene derecho a que su información se elimine de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación).</li>
        <li> Así como también a oponerse al uso de sus datos personales para fines específicos (Oposición).</li>
    </ul><br>
    Estos derechos se conocen como derechos ARCO.<br><br>

    Para el ejercicio de cualquiera de los derechos ARCO, se deberá presentar la solicitud respectiva por escrito, mediante el envío de una carta o solicitud en formato libre a la siguiente dirección:<br><br>
    <span class="text-center uppercase flex flex-col justify-center">
      <span>Carretera Estatal 200 km 16070-70, interior 81</span>
      <span>San Isidro, El Marqués, Querétaro, CP. 76246</span>
    </span><br>

    Lo anterior también servirá para conocer el procedimiento y requisitos para el ejercicio de los derechos ARCO, no obstante, la solicitud de ejercicio de estos derechos debe contener la siguiente información:
    <ul class='list-disc pl-8'>
        <li> Nombre completo</li>
        <li> Copia de identificación oficial vigente</li>
        <li> Domicilio</li>
        <li> RFC o CURP</li>
        <li> Correo electrónico</li>
        <li> Teléfono</li>
    </ul><br>

    La respuesta a la solicitud se dará en el siguiente plazo: 20 días hábiles, y se comunicará
    a elección del requerido por correo electrónico o mediante correspondencia enviada al domicilio señalado.
    <br><br>

    Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar trámite a las solicitudes de derechos ARCO, son los siguientes:<br>
    <ul class='list-disc pl-8'>
        <li> Nombre del responsable: GRUPO BOX2BOX MEXSTORAGE SAPI DE CV</li>
        <li> Domicilio: Carretera Estatal 200 km 16070-70, interior 81, San Isidro, El Marqués, Querétaro, CP. 76246</li>
        <li> Teléfono:  <a class="font-medium" href="tel:+525580374700">+52 55 8037 4700</a></li>
        <li> Correo electrónico: <a class="text-electric underline" href="mailto:atencion@box2boxstorage.com">atencion@box2boxstorage.com</a></li>
        <li> Otro medio de contacto: <a class="text-electric underline" href="{url_path}">{url}</a></li>
    </ul><br>

    Cabe mencionar, que en cualquier momento usted puede revocar su consentimiento para el uso de sus datos personales.
    Del mismo modo, usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales.
    Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata,
    ya que es posible que por alguna obligación legal se requiera seguir tratando sus datos personales.
    Asimismo, usted deberá considerar que para ciertos fines la revocación de su consentimiento implicará que no podamos seguir prestando el servicio que nos solicitó,
    o la conclusión de su relación con nosotros. <br><br>

    Para revocar el consentimiento que usted otorga en este acto o para limitar su divulgación, se deberá presentar la solicitud respectiva por escrito, mediante el envío de una carta o solicitud en formato libre a la siguiente dirección:<br><br>
    <span class="text-center uppercase flex flex-col justify-center">
      <span>Carretera Estatal 200 km 16070-70, interior 81</span>
      <span>San Isidro, El Marqués, Querétaro, CP. 76246</span>
    </span><br>

    Del mismo modo, podrá solicitar la información para conocer el procedimiento y requisitos para la revocación del consentimiento, así como limitar el uso y divulgación de su información personal,
    sin embargo, estas solicitudes deberán contener la siguiente información:<br>
    <ul class='list-disc pl-8'>
        <li> Nombre completo</li>
        <li> RFC o CURP</li>
        <li> Información cuya divulgación se desea desautorizar</li>
        <li> Correo electrónico</li>
        <li> Teléfono</li>
        <li> Dirección</li>
    </ul><br>

    La respuesta a la solicitud de revocación o limitación de divulgación de sus datos se dará a más tardar en el siguiente plazo: 20 días hábiles,
    y se comunicará a elección del requerido, correo electrónico o correspondencia enviada a la dirección señalada.<br>
9:
  title: "Seguridad de los datos"
  body: |
    Box2Box ha adoptado los niveles de seguridad requeridos por la normativa aplicable
    adecuados a la naturaleza de los datos que son objeto de tratamiento en cada
    momento y ha establecido todos los medios técnicos a su alcance para evitar la
    pérdida, mal uso, alteración, acceso no autorizado y robo de los datos que el Usuario
    facilite a través del Sitio Web, sin perjuicio de informarle de que las medidas de
    seguridad en Internet no son inexpugnables.<br><br>

    Box2Box se compromete a cumplir con el deber de secreto y confidencialidad respecto
    de los datos personales de acuerdo con la legislación aplicable.<br>
10:
  title: "Revisión de la Política de Privacidad"
  body: |
    El presente aviso de privacidad puede sufrir modificaciones,
    cambios o actualizaciones derivadas de nuevos requerimientos legales;
    de nuestras propias necesidades por los productos o servicios que ofrecemos;
    de nuestras prácticas de privacidad;
    de cambios en nuestro modelo de negocio, o por otras causas, por lo cual,
    nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad,
    sin embargo, usted puede solicitar información sobre si el mismo ha sufrido algún cambio mediante el envío de una carta o
    solicitud en formato libre a la siguiente dirección:<br><br>
    <span class="text-center uppercase flex flex-col justify-center">
      <span>Carretera Estatal 200 km 16070-70, interior 81</span>
      <span>San Isidro, El Marqués, Querétaro, CP. 76246</span>
    </span><br>
11:
  title: "Links a páginas web"
  body: |
    El Sitio Web podría contener links a páginas web de compañías y entidades de
    terceros. Box2Box no puede hacerse responsable de la forma en la que estas
    compañías tratan la protección de la privacidad y de los datos personales, por lo que le
    aconsejamos que lea detenidamente las Políticas de Privacidad de estas páginas web
    que no son propiedad de Box2Box con relación al uso, procesamiento y protección de
    datos personales.<br>
12:
  title: "Cookies"
  body: |
    Box2box utiliza cookies propias y de terceros en el Sitio Web.
    Puedes encontrar toda la información sobre nuestras cookies y las cookies de terceros utilizadas en el Sitio Web <a class="text-electric underline" href="{cookies}">aquí</a>.
    Puedes cambiar la configuración de las cookies <a class="text-electric underline" href="{cookies}">aquí</a>.<br>
13:
  title: "Productos de Google"
  body: |
    <b>Google Analytics</b><br><br>
    Este sitio web utiliza Google Analytics, un servicio de analítica web de Google Inc. («Google»).
    Google Analytics utiliza cookies. La información generada por la cookie sobre el uso que el usuario hace de este Sitio Web se transmite habitualmente a un servidor de Google en Estados Unidos, donde se almacena.
    No obstante, mediante la anonimización de la dirección IP en este Sitio Web, Google acorta su dirección IP dentro de los Estado miembros de la Unión Europea o en otros Estados signatarios del Acuerdo sobre el Espacio Económico Europeo.
    Solo en casos excepcionales se transmitirá la dirección IP completa a un servidor de Google en Estados Unidos, donde será acortada.<br><br>

    Google utiliza esta información por encargo de Box2box para analizar el uso que el usuario hace de este Sitio Web,
    para generar informes sobre las actividades en el Sitio Web y para prestar a Box2box del Sitio Web otros servicios relacionados con la utilización del sitio web y de Internet.
    Las direcciones IP transmitidas por su navegador en el marco de Google Analytics no se combinarán con otros datos de Google. <br><br>

    El usuario puede evitar la instalación de cookies mediante la configuración de las opciones correspondientes de su navegador.
    Sin embargo, el usuario debe tener en cuenta que, en ese caso, es posible que no pueda utilizar todas las funciones de este sitio web.
    También puede impedir que Google procese los datos generados por la utilización de este sitio web (incluida su dirección IP) y recopilados por las cookies, descargando e instalando el complemento del navegador disponible en el siguiente enlace:
    <a class="text-electric underline" href="https://tools.google.com/dlpage/gaoptout?hl=es" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=es</a>. <br><br>

    En particular, cabe señalar que Google Analytics ha ampliado el código «gat._anonymizeIp();» para posibilitar el registro anonimizado de direcciones IP o un denominado «enmascaramiento de IP».
    Utilizamos este código para llevar a cabo la pertinente anonimización. <br><br>

    Puede evitar la recogida de datos por parte de Google Analytics haciendo clic en el enlace mostrado a continuación.
    Al hacerlo, se instalará una cookie de inhabilitación que bloqueará en el futuro la recogida de sus datos durante su visita a este sitio web.
    <a class="text-electric underline" href="javascript:gaOptOut()">Desactivar Google Analytics.</a><br><br>

    Además, Google Analytics se utiliza en este sitio web para analizar con fines estadísticos datos procedentes de AdWords y de la cookie de doble clic.
    Si desea impedirlo, puede desactivarlo en el administrador de preferencias de anuncios Google Analytics y AdWords. <br><br>

    <b>Conversiones de Google Ads</b><br><br>
    Mediante el uso de Conversiones de Google Ads podemos incluir anuncios de nuestros servicios en sitios web externos.
    Los datos de campaña nos permiten determinar la eficacia de cada una de las medidas publicitarias.
    La mencionada medida de publicidad personalizada se adopta sobre la base del art. 6, apartado 1, letra f) del RGPD sujeto a la declaración de un interés legítimo.
    Nuestro interés legítimo reside en la visualización de publicidad específica para el grupo destinatario.
    De ese modo queremos garantizar que mostraremos a los usuarios anuncios publicitarios que sean de su interés. <br><br>

    La reproducción de los medios publicitarios por parte de Google tiene lugar mediante los denominados «servidores de anuncios».
    A tal fin utilizamos cookies de servidores de anuncios que permiten medir determinados parámetros para la medición del éxito, tales como la visualización de anuncios o los clics de usuarios.
    Cuando el usuario accede a nuestro sitio web a través de un anuncio de Google, Google Adwords guarda una cookie en su dispositivo.
    Estas cookies no están concebidas para identificarle personalmente, y por regla general se borran al cabo de 30 días.
    Para estas cookies, por regla general se guardan como valores de análisis la ID unívoca de la cookie, el número de anuncios publicitarios por emplazamiento (frecuencia), el último clic (relevante para la medición de conversiones) e información sobre inhabilitación (que indica que el usuario ya no desea que se le muestren anuncios).
    Para esta cookie, el ID de cookie único, el número de anuncios publicitarios por emplazamiento (frecuencia), el último clic (relevante para la medición de conversaciones) e información sobre inhabilitación (que indica que el usuario ya no desea que se le muestren anuncios), se almacenan normalmente como valores de análisis. <br><br>

    Dado que no podemos ejercer ninguna influencia sobre el alcance y la utilización de los datos que se recaban mediante esta herramienta de Google,
    encontrará más información en <a class="text-electric underline" href="https://policies.google.com/privacy?hl=es" target="_blank">https://policies.google.com/privacy?hl=es</a>. <br><br>

    Puede desactivar la utilización de cookies por parte de Google accediendo a la página <a class="text-electric underline" href="https://policies.google.com/technologies/ads?hl=es" target="_blank"> https://policies.google.com/technologies/ads?hl=es</a>.
    También puede desactivar las cookies de seguimiento de conversiones, configurando su navegador de forma que bloquee las cookies procedentes del dominio «googleadservices.com».
    Sin embargo, tenga en cuenta que, en ese caso, es posible que no pueda utilizar todas las funciones de este sitio web. <br><br>

    <b>Google Ads Sense y Google DoubleClick </b><br><br>
    Utilizamos los servicios de publicidad, concretamente, Google DoubleClick for Publishers y Google AdSense.
    Google utiliza estas cookies para hacer que la publicidad sea más atractiva para los usuarios y más valiosa para los editores y anunciantes.
    Las cookies suelen utilizarse para seleccionar anuncios basados en contenido que es relevante para un usuario, mejorar los informes de rendimiento de la campaña y evitar mostrar anuncios que el usuario ya haya visto.
    Google DoubleClick for Publisher y Google AdSense, es un servicio de publicidad web prestado por Google, Inc.
    El usuario puede consultar aquí: <a class="text-electric underline" href="https://policies.google.com/technologies/cookies?hl=es#types-of-cookies" target="_blank">https://policies.google.com/technologies/cookies?hl=es#types-of-cookies</a>
    el tipo de cookies utilizadas por Google y su política de privacidad <a class="text-electric underline" href="https://policies.google.com/privacy?hl=es" target="_blank">https://policies.google.com/privacy?hl=es</a>.
    Google DoubleClick for Publisher y Google AdSense trabajan con proveedores de tecnología publicitaria que han acordado cumplir con su política de uso de datos,
    puede encontrar la lista de proveedores de Google DoubleClick for Publisher aquí: <a class="text-electric underline" href="https://support.google.com/admanager/answer/9012903?hl=es&ref_topic=9007190" target="_blank">https://support.google.com/admanager/answer/9012903?hl=es&ref_topic=9007190</a>
    para Google AdSense aquí: <a class="text-electric underline" href="https://support.google.com/adsense/answer/9012903?hl=es&ref_topic=7670012 " target="_blank">https://support.google.com/adsense/answer/9012903?hl=es&ref_topic=7670012</a>
    <br>
14:
  title: "Aceptación y Consentimiento"
  body: |
    El Usuario declara haber sido informado de las condiciones sobre protección de datos
    personales, aceptando y consintiendo el tratamiento de estos por parte de Box2Box,
    en la forma y para las finalidades indicadas en la presente Política de Privacidad.<br>
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/views/legal/privacyPolicy/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/views/legal/privacyPolicy/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/views/legal/privacyPolicy/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/views/legal/privacyPolicy/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/views/legal/privacyPolicy/en_mx.yaml"
></i18n>

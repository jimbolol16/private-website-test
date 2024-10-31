<template>
  <ui-legal :sectionName="$t('sectionName')">
    <p
      class="font-roboto font-normal text-dark/70 text-[18px] leading-[25px] text-justify"
    >
      {{ $t("mainText") }}
    </p>
    <ui-legal-item
      class="mt-6 break-words"
      v-for="(item, index) in content"
      :key="index"
      :title="item.title"
      :body="item.body"
      :script="item.script"
    >
    </ui-legal-item>
  </ui-legal>
</template>
<script>
export default {
  name: "cookiesView",
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
    pageName: "cookies",
  },
  data() {
    return {
      content: [
        {
          title: this.$t("1.title"),
          body: this.$t("1.body"),
          script: null,
        },
        {
          title: this.$t("2.title"),
          body: this.$t("2.body"),
          script: null,
        },
        {
          title: this.$t("3.title"),
          body: this.$t("3.body"),
          script:
            "https://consent.cookiebot.com/3e183548-3e95-46d2-8949-50f911ce37b4/cd.js",
        },
        {
          title: this.$t("4.title"),
          body: this.$t("4.body"),
          script: null,
        },
        {
          title: this.$t("5.title"),
          body: this.$t("5.body"),
          script: null,
        },
        {
          title: this.$t("6.title"),
          body: this.$t("6.body"),
          script: null,
        },
      ],
    };
  },
};
</script>
<i18n lang="yaml" locale="es">
title: "Política de cookies | Box2box"
meta_description: "box2box facilita a los usuarios la información relativa a las cookies que utiliza su web, para prestar un mejor servicio y mejor experiencia de navegación."
sectionName: "Política de cookies"
mainText: |
  De acuerdo con la Ley de Servicios de la Sociedad de la Información y de
  Comercio Electrónico (en adelante, LSSI), el Reglamento General de
  Protección de Datos europeo (RGPD) y la Ley Orgánica 3/2018, de 5
  diciembre, de Protección de Datos Personales y garantía de los derechos
  digitales, BOX2BOX, S.L., (en adelante, el “Sitio Web” o el “Titular”)
  informa, a través de la presente Política de Cookies, acerca de la
  utilización de dispositivos de almacenamiento y recuperación de datos en
  equipos terminales.
1:
  title: "¿Qué son las cookies?"
  body: |
    Una cookie es un archivo que se descarga en su equipo (ordenador o dispositivo móvil)
    con la finalidad de almacenar datos que podrán ser actualizados y recuperados por la
    entidad responsable de su instalación.<br><br>

    La información recabada a través de las cookies puede incluir la dirección IP, fecha y
    hora de visitas al Sitio Web, las páginas visionadas dentro del Sitio Web, el tiempo que
    ha estado el Usuario en el Sitio Web y los sitios visitados justo antes y después del
    mismo y otros datos.<br>
2:
  title: "Tipos de cookies"
  body: |
    Según quien sea la entidad que gestione el dominio desde donde se envían las cookies
    y trate los datos que se obtengan se pueden distinguir dos tipos:
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies propias</span>: aquellas que se envían al equipo terminal del usuario desde un
        equipo o dominio gestionado por el propio Titular y desde el que se presta el
        servicio solicitado por el usuario.
      </li>
      <li>
        <span class="underline">Cookies de terceros</span>: aquellas que se envían al equipo terminal del usuario
        desde un equipo o dominio que no es gestionado por el Titular, sino por otra
        entidad que trata los datos obtenidos través de las cookies.
      </li>
    </ul><br>

    En el caso de que las cookies sean instaladas desde un equipo o dominio gestionado
    por el propio Titular pero la información que se recoja mediante éstas sea gestionada
    por un tercero, no pueden ser consideradas como cookies propias.<br><br>

    Según el plazo de tiempo que permanecen almacenadas en el navegador del usuario,
    las cookies también pueden clasificarse en:
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies de sesión</span>: diseñadas para recabar y almacenar datos mientras el
        usuario accede a una página web. Se suelen emplear para almacenar
        información que solo interesa conservar para la prestación del servicio
        solicitado por el usuario en una sola ocasión.
      </li>
      <li>
        <span class="underline">Cookies persistentes</span>: los datos siguen almacenados en el terminal y pueden ser
        accedidos y tratados durante un periodo definido por el responsable de la
        cookie, y que puede ir de unos minutos a varios años.
      </li>
    </ul><br>

    Según la finalidad para la que se traten los datos obtenidos, es también posible
    clasificar las cookies en:

      <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies técnicas o necesarias</span>: aquellas que permiten al usuario la navegación a
        través del Sitio Web y la utilización de las diferentes opciones o servicios que en
        ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos,
        identificar la sesión, acceder a partes de acceso restringido, recordar los
        elementos que integran un pedido o compartir contenidos a través de redes
        sociales.
      </li>
      <li>
        <span class="underline">Cookies de personalización</span>: permiten al usuario acceder al servicio con algunas
        características de carácter general predefinidas como, por ejemplo, el idioma,
        el tipo de navegador o la configuración regional desde donde el usuario accede
        al servicio.
      </li>
      <li>
        <span class="underline">Cookies de análisis</span>: permiten al responsable de las mismas, el seguimiento y
        análisis del comportamiento de los usuarios de los sitios web a los que están
        vinculadas. La información recogida mediante este tipo de cookies se utiliza en
        la medición de la actividad de los sitios web y para la elaboración de perfiles de
        navegación de los usuarios con el fin de introducir mejoras en función del
        análisis de los datos de uso que hacen los usuarios del servicio.
      </li>
      <li>
        <span class="underline">Cookies publicitarias</span>: permiten la gestión, de la forma más eficaz posible, de los
        espacios publicitarios.
      </li>
      <li>
        <span class="underline">Cookies de publicidad comportamental</span>: almacenan información del
        comportamiento de los usuarios obtenida a través de la observación
        continuada de sus hábitos de navegación, lo que permite desarrollar un perfil
        específico para mostrar publicidad en función del mismo.
      </li>
      <li>
        <span class="underline">Cookies de redes sociales externas</span>: se utilizan para que los visitantes puedan
        interactuar con el contenido de diferentes plataformas sociales (facebook,
        youtube, twitter, linkedIn, etc..) y que se generen únicamente para los usuarios
        de dichas redes sociales. Las condiciones de utilización de estas cookies y la
        información recopilada se regula por la política de privacidad del sitio web.
      </li>
    </ul><br>

    Según el consentimiento necesario para su descarga y utilización, las cookies pueden
    clasificarse en:
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies obligatorias</span>: son aquellas que no requieren el consentimiento previo
        del usuario para poder usarse y que se corresponden con las cookies técnicas y
        las cookies de personalización. Estas cookies se consideran necesarias para el
        correcto funcionamiento de la web y, por tanto, pueden usarse sin el
        consentimiento de los usuarios.
      </li>
      <li>
        <span class="underline">Cookies que requieren consentimiento</span>: son cookies no exceptuadas el resto de
        cookies (las cookies de terceros, las cookies de seguimiento, las cookies
        publicitarias, etc.) y requieren todas el consentimiento expreso y previo de los
        usuarios para poder descargarlas y utilizarlas en el sitio web.
      </li>
    </ul><br>
3:
  title: "Tipos de Cookies utilizadas por el sitio web"
  body: |
    <b>PRODUCTOS DE GOOGLE</b><br><br>

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
    encontrará más información en <a class="text-electric underline" href="https://policies.google.com/privacy?hl=es" target="_blank">https://policies.google.com/privacy?hl=es </a>. <br><br>

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
4:
  title: "¿Cómo deshabilitar las cookies?"
  body: |
    Aquellas cookies que no sean obligatorias para la navegación del presente Sitio Web
    podrán deshabilitarse en la configuración del Sitio Web. Estos ajustes se encuentran en
    el pie de página del Sitio Web. Además, todos los navegadores permiten hacer cambios
    para desactivar la configuración de las cookies.<br><br>

    A continuación, podrá encontrar los links de cada navegador para deshabilitar las
    cookies:
    <ul class='list-disc pl-8'>
        <li> Si el usuario utiliza <a class="text-electric underline" href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop"><b>Google Chrome®</b></a>.</li>
        <li> Si el usuario utiliza <a class="text-electric underline" href="https://support.mozilla.org/es/kb/Borrar%20cookies"><b>Firefox®</b></a>.</li>
        <li> Si el usuario utiliza <a class="text-electric underline" href="https://support.apple.com/es-es/guide/safari/sfri47acf5d6/mac"><b>Safari</b></a> y <a class="text-electric underline" href="https://support.apple.com/en-us/HT201265"><b>Safari</b></a>.</li>
        <li> Si el usuario utiliza <a class="text-electric underline" href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer"><b>Internet Explorer</b></a>.</li>
    </ul><br>

    Si no desea ser rastreado por las cookies, Google ha desarrollado un complemento
    para instalar en su navegador al que puede acceder en el siguiente enlace:
    <a class="text-electric underline" href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.<br>
5:
  title: "Cookies en los dispositivos móviles"
  body: |
    El titular del Sitio Web también usa cookies u otros dispositivos de almacenamiento en
    dispositivos móviles.<br><br>

    Aquellas cookies que no sean obligatorias para la navegación del presente Sitio Web
    podrán deshabilitarse en la configuración del Sitio Web.<br><br>

    Estos ajustes se encuentran en el pie de página del Sitio Web. Además, al igual que
    sucede en los navegadores de ordenadores, lo navegadores de los dispositivos móviles
    permiten realizar cambios en las opciones o ajustes de privacidad para desactivar o
    eliminar las cookies.<br><br>

    Si desea modificar las opciones de privacidad siga las instrucciones especificadas por el
    desarrollador de su navegador para dispositivo móvil.<br><br>

    A continuación, podrá encontrar algunos ejemplos de los links que le guiarán para
    modificar las opciones de privacidad en su dispositivo móvil:
    <ul class='list-disc pl-8'>
        <li><b>iOS:</b> <a class="text-electric underline" href="https://support.apple.com/es-es/HT201265">https://support.apple.com/es-es/HT201265</a></li>
        <li><b>Windows Phone:</b> <a class="text-electric underline" href="https://goo.gl/tKyb0y">https://goo.gl/tKyb0y</a></li>
        <li><b>Chrome Mobile:</b> <a class="text-electric underline" href="https://goo.gl/XJp7N">https://goo.gl/XJp7N</a></li>
        <li><b>Opera Mobile:</b> <a class="text-electric underline" href="https://goo.gl/Nzr8s7">https://goo.gl/Nzr8s7</a></li>
    </ul>

    Le recordamos que el Usuario puede oponerse al envío de comunicaciones
    comerciales por cualquier vía y en cualquier momento, remitiendo un correo
    electrónico a la dirección indicada anteriormente.<br>
6:
  title: "Aceptación de cookies"
  body: |
    El presente Sitio Web no instala cookies en los dispositivos de los usuarios hasta que
    estos hayan aceptado su instalación.<br><br>

    Le informamos que en el caso de no aceptar la instalación de cookies o de deshabilitar
    alguna de estas en la configuración, es posible que ciertos servicios no estén
    disponibles sin la utilización de estas o que no pueda acceder a determinados servicios
    ni tampoco aprovechar por completo todo lo que este Sitio Web le ofrece.<br><br>

    Si tuviera alguna duda, comentario o sugerencia sobre la Política de Cookies, por favor
    escriba a: <a class="text-electric underline" href="mailto:hola@box2boxstorage.com">hola@box2boxstorage.com</a><br>
</i18n>
<i18n lang="yaml" locale="fr">
title: "Politique de cookies | Box2box"
meta_description: "Conformément à la législation en vigueur, box2box.es fournit aux utilisateurs des informations sur les cookies utilisés sur son site web, dans le but de fournir un meilleur service et de donner aux utilisateurs une meilleure expérience de navigation."
sectionName: "Politique en matière de cookies"
mainText: |
  Conformément à la loi sur les services de la société de l'information et le commerce électronique (ci-après,
  LSSI), au règlement général européen sur la protection des données (RGPD) et à la loi organique 3/2018,
  du 5 décembre, sur la protection des données personnelles et la garantie des droits numériques, BOX2BOX
  SL, (ci-après, le " site Web " ou le " Propriétaire ") informe, à travers cette politique de cookies, de
  l'utilisation de dispositifs de stockage et de récupération de données dans les équipements terminaux.
1:
  title: "Que sont les cookies ?"
  body: |
    Un cookie est un fichier qui est téléchargé sur votre équipement (ordinateur ou appareil mobile) afin de
    stocker des données qui peuvent être mises à jour et récupérées par l'entité responsable de son installation.<br><br>

    Ce site web utilise des cookies et/ou des technologies similaires qui stockent et récupèrent des informations
    lorsque vous naviguez. En général, ces technologies peuvent être utilisées à des fins diverses, comme, par
    exemple, vous reconnaître en tant qu'utilisateur, obtenir des informations sur vos habitudes de navigation ou
    personnaliser la manière dont le contenu est affiché. Les utilisations spécifiques que nous faisons de ces
    technologies sont décrites ci-dessous.<br>
2:
  title: "Types de cookies"
  body: |
    Selon l'entité qui gère le domaine à partir duquel les cookies sont envoyés et qui traite les données
    obtenues, on peut distinguer deux types :
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies propres </span>:ceux qui sont envoyés à l'équipement terminal de l'utilisateur depuis un ordinateur ou un
        domaine géré par le Titulaire lui-même et à partir duquel le service demandé par l'utilisateur est fourni.
      </li>
      <li>
        <span class="underline">Cookies tiers </span>: ceux qui sont envoyés à l'équipement terminal de l'utilisateur depuis un ordinateur ou un
        domaine qui n'est pas géré par le Propriétaire, mais par une autre entité qui traite les données obtenues par
        le biais des cookies.
      </li>
    </ul><br>

    Dans le cas où les cookies sont installés à partir d'un ordinateur ou d'un domaine géré par le Titulaire lui-
    même mais que les informations collectées par leur intermédiaire sont gérées par un tiers, ils ne peuvent
    être considérés comme des cookies propres.<br><br>

    En fonction de la durée pendant laquelle ils restent stockés dans le navigateur de l'utilisateur, les cookies
    peuvent également être classés comme suit :
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies de session </span>: conçus pour collecter et stocker des données pendant que l'utilisateur accède à un site
        web. Ils sont généralement utilisés pour stocker des informations qui ne doivent être conservées que pour la
        fourniture du service demandé par l'utilisateur à une seule occasion.
      </li>
      <li>
        <span class="underline">Cookies persistants </span>: les données restent stockées dans le terminal et peuvent être consultées et traitées
        pendant une période définie par la partie responsable du cookie, qui peut aller de quelques minutes à
        plusieurs années.
      </li>
    </ul><br>

    En fonction de la finalité pour laquelle les données obtenues sont traitées, il est également possible de
    classer les cookies comme suit :

      <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies techniques ou nécessaires </span>: ceux qui permettent à l'utilisateur de naviguer sur le site Web et
        d'utiliser les différentes options ou services qui y existent, comme, par exemple, le contrôle du trafic et de la
        communication des données, l'identification de la session, l'accès aux zones à accès restreint, la
        mémorisation des éléments qui composent une commande ou le partage de contenus à travers les réseaux
        sociaux.
      </li>
      <li>
        <span class="underline">Cookies de personnalisation </span>: ils permettent à l'utilisateur d'accéder au service avec certaines
        caractéristiques générales prédéfinies comme, par exemple, la langue, le type de navigateur ou la
        configuration régionale à partir de laquelle l'utilisateur accède au service.
      </li>
      <li>
        <span class="underline">Cookies d'analyse </span>: ils permettent à la partie qui en est responsable de suivre et d'analyser le comportement
        des utilisateurs des sites web auxquels ils sont liés. Les informations recueillies par ce type de cookies sont
        utilisées pour mesurer l'activité des sites web et pour créer des profils de navigation des utilisateurs afin
        d'introduire des améliorations basées sur l'analyse des données relatives à l'utilisation faite par les
        utilisateurs du service.
      </li>
      <li>
        <span class="underline">Cookies publicitaires </span>: ls permettent de gérer, de la manière la plus efficace possible, les espacespublicitaires.
      </li>
      <li>
        <span class="underline">Cookies de publicité comportementale </span>: ils stockent des informations sur le comportement des utilisateurs
        obtenues par l'observation continue de leurs habitudes de navigation, ce qui permet de développer un profil
        spécifique afin d'afficher des publicités basées sur ce dernier.
      </li>
      <li>
        <span class="underline">Cookies de réseaux sociaux externes </span>: ils sont utilisés pour que les visiteurs puissent interagir avec le
        contenu de différentes plateformes sociales (Facebook, YouTube, Twitter, LinkedIn, etc.) et sont générés
        uniquement pour les utilisateurs de ces réseaux sociaux. Les conditions d'utilisation de ces cookies et les
        informations collectées sont régies par la politique de confidentialité du site web.
      </li>
    </ul><br>

    En fonction du consentement requis pour leur téléchargement et leur utilisation, les cookies peuvent être
    classés comme suit :
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies obligatoires </span>: ce sont des cookies qui ne nécessitent pas le consentement préalable de l'utilisateur
        pour être utilisés et qui correspondent aux cookies techniques et aux cookies de personnalisation. Ces
        cookies sont considérés comme nécessaires au bon fonctionnement du site web et, par conséquent,
        peuvent être utilisés sans le consentement des utilisateurs.
      </li>
      <li>
        <span class="underline">Cookies qui nécessitent un consentement </span>: ce sont des cookies qui ne sont pas exemptés du reste des
        cookies (cookies de tiers, cookies de suivi, cookies publicitaires, etc.) et qui nécessitent tous le
        consentement exprès et préalable des utilisateurs pour pouvoir être téléchargés et utilisés sur le site web.
      </li>
    </ul><br>
3:
  title: "Types de cookies utilisés par le site web"
  body: |
    <b>PRODUITS GOOGLE</b><br><br>

    <b>Google Analytics</b><br><br>
    Ce site Web utilise Google Analytics, un service d'analyse du Web fourni par Google Inc ("Google"). Google
    Analytics utilise des cookies. Les informations générées par les cookies concernant votre utilisation de ce
    site Web sont généralement transmises à un serveur de Google aux États-Unis et y sont stockées. Toutefois,
    en anonymisant votre adresse IP sur ce site Web, Google raccourcit votre adresse IP dans les États
    membres de l'Union européenne ou dans d'autres États signataires de l'accord sur l'Espace économique
    européen. Ce n'est que dans des cas exceptionnels que l'adresse IP complète sera transmise à un serveur
    de Google aux États-Unis et y sera raccourcie.<br><br>

    Google utilise ces informations pour le compte de l'exploitant de ce site Web afin d'analyser votre utilisation
    du site, de compiler des rapports sur les activités du site et de fournir d'autres services liés à l'utilisation du
    site et d'Internet à l'exploitant du site. Les adresses IP transmises par votre navigateur dans le cadre de
    Google Analytics ne seront pas combinées avec d'autres données de Google.<br><br>

    L'utilisateur peut empêcher l'installation de cookies en paramétrant les options correspondantes dans son
    navigateur. Toutefois, les utilisateurs doivent noter que, dans ce cas, ils ne pourront peut-être pas utiliser
    toutes les fonctions de ce site web. Vous pouvez également empêcher Google de traiter les données
    générées par l'utilisation de ce site (y compris votre adresse IP) et collectées par les cookies en
    téléchargeant et en installant le plug-in de navigateur disponible au lien suivant :
    <a class="text-electric underline" href="https://tools.google.com/dlpage/gaoptout?hl=fr" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=fr</a>. <br><br>

    Il convient notamment de noter que Google Analytics a étendu le code "gat._anonymizeIp() ;" pour permettre
    l'enregistrement anonymisé des adresses IP ou ce que l'on appelle le "masquage IP". Nous utilisons ce code
    pour effectuer l'anonymisation correspondante.<br><br>

    Vous pouvez empêcher la collecte de données par Google Analytics en cliquant sur le lien ci-dessous. Ce
    faisant, un cookie de désactivation sera créé et bloquera la collecte future de vos données lors de votre
    visite sur ce site web.
    <a class="text-electric underline" href="javascript:gaOptOut()">Désactiver Google Analytics.</a><br><br>

    En outre, Google Analytics est utilisé sur ce site web pour analyser les données provenant d'AdWords et du
    cookie double-clic à des fins statistiques. Si vous souhaitez empêcher cela, vous pouvez le désactiver dans
    le gestionnaire des préférences de Google Analytics et AdWords Ads. <br><br>

    <b>Conversions Google Ads</b><br><br>
    En utilisant Google Ads Conversions, nous sommes en mesure de placer des annonces pour nos services
    sur des sites web externes. Les données relatives aux campagnes nous permettent de déterminer l'efficacité
    des mesures publicitaires individuelles. La mesure de publicité personnalisée susmentionnée est prise sur la
    base de l'article 6, paragraphe 1, point f), du GDPR, sous réserve de la déclaration d'un intérêt légitime.
    Notre intérêt légitime réside dans l'affichage de publicités ciblées. De cette façon, nous voulons nous assurer
    que nous montrons aux utilisateurs des publicités qui les intéressent.<br><br>

    La reproduction des supports publicitaires par Google s'effectue par le biais de ce que l'on appelle des
    "serveurs d'annonces". Nous utilisons à cette fin des cookies de serveur publicitaire, qui nous permettent de
    mesurer certains paramètres de mesure du succès, tels que les vues de la publicité ou les clics des
    utilisateurs. Lorsque l'utilisateur accède à notre site web via une annonce Google, Google Adwords
    enregistre un cookie sur l'appareil de l'utilisateur. <br><br>

    Comme nous n'avons aucune influence sur la portée et l'utilisation des données collectées par cet outil
    Google, vous trouverez de plus amples informations à l'adresse <a class="text-electric underline" href="https://policies.google.com/privacy?hl=fr" target="_blank">https://policies.google.com/privacy?hl=fr</a>. <br><br>

    Vous pouvez désactiver l'utilisation des cookies par Google en vous rendant sur <a class="text-electric underline" href="https://policies.google.com/technologies/ads?hl=fr" target="_blank"> https://policies.google.com/technologies/ads?hl=fr</a>.
    Vous pouvez également désactiver les cookies de suivi
    des conversions en configurant votre navigateur pour qu'il bloque les cookies du domaine
    "googleadservices.com". Toutefois, veuillez noter que, dans ce cas, il se peut que vous ne puissiez pas
    utiliser toutes les fonctions de ce site web.<br><br>

    <b>Google Ads Sense et Google DoubleClick </b><br><br>
    Nous utilisons des services publicitaires, à savoir Google DoubleClick for Publishers et Google AdSense.
    Google utilise ces cookies pour rendre la publicité plus attrayante pour les utilisateurs et plus intéressante
    pour les éditeurs et les annonceurs. Les cookies sont généralement utilisés pour sélectionner des annonces
    basées sur un contenu pertinent pour un utilisateur, améliorer les rapports sur les performances des
    campagnes et éviter de montrer des annonces que l'utilisateur a déjà vues. Google DoubleClick for
    Publisher et Google AdSense, sont des services de publicité sur Internet fournis par Google, Inc. L'utilisateur
    peut consulter ici :<a class="text-electric underline" href="https://policies.google.com/technologies/cookies?hl=fr#types-of-cookies" target="_blank">https://policies.google.com/technologies/cookies?hl=fr#types-of-cookies</a>
    le type decookies utilisés par Google et sa politique de confidentialité <a class="text-electric underline" href="https://policies.google.com/privacy?hl=fr" target="_blank">https://policies.google.com/privacy?hl=fr</a>.
    Google DoubleClick for Publisher et Google AdSense travaillent avec des fournisseurs de technologies
    publicitaires qui ont accepté de se conformer à leur politique d'utilisation des données. Vous trouverez la liste
    des fournisseurs de Google DoubleClick for Publisher ici : <a class="text-electric underline" href="https://support.google.com/admanager/answer/9012903?hl=fr&ref_topic=9007190" target="_blank">https://support.google.com/admanager/answer/9012903?hl=fr&ref_topic=9007190</a>
    et pour Google AdSense ici : <a class="text-electric underline" href="https://support.google.com/adsense/answer/9012903?hl=fr&ref_topic=7670012 " target="_blank">https://support.google.com/adsense/answer/9012903?hl=fr&ref_topic=7670012</a>
    <br>
4:
  title: "Comment désactiver les cookies ?"
  body: |
    Les cookies qui ne sont pas obligatoires pour la navigation sur ce site web peuvent être désactivés dans les
    paramètres du site web. Ces paramètres se trouvent dans le pied de page du site web. En outre, tous les
    navigateurs permettent de modifier les paramètres des cookies pour les désactiver.<br><br>

    Vous trouverez ci-dessous les liens permettant de désactiver les cookies pour chaque navigateur :
    <ul class='list-disc pl-8'>
        <li> Si el usuario utiliza <a class="text-electric underline" href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=fr"><b>Google Chrome®</b></a>.</li>
        <li> Si el usuario utiliza <a class="text-electric underline" href="https://support.mozilla.org/fr/kb/effacer-cookies-donnees-site-firefox"><b>Firefox®</b></a>.</li>
        <li> Si el usuario utiliza <a class="text-electric underline" href="https://support.apple.com/fr-fr/guide/safari/sfri47acf5d6/mac"><b>Safari</b></a> y <a class="text-electric underline" href="https://support.apple.com/en-us/HT201265"><b>Safari</b></a>.</li>
        <li> Si el usuario utiliza <a class="text-electric underline" href="https://support.microsoft.com/fr-fr/help/278835/how-to-delete-cookie-files-in-internet-explorer"><b>Internet Explorer</b></a>.</li>
    </ul><br>

    Si vous ne souhaitez pas être suivi par les cookies, Google a développé un module complémentaire à
    installer dans votre navigateur que vous pouvez accéder au lien suivant :
    <a class="text-electric underline" href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.<br>
5:
  title: "Cookies sur les appareils mobiles"
  body: |
    Le propriétaire du site Web utilise également des cookies ou d'autres dispositifs de stockage sur les
    appareils mobiles.<br><br>

    Les cookies qui ne sont pas obligatoires pour la navigation sur ce site web peuvent être désactivés
    dans les paramètres du site web.<br><br>

    Ces paramètres se trouvent dans le pied de page du site web. En outre, comme pour les navigateurs
    d'ordinateur, les navigateurs des appareils mobiles permettent de modifier les options ou les paramètres de
    confidentialité pour désactiver ou supprimer les cookies.<br><br>

    Si vous souhaitez modifier vos paramètres de confidentialité, veuillez suivre les instructions spécifiées par le
    développeur de votre navigateur mobile.<br><br>

    Vous trouverez ci-dessous quelques exemples de liens qui vous guideront dans la modification des
    paramètres de confidentialité de votre appareil mobile :
    <ul class='list-disc pl-8'>
        <li><b>iOS:</b> <a class="text-electric underline" href="https://support.apple.com/fr-fr/HT201265">https://support.apple.com/es-es/HT201265</a></li>
        <li><b>Windows Phone:</b> <a class="text-electric underline" href="https://support.microsoft.com/fr-fr/windows/fin-du-support-de-windows-phone-8-1-faq-7f1ef0aa-0aaf-0747-3724-5c44456778a3">https://support.microsoft.com/fr-fr/windows/fin-du-support-de-windows-phone-8-1-faq-7f1ef0aa-0aaf-0747-3724-5c44456778a3</a></li>
        <li><b>Chrome Mobile:</b> <a class="text-electric underline" href="https://support.google.com/chrome/answer/114662?hl=fr&visit_id=638028211680652519-2524256043&rd=1">https://support.google.com/chrome/answer/114662?hl=fr&visit_id=638028211680652519-2524256043&rd=1</a></li>
        <li><b>Opera Mobile:</b> <a class="text-electric underline" href="https://goo.gl/Nzr8s7">https://goo.gl/Nzr8s7</a></li>
    </ul>

    Nous vous rappelons que l'utilisateur peut s'opposer à
    l'envoi de communications commerciales par tout moyen et à tout moment en envoyant
    un e-mail à l'adresse indiquée ci-dessus.<br>
6:
  title: "Acceptation des cookies"
  body: |
    Ce site Web n'installe pas de cookies sur les appareils des utilisateurs tant que ceux-ci n'ont pas accepté
    leur installation.<br><br>

    Nous vous informons que si vous n'acceptez pas l'installation de cookies ou si vous les désactivez dans la
    configuration, il est possible que certains services ne soient pas disponibles sans l'utilisation de ceux-ci ou
    que vous ne puissiez pas accéder à certains services ou profiter pleinement de tout ce que ce site Web vous
    offre.<br><br>

    Si vous avez des questions, des commentaires ou des suggestions concernant la politique en matière de
    cookies, veuillez écrire à : <a class="text-electric underline" href="mailto:contact@box2boxstorage.com">contact@box2boxstorage.com</a><br>
</i18n>
<i18n lang="yaml" locale="it">
title: "Politica sui cookie | Box2box"
meta_description: "In conformità alla normativa vigente, box2box.es fornisce agli utenti informazioni sui cookie utilizzati sul proprio sito web, con l'obiettivo di fornire un servizio migliore e offrire agli utenti una migliore esperienza di navigazione."
sectionName: "Informativa sui Cookie"
mainText: |
  In conformità con la Legge sui Servizi della Società dell'Informazione e del Commercio Elettronico (di seguito, LSSI),
   il Regolamento Generale Europeo sulla Protezione dei Dati (GDPR) e la Legge Organica 3/2018, del 5 dicembre,
   sulla Protezione dei Dati Personali e la garanzia dei diritti digitali, BOX2BOX, S.L., (di seguito, il "Sito Web" o il "Titolare")
   informa, attraverso la presente Informativa sui Cookies, sull'utilizzo di dispositivi di archiviazione e recupero dati
   nelle apparecchiature terminali.
1:
  title: "Cosa sono i cookie?"
  body: |
    Un cookie è un file che viene scaricato sul dispositivo dell'utente (computer o dispositivo mobile) per memorizzare dati
    che possono essere aggiornati e recuperati dall'ente responsabile della sua installazione.<br><br>

    Questo sito web utilizza cookie e/o tecnologie simili che memorizzano e recuperano informazioni durante la navigazione.
    In generale, queste tecnologie possono essere utilizzate per diversi scopi, come ad esempio riconoscere l'utente,
    ottenere informazioni sulle sue abitudini di navigazione o personalizzare la visualizzazione dei contenuti.
    Gli usi specifici che facciamo di queste tecnologie sono descritti di seguito.<br>
2:
  title: "Tipi di cookie"
  body: |
    A seconda di chi è l'entità che gestisce il dominio da cui vengono inviati i cookie e tratta i dati ottenuti,
    si possono distinguere due tipi:
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookie propri:</span>: quelli che vengono inviati all'apparecchiatura terminale
        dell'utente da un computer o da un dominio gestito dal Titolare stesso e dal quale viene fornito il servizio richiesto dall'utente.
      </li>
      <li>
        <span class="underline">Cookie di terze parti:</span>: quelli che vengono inviati all'apparecchiatura terminale dell'utente da un
        computer o da un dominio non gestito dal Titolare, ma da un altro soggetto che elabora i dati ottenuti tramite i cookie.
      </li>
    </ul><br>

    Nel caso in cui i cookie siano installati da un computer o da un dominio gestito dal Titolare stesso,
    ma le informazioni raccolte attraverso di essi siano gestite da una terza parte, non possono essere considerati cookie propri..<br><br>

    In base alla durata della loro permanenza nel browser dell'utente, i cookie possono essere classificati come segue:
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookie di sessione</span>: progettati per raccogliere e memorizzare i dati durante l'accesso dell'utente a un sito web.
        Di solito vengono utilizzati per memorizzare informazioni che devono essere conservate solo per la fornitura del servizio richiesto
        dall'utente in una singola occasione.
      </li>
      <li>
        <span class="underline">Cookie persistenti</span>: i dati rimangono memorizzati nel terminale e possono essere consultati
        ed elaborati per un periodo definito dal responsabile del cookie, che può variare da pochi minuti a diversi anni.
      </li>
    </ul><br>

    A seconda della finalità del trattamento dei dati ottenuti, è inoltre possibile classificare i cookie come segue:


      <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookie tecnici o necessari</span>: quelli che permettono all'utente di navigare sul Sito e di utilizzare le diverse
        opzioni o servizi presenti su di esso, come, ad esempio, il controllo del traffico e della comunicazione dei dati, l'identificazione della sessione,
        l'accesso alle aree ad accesso limitato, la memorizzazione degli elementi che compongono un ordine o la condivisione di contenuti attraverso i social network.
      </li>
      <li>
        <span class="underline">Cookie di personalizzazione</span>: consentono all'utente di accedere al servizio con alcune caratteristiche generali
        predefinite come, ad esempio, la lingua, il tipo di browser o la configurazione regionale da cui l'utente accede al servizio.
      </li>
      <li>
        <span class="underline">Cookie di analisi</span>: consentono al responsabile di monitorare e analizzare il comportamento degli utenti dei siti web
        a cui sono collegati. Le informazioni raccolte attraverso questo tipo di cookie vengono utilizzate per misurare l'attività dei siti web e per
        creare profili di navigazione degli utenti al fine di introdurre miglioramenti basati sull'analisi dei dati relativi all'utilizzo da parte
        degli utenti del servizio.
      </li>
      <li>
        <span class="underline">Cookie pubblicitari</span>: consentono di gestire nel modo più efficace possibile gli spazi pubblicitari.
      </li>
      <li>
        <span class="underline">Cookie di pubblicità comportamentale</span>: memorizzano informazioni sul comportamento degli utenti ottenute attraverso
        l'osservazione continua delle loro abitudini di navigazione, che consentono di sviluppare un profilo specifico per mostrare pubblicità basata sullo stesso.
      </li>
      <li>
        <span class="underline">Cookie di social network esterni</span>: sono utilizzati per consentire ai visitatori di interagire con i contenuti di
        diverse piattaforme sociali (Facebook, YouTube, Twitter, LinkedIn, ecc.) e sono generati solo per gli utenti di questi social network.
        Le condizioni di utilizzo di questi cookie e le informazioni raccolte sono regolate dalla politica sulla privacy del sito web.
      </li>
    </ul><br>

    A seconda del consenso richiesto per il loro download e utilizzo, i cookie possono essere classificati come segue:
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookie obbligatori</span>: sono quelli che non richiedono il consenso preventivo dell'utente per essere utilizzati e che
        corrispondono ai cookie tecnici e ai cookie di personalizzazione. Questi cookie sono considerati necessari per il corretto funzionamento del sito web e,
        pertanto, possono essere utilizzati senza il consenso degli utenti.
      </li>
      <li>
        <span class="underline">Cookie che richiedono il consenso</span>: si tratta di cookie che non sono esenti dal resto dei cookie (cookie di terze parti,
        cookie di tracciamento, cookie pubblicitari, ecc.) e tutti richiedono il previo consenso esplicito degli utenti per poter essere scaricati e
        utilizzati sul sito web.
      </li>
    </ul><br>
3:
  title: "Tipi di cookie utilizzati dal sito web"
  body: |
    <b>PRODOTTI GOOGLE</b><br><br>

    <b>Google Analytics</b><br><br>
    Questo sito web utilizza Google Analytics, un servizio di analisi web fornito da Google Inc («Google»).
    Google Analytics utilizza i cookie. Le informazioni generate dal cookie sull'utilizzo di questo sito web da parte dell'utente vengono solitamente
    trasmesse a un server di Google negli Stati Uniti e lì memorizzate. Tuttavia, anonimizzando il vostro indirizzo IP su questo sito web, Google
    accorcia il vostro indirizzo IP all'interno degli Stati membri dell'Unione Europea o in altri Stati firmatari dell'Accordo sullo Spazio Economico Europeo.
    Solo in casi eccezionali l'indirizzo IP completo viene trasmesso a un server di Google negli Stati Uniti e lì abbreviato.<br><br>

    Google utilizza queste informazioni per conto dell'operatore di questo sito web allo scopo di analizzare l'utilizzo del sito web da parte degli utenti,
    compilare report sulle attività del sito web e fornire altri servizi relativi all'utilizzo del sito web e di Internet all'operatore del sito web.
    Gli indirizzi IP trasmessi dal vostro browser nell'ambito di Google Analytics non vengono combinati con altri dati di Google. <br><br>

    L'utente può impedire l'installazione dei cookie configurando le opzioni corrispondenti nel proprio browser. Tuttavia, l'utente deve tenere presente che in
    questo caso potrebbe non essere in grado di utilizzare tutte le funzioni di questo sito web. Potete anche impedire a Google di elaborare i dati generati
    dall'utilizzo di questo sito web (compreso il vostro indirizzo IP) e raccolti dai cookie scaricando e installando il plug-in del browser disponibile al seguente link:
    <a class="text-electric underline" href="https://tools.google.com/dlpage/gaoptout?hl=it" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=it</a>. <br><br>

    In particolare, va notato che Google Analytics ha esteso il codice "gat._anonymizeIp();" per consentire la registrazione anonima degli indirizzi IP o
    il cosiddetto "mascheramento IP". Utilizziamo questo codice per eseguire la relativa anonimizzazione. <br><br>

    È possibile impedire la raccolta dei dati da parte di Google Analytics cliccando sul link sottostante. In questo modo, verrà impostato un cookie di
    opt-out che bloccherà la futura raccolta dei vostri dati durante la vostra visita a questo sito web.
    <a class="text-electric underline" href="javascript:gaOptOut()">Disattivare Google Analytics.</a><br><br>

    Inoltre, su questo sito web viene utilizzato Google Analytics per analizzare i dati di AdWords e il cookie del doppio clic a fini statistici.
    Se si desidera evitare che ciò accada, è possibile disattivarlo nella Gestione preferenze di Google Analytics e AdWords Ads.<br><br>

    <b>Conversioni di Google Ads</b><br><br>
    Utilizzando le conversioni di Google Ads, siamo in grado di pubblicare annunci per i nostri servizi su siti web esterni.
    I dati delle campagne ci permettono di determinare l'efficacia delle singole misure pubblicitarie. La suddetta misura pubblicitaria
    personalizzata viene adottata sulla base dell'articolo 6, paragrafo 1, lettera f), del GDPR, previa dichiarazione di un interesse legittimo.
    Il nostro legittimo interesse consiste nella visualizzazione di pubblicità mirata. In questo modo, vogliamo assicurarci di mostrare agli
    utenti annunci pubblicitari che siano di loro interesse. <br><br>

    La riproduzione dei mezzi pubblicitari da parte di Google avviene tramite i cosiddetti «server pubblicitari».
    A tal fine utilizziamo i cookie degli ad server, che ci consentono di misurare determinati parametri per misurare il successo, come le
    visualizzazioni degli annunci o i clic degli utenti. Quando l'utente accede al nostro sito web tramite un annuncio di Google,
    Google Adwords salva un cookie sul dispositivo dell'utente.
    Un cookie sul vostro dispositivo. Questi cookie non sono progettati per identificare l'utente e vengono generalmente eliminati dopo 30 giorni.
    Per questi cookie, l'ID univoco del cookie, il numero di annunci per posizionamento (frequenza), l'ultimo clic (rilevante per la misurazione delle conversioni)
    e le informazioni di opt-out (che indicano che l'utente non desidera più che gli vengano mostrati annunci) sono generalmente salvati come valori di analisi.
    Per questo cookie, l'ID univoco del cookie, il numero di annunci per posizionamento (frequenza), l'ultimo clic (rilevante per la misurazione della conversazione)
    e le informazioni di opt-out (che indicano che l'utente non desidera più che gli vengano mostrati annunci) sono normalmente memorizzati come valori di analisi. <br><br>

    Poiché non abbiamo alcuna influenza sulla portata e sull'utilizzo dei dati raccolti da questo strumento di Google, è possibile trovare ulteriori informazioni su
    <a class="text-electric underline" href="https://policies.google.com/privacy?hl=it" target="_blank">https://policies.google.com/privacy?hl=it </a>. <br><br>

    È possibile disattivare l'utilizzo dei cookie da parte di Google accedendo a
    <a class="text-electric underline" href="https://policies.google.com/technologies/ads?hl=it" target="_blank"> https://policies.google.com/technologies/ads?hl=it</a>.
    È inoltre possibile disabilitare i cookie di monitoraggio delle conversioni impostando il browser in modo da bloccare i cookie provenienti dal dominio "googleadservices.com".
    Tuttavia, si prega di notare che in questo caso potreste non essere in grado di utilizzare tutte le funzioni di questo sito web.<br><br>

    <b>Google Ads Sense e Google DoubleClick </b><br><br>
    Utilizziamo servizi pubblicitari, in particolare Google DoubleClick for Publishers e Google AdSense. Google utilizza questi cookie per rendere la pubblicità
    più attraente per gli utenti e più preziosa per gli editori e gli inserzionisti. I cookie vengono solitamente utilizzati per selezionare gli annunci in base
    ai contenuti rilevanti per l'utente, per migliorare la reportistica sulle prestazioni delle campagne e per evitare di mostrare annunci già visti dall'utente.
    Google DoubleClick for Publisher e Google AdSense, è un servizio di web advertising fornito da Google, Inc., L'utente può consultare qui:
    <a class="text-electric underline" href="https://policies.google.com/technologies/cookies?hl=it#types-of-cookies" target="_blank">https://policies.google.com/technologies/cookies?hl=it#types-of-cookies</a>
    il tipo di cookie utilizzati da Google e la sua privacy policy  <a class="text-electric underline" href="https://policies.google.com/privacy?hl=it" target="_blank">https://policies.google.com/privacy?hl=it</a>.
    Google DoubleClick for Publisher e Google AdSense collaborano con fornitori di tecnologie pubblicitarie che hanno accettato di rispettare la loro politica di utilizzo dei dati; l'elenco dei fornitori di Google DoubleClick for Publisher è disponibile qui:
    <a class="text-electric underline" href="https://support.google.com/admanager/answer/9012903?hl=it&ref_topic=9007190" target="_blank">https://support.google.com/admanager/answer/9012903?hl=it&ref_topic=9007190</a>
    e per Google AdSense qui: <a class="text-electric underline" href="https://support.google.com/adsense/answer/9012903?hl=it&ref_topic=7670012 " target="_blank">https://support.google.com/adsense/answer/9012903?hl=it&ref_topic=7670012</a>
    <br>
4:
  title: "Come disabilitare i cookie?"
  body: |
    I cookie che non sono obbligatori per la navigazione in questo sito web possono essere disabilitati nelle impostazioni del sito. Queste impostazioni si trovano nel piè di pagina del sito web.
    Inoltre, tutti i browser consentono di disattivare le impostazioni dei cookie.<br><br>

    Di seguito sono riportati i link per ciascun browser per disabilitare i cookie:
    <ul class='list-disc pl-8'>
        <li> Se l'utente utilizza <a class="text-electric underline" href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop"><b>Google Chrome®</b></a>.</li>
        <li> Se l'utente utilizza <a class="text-electric underline" href="https://support.mozilla.org/en/kb/Borrar%20cookies"><b>Firefox®</b></a>.</li>
        <li> Se l'utente utilizza <a class="text-electric underline" href="https://support.apple.com/es-en/guide/safari/sfri47acf5d6/mac"><b>Safari</b></a> and <a class="text-electric underline" href="https://support.apple.com/en-us/HT201265"><b>Safari</b></a>.</li>
        <li> Se l'utente utilizza <a class="text-electric underline" href="https://support.microsoft.com/es-en/help/278835/how-to-delete-cookie-files-in-internet-explorer"><b>Internet Explorer</b></a>.</li>
    </ul><br>

    Se non desiderate essere tracciati dai cookie, Google ha sviluppato un componente aggiuntivo da installare nel vostro browser, accessibile al seguente link:
    <a class="text-electric underline" href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.<br>
5:
  title: "Cookie su dispositivi mobili"
  body: |
    Il proprietario del sito web utilizza anche cookie o altri dispositivi di memorizzazione sui dispositivi mobili. <br><br>

    I cookie che non sono obbligatori per la navigazione in questo Sito possono essere disabilitati nelle impostazioni del Sito. <br><br>

    Queste impostazioni si trovano nel piè di pagina del sito web. Inoltre, come per i browser dei computer,
    i browser dei dispositivi mobili consentono di modificare le opzioni o le impostazioni sulla privacy per
    disabilitare o eliminare i cookie.<br><br>

    Se si desidera modificare le impostazioni sulla privacy, seguire le istruzioni specificate dallo sviluppatore
    del browser mobile.<br><br>

    Di seguito sono riportati alcuni esempi di link che vi guideranno nella modifica delle impostazioni sulla privacy del vostro dispositivo mobile:

    <ul class='list-disc pl-8'>
        <li><b>iOS:</b> <a class="text-electric underline" href="https://support.apple.com/es-en/HT201265">https://support.apple.com/it-it/HT201265</a></li>
        <li><b>Windows Phone:</b> <a class="text-electric underline" href="https://goo.gl/tKyb0y">https://goo.gl/tKyb0y</a></li>
        <li><b>Chrome Mobile:</b> <a class="text-electric underline" href="https://goo.gl/XJp7N">https://goo.gl/XJp7N</a></li>
        <li><b>Opera Mobile:</b> <a class="text-electric underline" href="https://goo.gl/Nzr8s7">https://goo.gl/Nzr8s7</a></li>
    </ul>

6:
  title: "Accettazione dei cookie"
  body: |
    Questo sito web non installa cookie sui dispositivi degli utenti finché questi non ne accettano l'installazione.<br><br>

    Vi informiamo che se non accettate l'installazione dei cookie o se ne disabilitate qualcuno nella configurazione, è possibile che alcuni servizi non
    siano disponibili senza l'uso di questi o che non possiate accedere a determinati servizi o sfruttare appieno tutto ciò che questo Sito web vi offre.<br><br>

    In caso di domande, commenti o suggerimenti sulla Politica sui cookie, si prega di scrivere a: <a class="text-electric underline" href="mailto:info@box2boxstorage.com">info@box2boxstorage.com</a><br>
</i18n>
<i18n lang="yaml" locale="pt">
title: "Política de Cookies | Box2box"
meta_description: "Em conformidade com a legislação em vigor, box2box.es fornece aos utilizadores informações sobre os cookies utilizados no seu website, com o objectivo de prestar um melhor serviço e proporcionar aos utilizadores uma melhor experiência de navegação."
sectionName: "Política de cookies"
mainText: |
  Em conformidade com a Lei sobre Serviços da Sociedade da Informação e Comércio Electrónico
  (doravante, LSSI), o Regulamento Geral Europeu de Protecção de Dados (GDPR) e a Lei Orgânica 3/2018,
  de 5 de Dezembro, sobre Protecção de Dados Pessoais e garantia de direitos digitais, a STUFF2BOX UNIP
  LDA. (doravante, o "Website" ou o "Proprietário") informa, através da presente Política de Cookies, sobre a
  utilização de dispositivos de armazenamento e recuperação de dados em equipamentos terminais.
1:
  title: "O que são cookies?"
  body: |
    Um cookie é um ficheiro que é descarregado para o seu dispositivo (computador ou dispositivo móvel) a fim
    de armazenar dados que podem ser actualizados e recuperados pela entidade responsável pela sua
    instalação.<br><br>

    Este website utiliza cookies e/ou tecnologias semelhantes que armazenam e recuperam informações
    quando navega. Em geral, estas tecnologias podem ser utilizadas para diversos fins, tais como, por
    exemplo, reconhecer o utilizador como utilizador, obter informações sobre os seus hábitos de navegação, ou
    personalizar a forma como o conteúdo é apresentado. Os usos específicos que fazemos destas tecnologias
    são descritos abaixo.<br>
2:
  title: "Tipos de cookies"
  body: |
    Dependendo de quem é a entidade que gere o domínio de onde os cookies são enviados e trata os dados
    obtidos, é possível distinguir dois tipos:
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies próprios</span>: aqueles que são enviados para o equipamento terminal do utilizador a partir de um
        computador ou domínio gerido pelo próprio Titular e a partir do qual é prestado o serviço solicitado pelo
        utilizador.
      </li>
      <li>
        <span class="underline">Cookies de terceiros</span>: aqueles que são enviados para o equipamento terminal do utilizador a partir de um
        computador ou domínio que não é gerido pelo Proprietário, mas por outra entidade que processa os dados
        obtidos através dos cookies.
      </li>
    </ul><br>

    No caso de os cookies serem instalados a partir de um computador ou domínio gerido pelo próprio Titular,
    mas as informações recolhidas através deles serem geridas por terceiros, não podem ser consideradas
    como cookies próprios.<br><br>

    Dependendo do tempo em que permanecem armazenados no browser do utilizador, os cookies também
    podem ser classificados da seguinte forma:
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies de sessão</span>: concebidos para recolher e armazenar dados enquanto o utilizador acede a um website.
        São normalmente utilizados para armazenar informação que só precisa de ser guardada para a prestação
        do serviço solicitado pelo utilizador numa única ocasião.
      </li>
      <li>
        <span class="underline">Cookies persistentes</span>: os dados permanecem armazenados no terminal e podem ser acedidos e
        processados durante um período definido pelo responsável pelo cookie, que pode variar de alguns minutos
        a vários anos.
      </li>
    </ul><br>

    Dependendo da finalidade para a qual os dados obtidos são processados, é também possível classificar os
    cookies da seguinte forma:

      <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies técnicos ou necessários</span>: aqueles que permitem ao utilizador navegar no Website e utilizar as
        diferentes opções ou serviços existentes no mesmo, tais como, por exemplo, controlar o tráfego e a
        comunicação de dados, identificar a sessão, aceder a áreas de acesso restrito, lembrar os elementos que
        compõem uma ordem ou partilhar conteúdos através de redes sociais.
      </li>
      <li>
        <span class="underline">Cookies de personalização</span>: estes permitem ao utilizador aceder ao serviço com algumas características
        gerais predefinidas como, por exemplo, a língua, o tipo de navegador ou a configuração regional a partir da
        qual o utilizador acede ao serviço.
      </li>
      <li>
        <span class="underline">Cookies de análise</span>: estes permitem ao responsável por eles monitorizar e analisar o comportamento dos
        utilizadores dos sítios Web aos quais estão ligados. A informação recolhida através deste tipo de cookies é
        utilizada para medir a actividade dos sítios web e para criar perfis de navegação dos utilizadores, a fim de
        introduzir melhorias baseadas na análise dos dados sobre a utilização feita pelos utilizadores do serviço.
      </li>
      <li>
        <span class="underline">Cookies publicitários</span>: estes permitem a gestão, da forma mais eficaz possível, dos espaços publicitários.
      </li>
      <li>
        <span class="underline">Cookies de publicidade comportamental</span>: estes armazenam informações sobre o comportamento dos
        utilizadores obtidas através da observação contínua dos seus hábitos de navegação, o que permite
        desenvolver um perfil específico a fim de exibir publicidade baseada no mesmo.
      </li>
      <li>
        <span class="underline">Cookies de redes sociais externas</span>: estes são utilizados para que os visitantes possam interagir com o
        conteúdo de diferentes plataformas sociais (Facebook, YouTube, Twitter, LinkedIn, etc.) e são apenas
        gerados para os utilizadores destas redes sociais. As condições de utilização destes cookies e as
        informações recolhidas são reguladas pela política de privacidade do sítio web.
      </li>
    </ul><br>

    Dependendo do consentimento necessário para o seu download e utilização, os cookies podem ser
    classificados da seguinte forma:
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies obrigatórios</span>: são cookies que não requerem o consentimento prévio do utilizador para serem
        utilizados e que correspondem a cookies técnicos e cookies de personalização. Estes cookies são
        considerados necessários para o correcto funcionamento do website e, portanto, podem ser utilizados sem
        o consentimento dos utilizadores.
      </li>
      <li>
        <span class="underline">Cookies que requerem consentimento</span>: são cookies que não estão isentos do resto dos cookies (cookies de
        terceiros, cookies de rastreio, cookies de publicidade, etc.) e todos requerem o consentimento expresso
        prévio dos utilizadores para serem descarregados e utilizados no website.
      </li>
    </ul><br>
3:
  title: "Tipos de cookies utilizados pelo sítio"
  body: |
    <b>PRODUCTOS DE GOOGLE</b><br><br>

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
4:
  title: "Como desactivar os cookies?"
  body: |
    Os cookies que não são obrigatórios para navegar neste website podem ser desactivados nas definições do
    website. Estas definições podem ser encontradas no rodapé do Website. Além disso, todos os browsers
    permitem que sejam feitas alterações para desactivar as definições dos cookies.<br><br>

    Abaixo, pode encontrar as ligações para cada navegador para desactivar os cookies:
    <ul class='list-disc pl-8'>
        <li> Se o utilizador utiliza o <a class="text-electric underline" href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=pt"><b>Google Chrome®</b></a>.</li>
        <li> Se o utilizador utiliza o <a class="text-electric underline" href="https://support.mozilla.org/pt-BR/kb/limpe-cookies-e-dados-de-sites-no-firefox"><b>Firefox®</b></a>.</li>
        <li> Se o utilizador utiliza o <a class="text-electric underline" href="https://support.apple.com/pt-pt/guide/safari/sfri47acf5d6/mac"><b>Safari</b></a> y <a class="text-electric underline" href="https://support.apple.com/en-us/HT201265"><b>Safari</b></a>.</li>
        <li> Se o utilizador utiliza o <a class="text-electric underline" href="https://support.microsoft.com/pt-pt/help/278835/how-to-delete-cookie-files-in-internet-explorer"><b>Internet Explorer</b></a>.</li>
    </ul><br>

    Se não quiser ser rastreado por cookies, o Google desenvolveu um add-on para instalar no seu navegador,
    ao qual pode aceder através do seguinte link:
    <a class="text-electric underline" href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.<br>
5:
  title: "Cookies em dispositivos móveis"
  body: |
    O proprietário do Website também utiliza cookies ou outros dispositivos de armazenamento em dispositivos
    móveis.<br><br>

    Os cookies que não são obrigatórios para a navegação neste Website podem ser desactivados nas
    definições do Website.<br><br>

    Estas definições podem ser encontradas no rodapé do Website. Além disso, tal como acontece com os
    navegadores de computador, os navegadores em dispositivos móveis permitem alterar as opções ou
    definições de privacidade para desactivar ou apagar cookies.<br><br>

    Se desejar alterar as suas definições de privacidade, por favor siga as instruções especificadas peloprogramador do seu browser móvel.<br><br>

    Abaixo estão alguns exemplos de links que o guiarão através da modificação das definições de privacidade
    no seu dispositivo móvel:
    <ul class='list-disc pl-8'>
        <li><b>iOS:</b> <a class="text-electric underline" href="https://support.apple.com/pt-pt/HT201265">https://support.apple.com/es-es/HT201265</a></li>
        <li><b>Windows Phone:</b> <a class="text-electric underline" href="https://support.microsoft.com/pt-pt/windows/fim-do-suporte-do-windows-phone-8-1-faq-7f1ef0aa-0aaf-0747-3724-5c44456778a3">https://support.microsoft.com/pt-pt/windows/fim-do-suporte-do-windows-phone-8-1-faq-7f1ef0aa-0aaf-0747-3724-5c44456778a3</a></li>
        <li><b>Chrome Mobile:</b> <a class="text-electric underline" href="https://support.google.com/chrome/answer/114662?hl=pt&visit_id=638028274545102284-847286570&rd=1">https://support.google.com/chrome/answer/114662?hl=pt&visit_id=638028274545102284-847286570&rd=1</a></li>
        <li><b>Opera Mobile:</b> <a class="text-electric underline" href="https://help.opera.com/en/latest/web-preferences/">https://help.opera.com/en/latest/web-preferences/</a></li>
    </ul>

    Recordamos que o utilizador pode opor-se ao envio de comunicações comerciais
    por qualquer meio e em qualquer momento  comunicações por qualquer meio e em qualquer momento,
    enviando um e-mail para o endereço  para o endereço indicado acima.<br>
6:
  title: "Aceptación de cookies"
  body: |
    Este Website não instala cookies nos dispositivos dos utilizadores até que estes tenham aceite a sua
    instalação.<br><br>

    Informamos que se não aceitar a instalação de cookies ou desactivar algum deles na configuração, é
    possível que determinados serviços não estejam disponíveis sem a utilização dos mesmos ou que não
    possa aceder a determinados serviços ou tirar o máximo partido de tudo o que este Website lhe oferece.<br><br>

    Se tiver quaisquer perguntas, comentários ou sugestões sobre a Política de Cookies, escreva para:
    <a class="text-electric underline" href="mailto:contacto@box2boxstorage.com">contacto@box2boxstorage.com</a><br>
</i18n>
<i18n lang="yaml" locale="mx">
title: "Política de cookies | Box2box"
meta_description: "Box2box facilita a los usuarios la información relativa a las cookies que utiliza su web, para prestar un mejor servicio y mejor experiencia de navegación."
sectionName: "Política de cookies"
mainText: |
  GRUPO BOX2BOX MESTORAGE SAPI DE CV, (en adelante, el “Sitio Web” o el “Titular”)
  informa, a través de la presente Política de Cookies, acerca de la
  utilización de dispositivos de almacenamiento y recuperación de datos en
  equipos terminales.
1:
  title: "¿Qué son las cookies?"
  body: |
    Una cookie es un archivo que se descarga en su equipo (ordenador o dispositivo móvil)
    con la finalidad de almacenar datos que podrán ser actualizados y recuperados por la
    entidad responsable de su instalación.<br><br>

    La información recabada a través de las cookies puede incluir la dirección IP, fecha y
    hora de visitas al Sitio Web, las páginas visionadas dentro del Sitio Web, el tiempo que
    ha estado el Usuario en el Sitio Web y los sitios visitados justo antes y después del
    mismo y otros datos.<br>
2:
  title: "Tipos de cookies"
  body: |
    Según quien sea la entidad que gestione el dominio desde donde se envían las cookies
    y trate los datos que se obtengan se pueden distinguir dos tipos:
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies propias</span>: aquellas que se envían al equipo terminal del usuario desde un
        equipo o dominio gestionado por el propio Titular y desde el que se presta el
        servicio solicitado por el usuario.
      </li>
      <li>
        <span class="underline">Cookies de terceros</span>: aquellas que se envían al equipo terminal del usuario
        desde un equipo o dominio que no es gestionado por el Titular, sino por otra
        entidad que trata los datos obtenidos través de las cookies.
      </li>
    </ul><br>

    En el caso de que las cookies sean instaladas desde un equipo o dominio gestionado
    por el propio Titular pero la información que se recoja mediante éstas sea gestionada
    por un tercero, no pueden ser consideradas como cookies propias.<br><br>

    Según el plazo de tiempo que permanecen almacenadas en el navegador del usuario,
    las cookies también pueden clasificarse en:
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies de sesión</span>: diseñadas para recabar y almacenar datos mientras el
        usuario accede a una página web. Se suelen emplear para almacenar
        información que solo interesa conservar para la prestación del servicio
        solicitado por el usuario en una sola ocasión.
      </li>
      <li>
        <span class="underline">Cookies persistentes</span>: los datos siguen almacenados en el terminal y pueden ser
        accedidos y tratados durante un periodo definido por el responsable de la
        cookie, y que puede ir de unos minutos a varios años.
      </li>
    </ul><br>

    Según la finalidad para la que se traten los datos obtenidos, es también posible
    clasificar las cookies en:

      <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies técnicas o necesarias</span>: aquellas que permiten al usuario la navegación a
        través del Sitio Web y la utilización de las diferentes opciones o servicios que en
        ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos,
        identificar la sesión, acceder a partes de acceso restringido, recordar los
        elementos que integran un pedido o compartir contenidos a través de redes
        sociales.
      </li>
      <li>
        <span class="underline">Cookies de personalización</span>: permiten al usuario acceder al servicio con algunas
        características de carácter general predefinidas como, por ejemplo, el idioma,
        el tipo de navegador o la configuración regional desde donde el usuario accede
        al servicio.
      </li>
      <li>
        <span class="underline">Cookies de análisis</span>: permiten al responsable de las mismas, el seguimiento y
        análisis del comportamiento de los usuarios de los sitios web a los que están
        vinculadas. La información recogida mediante este tipo de cookies se utiliza en
        la medición de la actividad de los sitios web y para la elaboración de perfiles de
        navegación de los usuarios con el fin de introducir mejoras en función del
        análisis de los datos de uso que hacen los usuarios del servicio.
      </li>
      <li>
        <span class="underline">Cookies publicitarias</span>: permiten la gestión, de la forma más eficaz posible, de los
        espacios publicitarios.
      </li>
      <li>
        <span class="underline">Cookies de publicidad comportamental</span>: almacenan información del
        comportamiento de los usuarios obtenida a través de la observación
        continuada de sus hábitos de navegación, lo que permite desarrollar un perfil
        específico para mostrar publicidad en función del mismo.
      </li>
      <li>
        <span class="underline">Cookies de redes sociales externas</span>: se utilizan para que los visitantes puedan
        interactuar con el contenido de diferentes plataformas sociales (facebook,
        youtube, twitter, linkedIn, etc..) y que se generen únicamente para los usuarios
        de dichas redes sociales. Las condiciones de utilización de estas cookies y la
        información recopilada se regula por la política de privacidad del sitio web.
      </li>
    </ul><br>

    Según el consentimiento necesario para su descarga y utilización, las cookies pueden
    clasificarse en:
    <ul class='list-disc pl-8'>
      <li>
        <span class="underline">Cookies obligatorias</span>: son aquellas que no requieren el consentimiento previo
        del usuario para poder usarse y que se corresponden con las cookies técnicas y
        las cookies de personalización. Estas cookies se consideran necesarias para el
        correcto funcionamiento de la web y, por tanto, pueden usarse sin el
        consentimiento de los usuarios.
      </li>
      <li>
        <span class="underline">Cookies que requieren consentimiento</span>: son cookies no exceptuadas el resto de
        cookies (las cookies de terceros, las cookies de seguimiento, las cookies
        publicitarias, etc.) y requieren todas el consentimiento expreso y previo de los
        usuarios para poder descargarlas y utilizarlas en el sitio web.
      </li>
    </ul><br>
3:
  title: "Tipos de Cookies utilizadas por el sitio web"
  body: |
    <b>PRODUCTOS DE GOOGLE</b><br><br>

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
    encontrará más información en <a class="text-electric underline" href="https://policies.google.com/privacy?hl=es" target="_blank">https://policies.google.com/privacy?hl=es </a>. <br><br>

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
4:
  title: "¿Cómo deshabilitar las cookies?"
  body: |
    Aquellas cookies que no sean obligatorias para la navegación del presente Sitio Web
    podrán deshabilitarse en la configuración del Sitio Web. Estos ajustes se encuentran en
    el pie de página del Sitio Web. Además, todos los navegadores permiten hacer cambios
    para desactivar la configuración de las cookies.<br><br>

    A continuación, podrá encontrar los links de cada navegador para deshabilitar las
    cookies:
    <ul class='list-disc pl-8'>
        <li> Si el usuario utiliza <a class="text-electric underline" href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop"><b>Google Chrome®</b></a>.</li>
        <li> Si el usuario utiliza <a class="text-electric underline" href="https://support.mozilla.org/es/kb/Borrar%20cookies"><b>Firefox®</b></a>.</li>
        <li> Si el usuario utiliza <a class="text-electric underline" href="https://support.apple.com/es-es/guide/safari/sfri47acf5d6/mac"><b>Safari</b></a> y <a class="text-electric underline" href="https://support.apple.com/en-us/HT201265"><b>Safari</b></a>.</li>
        <li> Si el usuario utiliza <a class="text-electric underline" href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer"><b>Internet Explorer</b></a>.</li>
    </ul><br>

    Si no desea ser rastreado por las cookies, Google ha desarrollado un complemento
    para instalar en su navegador al que puede acceder en el siguiente enlace:
    <a class="text-electric underline" href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.<br>
5:
  title: "Cookies en los dispositivos móviles"
  body: |
    El titular del Sitio Web también usa cookies u otros dispositivos de almacenamiento en
    dispositivos móviles.<br><br>

    Aquellas cookies que no sean obligatorias para la navegación del presente Sitio Web
    podrán deshabilitarse en la configuración del Sitio Web.<br><br>

    Estos ajustes se encuentran en el pie de página del Sitio Web. Además, al igual que
    sucede en los navegadores de ordenadores, lo navegadores de los dispositivos móviles
    permiten realizar cambios en las opciones o ajustes de privacidad para desactivar o
    eliminar las cookies.<br><br>

    Si desea modificar las opciones de privacidad siga las instrucciones especificadas por el
    desarrollador de su navegador para dispositivo móvil.<br><br>

    A continuación, podrá encontrar algunos ejemplos de los links que le guiarán para
    modificar las opciones de privacidad en su dispositivo móvil:
    <ul class='list-disc pl-8'>
        <li><b>iOS:</b> <a class="text-electric underline" href="https://support.apple.com/es-es/HT201265">https://support.apple.com/es-es/HT201265</a></li>
        <li><b>Windows Phone:</b> <a class="text-electric underline" href="https://goo.gl/tKyb0y">https://goo.gl/tKyb0y</a></li>
        <li><b>Chrome Mobile:</b> <a class="text-electric underline" href="https://goo.gl/XJp7N">https://goo.gl/XJp7N</a></li>
        <li><b>Opera Mobile:</b> <a class="text-electric underline" href="https://goo.gl/Nzr8s7">https://goo.gl/Nzr8s7</a></li>
    </ul>

    Le recordamos que el Usuario puede oponerse al envío de comunicaciones
    comerciales por cualquier vía y en cualquier momento, remitiendo un correo
    electrónico a la dirección indicada anteriormente.<br>
6:
  title: "Aceptación de cookies"
  body: |
    El presente Sitio Web no instala cookies en los dispositivos de los usuarios hasta que
    estos hayan aceptado su instalación.<br><br>

    Le informamos que en el caso de no aceptar la instalación de cookies o de deshabilitar
    alguna de estas en la configuración, es posible que ciertos servicios no estén
    disponibles sin la utilización de estas o que no pueda acceder a determinados servicios
    ni tampoco aprovechar por completo todo lo que este Sitio Web le ofrece.<br><br>

    Si tuviera alguna duda, comentario o sugerencia sobre la Política de Cookies, por favor
    escriba a: <a class="text-electric underline" href="mailto:atencion@box2boxstorage.com">atencion@box2boxstorage.com</a><br>
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/views/legal/cookies/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/views/legal/cookies/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/views/legal/cookies/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/views/legal/cookies/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/views/legal/cookies/en_mx.yaml"
></i18n>

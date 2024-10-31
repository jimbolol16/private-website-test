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
  name: "legalView",
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
    pageName: "legal",
  },
  data() {
    return {
      sectionName: this.$t("sectionName"),
      content: [
        {
          title: this.$t("1.title"),
          body: this.$t("1.body", {
            url_path: this.localePath("/"),
            url: this.$config.siteURL,
          }),
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
      ],
    };
  },
};
</script>
<i18n lang="yaml" locale="es">
title: "Aviso legal | Box2box"
meta_description: "Para dar cumplimiento al artículo 10, Ley 34/2002 de Servicios de Sociedad Información y Comercio Electrónico, informamos a los usuarios de nuestros datos"
sectionName: "Aviso legal"
1:
  title: "Información legal y aceptación"
  body: |
    Con la finalidad de dar cumplimiento al artículo 10 de la Ley 34/2002 de Servicios de la
    Sociedad de la Información y Comercio Electrónico, le informamos de que el presente
    sitio web <a class="text-electric underline" href="{url_path}">{url}</a> (en adelante, el "Sitio Web") es titularidad de BOX2BOX,
    S.L. (en adelante, <b>"Box2box"</b>), con N.I.F.: B87985115 y domicilio en CALLE RIOS ROSAS
    36 – 6IZQ – 28003 Madrid.<br><br>

    El Usuario que así lo desee, puede ponerse en contacto con Box2Box a través de la
    siguiente dirección de correo electrónico: <a class="text-electric underline" href="mailto:hola@box2boxstorage.com">hola@box2boxstorage.com</a><br><br>

    El acceso y/o uso del Sitio Web le atribuye la condición de usuario (en adelante, el
    <b>"Usuario"</b> o los <b>"Usuarios"</b>) comprometiéndose a la observancia y cumplimiento de las
    disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de
    aplicación.<br><br>

    Se entienden como vigentes las condiciones que estén publicadas en el momento en el
    que el Usuario acceda al Sitio Web. Por ello, el Usuario debe leer atentamente el
    presente Aviso Legal en cada una de las ocasiones en que se proponga utilizar el Sitio
    Web, ya que éste y sus condiciones de uso recogidas en el presente Aviso Legal
    pueden sufrir modificaciones.<br>
2:
  title: "Propiedad intelectual e industrial"
  body: |
    Todos los contenidos del Sitio Web, entendiendo por estos a título meramente
    enunciativo, los textos, fotografías, gráficos, imágenes, iconos, tecnología, software,
    links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos
    fuente (en adelante, los <b>"Contenidos"</b>), son propiedad intelectual de Box2Box o bien
    de terceros, que han autorizado la utilización de estos por Box2Box, siendo Box2Box a
    quien le corresponde el ejercicio exclusivo de los derechos de explotación de los
    mismos.<br><br>

    El acceso y uso del Sitio Web, en ningún momento implica la cesión ni concesión de
    licencia al Usuario sobre ninguno de los derechos de explotación sobre los Contenidos
    reconocidos por la normativa vigente en materia de propiedad intelectual, tales como
    la reproducción, transmisión, adaptación, traducción, distribución o comunicación pública, salvo aquellos que resulten estrictamente necesarios para el uso y
    visualización del Sitio Web desde un dispositivo personal. <br><br>

    Del mismo modo, las marcas, nombres comerciales o signos distintivos mostrados en
    el Sitio Web son titularidad de Box2Box o terceros, sin que pueda entenderse que el
    acceso al Sitio Web atribuya ningún derecho sobre las citadas marcas, nombres
    comerciales y/o signos distintivos a los Usuarios.<br>
3:
  title: "Uso del sitio web"
  body: |
    El Usuario se compromete a utilizar el Sitio Web de conformidad a la Ley y al presente
    Aviso Legal, así como a la moral y a buenas costumbres. A tal efecto, el Usuario se
    abstendrá de utilizar la página con finalidades ilícitas o prohibidas. En particular, y a
    mero título enunciativo y no exhaustivo, el Usuario se compromete a abstenerse de:

    <ul class='list-disc pl-8'>
        <li> Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden
        público que atenten contra los derechos fundamentales y las libertades
        públicas reconocidas constitucionalmente, en tratados internacionales y otras
        normas vigentes.</li>
        <li> Incurrir en comportamientos que induzcan, inciten o promuevan actuaciones,
        actitudes o pensamientos discriminatorios por razón de sexo, raza, religión,
        creencias, edad o condición. </li>
        <li> Realizar actos constitutivos de publicidad ilícita, engañosa o desleal.</li>
        <li>Provocar daños en los sistemas físicos y lógicos del Sitio Web, de sus
        proveedores o de terceras personas.</li>
        <li>Intentar acceder, utilizar y/o manipular los datos, terceros proveedores y otros
        usuarios.</li>
        <li>Reproducir o copiar, distribuir, permitir el acceso del público a través de
        cualquier modalidad de comunicación pública, transformar o modificar los
        Contenidos, a menos que se cuente con la autorización de Box2Box.</li>
        <li>Extraer y/o reutilizar la totalidad o una parte sustancial de los Contenidos
        integrantes del Sitio Web, así como de las bases de datos que Box2Box ponga a
        disposición de los Usuarios.</li>
    </ul>

    Box2Box tendrá derecho a investigar y denunciar cualquiera de las conductas
    mencionadas de acuerdo con la Ley, así como a colaborar con las autoridades en la
    investigación de dichas actuaciones.<br><br>

    El Usuario responderá frente a Box2Box o frente a terceros de cualesquiera daños y
    perjuicios que pudieran causarse como consecuencia del incumplimiento de dichas
    obligaciones.<br>
4:
  title: "Responsabilidad y garantías"
  body: |

    Los Contenidos mostrados en el Sitio Web tienen carácter meramente informativo y no
    constituyen, en modo alguno, la prestación de un servicio de asesoramiento de ningún
    tipo, por lo que dicha información resulta insuficiente para la toma de decisiones
    personales o empresariales por parte del Usuario.<br><br>

    Box2Box no se responsabiliza de las actuaciones, daños y perjuicios y decisiones
    tomadas por los Usuarios a partir de la información y/o los Contenidos suministrados
    en el Sitio Web.<br><br>

    Asimismo, Box2Box no otorga ninguna garantía ni se hace responsable, en ningún
    caso, de los daños y perjuicios de cualquier naturaleza que pudieran traer causa de:
    <ul class='list-disc pl-8'>
        <li> La falta de disponibilidad, mantenimiento y efectivo funcionamiento del
        Sitio Web y/o de sus servicios o Contenidos.</li>
        <li> La falta de utilidad, adecuación o validez del Sitio Web y/o de sus servicios o
        Contenidos para satisfacer necesidades, actividades o resultados concretos
        o expectativas de los Usuarios. </li>
        <li> La existencia de virus, programas maliciosos o lesivos en los Contenidos.</li>
        <li>La recepción, obtención, almacenamiento, difusión o transmisión, por parte
        de los Usuarios, de los Contenidos.</li>
        <li>Los daños producidos en los equipos informáticos de los Usuarios o de
        terceros durante la prestación del servicio del Sitio Web.</li>
        <li>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios
        prestados por terceros y puestos a disposición de los Usuarios en el Sitio
        Web.</li>
        <li>El incumplimiento por parte de terceros de sus obligaciones o compromisos
        en relación con los servicios prestados a los Usuarios a través del Sitio Web.</li>
    </ul>

    Box2Box no asume ninguna responsabilidad sobre los enlaces a otras páginas web (en
    adelante, los <b>"Sitios Enlazados"</b>) que se encuentren en el Sitio Web pudiendo dirigir al
    Usuario a otros sitios web sobre los que Box2Box no tiene ningún tipo de control.<br><br>

    La inclusión de vínculos a los Sitios Enlazados no implica la aprobación de sus
    contenidos por parte de Box2Box ni la existencia de ningún tipo de asociación entre
    Box2Box y los respectivos titulares de los Sitios Enlazados. Por ello el Usuario accede
    bajo su exclusiva responsabilidad al Contenido y en las condiciones de uso que rijan en
    los mismos.<br><br>

    En el caso de que el Usuario tuviera conocimiento de que los Sitios Enlazados remiten
    a páginas web cuyos contenidos o servicios son ilícitos, nocivos, denigrantes, violentos o contrarios a la moral, podrá ponerse en contacto con Box2Box indicando los
    siguientes extremos:
    <ul class='list-disc pl-8'>
        <li> Datos personales del comunicante: nombre, dirección, número de teléfono y
        dirección de correo electrónico.</li>
        <li> Descripción de los hechos que revelan el carácter ilícito o inadecuado del Sitio
        Enlazado. </li>
        <li> En el supuesto de violación de derechos, tales como propiedad intelectual e
        industrial, los datos personales del titular del derecho infringido cuando sea persona
        distinta del comunicante. Asimismo, deberá aportar el título que acredite la
        legitimación del titular de los derechos y, en su caso, el de representación para actuar
        por cuenta del titular cuando sea persona distinta del comunicante.</li>
        <li>Declaración expresa de que la información contenida en la reclamación es exacta.</li>
    </ul>

    La recepción por parte de Box2Box de la comunicación prevista en esta cláusula no
    supondrá, según lo dispuesto en la LSSI, el conocimiento efectivo de las actividades y/o
    contenidos indicados por el comunicante.<br>
5:
  title: "Duración, modificación y suspensión"
  body: |
    El presente Aviso Legal estará vigente con carácter indefinido, pudiendo Box2Box
    efectuar cambios sobre las condiciones especificadas en el mismo, y que entrarán en
    vigor desde el momento de su publicación.<br><br>

    Box2Box podrá suspender temporalmente y sin previo aviso, la accesibilidad al Sitio
    Web con motivo de operaciones de mantenimiento, reparación, actualización o
    mejora. No obstante, siempre que las circunstancias lo permitan, Box2Box comunicará
    al Usuario, con antelación suficiente, la fecha prevista para la suspensión de los
    Servicios.<br>
6:
  title: "Legislación aplicable"
  body: |
    El presente Aviso Legal se rige en todos y cada uno de sus extremos por la ley
    española.
</i18n>
<i18n lang="yaml" locale="fr">
title: "Avis juridique | Box2box"
meta_description: "Afin de respecter l'article 10 de la loi 34/2002 sur les services de la société de l'information et le commerce électronique, nous informons les utilisateurs de nos données"
sectionName: "Avis juridique"
1:
  title: "Informations juridiques et acceptation"
  body: |
    Afin de respecter l'article 10 de la loi 34/2002 des services de la société de l'information et du commerce
    électronique, nous vous informons que le présent site web <a class="text-electric underline" href="{url_path}">{url}</a> (ci-après le "Box2box") est la
    propriété de BOX2BOX SL (ci-après<b>"Box2box"</b>), avec N.I.F. : B87985115 et adresse Calle Rios Rosas 36, 28003 Madrid.<br><br>

    L'Utilisateur qui le souhaite, peut contacter Box2Box à travers l'adresse électronique suivante :
    <a class="text-electric underline" href="mailto:contact@box2boxstorage.com">contact@box2boxstorage.com</a>.<br><br>

    L'accès et/ou l'utilisation du Site vous confère la qualité d'utilisateur (ci-après L'
    <b>"utilisateur"</b> ou les <b>"Utilisateurs"</b>) acceptant le respect et l'application des dispositions des présentes, ainsi que de toute autre
    disposition légale pouvant s'appliquer.<br><br>

    Les conditions publiées au moment où l'utilisateur accède au site web sont réputées être en vigueur. Par
    conséquent, l'utilisateur doit lire attentivement le présent avis juridique chaque fois qu'il a l'intention d'utiliser
    le site Web, car le site Web et ses conditions d'utilisation énoncées dans le présent avis juridique peuvent
    subir des modifications.<br>
2:
  title: "Propriété intellectuelle et industrielle"
  body: |
    Tous les contenus du Site Web, y compris, mais sans s'y limiter, les textes, les photographies, les
    graphiques, les images, les icônes, la technologie, les logiciels, les liens et autres contenus audiovisuels ou
    audio, ainsi que la conception graphique et le code source((ci-après le <b>"Contenu"</b>), sont la propriété
    intellectuelle de Box2Box ou de tiers qui ont autorisé l'utilisation de ceux-ci par Box2Box, étant Box2Box qui
    dispose des droits exclusifs pour les exploiter.<br><br>

    L'accès et l'utilisation du site Web n'impliquent à aucun moment le transfert ou la concession à l'utilisateur de
    l'un quelconque des droits d'exploitation du contenu reconnus par la législation en vigueur sur la propriété
    intellectuelle, tels que la reproduction, la transmission, l'adaptation, la traduction, la distribution ou la
    communication publique, à l'exception de ceux qui sont strictement nécessaires à l'utilisation et à l'affichage
    du site Web depuis un dispositif personnel.<br><br>

    De même, les marques, noms commerciaux ou logos affichés sur le Site sont la propriété de Box2Box ou de
    tiers, sans qu'il soit entendu que l'accès au Site attribue aux utilisateurs un quelconque droit sur ces
    marques, noms commerciaux et/ou logos.<br>
3:
  title: "Utilisation du site web"
  body: |
    L'utilisateur s'engage à utiliser le site Web conformément à la loi et au présent avis juridique, ainsi qu'à la
    moralité et à la décence. A cet effet, l'Utilisateur s'abstient d'utiliser le Site à des fins illicites ou interdites. En
    particulier, et simplement à titre d'exemple et sans limitation, l'Utilisateur s'engage à s'abstenir de :

    <ul class='list-disc pl-8'>
        <li> Se livrer à des activités illicites, illégales ou contraires à la bonne foi et à l'ordre public qui violent les droits
        fondamentaux et les libertés publiques reconnus dans la Constitution, dans les traités internationaux et dans
        les autres réglementations en vigueur.</li>
        <li> Adopter un comportement qui induit, incite ou promeut des actions, des attitudes ou des pensées
        discriminatoires fondées sur le sexe, la race, la religion, les croyances, l'âge ou la condition.</li>
        <li> Réaliser des actes constituant une publicité illicite, trompeuse ou déloyale.</li>
        <li> Causer des dommages aux systèmes physiques et logiques du site Web, de ses fournisseurs ou de tiers.</li>
        <li>Tenter d'accéder, d'utiliser et/ou de manipuler les données, les fournisseurs tiers et les autres utilisateurs.</li>
        <li>Reproduire ou copier, distribuer, permettre l'accès public par toute forme de communication publique,
        transformer ou modifier le Contenu, sauf autorisation de Box2Box.</li>
        <li>Extraire et/ou réutiliser la totalité ou une partie substantielle du contenu du Site, ainsi que les bases de
        données que Box2Box met à la disposition des utilisateurs.</li>
    </ul>

    Box2Box aura le droit d'enquêter et de signaler toute conduite ci-dessus conformément à la loi, ainsi que de
    coopérer avec les autorités dans l'enquête de ces actions.<br><br>

    L'utilisateur sera responsable à l'égard de Box2Box ou de tiers de tout dommage qui pourrait être causé à la
    suite d'un manquement à ces obligations.<br>
4:
  title: "Responsabilité et garanties"
  body: |
    Les contenus affichés sur le site Web ont un caractère purement informatif et ne constituent en aucun cas la
    fourniture d'un service de conseil de quelque nature que ce soit, de sorte que ces informations sont
    insuffisantes pour permettre à l'utilisateur de prendre des décisions personnelles ou professionnelles.<br><br>

    Box2Box n'est pas responsable des actions, dommages et décisions prises par les utilisateurs à partir des
    informations et/ou du contenu fournis sur le Site.<br><br>

    En outre, Box2Box ne donne aucune garantie ou responsabilité en aucun cas, pour les dommages de toute
    nature qui peuvent être causés par :
    <ul class='list-disc pl-8'>
        <li> Le manque de disponibilité, de maintenance et de fonctionnement efficace du site web et/ou de ses services
        ou de son contenu.</li>
        <li> Le manque d'utilité, d'adéquation ou de validité du site Web et/ou de ses services ou contenus pour
        satisfaire les besoins, les activités ou les résultats spécifiques ou les attentes des utilisateurs.</li>
        <li> L'existence de virus, de programmes malveillants ou nuisibles dans les contenus.</li>
        <li>La réception, l'obtention, le stockage, la diffusion ou la transmission, par les utilisateurs, des contenus.</li>
        <li>Les dommages causés aux équipements informatiques des Utilisateurs ou de tiers lors de la prestation du
        service du site web.</li>
        <li>Le manque de légalité, de qualité, de fiabilité, d'utilité et de disponibilité des services fournis par des tiers et
        mis à la disposition des Utilisateurs sur le Site Internet.</li>
        <li>Manquement de la part de tiers à leurs obligations ou engagements en rapport avec les services fournis aux
        utilisateurs par le biais du site web.</li>
    </ul>

    Box2Box n'assume aucune responsabilité pour les liens vers d'autres sites web (ci-après les
     <b>"Sites Liés"</b>) qui se trouvent sur le Site peuvent diriger l'Utilisateur vers d'autres sites web sur lesquels Box2Box n'a aucun
    contrôle.<br><br>

    L'inclusion de liens vers les sites liés n'implique pas l'approbation de leur contenu par Box2Box ni l'existence
    d'une association entre Box2Box et les propriétaires respectifs des sites liés. L'utilisateur accède donc sous
    sa seule responsabilité au contenu et aux conditions d'utilisation qui le régissent.<br><br>

    Dans le cas où L'utilisateur se rend compte que les Sites Liés renvoient à des sites web dont le contenu ou
    les services sont illégaux, nuisibles, dégradants, violents ou contraires aux bonnes mœurs, il peut contacter
    Box2Box en indiquant les points suivants :
    <ul class='list-disc pl-8'>
        <li> Données personnelles de l'appelant : nom, adresse, numéro de téléphone et adresse électronique.</li>
        <li> Description des faits qui révèlent le caractère illégal ou inapproprié du site lié. </li>
        <li> En cas de violation de droits, tels que la propriété intellectuelle et industrielle, les données personnelles du
        titulaire du droit violé lorsqu'il s'agit d'une personne autre que la partie communicante. De même, le titre
        accréditant la légitimité du titulaire des droits et, le cas échéant, celui de la représentation pour agir au nom
        du titulaire lorsqu'il s'agit d'une personne autre que la partie communicante doit être fourni.</li>
        <li>Déclaration expresse que les informations contenues dans la demande sont exactes.</li>
    </ul>

    La réception par Box2Box de la communication en vertu de cette clause n'implique pas, selon les
    dispositions de la LSSI, la connaissance effective des activités et / ou du contenu indiqués par l'appelant.<br>
5:
  title: "Durée, modification et suspension"
  body: |
    Cet avis juridique restera en vigueur indéfiniment,
    Box2Box peut apporter des modifications aux conditions qui y sont spécifiées,
    et entrera en vigueur à partir du moment de sa publication.<br><br>

    Box2Box peut suspendre temporairement et sans préavis l'accès au Site pour des raisons de maintenance,
    réparation, mise à niveau ou amélioration. Toutefois, si les circonstances le permettent, Box2Box communiquera à l'Utilisateur,
    bien à l'avance, la date prévue pour la suspension des Services.<br>
6:
  title: "Législation applicable"
  body: |
    Le présent avis juridique est régi à tous égards par le droit français.
</i18n>
<i18n lang="yaml" locale="it">
title: "Avviso legale | Box2box"
meta_description: "Al fine di ottemperare all'articolo 10 della legge 34/2002 sui servizi della società dell'informazione e del commercio elettronico, informiamo gli utenti dei nostri dati."
sectionName: "Avviso Legale"
1:
  title: "Informazioni legali e accettazione"
  body: |
    Al fine di rispettare l'articolo 10 della Legge 34/2002 sui Servizi della Società dell'Informazione e del Commercio Elettronico,
    vi informiamo che il presente sito web <a class="text-electric underline" href="{url_path}">{url}</a> (di seguito il "Sito") è di proprietà di BOX2BOX, SL (di seguito "Box2box"),
    con NIF: B87985115 e domiciliato in RIOS ROSAS 36 - 6IZQ - 28003 Madrid.<br><br>

    L'Utente che lo desideri, può contattare Box2Box attraverso il seguente indirizzo e-mail:
    <a class="text-electric underline" href="mailto:info@box2boxstorage.com">info@box2boxstorage.com</a>.<br><br>

    L'accesso e/o l'utilizzo del Sito web conferisce all'utente lo status di utente (di seguito
    <b>"Utente"</b> o <b>"Utenti"</b>) che accetta l'osservanza e l'applicazione delle disposizioni del presente documento,
    nonché di qualsiasi altra disposizione legale applicabile.<br><br>

    Si intendono in vigore le condizioni pubblicate al momento dell'accesso dell'Utente al Sito. Pertanto, l'Utente è tenuto a
    leggere attentamente il presente Avviso legale ogni volta che intende utilizzare il Sito web, in quanto il Sito web
    e le sue condizioni di utilizzo riportate nel presente Avviso legale possono subire modifiche.<br>
2:
  title: "Proprietà intellettuale e industriale"
  body: |
    Tutti i contenuti del Sito, compresi, a titolo esemplificativo e non esaustivo, testi, fotografie, grafici, immagini, icone, tecnologie,
    software, link e altri contenuti audiovisivi o sonori, nonché il design grafico e il codice sorgente (di seguito i <b>"Contenuti"</b>),
    sono di proprietà intellettuale di Box2Box o di terzi che ne hanno autorizzato l'uso da parte di Box2Box, essendo Box2Box titolare dei diritti esclusivi di sfruttamento.<br><br>

    L'accesso e l'utilizzo del Sito web non implica in alcun momento il trasferimento o la concessione in licenza all'utente di alcuno dei
    diritti di sfruttamento del Contenuto riconosciuti dalla normativa vigente in materia di proprietà intellettuale, quali la riproduzione,
    la trasmissione, l'adattamento, la traduzione, la distribuzione o la comunicazione pubblica, ad eccezione di quelli strettamente necessari
    per l'utilizzo e la visualizzazione del Sito web da un dispositivo personale.<br><br>

    Allo stesso modo, i marchi, i nomi commerciali o i loghi visualizzati sul Sito sono di proprietà di Box2Box o di terzi,
    senza che sia inteso che l'accesso al Sito attribuisca alcun diritto su tali marchi, nomi commerciali e/o loghi agli utenti.<br>
3:
  title: "Utilizzo del sito web"
  body: |
    L'Utente si impegna a utilizzare il Sito Web in conformità alla Legge e al presente Avviso legale, nonché alla morale e al buon costume. A tal fine,
    l'Utente si asterrà dall'utilizzare il Sito Web per scopi illeciti o proibiti. In particolare, a titolo meramente esemplificativo e non esaustivo,
    l'Utente si impegna ad astenersi da:

    <ul class='list-disc pl-8'>
        <li> Compiere attività illecite, illegali o contrarie alla buona fede e all'ordine pubblico che violino i diritti fondamentali e le
        libertà pubbliche riconosciute dalla Costituzione, dai trattati internazionali e da altre normative in vigore.</li>
        <li> Comportarsi in modo da indurre, incitare o promuovere azioni, atteggiamenti o pensieri discriminatori per motivi di sesso, razza, religione, convinzioni, età o condizione. </li>
        <li> Compiere atti che costituiscono pubblicità illecita, ingannevole o sleale.</li>
        <li> Causare danni ai sistemi fisici e logici del Sito Web, dei suoi fornitori o di terzi.</li>
        <li> Tentare di accedere, utilizzare e/o manipolare i dati, i fornitori terzi e gli altri utenti.</li>
        <li> Riprodurre o copiare, distribuire, consentire l'accesso pubblico attraverso qualsiasi forma di comunicazione pubblica, trasformare o modificare il Contenuto, salvo autorizzazione di Box2Box.</li>
        <li> Estrarre e/o riutilizzare tutti o una parte sostanziale dei contenuti del sito web, nonché delle banche dati che Box2Box mette a disposizione degli utenti.</li>
    </ul>

    Box2Box avrà il diritto di indagare e segnalare qualsiasi comportamento di cui sopra in conformità con la legge, nonché di collaborare con le autorità nelle indagini su tali azioni.<br><br>

    L'Utente sarà responsabile nei confronti di Box2Box o di terzi per qualsiasi danno che possa essere causato in conseguenza della violazione di tali obblighi.<br>
4:
  title: "Responsabilità e garanzie"
  body: |
    I contenuti visualizzati sul Sito Web hanno uno scopo puramente informativo e non costituiscono, in alcun modo, la fornitura di un servizio di consulenza di alcun tipo,
    per cui tali informazioni non sono sufficienti per prendere decisioni personali o commerciali da parte dell'Utente.<br><br>

    Box2Box non è responsabile delle azioni, dei danni e delle decisioni prese dagli utenti a partire dalle informazioni e/o dai contenuti forniti sul Sito.<br><br>

    Inoltre, Box2Box non fornisce alcuna garanzia o responsabilità in ogni caso, per danni di qualsiasi tipo che possono essere causati da:
    <ul class='list-disc pl-8'>
        <li> La mancanza di disponibilità, manutenzione e funzionamento efficace del Sito e/o dei suoi servizi o Contenuti.</li>
        <li> La mancanza di utilità, idoneità o validità del Sito Web e/o dei suoi servizi o Contenuti per soddisfare le esigenze,
        le attività o i risultati specifici o le aspettative degli Utenti.</li>
        <li> L'esistenza di virus, programmi dannosi o nocivi nei Contenuti.</li>
        <li> La ricezione, l'ottenimento, la memorizzazione, la diffusione o la trasmissione, da parte degli Utenti, dei Contenuti.</li>
        <li> Danni causati alle apparecchiature informatiche degli Utenti o di terzi durante la fornitura del servizio del Sito Web.</li>
        <li> La mancanza di legalità, qualità, affidabilità, utilità e disponibilità dei servizi forniti da terzi e messi a disposizione degli Utenti sul Sito.</li>
        <li> Inadempimento da parte di terzi dei propri obblighi o impegni in relazione ai servizi forniti agli utenti attraverso il Sito web.</li>
    </ul>

    Box2Box non si assume alcuna responsabilità per i link ad altri siti web (di seguito i
    <b>"Siti Collegati"</b>) che si trovano sul Sito possono indirizzare l'Utente ad altri siti web sui quali Box2Box non ha alcun controllo.<br><br>

    L'inclusione di link ai siti collegati non implica l'approvazione dei contenuti da parte di Box2Box né l'esistenza di alcuna associazione tra Box2Box
    e i rispettivi proprietari dei siti collegati. Pertanto l'Utente accede sotto la sua esclusiva responsabilità ai Contenuti e alle condizioni di utilizzo che li regolano.<br><br>

    Nel caso in cui l'Utente venga a conoscenza che i Siti Collegati rimandano a siti web il cui contenuto o i cui servizi sono illegali, dannosi,
    degradanti, violenti o contrari alla morale, può contattare Box2Box indicando i seguenti punti:
    <ul class='list-disc pl-8'>
        <li> Dati personali del chiamante: nome, indirizzo, numero di telefono e indirizzo e-mail;</li>
        <li> Descrizione dei fatti che rivelano la natura illegale o inappropriata del sito collegato; </li>
        <li> In caso di violazione di diritti, quali la proprietà intellettuale e industriale, i dati personali del titolare del diritto violato,
        se si tratta di una persona diversa dalla parte che comunica. Allo stesso modo, deve essere fornito il titolo che accredita la
        legittimità del titolare dei diritti e, se del caso, quello della rappresentanza ad agire per conto del titolare quando questo è
        una persona diversa dalla parte comunicante;</li>
        <li> Dichiarazione esplicita che le informazioni contenute nella richiesta di risarcimento sono esatte.</li>
    </ul>

    La ricezione da parte di Box2Box della comunicazione di cui alla presente clausola non implica, ai sensi delle disposizioni della LSSI,
    l'effettiva conoscenza delle attività e/o dei contenuti indicati dal chiamante.<br>
5:
  title: "Durata, modifica e sospensione"
  body: |
    Il presente Avviso Legale rimarrà in vigore a tempo indeterminato, Box2Box potrà apportare modifiche alle condizioni in esso specificate,
    ed entrerà in vigore dal momento della sua pubblicazione.<br><br>

    Box2Box può sospendere temporaneamente e senza preavviso l'accesso al sito web per manutenzione, riparazione, aggiornamento o miglioramento. Tuttavia,
    ogni qualvolta le circostanze lo consentano, Box2Box comunicherà all'Utente, con sufficiente preavviso, la data prevista per la sospensione dei Servizi.  <br>
6:
  title: "Legge applicabile"
  body: |
    Il presente Avviso legale è disciplinato in ogni sua parte dalla legge spagnola.
</i18n>
<i18n lang="yaml" locale="pt">
title: "Aviso Legal | Box2box"
meta_description: "A fim de cumprir o artigo 10 da Lei 34/2002 sobre Serviços da Sociedade da Informação e Comércio Electrónico, informamos os utilizadores dos nossos dados."
sectionName: "Aviso legal"
1:
  title: "Informação legal e aceitação"
  body: |
    A fim de cumprir o Artigo 10 da Lei 34/2002 de Serviços da Sociedade da Informação e Comércio
    Electrónico, informamos que este website <a class="text-electric underline" href="{url_path}">{url}</a> (daqui em diante "Website") é propriedade da
    STUFF2BOX UNIP LDA, (en adelante, <b>"Box2box"</b>), Av. Fontes Pereira Melo - Palácio Sotto Mayor Galería A
    16, C.P. 1050-121, LISBOA.<br><br>

    O Utilizador que o desejar, pode contactar a Box2Box através do seguinte endereço electrónico: <a class="text-electric underline" href="mailto:contacto@box2boxstorage.com">contacto@box2boxstorage.com</a>.<br><br>

    O acesso e/ou utilização do Website dá-lhe o estatuto de utilizador (en adelante, el
    <b>"Utilizador"</b> o los <b>"Utilizadores"</b>) concordando com a observância e aplicação das disposições aqui contidas, bem como de qualquer outra
    disposição legal que se possa aplicar.<br><br>

    As condições publicadas no momento em que o Utilizador acede ao Website são entendidas como estando
    em vigor. Por conseguinte, o Utilizador deve ler atentamente este Aviso Legal cada vez que pretender
    utilizar o Website, uma vez que o Website e as suas condições de utilização estabelecidas neste Aviso
    Legal podem sofrer modificações.<br>
2:
  title: "Propriedade Intelectual e Industrial"
  body: |
    Todos os conteúdos do Website, incluindo mas não se limitando a, texto, fotografias, gráficos, imagens,
    ícones, tecnologia, software, links e outros conteúdos audiovisuais ou áudio, bem como o design gráfico e o
    código fonte (en adelante, los <b>"Conteúdo"</b>), são propriedade intelectual da Box2Box ou de terceiros que tenham
    autorizado a sua utilização pela Box2Box, sendo a Box2Box a detentora dos direitos exclusivos de
    exploração dos mesmos.<br><br>

    O acesso e utilização do Website, em nenhum momento implica a transferência ou licenciamento ao
    utilizador de qualquer dos direitos de exploração do Conteúdo reconhecido pela actual legislação sobre
    propriedade intelectual, tais como reprodução, transmissão, adaptação, tradução, distribuição ou
    comunicação pública, excepto os estritamente necessários para a utilização e exibição do Website a partir
    de um dispositivo pessoal.<br><br>

    Da mesma forma, as marcas, nomes comerciais ou logótipos exibidos no Website são propriedade da
    Box2Box ou de terceiros, sem se entender que o acesso ao Website atribui qualquer direito sobre tais
    marcas, nomes comerciais e/ou logótipos aos utilizadores.<br>
3:
  title: "Utilização do Website"
  body: |
    O Utilizador concorda em utilizar o Website em conformidade com a Lei e este Aviso Legal, bem como a
    moralidade e decência. Para este efeito, o Utilizador abster-se-á de utilizar a página para fins ilícitos ou
    proibidos. Em particular, e meramente a título de exemplo e sem limitação, o Utilizador compromete-se a
    abster-se:

    <ul class='list-disc pl-8'>
        <li> Envolver-se em actividades ilícitas, ilegais ou contrárias à boa fé e à ordem pública que violem os direitos
        fundamentais e as liberdades públicas reconhecidas na Constituição, em tratados internacionais e outros
        regulamentos em vigor.</li>
        <li> Envolver-se em comportamentos que induzem, incitam ou promovem acções, atitudes ou pensamentos
        discriminatórios em razão do sexo, raça, religião, crenças, idade ou condição.</li>
        <li> Praticar actos que constituam publicidade ilícita, enganosa ou desleal.</li>
        <li>Causar danos nos sistemas físicos e lógicos do Website, nos seus fornecedores ou em terceiros.</li>
        <li>Tentativa de acesso, utilização e/ou manipulação dos dados, fornecedores terceiros e outros utilizadores.</li>
        <li>Reproduzir ou copiar, distribuir, permitir o acesso público através de qualquer forma de comunicação
        pública, transformar ou modificar o Conteúdo, a menos que autorizado pela Box2Box.</li>
        <li>Extrair e/ou reutilizar todo ou uma parte substancial do conteúdo do Website, bem como as bases de dados
        que a Box2Box coloca à disposição dos utilizadores.</li>
    </ul>

    A Box2Box terá o direito de investigar e denunciar qualquer das condutas acima referidas em conformidade
    com a lei, bem como de cooperar com as autoridades na investigação de tais acções.<br><br>

    O Utilizador será responsável perante a Box2Box ou terceiros por quaisquer danos que possam ser
    causados como resultado de uma violação destas obrigações.<br>
4:
  title: "Responsabilidade e Garantias"
  body: |

    Os conteúdos apresentados no Website são puramente informativos e não constituem, de forma alguma, a
    prestação de um serviço de aconselhamento de qualquer tipo, pelo que tais informações são insuficientes
    para a tomada de decisões pessoais ou comerciais por parte do Utilizador.<br><br>

    A Box2Box não é responsável pelas acções, danos e decisões tomadas pelos utilizadores a partir das
    informações e/ou conteúdos fornecidos no Website.<br><br>

    Além disso, a Box2Box não dá qualquer garantia ou responsabilidade, em qualquer caso, por danos de
    qualquer tipo que possam ser causados por:
    <ul class='list-disc pl-8'>
        <li> A falta de disponibilidade, manutenção e funcionamento eficaz do Website e/ou dos seus serviços ou
        Conteúdo.</li>
        <li> A falta de utilidade, adequação ou validade do Website e/ou dos seus serviços ou Conteúdos para satisfazer
        as necessidades, actividades ou resultados específicos ou expectativas dos Utilizadores.</li>
        <li> A existência de vírus, programas maliciosos ou nocivos nos Conteúdos.</li>
        <li>A recepção, obtenção, armazenamento, difusão ou transmissão, por parte dos Utilizadores, dos Conteúdos.</li>
        <li>Danos causados ao equipamento informático dos Utilizadores ou de terceiros durante a prestação do
        serviço do Website.</li>
        <li>A falta de legalidade, qualidade, fiabilidade, utilidade e disponibilidade dos serviços prestados por terceiros e
        colocados à disposição dos Utilizadores no Website.</li>
        <li>Incumprimento por terceiros das suas obrigações ou compromissos em relação aos serviços prestados aos
        utilizadores através do Website.</li>
    </ul>

    A Box2Box não assume qualquer responsabilidade por ligações a outros websites (daqui em diante os
     <b>"Sites Ligados"</b>) que se encontram no Website podem direccionar o Utilizador para outros websites sobre os
    quais a Box2Box não tem qualquer controlo.<br><br>

    A inclusão de links para os Sites Ligados não implica a aprovação do seu conteúdo pela Box2Box nem a
    existência de qualquer associação entre a Box2Box e os respectivos proprietários dos Sites Ligados. Por
    conseguinte, o Utilizador acede sob a sua exclusiva responsabilidade ao Conteúdo e às condições de
    utilização que regem o mesmo.<br><br>

    Caso o Utilizador tenha conhecimento de que os Sítios Ligados se referem a sítios cujo conteúdo ou
    serviços são ilegais, nocivos, degradantes, violentos ou contrários à moral, pode contactar a Box2Box
    indicando os seguintes pontos:
    <ul class='list-disc pl-8'>
        <li> Dados pessoais do comunicador: nome, morada, número de telefone e endereço de correio electrónico.</li>
        <li> Descrição dos factos que revelam a natureza ilegal ou inadequada do Sítio Vinculado. </li>
        <li> Em caso de violação de direitos, tais como propriedade intelectual e industrial, os dados pessoais do
        proprietário do direito violado quando se trata de uma pessoa que não seja a parte comunicante. Do mesmo
        modo, deve ser fornecido o título que atesta a legitimidade do titular dos direitos e, quando apropriado, o de
        representação para agir em nome do titular quando este é uma pessoa que não seja a parte comunicante.</li>
        <li> Declaração expressa de que a informação contida na reclamação é exacta.</li>
    </ul>

    A recepção pela Box2Box da comunicação ao abrigo desta cláusula não implica, de acordo com as
    disposições do LSSI, o conhecimento efectivo das actividades e/ou conteúdos indicados pelo autor da
    chamada.<br>
5:
  title: "Duração, modificação e suspensão"
  body: |
    Este Aviso Legal permanecerá em vigor indefinidamente,
    a Box2Box pode fazer alterações às condições aqui especificadas,
    e que entrarão em vigor a partir do seu em vigor desde o momento da sua publicação.<br><br>

    Box2Box pode suspender temporariamente e sem aviso prévio, a acessibilidade ao Website para operações de manutenção, reparação, actualização ou actualização.
    Para operações de manutenção, reparação, actualização ou melhoria.
    No entanto, desde que as circunstâncias o permitam, a Box2Box comunicará o Utilizador, com suficiente antecedência, a data prevista para a suspensão dos Serviços.<br>
6:
  title: "Legislação aplicável"
  body: |
    Este Aviso Legal é regido em todos e cada um dos seus aspectos pela lei portuguesa.
</i18n>
<i18n lang="yaml" locale="mx">
title: "Aviso legal | Box2box"
meta_description: "Aviso legal de Box2box en conformidad con la legislación de los Estados Unidos Mexicanos"
sectionName: "Aviso legal"
1:
  title: "Información legal y aceptación"
  body: |
    Le informamos de que el presente sitio web <a class="text-electric underline" href="{url_path}">{url}</a> (en adelante, el "Sitio Web")
    es titularidad de GRUPO BOX2BOX MESTORAGE SAPI DE CV (en adelante, <b>"Box2box"</b>) y
    domicilio en Carretera Estatal 200 km 16070-70, interior 81, San Isidro, El Marqués, Querétaro, CP. 76246. <br><br>

    El Usuario que así lo desee, puede ponerse en contacto con Box2Box a través de la
    siguiente dirección de correo electrónico: <a class="text-electric underline" href="mailto:atencion@box2boxstorage.com">atencion@box2boxstorage.com</a><br><br>

    El acceso y/o uso del Sitio Web le atribuye la condición de usuario (en adelante, el
    <b>"Usuario"</b> o los <b>"Usuarios"</b>) comprometiéndose a la observancia y cumplimiento de las
    disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de
    aplicación.<br><br>

    Se entienden como vigentes las condiciones que estén publicadas en el momento en el
    que el Usuario acceda al Sitio Web. Por ello, el Usuario debe leer atentamente el
    presente Aviso Legal en cada una de las ocasiones en que se proponga utilizar el Sitio
    Web, ya que éste y sus condiciones de uso recogidas en el presente Aviso Legal
    pueden sufrir modificaciones.<br>
2:
  title: "Propiedad intelectual e industrial"
  body: |
    Todos los contenidos del Sitio Web, entendiendo por estos a título meramente
    enunciativo, los textos, fotografías, gráficos, imágenes, iconos, tecnología, software,
    links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos
    fuente (en adelante, los <b>"Contenidos"</b>), son propiedad intelectual de Box2Box o bien
    de terceros, que han autorizado la utilización de estos por Box2Box, siendo Box2Box a
    quien le corresponde el ejercicio exclusivo de los derechos de explotación de los
    mismos.<br><br>

    El acceso y uso del Sitio Web, en ningún momento implica la cesión ni concesión de
    licencia al Usuario sobre ninguno de los derechos de explotación sobre los Contenidos
    reconocidos por la normativa vigente en materia de propiedad intelectual, tales como
    la reproducción, transmisión, adaptación, traducción, distribución o comunicación pública, salvo aquellos que resulten estrictamente necesarios para el uso y
    visualización del Sitio Web desde un dispositivo personal. <br><br>

    Del mismo modo, las marcas, nombres comerciales o signos distintivos mostrados en
    el Sitio Web son titularidad de Box2Box o terceros, sin que pueda entenderse que el
    acceso al Sitio Web atribuya ningún derecho sobre las citadas marcas, nombres
    comerciales y/o signos distintivos a los Usuarios.<br>
3:
  title: "Uso del sitio web"
  body: |
    El Usuario se compromete a utilizar el Sitio Web de conformidad a la Ley y al presente
    Aviso Legal, así como a la moral y a buenas costumbres. A tal efecto, el Usuario se
    abstendrá de utilizar la página con finalidades ilícitas o prohibidas. En particular, y a
    mero título enunciativo y no exhaustivo, el Usuario se compromete a abstenerse de:

    <ul class='list-disc pl-8'>
        <li> Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden
        público que atenten contra los derechos fundamentales y las libertades
        públicas reconocidas constitucionalmente, en tratados internacionales y otras
        normas vigentes.</li>
        <li> Incurrir en comportamientos que induzcan, inciten o promuevan actuaciones,
        actitudes o pensamientos discriminatorios por razón de sexo, raza, religión,
        creencias, edad o condición. </li>
        <li> Realizar actos constitutivos de publicidad ilícita, engañosa o desleal.</li>
        <li>Provocar daños en los sistemas físicos y lógicos del Sitio Web, de sus
        proveedores o de terceras personas.</li>
        <li>Intentar acceder, utilizar y/o manipular los datos, terceros proveedores y otros
        usuarios.</li>
        <li>Reproducir o copiar, distribuir, permitir el acceso del público a través de
        cualquier modalidad de comunicación pública, transformar o modificar los
        Contenidos, a menos que se cuente con la autorización de Box2Box.</li>
        <li>Extraer y/o reutilizar la totalidad o una parte sustancial de los Contenidos
        integrantes del Sitio Web, así como de las bases de datos que Box2Box ponga a
        disposición de los Usuarios.</li>
    </ul>

    Box2Box tendrá derecho a investigar y denunciar cualquiera de las conductas
    mencionadas de acuerdo con la Ley, así como a colaborar con las autoridades en la
    investigación de dichas actuaciones.<br><br>

    El Usuario responderá frente a Box2Box o frente a terceros de cualesquiera daños y
    perjuicios que pudieran causarse como consecuencia del incumplimiento de dichas
    obligaciones.<br>
4:
  title: "Responsabilidad y garantías"
  body: |

    Los Contenidos mostrados en el Sitio Web tienen carácter meramente informativo y no
    constituyen, en modo alguno, la prestación de un servicio de asesoramiento de ningún
    tipo, por lo que dicha información resulta insuficiente para la toma de decisiones
    personales o empresariales por parte del Usuario.<br><br>

    Box2Box no se responsabiliza de las actuaciones, daños y perjuicios y decisiones
    tomadas por los Usuarios a partir de la información y/o los Contenidos suministrados
    en el Sitio Web.<br><br>

    Asimismo, Box2Box no otorga ninguna garantía ni se hace responsable, en ningún
    caso, de los daños y perjuicios de cualquier naturaleza que pudieran traer causa de:
    <ul class='list-disc pl-8'>
        <li> La falta de disponibilidad, mantenimiento y efectivo funcionamiento del
        Sitio Web y/o de sus servicios o Contenidos.</li>
        <li> La falta de utilidad, adecuación o validez del Sitio Web y/o de sus servicios o
        Contenidos para satisfacer necesidades, actividades o resultados concretos
        o expectativas de los Usuarios. </li>
        <li> La existencia de virus, programas maliciosos o lesivos en los Contenidos.</li>
        <li>La recepción, obtención, almacenamiento, difusión o transmisión, por parte
        de los Usuarios, de los Contenidos.</li>
        <li>Los daños producidos en los equipos informáticos de los Usuarios o de
        terceros durante la prestación del servicio del Sitio Web.</li>
        <li>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios
        prestados por terceros y puestos a disposición de los Usuarios en el Sitio
        Web.</li>
        <li>El incumplimiento por parte de terceros de sus obligaciones o compromisos
        en relación con los servicios prestados a los Usuarios a través del Sitio Web.</li>
    </ul>

    Box2Box no asume ninguna responsabilidad sobre los enlaces a otras páginas web (en
    adelante, los <b>"Sitios Enlazados"</b>) que se encuentren en el Sitio Web pudiendo dirigir al
    Usuario a otros sitios web sobre los que Box2Box no tiene ningún tipo de control.<br><br>

    La inclusión de vínculos a los Sitios Enlazados no implica la aprobación de sus
    contenidos por parte de Box2Box ni la existencia de ningún tipo de asociación entre
    Box2Box y los respectivos titulares de los Sitios Enlazados. Por ello el Usuario accede
    bajo su exclusiva responsabilidad al Contenido y en las condiciones de uso que rijan en
    los mismos.<br><br>

    En el caso de que el Usuario tuviera conocimiento de que los Sitios Enlazados remiten
    a páginas web cuyos contenidos o servicios son ilícitos, nocivos, denigrantes, violentos o contrarios a la moral, podrá ponerse en contacto con Box2Box indicando los
    siguientes extremos:
    <ul class='list-disc pl-8'>
        <li> Datos personales del comunicante: nombre, dirección, número de teléfono y
        dirección de correo electrónico.</li>
        <li> Descripción de los hechos que revelan el carácter ilícito o inadecuado del Sitio
        Enlazado. </li>
        <li> En el supuesto de violación de derechos, tales como propiedad intelectual e
        industrial, los datos personales del titular del derecho infringido cuando sea persona
        distinta del comunicante. Asimismo, deberá aportar el título que acredite la
        legitimación del titular de los derechos y, en su caso, el de representación para actuar
        por cuenta del titular cuando sea persona distinta del comunicante.</li>
        <li>Declaración expresa de que la información contenida en la reclamación es exacta.</li>
    </ul>

    La recepción por parte de Box2Box de la comunicación prevista en esta cláusula no
    supondrá, según lo dispuesto en la LSSI, el conocimiento efectivo de las actividades y/o
    contenidos indicados por el comunicante.<br>
5:
  title: "Duración, modificación y suspensión"
  body: |
    El presente Aviso Legal estará vigente con carácter indefinido, pudiendo Box2Box
    efectuar cambios sobre las condiciones especificadas en el mismo, y que entrarán en
    vigor desde el momento de su publicación.<br><br>

    Box2Box podrá suspender temporalmente y sin previo aviso, la accesibilidad al Sitio
    Web con motivo de operaciones de mantenimiento, reparación, actualización o
    mejora. No obstante, siempre que las circunstancias lo permitan, Box2Box comunicará
    al Usuario, con antelación suficiente, la fecha prevista para la suspensión de los
    Servicios.<br>
6:
  title: "Legislación aplicable"
  body: |
    El presente Aviso Legal se rige en todos y cada uno de sus extremos por la ley
    vigente en los Estados Unidos Mexicanos.
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/views/legal/legalNotice/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/views/legal/legalNotice/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/views/legal/legalNotice/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/views/legal/legalNotice/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/views/legal/legalNotice/en_mx.yaml"
></i18n>

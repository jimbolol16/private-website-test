<template>
  <ui-legal :sectionName="sectionName">
    <p
      class="font-roboto font-normal text-dark/70 text-[18px] leading-[25px] text-justify"
    >
      <span v-html="$t('body')"></span>
      <a
        class="text-electric underline"
        :href="'mailto:' + this.$t('email')"
        v-if="$te('email')"
        >{{ this.$t("email") }}</a
      >
      <span v-if="$te('footer')">{{ this.$t("footer") }}</span>
    </p>
    <ui-legal-item
      class="mt-6 break-words"
      v-for="(item, index) in content"
      :key="index"
      :title="item.title"
      :body="item.body"
      v-show="item.title !== null"
    >
    </ui-legal-item>
  </ui-legal>
</template>
<script>
export default {
  name: "conditionsView",
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
    pageName: "conditions",
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
          body: this.$t("8.body"),
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
          body: this.$t("12.body"),
        },
        {
          title: this.$t("13.title"),
          body: this.$t("13.body"),
        },
        {
          title: this.$te("14.title") ? this.$t("14.title") : null,
          body: this.$te("14.body") ? this.$t("14.body") : null,
        },
        {
          title: this.$te("15.title") ? this.$t("15.title") : null,
          body: this.$te("15.body") ? this.$t("15.body") : null,
        },
        {
          title: this.$te("16.title") ? this.$t("16.title") : null,
          body: this.$te("16.body") ? this.$t("16.body") : null,
        },
        {
          title: this.$te("17.title") ? this.$t("17.title") : null,
          body: this.$te("17.body") ? this.$t("17.body") : null,
        },
        {
          title: this.$te("18.title") ? this.$t("18.title") : null,
          body: this.$te("18.body") ? this.$t("18.body") : null,
        },
      ],
    };
  },
};
</script>
<i18n lang="yaml" locale="es">
title: "Condiciones generales | Box2box"
meta_description: "Objeto del contrato y descripción del servicio El servicio de traslado y almacenamiento se define como el traslado del domicilio a nuestros centros."
sectionName: "Condiciones generales"
body: De acuerdo con lo establecido en el Reglamento General de Protección de
  Datos 679/2016 y en la Ley Orgánica 3/2018 de 5 de Diciembre de Protección
  de Datos, le informamos que los datos que nos facilite serán incorporados
  a una base de datos titularidad de BOX2BOX, S.L, con N.I.F B87985115 y
  domicilio en CALLE RIOS ROSAS 36 – 6IZQ – 28003 Madrid, con la finalidad
  del mantenimiento y gestión de relaciones comerciales y administrativas.
  La base jurídica del tratamiento es el cumplimiento de la legislación
  fiscal, mercantil y contable. No se prevén cesiones y/o transferencias
  internacionales de datos excepto las autorizadas por ley o las que
  autorice con su consentimiento expreso. Puede ejercer sus derechos de
  acceso, rectificación, supresión (derecho al olvido), limitación de
  tratamiento, portabilidad de los datos, oposición, y a no ser objeto de
  decisiones automatizadas dirigiéndose mediante correo postal a BOX2BOX,
  S.L, CALLE RIOS ROSAS 36 – 6IZQ – 28003 Madrid o bien por email
email: hola@box2boxstorage.com
footer: indicando como Asunto “Derechos Ley Protección de Datos”, y adjuntando
  fotocopia de su DNI. Además, le recordamos que puede dirigirse a la
  Autoridad de Control en materia de Protección de Datos competente (AEPD,
  en España) para obtener información adicional o presentar una reclamación.
1:
  title: "PRIMERA - Objeto del contrato y descripción del servicio"
  body: |
    El servicio de traslado y almacenamiento contratado se define como el traslado o acarreo desde el domicilio de
    recogida que se estipule a nuestros centros de almacenaje (utilizando uno o varios modos de transporte) de
    mobiliario, mercancías o bultos (en adelante, mercancía).<br><br>

    La Empresa dispone de varios centros de almacenaje ubicados en distintas localizaciones, por lo que el destino de
    la mercancía y su almacenaje dependerá de la disponibilidad de trasteros aptos para ello en uno u otro centro
    (esto no supondrá en ningún caso diferencia en el coste a asumir por el cliente). Así mismo, el servicio incluye el
    posterior traslado o acarreo desde nuestros centros de almacenaje al domicilio de entrega que se determine en el
    momento en el que el cliente indique y siempre dentro de los límites temporales de la duración del contrato. El
    servicio se entenderá cumplido en el momento de la entrega de la mercancía objeto del contrato en el domicilio
    de entrega, en las condiciones pactadas.<br>
2:
  title: "SEGUNDA"
  body: |
    Las prestaciones contratadas consistirán en las referenciadas en la primera condición general, así como todas
    aquellas que se ajusten a la categoría del servicio convenida con el cliente y que se especificarán en las
    condiciones particulares de este contrato de existir.<br>
3:
  title: "TERCERA"
  body: |
    El traslado de los muebles se efectuará una sola vez tanto al lugar de almacenaje de los mismos como al domicilio
    de entrega, incluyéndose dentro de la cuota inicial un eventual desplazamiento extra en caso de que el Cliente
    requiriera la entrega de una determinada mercancía de nuevo en el domicilio de recogida u otra.<br><br>

    No es posible que el cliente acceda al lugar de almacenaje de forma individualizada, sólo nuestra plantilla tiene
    acceso y será la que, previa solicitud, entregará la mercancía requerida en el domicilio de recogida inicial.<br><br>

    Los desplazamientos suplementarios sucesivos serán por cuenta del Cliente, quien abonará los gastos que se
    originen al respecto (a partir de 49 euros).<br>
4:
  title: "CUARTA"
  body: |
    A requerimiento del Transportista, el Cliente deberá informar al transportista de las circunstancias relevantes para
    la correcta ejecución de las actividades en qué consiste el servicio contratado, así por ejemplo de las condiciones
    de acceso a los locales o viviendas para el personal y los vehículos (aparcamientos, altura de la vivienda, pasillos,
    escaleras, montacargas, posibilidad de uso de ascensores, otros trabajos en curso en los respectivos locales,
    etc.). En caso de que el edificio no disponga de ascensor y sea necesario para llevar a cabo la prestación que los
    operarios suban/bajen escaleras o escalones, la empresa cobrará un suplemento que dependerá del volumen de
    la mercancía a transportar y de la planta donde se realicen los trabajos dada la dificultad añadida por dicha
    circunstancia.<br><br>

    <h5 class="font-bold">4.1</h5><br>

    La empresa no dispone de capacidad/permisos para la realización de trabajo con cuerdas por ventana, grúa o
    plataforma, por lo que en caso de que las circunstancias de la recogida o entrega requieran de estos servicios, el
    cliente deberá hacerse responsable por su cuenta.<br><br>

    En el caso de que sea necesario que los operarios suban y bajen escaleras o escalones, BOX2BOX cobrará un
    suplemento que dependerá del volumen de la mercancía a transportar y de la planta en la que se halle ubicada la
    mercancía.<br><br>

    El suplemento es de 5€ (IVA incluido) por cada m2 de mercancía transportada multiplicado por cada planta subida
    o bajada. Se considera que para efectuar la carga y/o descarga de los vehículos, éstos deben poderse situar en la
    puerta del lugar de recogida y el de entrega, o como máximo a una distancia no superior a 50 metros a pie, pero
    si por cualquier circunstancia (estrechez de la calle o avenidas, aparcamiento limitado y prohibido, etc.), no se
    consiguiera la citada colocación del vehículo y ello implicará un incremento de mano de obra o el uso de medios
    adicionales de transporte (camionetas u otros elementos aún más ligeros), los gastos que ocasionarán estos
    servicios complementarios serían de cuenta del cliente (mínimo 50€).<br><br>

    <h5 class="font-bold text-dark">Otros suplementos:</h5>
    <ul class='list-disc pl-8'>
        <li> Desmontaje general: 60€/hora</li>
        <li> Sup. Aparcamiento: Min 50€ (excepto zonas inalcanzables, en cuyo caso se valorará un coste superior)</li>
        <li> Sup. Viaje Adicional: Min. 100€ (independiente a contrato)</li>
        <li> Punto Limpio: Min. 35€ (aumentar en función de volumen)</li>
        <li> Entrega de cajas: 3€</li>
        <li> Embalaje de cajas: 7€</li>
        <li> Entrega caja-armario: 8€</li>
        <li> Sup.escaleras: 5€ por m2/piso</li>
    </ul><br>

    En caso de impago o devolución del recibo domiciliado de una mensualidad, se aplicará un recargo del 15% sobre
    la tarifa pactada por cada mes en el que se produjera la incidencia. Si el cliente no regularizara esta situación en
    el plazo máximo de 2 meses siguientes al requerimiento del pago por parte de la Empresa, este contrato quedará
    automáticamente resuelto y se entenderán por “abandonas” las mercancías almacenadas en nuestras
    instalaciones, todo ello al amparo del artículo 460 del Código Civil y entendiendo que de esa conducta y acto del
    cliente se traduce su voluntad de dejar de ejercer el poder de hecho que tenía sobre los bienes, siendo por tanto
    estos aptos para su ocupación por parte de BOX2BOX S.L. La Empresa dispondrá de los bienes como a su derecho
    convenga sin más limitaciones que las establecidas por Ley.<br>
5:
  title: "QUINTA - Pago y otros gastos"
  body: |
    El Transportista se compromete a efectuar el traslado y el almacenaje de las mercancías relacionadas en el
    inventario que ambas partes firman, en el precio y los términos pactados en las condiciones particulares,
    incrementando, en su caso, con los gastos a los que se refiere la condición CUARTA.<br><br>

    Salvo pacto en contrario, el pago del servicio se efectuará del siguiente modo:
    <ul class='list-disc pl-8'>
        <li> Se efectúa una reserva de nuestros servicios abonándose una señal variable de 5€-50€ (según el servicio
        contratado) con una tarjeta de crédito/débito (vía email se envía al cliente un enlace para que introduzca los
        datos de tarjeta a través de un sistema de verificación de seguridad).</li>
        <li> Una vez se haya llevado a cabo la recogida se cobra al cliente por los servicios prestados (recogida y primera
        mensualidad) realizándose un cargo en la tarjeta informada descontando la señal ya abonada.</li>
        <li> Las mensualidades siguientes se cobran de igual forma, mediante cobro por tarjeta. El pago se efectuará por
        cada mes que se haga uso del centro de almacenaje la tarifa aplicable al servicio contratado realizándose el cargo
        en cuenta pasados 30 o 31 días (según el caso). La rescisión del contrato de prestación de servicio se hará con
        una antelación de 15 días antes del pago de la siguiente mensualidad.</li>
    </ul><br>

    Finalmente, el pago correspondiente a los gastos de entrega se realizará antes del servicio, abonándose automáticamente mediante tarjeta de crédito o débito.
    El Transportista entregará al Cliente, recibo de las cantidades
    percibidas, y finalizada la mudanza emitirá factura, en los términos previstos en el R.D. 1496/2003, por el que se
    aprueba el Reglamento por el que se regulan las obligaciones de facturación, y se modifica el Reglamento del
    Impuesto sobre el valor añadido.<br><br>

    El servicio de almacenamiento se renovará automáticamente y de manera sucesiva al vencimiento de cada mes,
    semestre o año, según corresponda, salvo que el CLIENTE cancele la renovación del servicio de almacenamiento
    con 15 días antes de su vencimiento (para las Cuotas mensuales) o hasta el mes antes de su vencimiento
    semestral/anual (para las Cuotas semestrales y anuales).<br>
6:
  title: "SEXTA - Duración del contrato"
  body: |
    La duración mínima del contrato será de 3 meses a partir del día de la recogida de los enseres del Cliente. El
    servicio de almacenamiento se renovará automáticamente y de manera sucesiva al vencimiento de cada mes o
    año, según corresponda, salvo que el CLIENTE cancele la renovación del servicio de almacenamiento 15 días
    antes de su vencimiento.<br><br>

    Correrá a cuenta del Cliente las eventuales formalidades administrativas necesarias para ejecutar la mudanza.
    El pago de toda clase de tasas, derechos de aduanas y demás tributos, certificados de origen o de traslado de
    residencia, gastos consulares, transbordos, etc., necesarios para la ejecución de la mudanza, no están incluidos
    en el precio del contrato y vendrán a incrementar este. El Transportista viene obligado a justificar
    documentalmente estos gastos al Cliente. Tarifas según origen y destino: misma localidad. Si existiera un
    suplemento en el servicio de recogida, este se aplicará de igual forma en el servicio de entrega. Tarifas según
    origen y destino: punto de recogida y punto de destino no coincidentes. Cuando las localidades de origen y
    destino fueran distintas entre sí, el servicio de desplazamiento entrega tendrá un incremento en el coste de 0,90
    euros por kilometro adicional recorrido (tomando como referencia de origen y destino Madrid centro). Todo ello a
    excepción de aquellas localidades que se encuentren contempladas dentro del área de servicio que podrá
    consultar en nuestra página web.<br>
7:
  title: "SÉPTIMA- Incumplimiento de la obligación de pago por parte del CLIENTE"
  body: |
    El CLIENTE debe mantener la información de pago actualizada, si la tarjeta caduca BOX2BOX enviará al CLIENTE
    una notificación para informarles de esto y el CLIENTE deberá ponerse en contacto con BOX2BOX para arreglar la
    corrección del problema.<br>
8:
  title: "OCTAVA - Responsabilidades"
  body: |
    El Cliente declara bajo su responsabilidad que las mercancías bultos o mobiliario que son objeto del traslado y
    almacenaje son mercancías generales, de curso legal, del mismo modo declara que no son productos inflamables,
    explosivos ni productos alimentarios perecederos. Declara así mismo que es conocedor del contenido de los
    bultos, mercancías o mobiliarios almacenados y que ostenta responsabilidad plena sobre ellos.<br><br>


    Cuando el Cliente nos facilítelas mercancías embaladas en una caja/bolsa/mochila/maleta o similares cerrada y la
    Empresa Transportista no conozca su contenido, está no se hará responsable de contenidos perdidos o dañados.<br><br>

    El cliente es responsable de proteger la mercancía adecuadamente y que el embalaje utilizado es correcto,
    respondiendo de aquél que sea inadecuado, defectuoso o mal empleado, ya causé daño o perjuicio a las
    mercancías, ya a los equipos de manipulación o medios de transporte, ya a cualesquiera otros bienes o personas.
    Se pone a disposición del cliente por parte de BOX2BOX S.L nuestro propio servicio de embalaje cuya tarifa será a
    partir de 5 euros (a razón del espacio en metros). En caso de que el cliente no optara ni por uno ni por otro
    sistema de embalaje, la mercancía/bulto no estará cubierto por nuestro seguro.<br>
9:
  title: "NOVENA - Inventario"
  body: |
    La Empresa Transportista se compromete a elaborar un inventario de los muebles y enseres objeto de la
    mudanza, entregando copia sellada y firmada por persona responsable de la empresa, al Cliente.
    También podrá el Cliente elaborar dicho inventario por sí mismo, sellando y firmando copia del mismo la Empresa
    Transportista. El Cliente hará declaración detallada de los objetos que puedan tener un valor particular, en la que
    deben identificarse claramente los bienes de carácter artístico, histórico o de colección y aquellos cuyo valor
    unitario supere la cantidad de 3.000 euros. Asimismo, cuando a juicio de la Empresa Transportista exista la
    posibilidad de deterioro de los bienes objeto de la mudanza, bien por encontrarse en mal estado o porque deban
    ser sometidos a manipulaciones que puedan entrañar peligro, se expresará claramente esta circunstancia en el
    inventario, con declinación, en su caso, de responsabilidad por parte de la Empresa Transportista.<br>
10:
  title: "DÉCIMA - Seguro sobre las mercancías"
  body: |
    La Empresa Transportista se compromete a asegurar las mercancías objeto del transporte relacionado en el
    inventario por un valor total de 3.000 euros máximo, informando al Cliente del nombre de la compañía
    aseguradora con la que se haya suscrito el seguro y del número de póliza. Si la mercancía que fuera a ser
    desplazada, almacenada y/o manipulada tuviera un valor total superior a 3.000 euros, el Cliente tendrá la opción
    de aportar seguro privado que cubra el exceso del valor de la misma.<br>
11:
  title: "UNDÉCIMA - Recepción de la mudanza"
  body: |
    Concluida la mudanza, el Cliente, deberá firmar al Transportista copia
    del inventario, a los efectos de dar su conformidad sobre la recepción de la totalidad de muebles, enseres y cajas
    que fueron objeto de la mudanza. Una vez que el CLIENTE reciba las mercancías y, con ello, la prestación del
    servicio llegue a su fin (total o parcialmente, en su caso), el CLIENTE dispondrá de un plazo de 48 horas,
    para reclamar a la Empresa Transportista los daños en muebles, mercancías o bultos que haya podido constatar.
    Transcurrido dicho plazo no se admitirá reclamación alguna.<br>
12:
  title: "DUODÉCIMA - Anulación del contrato y aplazamiento de su ejecución"
  body: |
    La cancelación o aplazamiento del servicio de traslado de muebles y enseres por indicación del Cliente con un
    preaviso inferior a 24 horas dará lugar a una indemnización a favor de la Empresa Transportista de un importe de
    50€ (IVA INCLUIDO) si se trata de la recogida inicial de las pertenencias del cliente. Para otros servicios de
    transporte dicha indemnización se fija en lo equivalente al coste de desplazamiento y recursos logísticos que se
    hayan puesto a disposición para llevar a término el desplazamiento necesario. Si la notificación se produce con
    más de 24 horas de antelación a la fecha pactada de inicio de la mudanza, no procederá indemnización por
    ninguna de las partes.<br><br>

    Tras la contratación del servicio el Cliente podrá cancelar y desistir de dicha contratación en un plazo máximo de
    14 días hábiles, con o sin causa justificada, sin ningún tipo de penalización, siempre y cuando el Servicio no haya
    sido realizado. Si la cancelación del servicio se produce dentro de las 24 horas anteriores a la fecha en la que se
    haya programado la recogida de la mercancía, BOX2BOX tendrá derecho a percibir el coste de desplazamiento, así
    como aquellos gastos en los que haya incurrido para la ejecución del traslado programado, y del que habrá sido
    informado previamente el CLIENTE.<br><br>

    Para ejercer el derecho de desistimiento, deberás notificárnoslo por correo electrónico hola@box2boxstorage.com la
    decisión de desistir del contrato mediante una declaración inequívoca.<br><br>

    Al email debes adjuntar un archivo en el que se incluya la siguiente información:<br><br>
    <div class="flex flex-col justify-start w-full text-left">
      <span>A la atención de BOX2BOX</span>
      <span>Por la presente le comunico/comunicamos (*) que desisto de mi/desistimos de nuestro (*)
      contrato de compraventa del siguiente producto (*):</span>
      <span>— pedido el (*)/recibido el (*)</span>
      <span>— nombre del consumidor o consumidores</span>
      <span>— Dirección del consumidor o de los consumidores</span>
      <span>— Fecha</span>
    </div>
13:
  title: "DECIMOTERCERA - Fuero"
  body: |
    Para la resolución de cualquier controversia que suscite entre las partes en relación
    con la interpretación y aplicación del presente contrato, o de alguna de las estipulaciones, serán competentes los
    Juzgados y Tribunales de Madrid.
</i18n>

<i18n lang="yaml" locale="fr">
title: "Conditions générales | Box2box"
meta_description: "Objet du contrat et description du service Le service de transfert et de stockage sous contrat est défini comme le transfert ou le transport de l'adresse de collecte stipulée vers nos centres de stockage."
sectionName: "CONDITIONS GÉNÉRALES"
body: |
  Conformément aux dispositions du règlement général sur la protection des données de la Loi 34/2002 n° 2004-575 du 21 juin 2004, nous vous informons que les données que vous fournissez seront incorporées à une base de données appartenant à BOX2BOX, SL, N.I.F. : B87985115 et domiciliée au Calle Rios Rosas, 36, 28003 MADRID Espagne, dans le but de maintenir et de gérer les relations commerciales et administratives. La base juridique du traitement est le respect de la législation fiscale, commerciale et comptable. Aucune cession et/ou transfert international de données n'est prévu, sauf ceux autorisés par la loi ou ceux autorisés avec votre consentement. Vous pouvez exercer vos droits d'accès, de rectification, d'effacement (droit à l'oubli), de limitation du traitement, de portabilité des données, d'opposition, et de ne pas être soumis à des décisions automatisées en envoyant une lettre à BOX2BOX, SL Calle Rios Rosas, 36, 28003 MADRID Espagne, ou par courrier électronique à
email: contact@box2box.io
footer: |
  en indiquant comme objet : "" Droits de la loi sur la protection des données "", et en joignant une photocopie de votre carte d'identité. En outre, nous vous rappelons que vous pouvez contacter l'autorité de contrôle de la protection des données compétente pour obtenir des informations supplémentaires ou déposer une plainte.
1:
  title: "ARTICLE 1 - Objet du contrat et description du service"
  body: |
    Le service de transfert et de stockage sous contrat est défini comme le transfert ou le transport depuis l'adresse de collecte à stipuler jusqu'à nos centres de stockage (en utilisant un ou plusieurs modes de transport) de meubles,
    de marchandises ou de colis (ci-après dénommés marchandises).<br><br>
    La société dispose de plusieurs centres de stockage situés dans des lieux différents,
    de sorte que la destination des marchandises et leur stockage dépendront de la disponibilité d'espaces de stockage appropriés dans l'un ou l'autre centre (cela ne fera aucune différence dans le coût à supporter par le client).
    De même, le service comprend le transfert ou le transport ultérieur depuis nos centres de stockage jusqu'à l'adresse de livraison à déterminer au moment indiqué par le client et toujours dans les délais de la durée du contrat.
    Le service s'entend comme étant accompli au moment de la livraison des biens faisant l'objet du contrat à l'adresse de livraison, dans les conditions convenues.  <br>
2:
  title: "ARTICLE 2"
  body: |
    Les services contractés seront constitués de ceux visés à la première condition générale,
    ainsi que de tous ceux qui sont conformes à la catégorie de service convenue avec le client et qui seront précisés dans les conditions particulières du présent contrat.<br>
3:
  title: "ARTICLE 3"
  body: |
    Le déménagement du mobilier ne sera effectué qu'une seule fois, autant au lieu de stockage qu'à l'adresse de livraison, et le tarif initial comprendra un éventuel voyage supplémentaire dans le cas où le client exigerait la livraison de certains biens à l'adresse de collecte.<br><br>

    Il n'est pas possible pour le client d'accéder individuellement au lieu de stockage, seul notre personnel y a accès et, sur demande, livrera les marchandises requises à l'adresse indiquée par le client.  <br><br>

    Les voyages supplémentaires ultérieurs sont à la charge du client, qui doit payer les frais occasionnés à cet égard (à partir de 49 euros).<br>
4:
  title: "ARTICLE 4"
  body: |
    À la demande du transporteur, le client informe le transporteur des circonstances pertinentes pour la bonne exécution des activités en quoi consiste le service contracté, comme, par exemple, les conditions d'accès aux locaux ou aux habitations pour le personnel et les véhicules (places de stationnement, hauteur de l'habitation, couloirs, escaliers, ascenseurs, possibilité d'utiliser les ascenseurs, autres travaux en cours dans les locaux respectifs, etc.) Dans le cas où le bâtiment ne dispose pas d'ascenseur et qu'il est nécessaire que les travailleurs montent/descendent des escaliers ou des marches pour effectuer le service, l'entreprise facturera un supplément qui dépendra du volume de marchandises à transporter et de l'étage où le travail est effectué, étant donné la difficulté supplémentaire due à cette circonstance. <br><br>

    Le supplément est de 5 € (TVA comprise) par m² de marchandises transportées, multiplié par chaque étage surélevé ou abaissé.
    On considère que pour charger et/ou décharger les véhicules, il doit être possible de les placer à la porte du lieu de collecte et de livraison, ou à une distance maximale de 50 mètres à pied, mais si pour une raison quelconque (étroitesse de la rue ou des avenues, stationnement limité et interdit, etc.), il n'est pas possible de respecter la distance susmentionnée, il est nécessaire de placer les véhicules à la porte du lieu de collecte et de livraison, ou à une distance maximale de 50 mètres à pied. ), le positionnement susmentionné du véhicule ne peut être réalisé et cela implique une augmentation de la main d'œuvre, un effort plus important dans l'exploitation ou l'utilisation de moyens de transport supplémentaires (camionnettes ou autres éléments encore plus légers), les frais engendrés par ces prestations supplémentaires sont à la charge du client (minimum 50 €).<br><br>

    <h5 class="font-bold text-dark">Autres suppléments:</h5>
    <ul class='list-disc pl-8'>
        <li> Démontage général : 60€/heure.</li>
        <li> Supplément de stationnement : Min. 50€ (sauf zones impossibles, auquel cas le coût peut être augmenté).</li>
        <li> Supplément pour voyage supplémentaire : Min. 100€ (indépendant du contrat)</li>
        <li> Point de nettoyage : Min. 35€ (à augmenter en fonction du volume)</li>
        <li> Livraison des boîtes : 2€</li>
        <li> Emballage des boîtes : 6€</li>
        <li> Livraison des boîtes-armoire : 8€</li>
        <li> Emballage des boîte-armoire : 12€</li>
        <li> Escaliers : 5€ par m² par étage</li>
    </ul><br>

    Les éventuelles formalités administratives nécessaires à l'exécution du déménagement sont à la charge du Client.
    Le paiement de tous les impôts, droits de douane et autres taxes, certificats d'origine ou de transfert de résidence, frais consulaires, transbordements, etc., nécessaires à l'exécution du déménagement, n'est pas compris dans le prix du contrat et augmentera le prix du contrat. Le Transporteur est tenu de fournir au Client les justificatifs de ces dépenses. Tarifs selon l'origine et la destination : même lieu. S'il existe un supplément pour le service de collecte, celui-ci est appliqué de la même manière au service de livraison. Tarifs selon l'origine et la destination : le point de collecte et le point de destination ne coïncident pas. Lorsque les lieux d'origine et de destination sont différents l'un de l'autre, le service de livraison aura une augmentation du coût de 0,90 euros par kilomètre supplémentaire parcouru, en prenant comme point de référence de l'origine et de la destination la capitale provinciale où le service a été contracté. Tout ce qui précède, à l'exception des lieux qui sont inclus dans la zone de service qui peut être consultée sur notre site web.<br>
5:
  title: "ARTICLE 5 - Paiement et autres dépenses"
  body: |
    Le Transporteur s'engage à effectuer le transport et l'entreposage des marchandises énumérées dans l'inventaire signé par les deux parties, au prix et aux conditions convenus dans les conditions particulières, plus, le cas échéant, les frais spécifiés par l’ARTICLE 4.<br><br>

    Sauf accord contraire, le paiement du service s'effectue de la manière suivante :
    <ul class='list-disc pl-8'>
        <li> Carte de crédit ou de débit : Pour réserver le service, le client doit payer un montant de 5 € à des fins de vérification ou d'authentification de la réservation, qui sera déduit du premier paiement.
        À partir de ce moment et avec la périodicité indiquée dans le contrat, les paiements récurrents commenceront. Les versements sont effectués à l'avance et jamais à terme échu. </li>
        <li>Pour chaque mois d'utilisation du centre de stockage, la redevance applicable au service contracté sera payée et le compte sera débité après 30 ou 31 jours (selon le cas).</li>
        <li>L'annulation du service doit être faite 15 jours avant le paiement de la prochaine mensualité.</li>
        </ul><br>

    Enfin, lorsque la livraison est effectuée, les frais de livraison sont payés automatiquement par carte de crédit ou de débit. <br>
    Le Transporteur remettra au Client un reçu pour les montants perçus et, une fois le déménagement terminé, émettra une facture, conformément aux termes du R.D. 1496/2003, qui approuve le Règlement des obligations de facturation et modifie le Règlement de la taxe sur la valeur ajoutée.<br>
    Voir les tableaux de prix<br><br>
    <br>
6:
  title: "ARTICLE 6 - Durée du contrat"
  body: |
    La durée minimale du contrat est de 3 mois à compter du jour de la collecte des biens du client. Le service de stockage sera renouvelé automatiquement et successivement à l'expiration de chaque mois ou année, selon le cas, sauf si le CLIENT annule le renouvellement du service de stockage. Le délai de préavis est d'au moins 15 jours.  <br><br>

7:
  title: "ARTICLE 7 - Non-respect de l'obligation de paiement par le CLIENT"
  body: |
    Si la carte expire, BOX2BOX enverra au CLIENT une notification pour l'en informer et le CLIENT devra contacter BOX2BOX pour résoudre le problème.<br>
    En cas de non-paiement ou de retour de la facture de domiciliation d'un paiement mensuel ou d'un autre service, une majoration de 15% sera appliquée au tarif convenu pour chaque facture pour laquelle l'incident se produit. Si le client ne régularise pas cette situation dans un délai maximum de 2 mois après la demande de paiement de la Société, le présent contrat sera automatiquement résilié et les marchandises stockées dans nos installations seront considérées comme " abandonnées ". Cette conduite et cet acte du client impliquent qu'il ne souhaite plus exercer le pouvoir de fait qu'il avait sur les marchandises, lesquelles sont donc aptes à être occupées par BOX2BOX S.L. La Société disposera des marchandises conformément aux termes du contrat. La Société disposera des marchandises comme bon lui semble.<br>
8:
  title: "ARTICLE 8 - Responsabilités"
  body: |
    Le Client déclare sous sa responsabilité que les marchandises, colis ou meubles qui font l'objet du transfert et du stockage sont des marchandises générales, de cours légal, et déclare également qu'il ne s'agit pas de produits inflammables, explosifs ou de denrées périssables. Il déclare également avoir connaissance du contenu des colis, marchandises ou meubles entreposés et en être pleinement responsable.<br><br>

    Si le Client nous fournit des objets emballés et fermés dans une boîte/sac/sac à dos/valisette ou similaire et que le Transporteur n'en connaît pas le contenu, le Transporteur ne sera pas responsable du contenu perdu ou endommagé.<br><br>

    Le client est responsable de la protection adéquate de la marchandise et de l'exactitude de l'emballage utilisé. Il est responsable des emballages inadéquats, défectueux ou mal utilisés, qu'ils causent des dommages ou des dégâts à la marchandise, aux équipements de manutention ou aux moyens de transport, ou à tout autre bien ou personne. BOX2BOX S.L. mettra à la disposition du client son propre service d'emballage, dont le prix sera de 10 euros (sur la base de l'espace en mètres). Si le client n'opte pas pour l'un ou l'autre système d'emballage, les marchandises/emballages ne seront pas couverts par notre assurance.<br>
9:
  title: "ARTICLE 9 - Inventaire"
  body: |
    L'entreprise de transport s'engage à dresser un inventaire des meubles et objets faisant l'objet du déménagement, en remettant au client un exemplaire signé par le responsable de l'entreprise. Le client doit faire une déclaration détaillée des objets susceptibles d'avoir une valeur particulière, qui doit clairement identifier les objets artistiques, historiques ou de collection et ceux dont la valeur unitaire dépasse la somme de 3 000 euros. De même, lorsque, de l'avis de la compagnie de transport, il existe une possibilité d'endommager les marchandises transportées, soit parce qu'elles sont en mauvais état, soit parce qu'elles doivent être soumises à des manipulations pouvant présenter un danger, cette circonstance doit être clairement indiquée dans l'inventaire, la compagnie de transport déclinant toute responsabilité, le cas échéant.<br>
10:
  title: "ARTICLE 10 - L'assurance des marchandises."
  body: |
    La compagnie de transport s'engage à assurer les marchandises à transporter énumérées dans l'inventaire pour une valeur totale de 3.000 euros maximum, en communiquant au client le nom de la compagnie d'assurance auprès de laquelle l'assurance a été souscrite et le numéro de police. Si les biens à déplacer, à stocker et/ou à manipuler ont une valeur totale supérieure à 3 000 euros, le client a la possibilité de souscrire une assurance privée pour couvrir la valeur excédentaire des biens.<br>
11:
  title: "ARTICLE 11 - Réception du déménagement"
  body: |
    Une fois le déménagement terminé, le Client doit signer un exemplaire de l'inventaire au Transporteur, afin de donner son accord sur la réception de tous les meubles, objets et cartons qui ont fait l'objet du déménagement. Une fois que le CLIENT a reçu les marchandises et que la prestation a été réalisée (totalement ou partiellement, selon le cas), le CLIENT dispose d'un délai de 48 heures pour se plaindre auprès de la société de transport des dommages aux meubles, marchandises ou colis qu'il a pu constater. Une fois ce délai écoulé, aucune réclamation ne sera acceptée.<br>
12:
  title: "ARTICLE 12 - Annulation du contrat et report de son exécution"
  body: |
    L'annulation ou le report du service de déménagement de meubles et d'effets personnels à la demande du client avec un préavis de moins de 24 heures donne lieu à une indemnisation en faveur de la société de transport d'un montant de 50 € (TVA incluse) dans le cas de l'enlèvement initial des effets personnels du client. Pour les autres services de transport, cette compensation est fixée à l'équivalent du coût du voyage et des ressources logistiques qui ont été mises à disposition pour effectuer le voyage nécessaire. Si la notification est faite plus de 24 heures avant la date convenue pour le début du déménagement, aucune indemnité ne sera due par l'une ou l'autre des parties.<br><br>

    Après avoir contracté le service, le client peut annuler et se retirer du contrat dans un délai maximum de 14 jours ouvrables, avec ou sans motif valable, sans pénalité d'aucune sorte, à condition que le service n'ait pas été exécuté. Si l'annulation du service intervient dans les 24 heures précédant la date prévue pour l'enlèvement de la marchandise, BOX2BOX aura le droit de percevoir le coût du voyage, ainsi que les frais engagés pour l'exécution du transfert prévu, et dont le CLIENT aura été préalablement informé.<br><br>

    Pour exercer son droit de rétractation, le client doit notifier par courrier électronique à l'adresse : contact@box2box.io sa décision de se rétracter du contrat au moyen d'une déclaration non équivoque.<br><br>

    Un fichier contenant les informations suivantes doit être joint à l'e-mail :<br><br>
    <div class="flex flex-col justify-start w-full text-left">
      <span>A l'attention de BOX2BOX</span>
      <span>Par la présente, je vous informe (*) que je me retire de mon/notre (*) contrat de vente du produit suivant (*)/ :</span>
      <span>- commandé le (*)/reçu le (*)</span>
      <span>— nom du ou des consommateurs</span>
      <span>— Adresse du ou des consommateurs</span>
      <span>— Date</span>
    </div>
13:
  title: "ARTICLE 13 - Compétence"
  body: |
    Pour la résolution de tout litige survenant entre les parties en relation avec l'interprétation et l'application du présent contrat, ou de l'une quelconque de ses stipulations, les Cours et Tribunaux français seront compétents.
</i18n>

<i18n lang="yaml" locale="it">
title: "Condizioni generali | Box2box"
meta_description: "Oggetto del contratto e descrizione del servizio Il servizio di trasferimento e stoccaggio oggetto del contratto è definito come il trasferimento o il trasporto dall'indirizzo di ritiro stabilito ai nostri centri di stoccaggio."
sectionName: "CONDIZIONI GENERALI "
body: In conformità con le disposizioni del Regolamento generale sulla protezione dei dati 679/2016 e della Legge organica 3/2018 del 5 dicembre sulla protezione dei dati, la informiamo che i dati da lei forniti saranno incorporati in un database di proprietà di BOX2BOX, S.L, con N.I.F. B87985115 e indirizzo in CALLE RIOS ROSAS 36 - 6IZQ - 28003 Madrid, al fine di mantenere e gestire le relazioni commerciali e amministrative. La base giuridica del trattamento è il rispetto della normativa fiscale, commerciale e contabile. Non sono previste cessioni e/o trasferimenti internazionali di dati, salvo quelli autorizzati dalla legge o quelli autorizzati con il vostro esplicito consenso. È possibile esercitare i diritti di accesso, rettifica, cancellazione (diritto all'oblio), limitazione del trattamento, portabilità dei dati, opposizione e non essere soggetti a decisioni automatizzate inviando una lettera a BOX2BOX, S.L, CALLE RIOS ROSAS 36 - 6IZQ - 28003 Madrid, Spagna o via e-mail all'indirizzo
email: info@box2boxstorage.com
footer: indicando come oggetto "Diritti Legge sulla protezione dei dati", e allegando una fotocopia della carta d'identità. Inoltre, vi ricordiamo che potete contattare l'Autorità di controllo della protezione dei dati personali (AEPD, in Spagna) per ottenere ulteriori informazioni o presentare un reclamo.
1:
  title: "PRIMO - Oggetto del contratto e descrizione del servizio "
  body: |
    Il servizio di trasferimento e deposito oggetto del contratto è definito come il trasferimento o il trasporto dall'indirizzo di ritiro da stipulare ai nostri centri di deposito (utilizzando uno o più mezzi di trasporto) di mobili, merci o pacchi (di seguito denominati merci).<br><br>

    La Società dispone di diversi centri di stoccaggio situati in località diverse, pertanto la destinazione della merce e il suo stoccaggio dipenderanno dalla disponibilità di locali di stoccaggio idonei in uno o in un altro centro (ciò non comporterà alcuna differenza nel costo a carico del cliente).  Allo stesso modo, il servizio comprende il successivo trasferimento o trasporto dai nostri centri di stoccaggio all'indirizzo di consegna da determinare al momento indicato dal cliente e sempre entro i limiti di tempo della durata del contratto. Il servizio si intende adempiuto al momento della consegna della merce oggetto del contratto all'indirizzo di consegna, alle condizioni concordate.<br>
2:
  title: "SECONDO"
  body: |
    Le prestazioni contrattuali saranno costituite da quelle di cui alla prima condizione generale, nonché da tutte quelle conformi alla categoria di servizio concordata con il cliente e che saranno specificate nelle condizioni particolari del presente contratto.<br>
3:
  title: "TERZO"
  body: |
    Il ritiro dei mobili sarà effettuato una sola volta, sia al luogo di deposito degli stessi che all'indirizzo di consegna, includendo nel compenso iniziale un eventuale viaggio extra nel caso in cui il Cliente dovesse richiedere la consegna di uno specifico bene nuovamente all'indirizzo di ritiro.<br><br>

    Non è possibile per il cliente accedere individualmente al luogo di stoccaggio, solo il nostro personale ha accesso e, su richiesta, consegnerà la merce richiesta all'indirizzo indicato dal cliente. <br><br>

    I successivi viaggi supplementari saranno a carico del Cliente, che pagherà le spese che ne derivano (a partire da 49 euro).<br>
4:
  title: "QUARTO"
  body: |
    Su richiesta del Vettore, il Cliente dovrà informare quest'ultimo delle circostanze rilevanti per il corretto svolgimento delle attività in cui consiste il servizio appaltato, quali, a titolo esemplificativo, le condizioni di accesso ai locali o alle abitazioni per il personale e i veicoli (parcheggi, altezza dell'abitazione, corridoi, scale, ascensori, possibilità di utilizzo di montacarichi, altri lavori in corso nei rispettivi locali, etc.).  Nel caso in cui l'edificio non disponga di un ascensore e sia necessario che gli addetti salgano/scendano le scale o i gradini per effettuare il servizio, l'azienda addebiterà un supplemento che dipenderà dal volume della merce da trasportare e dal piano in cui viene effettuato il lavoro, data la difficoltà aggiuntiva dovuta a questa circostanza. <br><br>

    Il supplemento è di 5 euro (IVA inclusa) per ogni m² di merce trasportata moltiplicato per ogni piano salito o sceso. <br><br>

    Il supplemento è di 5 euro (IVA inclusa) per ogni m² di merce trasportata moltiplicato per ogni piano salito o sceso.
    Si ritiene che per caricare e/o scaricare i veicoli debba essere possibile posizionarli davanti alla porta del luogo di ritiro e consegna, o a una distanza massima di 50 metri a piedi, ma se per qualsiasi motivo (ristrettezza della strada o dei viali, parcheggio limitato e vietato, ecc. ), il suddetto posizionamento del veicolo non viene raggiunto e ciò comporta un aumento della manodopera, un maggiore sforzo nell'operazione o l'utilizzo di mezzi di trasporto supplementari (furgoni o altri elementi ancora più leggeri), le spese causate da questi servizi complementari saranno a carico del cliente (minimo 50 euro).<br><br>

    <h5 class="font-bold text-dark">Servizi extra:</h5>
    <ul class='list-disc pl-8'>
        <li> Smontaggio generale: 60 €/ora.</li>
        <li> Parcheggio aggiuntivo: a partire da 50 € (tranne nelle zone impossibili, nel qual caso il costo potrebbe aumentare).</li>
        <li> Supplemento viaggio: a partire da 100€ (indipendentemente dal contratto)</li>
        <li> Isola ecologica: a partire da 35€ (dipendendo del volume)</li>
        <li> Consegna delle scatole: 3€.</li>
        <li> Imballaggio delle scatole: 7€.</li>
        <li> Consegna scatola-armadio: 8€.</li>
        <li> Imballaggio in scatola-armadio: 12€ </li>
        <li> Scale: 5€ al m² per piano </li>

    </ul><br>

    Il Cliente è responsabile di tutte le formalità amministrative necessarie per effettuare la rimozione.
    Il pagamento di tutti i tipi di tasse, dazi doganali e altre imposte, certificati di origine o di trasferimento di residenza, spese consolari, trasbordi, ecc. necessari per l'esecuzione del trasloco non sono inclusi nel prezzo del contratto e lo aumentano. Il Vettore è tenuto a fornire al Cliente la prova documentale di tali spese.  Tariffe in base all'origine e alla destinazione: stessa località. Se è previsto un supplemento per il servizio di ritiro, questo sarà applicato allo stesso modo al servizio di consegna.  Tariffe in base all'origine e alla destinazione: il punto di raccolta e il punto di destinazione non coincidono.  Quando i luoghi di origine e di destinazione sono diversi tra loro, il servizio di consegna avrà un aumento del costo di 0,90 euro per ogni chilometro aggiuntivo percorso, prendendo come punto di riferimento di origine e di destinazione il capoluogo di provincia dove è stato appaltato il servizio.  Tutto quanto sopra, ad eccezione delle sedi incluse nell'area di servizio consultabile sul nostro sito web.<br>
5:
  title: "QUINTO. Pagamenti e altre spese"
  body: |
    Il Vettore si impegna ad effettuare il trasporto e il deposito delle merci elencate nell'inventario firmato da entrambe le parti, al prezzo e alle condizioni concordate nelle condizioni particolari, più, se del caso, i costi di cui alla condizione QUATTRO.
    Se non diversamente concordato, il pagamento del servizio dovrà essere effettuato nel modo seguente:<br><br> Carta di credito o di debito: per prenotare il servizio, il cliente deve versare un importo di 5 € a scopo di verifica o autenticazione, che verrà detratto dal primo pagamento. Da quel momento e con la periodicità indicata nel contratto, inizieranno i pagamenti ricorrenti. Le rate devono essere pagate in anticipo e mai in ritardo. :
    <ul class='list-disc pl-8'>
        <li> Per ogni mese di utilizzo del centro di stoccaggio, si pagherà il canone applicabile al servizio contrattato e l'addebito sul conto avverrà dopo 30 o 31 giorni (a seconda dei casi).</li>
        <li> La cancellazione del servizio deve essere effettuata 15 giorni prima del pagamento della mensilità successiva.</li>
        <li> Infine, al momento della consegna, le spese di spedizione saranno pagate automaticamente con carta di credito o di debito.</li>
    </ul><br>

    Il Vettore fornirà al Cliente una ricevuta per gli importi ricevuti e, una volta completata la rimozione, emetterà una fattura, in conformità con i termini previsti dal R.D. 1496/2003, che approva il Regolamento che disciplina gli obblighi di fatturazione e modifica la normativa sull'Imposta sul Valore Aggiunto.<br><br>
6:
  title: "SESTO - Durata del contratto"
  body: |
    La durata minima del contratto è di 3 mesi a partire dal giorno del ritiro dei beni del Cliente. Il servizio di conservazione si rinnoverà automaticamente e successivamente alla scadenza di ogni mese o anno, a seconda dei casi, a meno che il CLIENTE non annulli il rinnovo del servizio di conservazione. Il periodo di preavviso deve essere di almeno 15 giorni. <br><br>

7:
  title: "SETTIMO - Mancato rispetto dell'obbligo di pagamento da parte del CLIENTE."
  body: |
    Se la carta scade, BOX2BOX invierà al CLIENTE una notifica per informarlo e il CLIENTE dovrà contattare BOX2BOX per risolvere il problema.<br>
    In caso di mancato pagamento o di restituzione della fattura di addebito diretto per un pagamento mensile o per un altro servizio, verrà applicato un supplemento del 15% alla tariffa concordata per ogni fattura per la quale si verifica l'incidente.  Qualora il cliente non provveda a regolarizzare tale situazione entro un termine massimo di 2 mesi dalla richiesta di pagamento da parte della Società, il presente contratto si intenderà automaticamente risolto e i beni giacenti presso le nostre strutture si considereranno "abbandonati", il tutto sotto la tutela dell'art. 460 del Codice Civile e fermo restando che tale comportamento e atto del cliente implica la volontà di non esercitare più il potere di fatto che aveva sui beni, che pertanto si prestano ad essere occupati da BOX2BOX S. L. La Società provvederà a disporre dei beni secondo quanto previsto dall'art. 460 del Codice Civile. L. La Società disporrà dei beni come meglio crede, senza limitazioni diverse da quelle stabilite dalla Legge.
8:
  title: "OTTAVO - Responsabilità."
  body: |
    Il Cliente dichiara sotto la propria responsabilità che le merci, gli imballaggi o i mobili oggetto del trasferimento e del deposito sono merci generiche, di valore legale, e dichiara altresì che non si tratta di prodotti infiammabili, esplosivi o alimentari deperibili. Dichiara inoltre di essere a conoscenza del contenuto dei pacchi, delle merci o dei mobili immagazzinati e di esserne pienamente responsabile.
    Se il Cliente ci fornisce oggetti imballati e chiusi in una scatola/borsa/zaino/valigia o simili e il Vettore non ne conosce il contenuto, il Vettore non sarà responsabile per la perdita o il danneggiamento del contenuto.<br><br>
    Il cliente è responsabile dell'adeguata protezione della merce e della correttezza dell'imballaggio utilizzato, rispondendo di quello inadeguato, difettoso o utilizzato in modo improprio, che provochi danni o pregiudizi alla merce, alle attrezzature di movimentazione o ai mezzi di trasporto, o a qualsiasi altra merce o persona. BOX2BOX S.L. fornirà al cliente il proprio servizio di imballaggio, il cui prezzo sarà a partire da 10 euro (in base allo spazio in metri). Nel caso in cui il cliente non opti per l'uno o l'altro sistema di imballaggio, la merce/imballaggio non sarà coperta dalla nostra assicurazione.<br><br>

9:
  title: "NONO. Inventario. "
  body: |
    L'Azienda di trasporto si impegna a redigere un inventario dei mobili e degli oggetti oggetto del trasloco, consegnandone al Cliente una copia firmata dal responsabile dell'azienda. Il Cliente dovrà fare una dichiarazione dettagliata degli oggetti che possono essere di particolare valore, che deve identificare chiaramente gli oggetti artistici, storici o da collezione e quelli il cui valore unitario supera la somma di 3.000 euro.  Allo stesso modo, quando, a giudizio dell'Azienda di trasporto, esiste la possibilità che la merce movimentata possa essere danneggiata, o perché in cattive condizioni o perché deve essere sottoposta a manipolazioni che possono comportare un pericolo, tale circostanza dovrà essere chiaramente indicata nell'inventario, con l'eventuale declinazione di responsabilità da parte dell'Azienda di trasporto.<br>
10:
  title: "DECIMO: Assicurazione sulla merce."
  body: |
    Il trasportatore si impegna ad assicurare i beni da trasportare elencati nell'inventario per un valore complessivo massimo di 3.000 euro, comunicando al Cliente il nome della compagnia assicurativa con cui è stata stipulata l'assicurazione e il numero di polizza.  Se i beni da spostare, immagazzinare e/o movimentare hanno un valore complessivo superiore a 3.000 euro, il Cliente ha la possibilità di stipulare un'assicurazione privata per coprire il valore eccedente dei beni.<br>
11:
  title: "UNDICESIMO - Ricevimento del trasloco"
  body: |
    Una volta completato il trasloco, il CLIENTE deve firmare una copia dell'inventario al Vettore, per dare il suo consenso al ricevimento di tutti i mobili, gli oggetti e le scatole oggetto del trasloco.  Una volta che il CLIENTE ha ricevuto la merce e che il servizio è stato completato (totalmente o parzialmente, a seconda dei casi), il CLIENTE avrà un periodo di 48 ore per contestare alla Società di trasporti eventuali danni ai mobili, alle merci o ai colli che abbia notato. Trascorso tale periodo, non sarà accettato alcun reclamo.<br>
12:
  title: "DODICESIMA - Annullamento del contratto e rinvio della operazione"
  body: |
    L'annullamento o il rinvio del servizio di trasloco di mobili e oggetti su richiesta del Cliente con un preavviso inferiore alle 24 ore darà luogo a un indennizzo a favore dell'Azienda di trasporto pari a 50 euro (IVA INCLUSA) nel caso del ritiro iniziale degli oggetti del Cliente. Per gli altri servizi di trasporto, la compensazione è fissata all'equivalente del costo del viaggio e delle risorse logistiche messe a disposizione per completare il viaggio necessario.  Se la notifica viene effettuata più di 24 ore prima della data concordata per l'inizio della rimozione, nessuna delle parti dovrà versare un indennizzo.<br><br>
    Dopo aver contrattato il servizio, il Cliente può annullare e recedere dal contratto entro un periodo massimo di 14 giorni lavorativi, con o senza giusta causa, senza penalità di alcun tipo, a condizione che il Servizio non sia stato eseguito.  Se l'annullamento del servizio avviene entro le 24 ore precedenti la data in cui è previsto il ritiro della merce, BOX2BOX avrà diritto a ricevere il costo del viaggio, nonché le spese sostenute per l'esecuzione del trasferimento previsto e di cui il CLIENTE sarà stato preventivamente informato.<br><br>

    PPer esercitare il diritto di recesso, il cliente deve comunicare via e-mail all'indirizzo: info@box2boxstorage.com la decisione di recedere dal contratto mediante una dichiarazione inequivocabile.<br><br>

    All'e-mail deve essere allegato un file contenente le seguenti informazioni:<br><br>
    <div class="flex flex-col justify-start w-full text-left">
      <span>All'attenzione di BOX2BOX</span>
      <span>Con la presente vi comunico (*) che mi/ci ritiro dal mio/nostro (*) contratto stipulato per il seguente prodotto (*)/:</span>
      <span>— ordinato il (*)/ricevuto il (*)</span>
      <span>— nome del/i consumatore/i</span>
      <span>— Indirizzo del/i consumatore/i</span>
      <span>— Data</span>
    </div>
13:
  title: "TREDICESIMA"
  body: |
    Per la risoluzione di qualsiasi controversia che dovesse insorgere tra le parti in relazione all'interpretazione e all'applicazione del presente contratto, o di una qualsiasi delle clausole, saranno competenti le Corti e i Tribunali di Madrid..
</i18n>

<i18n lang="yaml" locale="pt">
title: "Termos e Condições Gerais | Box2box"
meta_description: "Finalidade do contrato e descrição do serviço O serviço de transferência e armazenamento contratado é definido como a transferência ou transporte do endereço de recolha estipulado para os nossos centros de armazenamento."
sectionName: "TERMOS E CONDIÇÕES GERAIS"
body: Em conformidade com as disposições do Regulamento Geral de Protecção de Dados 679/2016 e da Lei Orgânica 3/2018 de 5 de Dezembro sobre Protecção de Dados, informamos que os dados fornecidos serão incorporados numa base de dados propriedade da STUFF2BOX UNIP LDA, com Tax Number 515873500 e endereço em Av. Fontes Pereira Melo - Palácio Sotto Mayor Galería A 16, C.P. 1050-121, LISBOA, com o objectivo de manter e gerir as relações comerciais e administrativas. A base legal para o processamento é o cumprimento da legislação fiscal, comercial e contabilística. Não estão previstas cessões e/ou transferências internacionais de dados, excepto as autorizadas por lei ou as autorizadas com o seu consentimento expresso. Pode exercer os seus direitos de acesso, rectificação, eliminação (direito a ser esquecido), limitação do tratamento, portabilidade dos dados, oposição, e não estar sujeito a decisões automatizadas enviando uma carta para STUFF2BOX UNIP LDA, Av. Fontes Pereira Melo - Palácio Sotto Mayor Galería A 16, C.P. 1050-121, LISBOA ou por e-mail para
email: contacto@box2boxstorage.com
footer: indicando como assunto "Rights Data Protection Act", e anexando uma fotocópia do seu bilhete de identidade. Além disso, lembramos-lhe que pode contactar a Autoridade de Controlo de Protecção de Dados competente para obter informações adicionais ou para apresentar uma queixa.
1:
  title: "PRIMERA - Objeto del contrato y descripción del servicio"
  body: |
    Objecto do contrato e descrição do serviço O serviço de transferência e armazenamento contratado é definido como a transferência ou transporte do endereço de recolha a estipular para os nossos centros de armazenamento (utilizando um ou mais meios de transporte) de mobiliário, mercadorias ou embalagens (doravante designados por mercadorias).<br><br>
    A Empresa tem vários centros de armazenamento localizados em locais diferentes, pelo que o destino das mercadorias e o seu armazenamento dependerá da disponibilidade de salas de armazenamento adequadas num ou noutro centro (isto não fará qualquer diferença no custo a ser suportado pelo cliente).  Do mesmo modo, o serviço inclui a transferência ou transporte subsequente dos nossos centros de armazenamento para o endereço de entrega a ser determinado no momento indicado pelo cliente e sempre dentro dos limites de tempo da duração do contrato. O serviço deve ser entendido como cumprido no momento da entrega dos bens abrangidos pelo contrato no endereço de entrega, nas condições acordadas. <br>
2:
  title: "SEGUNDO"
  body: |
    Os serviços contratados serão os referidos na primeira condição geral, bem como todos os que estão em conformidade com a categoria de serviço acordada com o cliente e que serão especificados nas condições particulares do presente contrato.<br>
3:
  title: "TERCEIRO"
  body: |
    A remoção do mobiliário será efectuada apenas uma vez, tanto para o local de armazenamento do mesmo como para o endereço de entrega, incluindo dentro da taxa inicial uma possível viagem extra no caso de o Cliente queira a entrega parcial.<br><br>
    Não é possível ao cliente aceder ao local de armazenamento individualmente, apenas o nosso pessoal tem acesso e, mediante pedido, entregará a mercadoria requerida no endereço indicado pelo cliente. <br><br>
    As viagens adicionais subsequentes serão por conta do Cliente, que pagará os custos decorrentes deste processo (a partir de 49 euros).<br>
4:
  title: "QUARTA"
  body: |
    A pedido do Transportador, o Cliente deverá informar o transportador das circunstâncias relevantes para a correcta execução das actividades em que consiste o serviço contratado, tais como, por exemplo, as condições de acesso às instalações ou residências do pessoal e veículos (lugares de estacionamento, altura da residência, corredores, escadas, elevadores, possibilidade de utilizar elevadores, outros trabalhos em curso nas respectivas instalações, etc.).  Caso o edifício não disponha de elevador e seja necessário que os trabalhadores subam ou desçam escadas ou degraus para realizar o serviço, a empresa cobrará um suplemento que dependerá do volume de mercadorias a transportar e do piso onde o trabalho é realizado, dada a dificuldade acrescida devido a esta circunstância. <br><br>

    La empresa no dispone de capacidad/permisos para la realización de trabajo con cuerdas por ventana, grúa o
    plataforma, por lo que en caso de que las circunstancias de la recogida o entrega requieran de estos servicios, el
    cliente deberá hacerse responsable por su cuenta.<br><br>

    O suplemento é de 5 euros (IVA incluído) por cada m² de mercadorias transportadas multiplicado por cada piso levantado ou baixado.<br><br>

    Considera-se que, para carregar e/ou descarregar os veículos, deve ser possível colocá-los à porta do local de recolha e entrega, ou a uma distância máxima não superior a 50 metros a pé, mas se, por qualquer razão (estreitamento da rua ou das avenidas, estacionamento limitado e proibido, etc.), não for possível alcançar a referida distância, é necessário colocar os veículos à porta do local de recolha e entrega, ou a uma distância máxima de 50 metros a pé. ), o referido posicionamento do veículo não é alcançado e isto implica um aumento da mão-de-obra, um maior esforço na operação ou a utilização de meios de transporte adicionais (carrinhas ou outros elementos ainda mais leves), as despesas causadas por estes serviços complementares serão suportadas pelo cliente (mínimo 50 euros).<br><br>

    <h5 class="font-bold text-dark">Outros suplementos:</h5>
    <ul class='list-disc pl-8'>
        <li> Desmontagem geral: 60 euros/hora.</li>
        <li> Estacionamento adicional: Mínimo 50 euros (excepto em áreas impossíveis, caso em que o custo pode ser aumentado).</li>
        <li> Sobretaxa de viagem adicional: Mín. 100 euros (independente do contrato)</li>
        <li> Ponto Limpo: Min. 35 euros (a aumentar dependendo do volume)</li>
        <li> Entrega de caixas: 3 euros.</li>
        <li> Empacotamento de caixas: 7 euros.</li>
        <li> Caixa de entrega - armário: 8 euros </li>
        <li> Embalagem em armário de caixa: 12 euros </li>
        <li> Escadas: 5 euros.</li>
        <li>Escadas para cima: 5 euros por m² por andar</li>
    </ul><br>

    O Cliente será responsável por quaisquer formalidades administrativas necessárias para levar a cabo a remoção.<br>
    O pagamento de todos os tipos de impostos, direitos aduaneiros e outros impostos, certificados de origem ou transferência de residência, despesas consulares, transbordos, etc., necessários para a execução da mudança, não estão incluídos no preço do contrato e irão aumentá-lo. O Transportador é obrigado a fornecer prova documental destas despesas ao Cliente.  Taxas de acordo com a origem e o destino: mesmo local. Se houver um suplemento para o serviço de recolha, este deve ser aplicado da mesma forma ao serviço de entrega.  Taxas de acordo com a origem e destino: o ponto de recolha e o ponto de destino não coincidem.  Quando os locais de origem e destino são diferentes um do outro, o serviço de entrega terá um aumento no custo de 0,90 euros por quilómetro adicional percorrido, tomando a capital provincial onde o serviço foi contratado como ponto de referência de origem e destino.  Todos os locais acima referidos, com excepção dos que estão incluídos na área de serviço que podem ser consultados no nosso website.<br>
5:
  title: "QUINTO. Pagamento e outras despesas"
  body: |
    O Transportador compromete-se a efectuar o transporte e armazenamento dos bens constantes do inventário assinado por ambas as partes, ao preço e nos termos acordados nas condições particulares, mais, quando aplicável, os custos referidos na condição QUATRO.<br><br>

    Salvo acordo em contrário, o pagamento do serviço deve ser efectuado da seguinte forma:
    <ul class='list-disc pl-8'>
        <li>Cartão de crédito ou débito: Para reservar o serviço, o cliente deve pagar um montante de 5 euros com o objectivo de verificar ou autenticar a reserva, que será deduzido do primeiro pagamento.
        A partir desse momento e com a periodicidade indicada no contrato, começarão os pagamentos recorrentes. As prestações devem ser pagas antecipadamente e nunca em atraso. </li>
        <li>Por cada mês de utilização do centro de armazenagem, a taxa aplicável ao serviço contratado será paga e a conta será debitada após 30 ou 31 dias (dependendo do caso).</li>
        <li>O cancelamento do serviço deve ser feito 15 dias antes do pagamento do próximo pagamento mensal.</li>
        <li>O pagamento do transporte da entrega completa deve ser realizado antecipadamente, sendo automaticamente processado por meio de cartão de crédito ou débito antes da realização do serviço de entrega.</li>
    </ul><br>

    O Transportador fornecerá ao Cliente um recibo dos montantes recebidos, e uma vez concluída a remoção, emitirá uma factura, de acordo com os termos estabelecidos no R.D. 1496/2003, que aprova o Regulamento que rege as obrigações de facturação e modifica o Regulamento do Imposto sobre o Valor Acrescentado.<br><br>

    O serviço de armazenagem é renovado automática e sucessivamente no final de cada mês,
    semestre ou ano, consoante o caso, exceto se o CLIENTE cancelar a renovação do serviço de armazenagem 15 dias antes do seu termo (para as prestações mensais)
    ou até ao mês que antecede o seu vencimento semestral/anual (para as prestações semestrais e anuais). <br>
6:
  title: "SEXTO - Duração do contrato"
  body: |
    A duração mínima do contrato será de 3 meses a partir do dia da recolha dos pertences do Cliente. O serviço de armazenamento será renovado automática e sucessivamente ao fim de cada mês ou ano, conforme o caso, a menos que o CLIENTE cancele a renovação do serviço de armazenamento. O prazo mínimo de pré-aviso é de 15 dias. <br><br>
7:
  title: "SETE - Não cumprimento da obrigação de pagamento por parte do CLIENTE."
  body: |
    Se o cartão expirar, a BOX2BOX enviará ao CLIENTE uma notificação para o informar e o CLIENTE deverá contactar a BOX2BOX para resolver o problema.<br>
    Em caso de não pagamento ou devolução da factura de débito directo para um pagamento mensal ou outro serviço, será aplicada uma sobretaxa de 15% à taxa acordada para cada factura em relação à qual o incidente ocorra.  Se o cliente não regularizar esta situação num prazo máximo de 2 meses após o pedido de pagamento da Empresa, este contrato será automaticamente rescindido e os bens armazenados nas nossas instalações serão considerados como tendo sido "abandonados", tudo isto sob a protecção do artigo 460 do Código Civil e no entendimento de que esta conduta e actuação do cliente implica que este já não deseja exercer o poder de facto que tinha sobre os bens, que são, portanto, adequados para ocupação pela STUFF2BOX LDA Empresa disporá dos bens de acordo com os termos do contrato e as condições do contrato. L. A Empresa deve dispor dos bens como entender, sem outras limitações para além das estabelecidas por Lei.

8:
  title: "OITAVO - Responsabilidades"
  body: |
    O Cliente declara sob a sua responsabilidade que os bens, embalagens ou mobiliário que são objecto da transferência e armazenamento são bens gerais, de curso legal, e declara também que não são produtos inflamáveis, explosivos ou alimentos perecíveis. Declara também que está ciente do conteúdo das embalagens, bens ou mobiliário armazenados e que é totalmente responsável por eles.
    Se o Cliente nos fornecer objectos embalados e fechados numa caixa/saco/ mochila/ mala ou similar e o Transportador não conhecer o conteúdo, o Transportador não será responsável pelo conteúdo perdido ou danificado.<br><br>


    O cliente é responsável pela protecção adequada da mercadoria e que a embalagem utilizada é correcta, sendo responsável pelo que é inadequado, defeituoso ou incorrectamente utilizado, quer cause danos ou prejuízos à mercadoria, ao equipamento de manuseamento ou meio de transporte, ou a quaisquer outros bens ou pessoas. A  STUFF2BOX LDA  fornecerá ao cliente o seu próprio serviço de embalagem, cujo preço será de 10 euros (com base no espaço em metros). No caso do cliente não optar por um ou outro sistema de embalagem, a mercadoria/embalagem não será coberta pelo nosso seguro.<br><br>

9:
  title: "NONO. Inventário"
  body: |
    A Empresa de Transportes compromete-se a elaborar um inventário dos móveis e pertences que são objecto da remoção, entregando ao Cliente uma cópia assinada pela pessoa responsável pela empresa. O Cliente fará uma declaração detalhada dos objectos que possam ter um valor particular, que devem identificar claramente os objectos artísticos, históricos ou de colecção e aqueles cujo valor unitário exceda a soma de 2.500 euros.  Do mesmo modo, quando, na opinião da Transport Company, existe a possibilidade de os bens a serem transportados poderem ser danificados, seja porque estão em mau estado ou porque têm de ser sujeitos a manipulações que podem envolver perigo, esta circunstância deve ser claramente indicada no inventário, com a Transport Company a declinar qualquer responsabilidade, quando aplicável.<br>
10:
  title: "Décimo. Seguros sobre os bens"
  body: |
    A Companhia de Transporte compromete-se a segurar os bens a transportar enumerados no inventário por um valor total máximo de 3.000 euros, informando o Cliente do nome da companhia de seguros com a qual o seguro foi contratado e o número da apólice.  Se os bens a transportar, armazenar e/ou tratar tiverem um valor total superior a 3.000 euros, o Cliente terá a opção de providenciar um seguro privado para cobrir o valor excedente dos bens.<br>
11:
  title: "Décimo primeiro. Recepção da remoção"
  body: |
    Uma vez concluída a remoção, o Cliente deve assinar uma cópia do inventário ao Transportador, a fim de dar o seu acordo sobre a recepção de todos os móveis, pertences e caixas que foram objecto da remoção.  Uma vez que o CLIENTE tenha recebido a mercadoria e o serviço tenha sido concluído (total ou parcialmente, conforme o caso), o CLIENTE terá um prazo de 48 horas para apresentar queixa à Companhia de Transportes sobre qualquer dano ao mobiliário, mercadoria ou embalagem que tenha notado. Uma vez decorrido este período, nenhuma reclamação será aceite.<br>
12:
  title: "Décimo segundo. - Anulação do contrato e adiamento da sua execução"
  body: |
    O cancelamento ou adiamento do serviço de remoção de mobiliário e pertences a pedido do Cliente com menos de 24 horas de antecedência dará lugar a uma indemnização a favor da Empresa de Transportes no montante de 50 Euros (IVA INCLUÍDO) no caso da recolha inicial dos pertences do Cliente. Para outros serviços de transporte, esta compensação é fixada no equivalente ao custo da viagem e dos recursos logísticos que foram disponibilizados para completar a viagem necessária.  Se a notificação for feita mais de 24 horas antes da data acordada para o início da remoção, nenhuma das partes pagará qualquer indemnização.<br><br>

    Após a contratação do serviço, o Cliente pode cancelar e desistir do contrato num prazo máximo de 14 dias úteis, com ou sem justa causa, sem qualquer tipo de penalização, desde que o Serviço não tenha sido executado.  Se o cancelamento do serviço ocorrer nas 24 horas anteriores à data prevista para a recolha da mercadoria, a BOX2BOX terá direito a receber o custo da viagem, bem como as despesas incorridas para a execução da transferência programada, e das quais o CLIENTE deverá ter sido previamente informado.<br><br>

    Para exercer o direito de rescisão, o cliente deve notificar por e-mail para o endereço: contacto@box2boxstorage.com a decisão de rescisão do contrato por meio de uma declaração inequívoca.<br><br>

    Deve ser anexado ao e-mail um ficheiro contendo as seguintes informações:<br><br>
    <div class="flex flex-col justify-start w-full text-left">
      <span>À atenção da BOX2BOX</span>
      <span>Eu/Nòs informo-vos (*) que eu/nòs por este meio me retiro da minha/nossa (*)
        contrato de venda para o seguinte produto (*)/:</span>
      <span>— encomendado em (*)/recebido em (*)</span>
      <span>— nome do(s) consumidor(es)</span>
      <span>— Endereço do(s) consumidor(es)</span>
      <span>— Data</span>
    </div>
13:
  title: "TERCEIRA Jurisdição"
  body: |
    Para a resolução de qualquer litígio que surja entre as partes em relação à interpretação e aplicação do presente contrato, ou de qualquer das estipulações, os Tribunais e Tribunais de Madrid terão jurisdição.
</i18n>
<i18n lang="yaml" locale="mx">
title: "Condiciones generales | Box2box"
meta_description: "Objeto del contrato y descripción del servicio El servicio de traslado y almacenamiento se define como el traslado del domicilio a nuestros centros."
sectionName: "Condiciones generales"
body: |
  El CLIENTE reconoce que comprende y acepta los siguientes términos y condiciones bajo los cuales BOX2BOX prestará el servicio de depósito:<br><br>
  <span><b>Ubicación del depósito (en adelante “UBICACIÓN”):</b> Cualquiera de las instalaciones de BOX2BOX en Ciudad de México, Querétaro, _______________.</span>
1:
  title: "PRIMERO"
  body: |
    BOX2BOX recibe del CLIENTE los bienes referidos en el ANEXO 1 (en adelante “BIENES”).
    <br>
2:
  title: "SEGUNDO"
  body: |
    El CLIENTE autoriza a BOX2BOX a transportar los BIENES a la ubicación del depósito señalada anteriormente,
    en donde éstos serán almacenados durante la prestación del servicio de depósito.
    <br>
3:
  title: "TERCERO"
  body: |
    El CLIENTE manifiesta tener la legal propiedad o posesión de los BIENES,
    así como que éstos son lícitos en términos de la legislación vigente en los Estados Unidos Mexicanos,
    por lo que libera a BOX2BOX y sus agentes de cualquier responsabilidad legal derivada del almacenamiento de estos durante la prestación del servicio.
    <br><br>

    Igualmente, el CLIENTE manifiesta que entre los BIENES no figuran títulos de crédito,
    títulos ejecutivos, o documentos que devenguen intereses, materiales peligrosos, combustible,
    materiales inflamables, tóxicos, basura, desperdicios, substancias controladas, bienes cuya comercialización,
    posesión, transporte y/o almacenamiento requiera de un permiso especial, armas de fuego, armas blancas,
    bienes que hubiesen sido utilizados para cometer algún delito, bienes que desprendan olores, líquidos, artículos comestibles,
    alimentos, bienes perecederos, plantas, seres vivos, hongos, bacterias, microrganismos,
    bienes que hubiesen sido introducidos al territorio nacional de manera ilícita, o bien bienes que el CLIENTE se encuentre impedido por mandato judicial de entregar en depósito.
    <br>
4:
  title: "CUARTO"
  body: |
    El CLIENTE reconoce que BOX2BOX no realizó una revisión detallada de los BIENES que permita constatar la veracidad del inventario señalado en el ANEXO 1,
    por lo que BOX2BOX únicamente será responsable por el resguardo de aquellos bienes descritos en el ANEXO 1 y que hubiesen sido efectivamente recibidos por BOX2BOX.
    <br>
5:
  title: "QUINTO"
  body: |
    El CLIENTE manifiesta que ninguno de los BIENES requieren cuidados especiales,
    por lo que todos ellos pueden permanecer dentro de la UBICACIÓN sin necesidad de que BOX2BOX brinde cuidados o
    atenciones especiales.
    <br>
6:
  title: "SEXTO"
  body: |
    El CLIENTE se obliga a pagar a BOX2BOX el precio señalado en la carátula del presente documento con la periodicidad pactada,
    durante la prestación del servicio de depósito.
    En caso de incumplimiento en los pagos, el CLIENTE se obliga a pagar a BOX2BOX un interés moratorio a razón del 4 % (cuatro por ciento)
    mensual aplicado sobre el saldo insoluto.
    <br>
7:
  title: "SÉPTIMO"
  body: |
    El CLIENTE constituye garantía prendaría sobre los BIENES como garantía del cumplimiento de sus obligaciones en favor de BOX2BOX,
    contraídas al amparo del presente documento.
    <br>
8:
  title: "OCTAVO"
  body: |
    El CLIENTE podrá solicitar a BOX2BOX la devolución de los BIENES con 30 días naturales de anticipación,
    señalando la dirección en la cual deberán de ser entregados por BOX2BOX,
    en cuyo caso el CLIENTE será responsable de recibirlos BIENES en dicha ubicación.
    En esos casos, BOX2BOX, dentro de los 3 días naturales posteriores a la solicitud,
    informará al CLIENTE el costo del servicio de devolución de bienes,
    mismo que deberá de ser cubierto dentro de los 3 días naturales posteriores a dicho informe,
    de lo contrario, se entenderá que el CLIENTE ha cancelado su solicitud de servicio de devolución a domicilio y
    por ende, el CLIENTE estará obligado a recoger los BIENES en la UBICACIÓN.
    Una vez realizado el pago correspondiente al servicio de devolución a domicilio,
    dentro de los 2 días siguientes BOX2BOX informará al CLIENTE la fecha y hora de entrega.
    <br>
9:
  title: "NOVENO"
  body: |
    BOX2BOX no será responsable por el deterioro o menoscabo de los BIENES derivado de desastres naturales (i.e. temblores, incendios, etc.) o
    casos fortuitos (i.e. ataques armados).<br><br>

    En caso de que el CLIENTE solicite la devolución de los BIENES y no se presente en la UBICACIÓN a retirarlos en el día y horario señalado por BOX2BOX,
    se entenderá su deseo de continuar con la prestación del servicio de depósito.<br><br>

    En caso de que el CLIENTE solicite a BOX2BOX el servicio de devolución a domicilio y los agentes de BOX2BOX no sean atendidos por el CLIENTE en el lugar de entrega,
    previo aviso de BOX2BOX al cliente y posterior espera de 15 minutos,
    se entenderá que el CLIENTE desea que la prestación del servicio de depósito continúe por lo que los BIENES serán devueltos a la UBICACIÓN y
    se generará un cargo de descarga equivalente al cargo generado por el servicio de devolución a domicilio,
    el cual deberá de ser cubierto por el CLIENTE dentro de los 10 días naturales posteriores al evento.<br>
10:
  title: "DÉCIMO"
  body: |
    El CLIENTE está de acuerdo con que el tiempo mínimo de estancia es de 3 (tres) meses,
    salvo se haya llegado a un ACUERDO por una temporalidad menor, mismo que únicamente tendrá validez si éste es firmado por BOX2BOX y EL CLIENTE.
    En caso que EL CLIENTE solicite la devolución de sus bienes antes de la permanencia mínima de 3 (tres) meses,
    será penalizado, debiendo pagar en su totalidad los meses faltantes más el costo del transporte que determine BOX2BOX.
    <br><br>

    BOX2BOX podrá terminar en cualquier momento la prestación del servicio,
    en cuyo caso deberá notificar al CLIENTE con 15 días de anticipación para efectos de que el CLIENTE señale,
    dentro de un plazo de 3 días hábiles,
    el lugar en el cual BOX2BOX le hará entrega de los bienes (servicio a domicilio),
    en los términos señalados en el numeral anterior.
    <br><br>

    El CLIENTE acepta que debe pagar a BOX2BOX $500.00 MXN (PAGO DE SEÑAL) al momento de solicitar el servicio,
    este debiendo ser pagado mediante tarjeta de débito/crédito o transferencia, esta última siempre y cuando así lo
    indique BOX2BOX.
    <br><br>

    En cuanto a transporte se refiere, EL CLIENTE debe de comunicar un listado de las cosas, muebles, mercancía, y/o enseres a BOX2BOX y sus representantes.
    También se sugiere que EL CLIENTE envíe evidencia fotográfica de los objetos, para que BOX2BOX y su EQUIPO DE TRANSPORTE puedan determinaran la UNIDAD a
    utilizar para trasladar los bienes desde la ubicación del CLIENTE a las instalaciones de BOX2BOX.
    Todo lo anterior con la finalidad de realizar el servicio de manera satisfactoria. En caso que EL CLIENTE comience a agregar objetos sin previo aviso,
    BOX2BOX queda completamente facultado en a.) cancelar el servicio, o b.) solicitar una unidad adicional de apoyo, misma que le será cobrada al cliente en su totalidad.
    En caso que el cliente opte por la opción “a.)”, el pago de la SEÑAL ($500.00 MXN) no le será reembolsado al CLIENTE y en automático libera BOX2BOX de toda responsabilidad.
    <br><br>

    EL CLIENTE debe pagar la totalidad del transporte pactado con BOX2BOX el día en que se genere la recolección, así
    como la mensualidad a la tarifa o plan correspondiente en el día en que se realiza el servicio. Para el pago de
    mensualidades, EL CLIENTE se compromete a pagar en su totalidad la mensualidad que le corresponde en el día del
    mes que le sea indicado. El no pago a tiempo esta sujeto a pago de intereses moratorios del 4%, que serán
    ejecutados a las dos (2) semanas del impago. Para la devolución de sus bienes, EL CLIENTE debe estar al corriente
    con el 100% de sus pagos, así como liquidar con 24 horas de anticipación la cuota de transporte pactada y
    aceptada en el correo de la SOLICITUD del servicio.
    <br><br>

    En caso de que el CLIENTE no señale el lugar en el que habrá de recibir los bienes de BOX2BOX dentro del plazo antes señalado,
    o bien en el caso de que los BIENES no sean recibidos por el CLIENTE en la ubicación y fechas acordadas,
    se generará un cargo de permanencia extraordinaria equivalente al 100 % (cien por ciento)
    de la contraprestación pactada inicialmente por el depósito de los BIENES,
    misma que se generará con la misma periodicidad que hubiese sido pactada para dicha contraprestación inicial,
    además de que será adicional a ésta.
    Igualmente, en ese supuesto, las partes acuerdan que en ese supuesto se entenderá que el CLIENTE ha abandonado los BIENES,
    por lo que éstos serán considerados bienes mostrencos en términos de lo dispuesto en el artículo 774 del Código Civil Federal y
    sus equivalentes en los Estados, facultando a BOX2BOX a consignarlos a la autoridad correspondiente.
    Ello no liberará al CLIENTE de su obligación de pago por el servicio de depósito hasta la fecha en que los BIENES hubiesen sido consignados por BOX2BOX a las autoridades correspondientes.
    <br>
11:
  title: "DECIMOPRIMERO"
  body: |
    El CLIENTE autoriza a BOX2BOX a mover los BIENES fuera de la ubicación en casos fortuitos o de fuerza mayor (i.e. incendios o desastres naturales),
    siempre y cuando, a criterio de BOX2BOX y sus agentes,
    ello resultase necesario para salvaguardarlos.
    <br>
12:
  title: "DECIMOSEGUNDO"
  body: |
    El CLIENTE se obliga a indemnizar a BOX2BOX por los gastos en los que éste llegase a incurrir derivado de cualquier litigio emprendido por terceros en contra de BOX2BOX y/o
    de sus agentes derivado de la posesión de los BIENES.
    <br>
13:
  title: "DECIMOTERCERO"
  body: |
    BOX2BOX se obliga a conservar los BIENES, por lo que deberá responder,
    de manera subsidiaria a cualquier indemnización que el CLIENTE tenga el derecho a recibir por parte de una institución de seguros por contar con una póliza de seguro,
    por cualquier daño o menoscabo causado como consecuencia de negligencia.
    En ese caso, BOX2BOX deberá informar de manera inmediata al CLIENTE.
    En ese caso, el CLIENTE deberá informar a BOX2BOX en caso de contar con alguna póliza que cubra los daños sufridos.<br><br>

    Tratándose de BIENES que hubiesen sido señalados como “frágiles” dentro del ANEXO 1, BOX2BOX no responderá por daños o menoscabo sufridos.<br><br>

    Adicionalmente, BOX2BOX contará con una póliza de seguro que cubrirá los daños y/o destrucción de los bienes,
    por un monto de hasta $60,000.00 MXN (sesenta mil pesos 00/100),
    por lo que cualquier compensación hacia el CLIENTE por un evento de dicha naturaleza,
    será de manera subsidiaria a la indemnización recibida por el pago de dicha póliza.<br>
14:
  title: "DECIMOCUARTO"
  body: |
    El CLIENTE reconoce que por cuestiones de seguridad no podrá acceder a la UBICACIÓN durante la prestación del servicio de depósito, sin embargo, podrá solicitar a BOX2BOX, hasta una vez por mes, evidencia fotográfica del estado de los BIENES, en cuyo caso, BOX2BOX contará con 5 días naturales para obtener y entregar el material fotográfico. En caso de solicitar dicho servicio de evidencia fotográfica, BOX2BOX informará al CLIENTE, dentro de los 2 días naturales siguientes a la solicitud, el costo del servicio, en cuyo caso el CLIENTE deberá abonar a BOX2BOX el importe dentro de los 2 días naturales siguientes a dicho informe, de lo contrario se entenderá que ha cancelado su solicitud.
    <br>
15:
  title: "DECIMOQUINTO"
  body: |
    Las partes acuerdan tratar como información confidencial a cualquier información que intercambien como consecuencia de la prestación del servicio de depósito y por tanto, abstenerse de divulgarla a terceros sin contar con autorización previa y por escrito de la parte afectada.
    <br><br>

    Asimismo, BOX2BOX se obliga a tomar las medidas necesarias para salvaguardar los datos personales del CLIENTE.
    <br>
16:
  title: "DECIMOSEXTO"
  body: |
    El CLIENTE autoriza a BOX2BOX a practicarle cualquier notificación o comunicación relacionada con el presente documento al correo electrónico que señaló en la carátula del presente documento.
    <br>
17:
  title: "DECIMOSÉPTIMO"
  body: |
    Las partes se someten expresamente a la jurisdicción y competencia de los tribunales de la Ciudad de México, renunciando a cualquier otro fuero o jurisdicción que pudiese corresponderles. Para la interpretación del presente documento las partes acuerdan remitirse a la legislación aplicable en la Ciudad de México.
    <br>
18:
  title: "DECIMOCTAVO"
  body: |
    El CLIENTE reconoce que BOX2BOX le proporcionó una copia del presente documento.
</i18n>

<i18n
  lang="yaml"
  locale="es-en"
  src="@/i18n/views/legal/conditions/en_es.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="fr-en"
  src="@/i18n/views/legal/conditions/en_fr.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="pt-en"
  src="@/i18n/views/legal/conditions/en_pt.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="it-en"
  src="@/i18n/views/legal/conditions/en_it.yaml"
></i18n>
<i18n
  lang="yaml"
  locale="mx-en"
  src="@/i18n/views/legal/conditions/en_mx.yaml"
></i18n>

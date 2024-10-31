<template>
  <div class="mobile:col-span-4 mobileL:col-span-8 mt-10 col-span-12 bg-white">
    <div class="grid-layout">
      <!-- Sección del título general -->
      <div class="mb-10 col-span-full text-center mt-10 row-start-1">
        <h2>
          {{ $t("who_title_suffix") }}
        </h2>
      </div>

      <!-- Text section -->
      <div
        class="col-span-6 col-start-1 mobileL:col-start-1 tablet:col-start-3 tablet:col-span-8 mobileL:col-span-full mobile:col-start-1 mobile:col-span-full row-start-2 z-[2] mt-10"
      >
        <div class="flex flex-col w-full mt-6 space-y-4 text-justify">
          <p class="p2" v-html="body"></p>
        </div>
        <!-- Acordeones debajo del texto -->
        <div class="mt-6">
          <!-- Acordeón 1 -->
          <div class="border-b">
            <button
              @click="toggleAccordion(1)"
              class="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            >
              <span class="font-bold">Depósito</span>
              <span v-if="openAccordion === 1">-</span>
              <span v-else>+</span>
            </button>
            <transition name="accordion">
              <div v-show="openAccordion === 1" class="p-4">
                <p>
                  Los bienes son custodiados en instalaciones seguras, limpias y
                  secas con sistemas de vigilancia.
                </p>
              </div>
            </transition>
          </div>

          <!-- Acordeón 2 -->
          <div class="border-b">
            <button
              @click="toggleAccordion(2)"
              class="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            >
              <span class="font-bold">Transporte</span>
              <span v-if="openAccordion === 2">-</span>
              <span v-else>+</span>
            </button>
            <transition name="accordion">
              <div v-show="openAccordion === 2" class="p-4">
                <p>
                  Proporcionamos transporte seguro para tus objetos, con atención
                  a la puntualidad y seguridad.
                </p>
              </div>
            </transition>
          </div>

          <!-- Acordeón 3 -->
          <div class="border-b">
            <button
              @click="toggleAccordion(3)"
              class="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            >
              <span class="font-bold">Mudanza</span>
              <span v-if="openAccordion === 3">-</span>
              <span v-else>+</span>
            </button>
            <transition name="accordion">
              <div v-show="openAccordion === 3" class="p-4">
                <p>
                  Ofrecemos servicios de mudanza con profesionales capacitados
                  para garantizar un traslado seguro.
                </p>
              </div>
            </transition>
          </div>

          <!-- Acordeón 4 -->
          <div class="border-b">
            <button
              @click="toggleAccordion(4)"
              class="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            >
              <span class="font-bold">Desmontaje y embalaje</span>
              <span v-if="openAccordion === 4">-</span>
              <span v-else>+</span>
            </button>
            <transition name="accordion">
              <div v-show="openAccordion === 4" class="p-4">
                <p>
                  Nuestro equipo ofrece servicios de desmontaje y embalaje para
                  asegurar que tus bienes lleguen en perfectas condiciones.
                </p>
              </div>
            </transition>
          </div>

          <!-- Acordeón 5 -->
          <div class="border-b">
            <button
              @click="toggleAccordion(5)"
              class="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            >
              <span class="font-bold">Inventario digital</span>
              <span v-if="openAccordion === 5">-</span>
              <span v-else>+</span>
            </button>
            <transition name="accordion">
              <div v-show="openAccordion === 5" class="p-4">
                <p>
                  Los bienes depositados se catalogan en un inventario digital al
                  que puedes acceder en línea desde tu cuenta.
                </p>
              </div>
            </transition>
          </div>

          <!-- Acordeón 6 -->
          <div class="border-b">
            <button
              @click="toggleAccordion(6)"
              class="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            >
              <span class="font-bold">Devoluciones parciales</span>
              <span v-if="openAccordion === 6">-</span>
              <span v-else>+</span>
            </button>
            <transition name="accordion">
              <div v-show="openAccordion === 6" class="p-4">
                <p>
                  Puedes solicitar devoluciones parciales de tus bienes cuando los
                  necesites, de manera rápida y eficiente.
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- Image section -->
      <div
        class="col-span-6 col-start-7 row-start-2 tablet:row-start-2 tablet:col-start-3 tablet:col-span-8 mobileL:row-start-2 mobile:row-start-2 mobileL:col-start-2 mobileL:col-span-7 mobile:col-start-1 mobile:col-span-4 z-[1] mt-10 tablet:mt-10 mobileL:mt-10 desktopL:ml-[88px] desktop:ml-[48px] mobile:mt-10 tablet:translate-x-4 mobileL:-translate-x-6 relative"
      >
        <div
          class="flex w-full h-full tablet:justify-center mobileL:justify-center mobile:justify-center translate-y-[-20px]"
        >
          <nuxt-img
            :provider="$config.img_provider"
            :src="currentImage"
            alt="warehouse"
            class="w-auto rounded-md mobile:w-5/6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logisticsGeneralDescription",

  data() {
    return {
      openAccordion: null, // Para controlar qué acordeón está abierto
      images: {
        1: "/aboutus/Depósito BOX2BOX.jpg",
        2: "/aboutus/Transporte BOX2BOX.jpg",
        3: "/aboutus/Trasloco BOX2BOX.jpg",
        4: "/aboutus/Reconocer parciales - BOX2BOX.jpg",
        5: "/aboutus/10.jpg",
        6: "/aboutus/Montaje y desmontaje BOX2BOX.jpg",
      },
      currentImage: "/aboutus/Depósito BOX2BOX.jpg",
    };
  },
  methods: {
    toggleAccordion(index) {
      // Si el acordeón ya está abierto, lo cierra, sino, lo abre y cambia la imagen
      if (this.openAccordion === index) {
        this.openAccordion = null;
      } else {
        this.openAccordion = index;
        this.currentImage = this.images[index];
      }
    },
  },
  computed: {
    body() {
      return this.$t("who_body");
    },
  },
};
</script>

<i18n lang="yaml" locale="es">
who_title_suffix: "Servicios integrados de transporte y almacenaje"
who_body: "En box2box, ofrecemos soluciones integrales de logística para pymes, desde suministros a tiendas hasta envíos locales, asegurando eficiencia y seguridad. <br><br> Nuestras opciones de almacenaje flexibles se adaptan a tus necesidades de espacio e inventario, optimizando tu cadena de suministro para mejorar el rendimiento operativo."
</i18n>
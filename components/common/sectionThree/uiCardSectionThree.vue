<template>
  <div
    class="flex flex-col w-full items-center border-[1px] border-[#EDEDED] bg-white z-50 rounded-xl overflow-hidden"
  >
    <!-- Imagen en la parte superior que cubre todo el ancho -->
    <div class="w-full">
      <nuxt-img
        :provider="$config.img_provider"
        :src="imageSrc"
        :alt="imageAlt"
        class="w-full h-[200px] object-cover" 
      />
    </div>

    <!-- Contenido del card -->
    <div class="p-6">
      <h3 class="text-center text-[24px] font-bold">
        {{ title }}
      </h3>
      <p class="p1 mt-4 text-center">
        {{ header }}
      </p>
      <p class="p2 mt-[6px] text-center">
        {{ body }}
      </p>
      <!-- Nuevo slot para contenido adicional -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "uiCardSectionThree",
  props: {
    title: {
      type: String,
      default: null,
    },
    header: {
      type: String,
      default: null,
    },
    body: {
      type: String,
      default: null,
    },
    imageSrc: {
      type: String,
      default: "/path/to/default-image.jpg", // Ruta predeterminada para la imagen
    },
    imageAlt: {
      type: String,
      default: "Descripción de la imagen", // Valor predeterminado del alt
    },
  },
};
</script>

<style scoped>
/* Opcional para personalizar */
</style>

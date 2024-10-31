<template>
  <div
    class="justify-top flex flex-col w-[360px] h-[312px] mobileL:w-[398px] mobileL:h-[312px] mobile:w-[328px] mobile:h-[334px] border-soft border-[1px] items-center rounded-[12px] relative px-[16px]"
  >
    <div class="absolute h-36 w-36 -top-[78px]">
      <div class="flex w-full justify-center items-center h-full">
        <slot name="image"></slot>
      </div>
    </div>

    <h3
      class="font-manrope px-auto text-[35px] font-extrabold leading-[30px] mt-[65px]"
    >
      <slot name="title"></slot>
    </h3>

    <h4
      class="flex items-center justify-center font-manrope px-auto text-[22px] font-light leading-[30.5px] text-dark"
    >
      <div class="text-center pt-4"><slot name="subtitle"></slot></div>
    </h4>
    <div class="flex items-center justify-center">
      <div class="px-auto text-center">
        <p class="text-[18px] font-manrope leading-[30.5px] pt-1.5">
          <slot name="body"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "uiCardGuarantee",
};
</script>

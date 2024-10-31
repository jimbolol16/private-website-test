<template>
  <form
    class="max-w-[552px] desktopL:px-8 desktopL:py-12 desktop:px-8 desktop:py-12 tablet:px-6 tablet:py-12 mobileL:px-8 mobileL:py-12 mobile:px-5 mobile:py-12 flex flex-col gap-4 bg-salmon rounded-[12px] z-0 mobileL:mt-14 mobile:mt-14"
  >
    <div class="flex flex-col gap-1">
      <p class="form-subheading">{{ $t("form_main_title") }}</p>
      <h3 class="pb-8">{{ $t("form_subtitle") }}</h3>
    </div>
    <ui-field
      :label="$t('form_name')"
      :validation="validationFirstName"
      :displayBackgroundOnError="true"
      :messages="$t('error_first_name')"
    >
      <ui-input
        :placeholder="$t('form_name')"
        v-model.trim="validationFirstName.$model"
        :debounceTime="100"
        @change="handleInputChange($event, 'firstName')"
      ></ui-input>
    </ui-field>
    <ui-field
      :label="$t('form_lastname')"
      :validation="validationLastName"
      :displayBackgroundOnError="true"
      :messages="$t('error_last_name')"
    >
      <ui-input
        :placeholder="$t('form_lastname')"
        v-model.trim="validationLastName.$model"
        :debounceTime="100"
        @change="handleInputChange($event, 'lastName')"
      ></ui-input>
    </ui-field>
    <ui-field
      :label="$t('form_email')"
      :validation="validationEmail"
      :displayBackgroundOnError="true"
      :messages="$t('error_email')"
      :errors="deliverableError ? $t('error_email.email') : null"
      id="email"
    >
      <ui-input
        :placeholder="$t('form_email')"
        v-model.trim="validationEmail.$model"
        :debounceTime="100"
        @change="handleInputChange($event, 'email')"
        @input="email = $event.toLowerCase()"
      ></ui-input>
    </ui-field>
    <ui-field
      :label="$t('form_phone')"
      :validation="validationPhone"
      :displayBackgroundOnError="true"
      :messages="$t('error_phone')"
    >
      <ui-input
        :placeholder="$t('form_phone')"
        v-model.trim="validationPhone.$model"
        type="tel"
        :debounceTime="100"
        @change="handleInputChange($event, 'phone')"
      ></ui-input>
    </ui-field>
    <ui-field v-if="displayInputCode" :label="$t('form_coupon')">
      <ui-input
        :placeholder="$t('form_coupon')"
        v-model.trim="couponCode.$model"
        :debounceTime="100"
        @change="handleInputChangeOnInputCode"
      ></ui-input>
    </ui-field>
    <ui-field :label="$t('form_comment')" :validation="validationComment">
      <ui-textarea
        :placeholder="$t('form_comment')"
        :isResizable="false"
        :rows="4"
        :maxLength="140"
        v-model.trim="validationComment.$model"
      ></ui-textarea>
    </ui-field>
    <div class="flex flex-col gap-2 text-white py-2">
      <ui-field
        :validation="validationPrivacyPolicy"
        :displayBackgroundOnError="true"
      >
        <ui-checkbox v-model="validationPrivacyPolicy.$model" size="large">
          <span class="relative -top-1 text-justify">
            {{ $t("form_checkbox_1_prefix") }}
            <nuxt-link :to="localePath('/legal/privacy')" class="underline">
              {{ $t("form_checkbox_1_span") }}
            </nuxt-link>
            {{ $t("form_checkbox_1_suffix") }}
          </span>
        </ui-checkbox>
      </ui-field>
      <ui-field>
        <ui-checkbox
          v-model="commercialInformationPermission"
          size="large"
        >
          <span class="relative -top-1 text-justify">
            {{ $t("form_checkbox_2_prefix") }}
            <nuxt-link :to="localePath('/legal/privacy')" class="underline">
              {{ $t("form_checkbox_2_span") }}
            </nuxt-link>
          </span>
        </ui-checkbox>
      </ui-field>
    </div>
    <div class="w-fit mobile:w-full">
      <ui-button
        :loading="loading"
        type="white"
        @click.prevent="handleFormSubmission"
        >{{ $t("form_cta") }}</ui-button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    displayInputCode: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      comment: "",
      couponCode: { $model: null },
      privacyPolicyPermission: false,
      commercialInformationPermission: false,
      loading: false,
    };
  },
  methods: {
    handleFormSubmission() {
      // Manejar la lógica de envío del formulario
    },
    handleInputChange() {
      // Manejar cambios en los inputs
    },
  },
};
</script>

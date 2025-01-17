<template>
  <q-dialog v-model="show" :content-class="`master-dialog${customPosition ? '-custom' : ''}`"
            v-on="$listeners" :position="customPosition ? 'right' : 'standard'">
    <!--Content-->
    <div :id="id || 'masterModalContent'" :style="customPosition ? '' : `min-width: ${width}`"
         v-if="show" class="master-dialog__content round relative-position">
      <!--Header-->
      <div :class="`master-dialog__header text-${color} row justify-between items-center box box-auto-height`">
        <!--Title-->
        <div class="master-dialog__header-title row items-center">
          <q-icon v-if="icon" :name="icon" class="q-mr-sm" size="20px"/>
          <b>{{ title }}</b>
        </div>
        <!--Close Button-->
        <q-btn v-close-popup icon="fas fa-times" round color="blue-grey" unelevated class="btn-small" outline
               v-if="!hideCloseAction"/>
      </div>
      <!--Slot content-->
      <div class="master-dialog__body">
        <slot/>
      </div>
      <!--Actions Content-->
      <div class="master-dialog__actions box box-auto-height" v-if="actions && actions.length">
        <div class="row justify-end q-gutter-sm">
          <q-btn v-for="(btn, keyBtn) in actions" :key="keyBtn" v-bind="{...actionBtnProps, ...(btn.props || {})}"
                 @click="btn.action ? btn.action() : null"/>
        </div>
      </div>
      <!--Loading-->
      <inner-loading :visible="loading"/>
    </div>
  </q-dialog>
</template>

<script>
export default {
  props: {
    value: {type: Boolean, default: false},
    loading: {type: Boolean, default: false},
    color: {type: String, default: 'blue-grey'},
    width: {type: String, default: '400px'},
    title: {type: String},
    icon: {type: String},
    actions: {type: Array},
    id: {type: String},
    hideCloseAction: {type: Boolean, default: false},
    customPosition: {type: Boolean, default: false}
  },
  components: {},
  watch: {
    value(newValue, oldValue) {
      if (newValue != oldValue) {
        this.show = this.$clone(newValue)
      }
    },
    show(newValue, oldValue) {
      if (newValue != oldValue) {
        this.$emit('input', this.$clone(newValue))
      }
    }
  },
  mounted() {
    this.$nextTick(function () {
    })
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    actionBtnProps() {
      return {
        rounded: true,
        unelevated: true,
        noCaps: true,
        class: 'btn-small'
      }
    }
  },
  methods: {}
}
</script>

<style lang="stylus">
.master-dialog
  &__content
    background-color $custom-accent-color

  &__header
    margin 16px 16px 0 16px

  &__body
    margin 16px
    overflow-y scroll
    @media screen and (min-width: $breakpoint-md)
      margin 16px 0 16px 16px

  &__actions
    margin 0 16px 16px 16px

    .q-btn
      .q-icon
        font-size 20px

.master-dialog
  .master-dialog__body
    max-height calc(100vh - 240px)

.master-dialog-custom
  .q-dialog__inner
    padding 15px 0 0 0
    width 65vw
    @media screen and (max-width: $breakpoint-md)
      width 90vw
    @media screen and (max-width: $breakpoint-xs)
      width 100vw

  .master-dialog
    &__content
      height 100%
      max-height 100%
      width 100%
      max-width 100%
      border-radius $custom-radius 0 0 0 !important

    &__body
      height calc(100vh - 207px)

</style>

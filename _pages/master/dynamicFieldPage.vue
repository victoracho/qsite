<template>
  <div id="testPageId">
    <div class="row">
      <div v-for="(field, keyField) in fieldsConfig" :key="keyField" class="col-12">
        <dynamic-field class="q-mb-md" :field="field"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  watch: {},
  mounted() {
    this.$nextTick(function () {
    })
  },
  data() {
    return {
      loading: false,
      data: []
    }
  },
  computed: {
    fieldsConfig() {
      let globalData = {
        help: {
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet aspernatur atque, error harum ipsa magni odit recusandae, repellat totam vitae? Impedit inventore necessitatibus reiciendis soluta! Deserunt, harum, sunt.'
        }
      }
      return {
        crud: {
          ...globalData,
          value: null,
          type: 'crud',
          props: {
            crudType: 'select',
            crudData: import('@imagina/qblog/_crud/categories'),
            customData: {
              read: {
                requestParams: {include: 'parent', filter: {status: 1}}
              }
            },
            crudProps: {
              label: 'Type: CRUD'
            },
          },
        },
        input: {
          ...globalData,
          type: 'input',
          props: {label: 'type: input'}
        },
        search: {
          ...globalData,
          type: 'search',
          props: {label: 'type: search'}
        },
        date: {
          ...globalData,
          type: 'date',
          props: {label: 'type: date'}
        },
        hour: {
          ...globalData,
          type: 'hour',
          props: {label: 'type: hour'}
        },
        fullDate: {
          ...globalData,
          type: 'fullDate',
          props: {label: 'type: fullDate'}
        },
        select: {
          ...globalData,
          type: 'select',
          props: {label: 'type: select', options: []}
        },
        treeSelect: {
          ...globalData,
          type: 'treeSelect',
          props: {label: 'type: treeSelect'}
        },
        html: {
          ...globalData,
          type: 'html',
          props: {label: 'type: html'}
        },
        checkbox: {
          ...globalData,
          type: 'checkbox',
          props: {label: 'type: checkbox'}
        },
        media: {
          ...globalData,
          value: {},
          type: 'media',
          props: {
            label: 'type: media',
            zone: 'gallery',
            entity: "Modules\\Iblog\\Entities\\Post",
            entityId: null
          }
        },
        inputColor: {
          ...globalData,
          type: 'inputColor',
          props: {label: 'type: inputColor'}
        },
        toggle: {
          ...globalData,
          type: 'toggle',
          props: {label: 'type: toggle'}
        },
        signature: {
          ...globalData,
          type: 'signature',
          props: {label: 'type: signature'}
        },
        rating: {
          ...globalData,
          type: 'rating',
          props: {label: 'type: rating'}
        },
        selectIcon: {
          ...globalData,
          type: 'selectIcon',
          props: {label: 'type: selectIcon'}
        },
        optionGroup: {
          ...globalData,
          type: 'optionGroup',
          props: {
            label: 'type: optionGroup',
            options: [
              {label: 'opt1', value: 'opt1'},
              {label: 'opt2', value: 'opt2'},
              {label: 'opt3', value: 'opt3'}
            ]
          }
        },
        schedulable: {
          ...globalData,
          type: 'schedulable',
          props: {label: 'type: schedulable'}
        },
        json: {
          ...globalData,
          type: 'json',
          props: {label: 'type: json'}
        },
      }
    }
  },
  methods: {
    init() {
    },
  }
}
</script>
<style lang="stylus">
</style>

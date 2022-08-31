import { ref, Ref } from 'vue'
import { HoraField } from '../types'

interface GridProperties {
  title: Ref<string | undefined>;
  isHeaderStatic: Ref<boolean>;
  isFirstFieldStatic: Ref<boolean>;
  isLastFieldStatic: Ref<boolean>;
  isHeaderVisible: Ref<boolean>;
  isSortable: Ref<boolean>;
  isSelectable: Ref<boolean>;
  isMultipleSelection: Ref<boolean>;
  isSettingsEnabled: Ref<boolean>;
  isSettingsVisible: Ref<boolean>;
  isLoading: Ref<boolean>;
  isNotFoundVisible: Ref<boolean>;
  recordCount: Ref<number>;
}

// Field definition
export const fieldsDefinition: Ref<Array<HoraField>> = ref([])

// Component properties
export const properties: GridProperties = {
  title: ref(undefined),
  isHeaderStatic: ref(false),
  isFirstFieldStatic: ref(false),
  isLastFieldStatic: ref(false),
  isHeaderVisible: ref(false),
  isSortable: ref(false),
  isSelectable: ref(false),
  isMultipleSelection: ref(false),
  isSettingsEnabled: ref(true),
  isSettingsVisible: ref(false),
  isLoading: ref(false),
  isNotFoundVisible: ref(false),
  recordCount: ref(0)
}

export function initGrid (fields: Ref<Array<HoraField>>) {
  /**
   * Prepare field definitions,
   * The minimum requirement on field definitions is the key property,
   * to identify the data property in the JSON object. But we expect some
   * properties, like `order` or `title` that exists.
   * Here we set the minimum field definition properties.
   * @todo may it is better to use a lib like ZOD
   */
   fieldsDefinition.value = fields.value.map(field => {
    field.visible = (field.visible != false)
    field.order = field.order || 0
    field.title = field.title || field.key
    return field
  })
}



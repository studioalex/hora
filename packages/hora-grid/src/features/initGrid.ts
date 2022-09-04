import { ref, Ref } from 'vue'
import { HoraField } from '../types'

export type Fields = Ref<Array<HoraField>>
export type FieldsDefinition = Ref<Array<HoraField>>
export type VisibleFields = Ref<Array<string>>
export interface GridSettings {
  title: Ref<string | undefined>;
  isHeaderStatic: Ref<boolean>;
  isFirstFieldStatic: Ref<boolean>;
  isLastFieldStatic: Ref<boolean>;
  isHeaderVisible: Ref<boolean>;
  isSortable: Ref<boolean>;
  isSelectable: Ref<boolean>;
  isMultipleSelectable: Ref<boolean>;
  isSettingsEnabled: Ref<boolean>;
  isSettingsVisible: Ref<boolean>;
  isLoading: Ref<boolean>;
  isNoDataVisible: Ref<boolean>;
  recordCount: Ref<number>;
  recordSelected: Ref<Array<number>>;
  detailsVisible: Ref<Array<number>>;
}

export interface GridOptions {
  settings: GridSettings
  fieldsDefinition: FieldsDefinition;
  visibleFields: VisibleFields;
}

export function settingsConstructor (): GridSettings {
  return {
    title: ref(undefined),
    isHeaderStatic: ref(false),
    isFirstFieldStatic: ref(false),
    isLastFieldStatic: ref(false),
    isHeaderVisible: ref(false),
    isSortable: ref(false),
    isSelectable: ref(false),
    isMultipleSelectable: ref(false),
    isSettingsEnabled: ref(true),
    isSettingsVisible: ref(false),
    isLoading: ref(false),
    isNoDataVisible: ref(false),
    recordCount: ref(0),
    recordSelected: ref([]),
    detailsVisible: ref([])
  }
}

export function optionsConstructor (): GridOptions {
  return {
    settings: settingsConstructor(),
    fieldsDefinition: ref([]),
    visibleFields: ref([])
  }
}

export function initGrid (fields: Fields) {
  /** Field definition */
  const fieldsDefinition: FieldsDefinition = ref([])

  /** Sort field definition */
  const visibleFields: VisibleFields = ref([])

  /** Component settings */
  const settings: GridSettings = settingsConstructor()

  /**
   * Prepare field definitions,
   * The minimum requirement on field definitions is the key property,
   * to identify the data property in the JSON object. But also we expect
   * some properties, like `order` or `title` that exists.
   * Here we set the minimum field definition properties.
   * @todo may it is better to use a lib like ZOD
   */
   fieldsDefinition.value = fields.value.map(field => {
    field.visible = (field.visible != false)
    field.order = field.order || 0
    field.title = field.title || field.key
    return field
  })

  return {
    fieldsDefinition,
    visibleFields,
    settings
  }
}



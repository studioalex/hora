import { Plugin } from 'vue'

declare const Hora: Exclude<Plugin['install'], undefined>

export interface HoraField {
  key: string;
  title: string;
  visible?: boolean;
  width?: string;
  order?: number;
  sortable?: boolean;
}

export default Hora
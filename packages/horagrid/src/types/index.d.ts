import { Plugin } from 'vue'

declare const Hora: Exclude<Plugin['install'], undefined>

export interface HoraColumn {
  key: string;
  title: string;
  visible?: boolean;
  width?: string;
  order?: number;
  sortable?: boolean;
}

export default Hora
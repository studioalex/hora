import mitt from 'mitt'

type Events = {
  onSort: Array<string>;
  onSelection: Array<string>;
}

const emitter = mitt<Events>()

export {
  emitter
}

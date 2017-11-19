import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');
axios.defaults.headers.common = {
  'X-CSRF-TOKEN': token.content,
  'X-Requested-With': 'XMLHttpRequest'
};

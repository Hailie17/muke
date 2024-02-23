import { reactive } from 'vue'
import axios from 'axios'
interface IResult<T> {
  result: null | T;
  loading: boolean;
  error: any;
}
const useURLLoader = <T>(url: string) => {
  const data: IResult<T> = reactive({
    result: null,
    loading: true,
    error: null
  })
  axios.get(url).then(rawData => {
    data.result = rawData.data
  }).catch(e => {
    data.error = e
  }).finally(() => {
    data.loading = false
  })
  return data
}

export default useURLLoader
import { reactive } from 'vue'
import axios from 'axios'
interface IResult {
  result: any;
  loading: boolean;
  error: any;
}
const useURLLoader = (url: string) => {
  const data: IResult = reactive({
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
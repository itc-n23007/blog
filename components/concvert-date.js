import { parseIOS, format } from 'date-fns'
import ja from 'date-fns/local/ja'

const ConvertDate = ({ dateIOS }) => (
  <time dateTime={dateIOS}>
    {format(parseIOS(dateIOS), 'yyyy年MM月dd日', {
      locale: ja
    })}
  </time>
)
export default ConvertDate

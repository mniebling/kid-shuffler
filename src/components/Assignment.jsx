import { Pair } from './Pair'
import css from './Assignment.module.css'


export function Assignment({ pairs }) {

  return (
    <div className={ css.assignment }>
      <table>
        <tbody>
          { pairs.map((pair, i) => (
            <Pair key={ `${i}` } pair={ pair }></Pair>
          )) }
        </tbody>
      </table>
    </div>
  )
}

import { Pair } from './Pair'
import css from './Assignment.module.css'


export function Assignment({ pairs }) {

  return (
    <div className={ css.assignment }>
      { pairs.map((pair, i) => (
        <Pair key={ `${i}` } pair={ pair }></Pair>
      )) }
    </div>
  )
}

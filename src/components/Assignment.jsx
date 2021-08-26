import { Pair } from './Pair'
import css from './Assignment.module.css'


export function Assignment({ pairs, number }) {

  const colors = [
    'red',
    'orange',
    'gold',
    'green',
    'blue',
    'purple',
    'white',
  ]

  return (
    <div className={ css.assignment }>
      <div>{ number }</div>
      <table className={ css.table }>
        <tbody>
          { pairs.map((pair, i) => (
            <Pair color={ colors[i % 7] } key={ `pair-${i}` } pair={ pair }></Pair>
          )) }
        </tbody>
      </table>
    </div>
  )
}

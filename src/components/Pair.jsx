import css from './Pair.module.css'


export function Pair({ color, pair }) {

  return (
    <tr>
      <td className={ css.color } style={ { backgroundColor: color } }>
        {/* <div className={ css.color }></div> */}
      </td>
      <td>{ pair[0] !== 'SOLO' ? pair[0] : '—' }</td>
      <td>{ pair[1] !== 'SOLO' ? pair[1] : '—' }</td>
    </tr>
  )
}

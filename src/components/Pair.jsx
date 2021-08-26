export function Pair({ pair }) {

  if (pair[0] === ('SOLO')) return <tr><td>{ pair[1] }</td></tr>
  if (pair[1] === ('SOLO')) return <tr><td>{ pair[0] }</td></tr>

  return (
    <tr>
      <td>{ pair[0] }</td>
      <td>{ pair[1] }</td>
    </tr>
  )
}

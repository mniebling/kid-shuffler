export function Pair({ pair }) {

  if (pair[0] === ('SOLO')) return <div>{ pair[1] }</div>
  if (pair[1] === ('SOLO')) return <div>{ pair[0] }</div>

  return <div>{ pair[0] } / { pair[1] }</div>
}

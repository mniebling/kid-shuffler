import { useEffect, useState } from 'react'
import css from './index.module.css'


export default function HomePage() {

  const [kids, setKids] = useState([])
  const [assignments, setAssignments] = useState([])

  function updateKids(event) {

    const parsedKids = event.target.value
      .split('\n')
      .sort()
      .filter(k => !!k)

    if (parsedKids.length % 2 === 1) parsedKids.push('SOLO')

    setKids(parsedKids)
  }

  useEffect(() => {

    const assignments = []
    const kidIndexes = kids.map((_, i) => i).slice(1) // #1 stays in first position and we rotate the rest

    for (let i = 0; i < kids.length - 1; i++) {
      const pairs = []
      const newIndexes = [0].concat(kidIndexes)

      const firstHalf = newIndexes.slice(0, kids.length / 2)
      const secondHalf = newIndexes.slice(kids.length / 2, kids.length).reverse()

      for (let i = 0; i < firstHalf.length; i++) {
        pairs.push([
          kids[firstHalf[i]],
          kids[secondHalf[i]],
        ])
      }

      // rotating the array
      kidIndexes.push(kidIndexes.shift())
      assignments.push(pairs)
    }

    console.info(assignments)
    setAssignments(assignments)
  }, [kids])


  return <>
    <h1>Kid Shuffler</h1>

    <div className={ css.layout }>

      <textarea
        className={ css.inputList }
        onChange={ updateKids }
        placeholder='Enter a list of names, one per line'>
      </textarea>

      <div className={ css.output }>
        { assignments.map((pairs, i) => (
            <div key={ i } className={ css.assignment }>
              { pairs.map((pair, j) => (
                <Pair key={ `${i}-${j}` } pair={ pair }></Pair>
              )) }
            </div>
          )
        ) }
      </div>

    </div>
  </>

  function Pair({ pair }) {

    if (pair[0] === ('SOLO')) return <div>{ pair[1] }</div>
    if (pair[1] === ('SOLO')) return <div>{ pair[0] }</div>

    return <div>{ pair[0] } / { pair[1] }</div>
  }
}

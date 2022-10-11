import { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch', 'Dragon Ball'])

  return (
    <>
        <h1>Gif Expert App</h1>


        <ol>
            { categories.map( item => {
                return <li key={ item }> { item }</li>
            } ) }
        </ol>
    </>
  )
}

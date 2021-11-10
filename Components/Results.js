import Thumbnail from './Thumbnail'
import flipMove from 'react-flip-move'
function Results({requests}) {

    return (
        <flipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {requests.map(result=><Thumbnail key={result.id} result={result}/>)}
        </flipMove>
    )
}

export default Results

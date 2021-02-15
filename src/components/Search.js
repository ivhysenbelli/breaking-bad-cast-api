import {useState} from "react"
function Search({getQuery}) {
    const [text, setText] = useState('');
    const onChange = (q) => {
        setText(q);
        getQuery(q);
    }

    return (
        <section className="search">
            <form action="">
                <input type="text" onChange={(e)=>{
                    onChange(e.target.value);
                }} className="form-control" placeholder="Search characters"/>
            </form>
        </section>
    )
}

export default Search

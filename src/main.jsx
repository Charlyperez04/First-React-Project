import ReactDOM from 'react-dom/client'

export function MainContent(){
    return(
        <>
        <section>
            <h2></h2>
            <input type="text" placeholder="Search" />
        </section>
        <DataComponent img='' title="Hola" text="Adios"/>
        <DataComponent img='' title="Hfola" text="Adios"/>
        <DataComponent img='' title="Hola" text="Adcfev fd fdios"/>

        </>
    )
}

function DataComponent({img, title,text}){
    return(
        <section>
            <img src={img} alt="img" />
            <section>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#">Learn More <img src="" alt="arrow" /></a>
            </section>
        </section>
    )
}
ReactDOM.createRoot(document.getElementById('main-components')).render(
<MainContent />
)



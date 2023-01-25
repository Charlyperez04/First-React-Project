import ReactDOM from 'react-dom/client'

export function MainContent(){
    return(
        <>
        <section className='help-container'>
            <h2>How can we help?</h2>
            <input type="text" placeholder="Search" />
        </section>
        <section>
        <DataComponent img='https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png' title="Using Abstract" text="Abstract lets you manage, version, and document your designs in one place."/>
        <DataComponent img='https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png' title="Manage your account" text="Configure your account settings, such as your email, profile details, and password."/>
        <DataComponent img='https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png' title="Manage organizations, teams, and projects" text="Use Abstract organizations, teams, and projects to organize your people and your work."/>
        <DataComponent img='https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png' title="Manage billing" text="Change subscriptions and payment details" />
        <DataComponent img='https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png' title="Authenticate to Abstract" text="Set up and configure SSO, SCIM, and Just-in-Time provisioning" />
        <DataComponent img='https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png' title="Abstract support" text="Get in touch with a human." />
        </section>
        </>
    )
}

function DataComponent({img, title,text}){
    return(
        <section className='info-component'>
            <img className='info-component-img' src={img} alt="img" />
            <section>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#">Learn More <img src="./src/assets/icons8-flecha-arriba-larga-24.png" alt="arrow" /></a>
            </section>
        </section>
    )
}
ReactDOM.createRoot(document.getElementById('main-components')).render(
<MainContent />
)



import ReactDOM from 'react-dom/client'

export function FooterContent(){
    return(
    <>
    <section className='footer-links-container'>
        <section>
            <h4>Abstract</h4>
            <p>Start Trial</p>
            <p>Pricing</p>
            <p>Download</p>
        </section>
        <section>
            <h4>Resources</h4>
            <p>Blog</p>
            <p>Help</p>
            <p>Center</p>
            <p>Release</p>
            <p>Notes</p>
            <p>Status</p>
        </section>
        <section>
            <h4>Community</h4>
            <p>Twitter</p>
            <p>Linkedln</p>
            <p>Facebook</p>
            <p>Dribbble</p>
            <p>Podcast</p>
        </section>
        <section>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Legal</p>
            <h5>Contact Us</h5>
            <p>info@abstract.com</p>
        </section>
    </section>
    <section className='footer-info-container'>
        <img src="./src/assets/bx-ghost.svg" alt="logo" />
        <p>© Copyright 2022</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
        <a target="_blank" href="https://icons8.com/icon/99966/abajo-derecha-c%C3%ADrculo">Abajo derecha círculo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </section>
    </> 
)}

ReactDOM.createRoot(document.getElementById('footer-components')).render(
    <FooterContent  />
    )
    
    
    
import About from "/components/About.jsx"
import Interests from "/components/Interests.jsx"

export default function MainInfo() {
    return (
        <main>
            <img src="/assets/profile.png"/>
            <h1 id="name">Laura Smith</h1>
            <p id="occupation">Frontend Developer</p>
            <a id="personal-website" href="#">laurasmith.website</a>
            <button id="email-btn"><img src="/assets/email.png"/>Email</button>
            <About />
            <Interests />
        </main>
    )
}
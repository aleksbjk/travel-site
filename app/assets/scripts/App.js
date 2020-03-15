import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu.js'
import RevealOnScroll from './modules/RevealOnScroll.js'
import StickyHeader from './modules/StickyHeader.js'

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let stickyHeader = new StickyHeader();
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if (typeof modal === "undefined") {
            import(/*webpackChunkName: "modal"*/'./modules/Modal.js').then(x => {
                modal = new x.default() // New instance of Modal class
                setTimeout(() => modal.openTheModal(), 20)
             }).catch(() => console.log("There was a problem.")) 
        } else {
            modal.openTheModal()
        }
    } )
})

if(module.hot) {
    module.hot.accept()
}


import { useEffect } from "react"
import { BsChevronUp } from "react-icons/bs"

const MoveToTop = () => {
    useEffect(() => {
        window.onscroll = () => {
            let header = document.getElementById("navigation")
            let btn = document.getElementById("btn-move-to-top")
            let sticky = header.offsetTop

            if (window.pageYOffset > sticky) btn.classList.add("sticky-btn")
            else btn.classList.remove("sticky-btn")
        }
    })
    return (
        <div
            className="btn btn-lg btn-move-to-top"
            onClick={() => window.scrollTo(0, 0)}
            id="btn-move-to-top"
        >
            <BsChevronUp />
        </div>
    )
}

export default MoveToTop

import { BsChevronUp } from "react-icons/bs"

const MoveToTop = () => {
    return (
        <div
            className="btn btn-lg btn-move-to-top sticky-btn"
            onClick={() => window.scrollTo(0, 0)}
        >
            <BsChevronUp />
        </div>
    )
}

export default MoveToTop

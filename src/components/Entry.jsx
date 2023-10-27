import { useState } from "react"
import Modal from "./modal"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Entry(entry) {
    entry = entry.entry;
    const list = useSelector(state => state.list.value)
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [OpenModal, setOpenModal] = useState(false)

    function HandleEditClick() {
                                navigate('/edit', { state: entry})
                            };
                            
    return (
        <div className="card">
            {OpenModal && <Modal
                                    setOpenModal={setOpenModal}
                                    entry={entry}
                                     />}
            <div className="cardBox">
                <ul className="cardList">
                 <div className="contactItem">
                     <span className="contactIcon">👤</span>
                     <span className="contactText"> {entry.name}</span>
                </div>
                <div className="contactItem">
                    <span className="contactIcon">📞</span>
                    <span className="contactText">{entry.phone}</span>
                </div>

                </ul>
                <div className="cardFooter">
                    <button className="deleteBtn smallBtn" onClick={() => {
                        setOpenModal(true)
                    }}>Delete</button>
                    <button className="editBtn smallBtn" onClick={() => {HandleEditClick()}}>edit</button>
                </div>
            </div>
        </div>
    )
}

/*
                            
    return (
        <div className="card">
            {OpenModal && <Modal
                                    setOpenModal={setOpenModal}
                                    entry={entry}
                                     />}
            <div className="cardBox">
                <div className="contactHeader">
                     Contact Details
                 </div>
                 <div className="contactItem">
                     <span className="contactIcon">👤</span>
                     <span className="contactText"> {entry.name}</span>
                </div>
                <div className="contactItem">
                    <span className="contactIcon">📞</span>
                    <span className="contactText">{entry.phone}</span>
                </div>

                <div className="cardFooter">
                    <button className="deleteBtn smallBtn" onClick={() => {
                        setOpenModal(true)
                    }}>Delete</button>
                    <button className="editBtn smallBtn" onClick={() => {HandleEditClick()}}>edit</button>
                </div>
            </div>
        </div>
    )
}
*/
export default Entry


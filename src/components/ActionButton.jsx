import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
export const ActionButton = () => {

    const [modal, setModal] = useState(false);
    const handleClose = () => setModal(false);
    const handleOpen = () => setModal(true);
    let playlistDropdown = ["Example Playlist"];
    let countriesList = playlistDropdown.length > 0
        && playlistDropdown.map((item, i) => {
            return (
                <li key={i}>{item}</li>
            )
        }, this);
    return (
        <div>
            <div class="action-btns">
                <i class="nav-icon fa fa-thumbs-up"></i>
                <i class="nav-icon fa fa-thumbs-down"><span>DISLIKE</span></i>
                <i class="nav-icon  fa fa-square-plus" onClick={handleOpen}></i>
                <i class="nav-icon fa fa-share-nodes"></i>
            </div>
            <Modal show={modal} className="center">
                <Modal.Header closeButton onClick={handleClose}>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {countriesList}
                    </ul>
                </Modal.Body>
            </Modal>
        </div>
    )
}
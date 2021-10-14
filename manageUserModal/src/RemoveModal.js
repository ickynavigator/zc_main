import React from "react"
import styles from "./styles/removemodal.module.css"
import { Button, Modal } from "react-bootstrap"
import { X } from "react-feather"

const defaultImgSrc =
  "https://www.kemhospitalpune.org/wp-content/uploads/2020/12/Profile_avatar_placeholder_large.png"
const defaultConfig = {
  currentMembers: [
    {
      id: "xxx1",
      name: "xxx",
      image: defaultImgSrc
    }
  ],
  removeFunction: id => console.warn("REMOVE >>", id),
  show: true,
  handleClose: () => {},
  title: "Remove users"
}

const RemoveModal = ({ config = defaultConfig }) => {
  const { currentMembers, removeFunction, title, show, handleClose } = config

  return (
    <div className={`${styles.wrapper}`}>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
        scrollable
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentMembers.map((m, i) => (
            <div
              className="container mb-2 d-flex justify-content-between"
              key={m.id || i}
            >
              <div className="">
                <img
                  src={m.image ? m.image : defaultImgSrc}
                  alt=""
                  className="rounded"
                  width="45px"
                  height="45px"
                />
                <span className="mx-2">{m.name}</span>
              </div>
              <Button
                size="sm"
                variant="outline-danger"
                onClick={() => removeFunction(m.id)}
              >
                <X strokeWidth={1} />
              </Button>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RemoveModal

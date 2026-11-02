import { useState } from "react";
import Button from "../ui/Button";
// @ts-expect-error Modal is a JavaScript module without a TypeScript declaration.
import Modal from "../ui/Modal";

export default function OpenCloseModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
      variant="ghost"
            size="sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"}
      </Button>
      {isOpen && (
        <Modal>
          <div>Modal Content</div>
        </Modal>
      )}
    </>
  )
}

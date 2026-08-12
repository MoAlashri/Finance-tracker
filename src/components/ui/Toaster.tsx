import { Toaster as Sonner } from "sonner";

function Toaster() {
  return (
    <Sonner
      position="top-right"
      richColors
      closeButton
      duration={4000}
    />
  );
}

export default Toaster;
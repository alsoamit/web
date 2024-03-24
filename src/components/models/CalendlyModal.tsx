import { Dialog } from "@headlessui/react";
import { InlineWidget } from "react-calendly";

interface ICalendlyModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const pageSettings = {
  backgroundColor: "000",
  hideEventTypeDetails: true,
  hideLandingPageDetails: true,
  primaryColor: "5973DB",
  textColor: "fff",
  padding: 0,
  height: 600,
  hideGdprBanner: true,
};

export default function CalendlyModal({
  isOpen,
  setIsOpen,
}: ICalendlyModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl max-h-[600px] bg-[#121316] overflow-hidden border border-white/10 rounded-md c-scrollbar">
          <div className="">
            <InlineWidget
              styles={{
                height: 800,
              }}
              pageSettings={pageSettings}
              url="https://calendly.com/alegance/discovery-call"
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

import { useEffect, useRef } from "react"

interface DialogModalProps {
    isOpen: boolean,
    onClose: () => void,
    title: string,
    children: React.ReactNode
}

export default function DialogModal(props: DialogModalProps) {
    const {isOpen, onClose, title, children} = props

    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return;

        if (isOpen) {
            if (!dialog.open) dialog.showModal()
        } else {
            if (dialog.open) dialog.close()
        }
    }, [isOpen])
    
    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) {
            onClose()
        }
    };

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onClick={handleBackdropClick}
            className="m-auto w-full max-w-xl rounded-xl bg-[#303030] p-0 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-xs"
        >
            <div className="p-6 text-white">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <h3 className="text-lg font-semibold">{title}</h3>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close modal"
                    className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                >
                    ✕
                </button>
                </div>

                <div className="mt-4 text-sm text-gray-600">{children}</div>
            </div>
        </dialog>
    )
}
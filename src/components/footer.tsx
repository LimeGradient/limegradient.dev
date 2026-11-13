import { useState } from "react"
import DialogModal from "./dialog"

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const [isAttributionDialogOpen, setIsAttributionDialogOpen] = useState(false)

    return (
        <footer className="text-gray-300">
            <div className="mx-auto max-w-7xl p-6 lg:px-8 flex flex-col items-center text-center gap-1">
                <p className="text-xs underline cursor-pointer">
                    <p onClick={() => setIsAttributionDialogOpen(true)}>Open Image Attribution</p>
                </p>
                <p className="text-xs">
                    All product names, logos, brands, trademarks, and registered trademarks are property of their respective owners.
                </p>
                <p className="text-xs text-gray-400">
                    &copy; {currentYear} LimeGradient. All rights reserved.
                </p>
            </div>

            <DialogModal isOpen={isAttributionDialogOpen} onClose={() => setIsAttributionDialogOpen(false)} title="Image Attribution">
                <div className="text-white flex flex-row justify-between">
                    <div className="flex flex-col gap-2 items-center">
                        <img src="/title_background.jpg" width={250} />
                        <a target="_blank" rel="noopener noreferrer" className="underline" href="https://unsplash.com/@mischievous_penguins">Casey Horner</a>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <img src="/about_background.jpg" width={267} />
                        <a target="_blank" rel="noopener noreferrer" className="underline" href="https://unsplash.com/@sgoodgame">Sam Goodgame</a>
                    </div>
                </div>
            </DialogModal>
        </footer>
    )
}
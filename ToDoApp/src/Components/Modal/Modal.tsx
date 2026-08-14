import {createPortal} from 'react-dom'

export function Modal({children}: {children: React.ReactNode}) {
    return createPortal(
        <div className="modalBackground">
            {children}
        </div>,
        document.getElementById('modal')!
    )
}
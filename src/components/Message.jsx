import "./Message.css"
import { useState, useEffect } from 'react'

function Message({msg}){

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 7000)

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <>
            {visible && (
                <div className="msg">
                    <p>{msg}</p>
                </div>
            )}
        </>
        
    )
}

export default Message
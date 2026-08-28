import QRCode from 'react-qr-code'
import { useState } from 'react'

export default function QRCodeGenerator(){

    const [input, setInput] = useState('')
    const [qrCode, setQrCode] = useState('')

    function handleSubmit() {
        setQrCode(input)
        setInput('')
    }
    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input
                onChange={(e)=>{setInput(e.target.value)}}
                type="text" name=""
                value={input}
                placeholder='Enter Name'/>
                <button disabled={input && input.trim()!== ''?false:true} onClick={handleSubmit}>Generate</button>
            </div>
            <div>
                <QRCode id='qr-code-value' value={qrCode}  size={400} bgColor='#fff'/>
            </div>
        </div>
    )
}
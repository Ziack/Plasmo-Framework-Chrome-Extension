import { useState } from "react"

import { sendToBackground, sendToContentScript } from "@plasmohq/messaging"

function IndexPopup() {
  const [txHash, setTxHash] = useState(undefined)
  const [txInput, setTxInput] = useState(0)
  const [txInput2, setTxInput2] = useState(0)
  const [selector, setSelector] = useState("#itero")

  const [csResponse, setCsData] = useState("")

  return (
    <div>
      <input
        type="number"
        value={txInput}
        onChange={(e) => setTxInput(e.target.valueAsNumber)}
      />
      <input
        type="number"
        value={txInput2}
        onChange={(e) => setTxInput2(e.target.valueAsNumber)}
      />

      <button
        onClick={async () => {
          const resp = await sendToBackground({
            name: "hash-tx",
            body: {
              input: txInput,
              input2: txInput2
            }
          })
          setTxHash(resp)
        }}>
        Sum
      </button>

      <p>Sum: {txHash}</p>
      <hr />


      <button
        onClick={async () => {
          const csResponse = await sendToContentScript({
            name: "query-selector-text",
            body: txHash
          })
          setCsData(csResponse)
        }}>
        Sent to Content Script
      </button>
      <br />
      <label>Text Data:</label>
      <p>{csResponse}</p>
      <footer>Crafted by @PlamoHQ</footer>
    </div>
  )
}

export default IndexPopup

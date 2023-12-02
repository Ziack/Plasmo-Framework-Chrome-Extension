import type { PlasmoCSConfig } from "plasmo"

import { useMessage } from "@plasmohq/messaging/hook"

export const config: PlasmoCSConfig = {
  all_frames: true
}

const QueryTextAnywhere = () => {
  const { data } = useMessage<string, string>(async (req, res) => {
    res.send("Hello! " + req.body)
  })
  return (
    <div
      style={{
        padding: 8,
        background: "#333",
        color: "red"
      }}>
      Sum is: {data}
    </div>
  )
}

export default QueryTextAnywhere

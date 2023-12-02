import type { PlasmoMessaging } from "@plasmohq/messaging"


export type RequestBody = {
  input: number,
  input2: number
}

export type RequestResponse = number

const handler: PlasmoMessaging.MessageHandler<
  RequestBody,
  RequestResponse
> = async (req, res) => {
  const { input } = req.body
  const { input2 } = req.body

  res.send(input + input2)
}

export default handler

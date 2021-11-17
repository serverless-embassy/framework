import { CloudInputArgumentType } from "./typings/args"

export let isDEBUG = false

export const initMeme = async ({isDebug = false}: {
  isDebug?: boolean
}) => {
  isDEBUG = isDebug
}

export const initMemeReq = async ({reqest}: {
  reqest: CloudInputArgumentType,
  isDebug?: boolean
}) => {
  isDEBUG = isDebug
}
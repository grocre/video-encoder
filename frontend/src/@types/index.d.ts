import { InputHTMLAttributes } from "react"
import { AxiosResponse } from "axios"
interface VideoObject {
    busca: string
    channel_name: string
    channel_url: string
    created_at: Date
    date: string
    descricao: string
    duracao: number
    id: string
    thumb: string
    title: string
    views: number
}

interface VideoResultProps extends InputHTMLAttributes {
    videos: VideoObject[]
}

export type {VideoObject, VideoResultProps, VideoResultProps}
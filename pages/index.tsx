import { Box, Button, Stack } from "@mui/material"
import React, { useState } from "react"
import Chatting from "./kakao/tap/chat"
import Gift from "./kakao/tap/gift"



export default function Kakao() {

    // arr = [3, 4, 5]
    // arr[0] = 10
    // console.log(parent[0], parent[0])
    // console.log(x, v)

    const [content, setContent] = useState<any>('내용입니다.')
    const [title, setTitle] = useState<any>('카카오톡')
    // const state = useState('내용입니다.')
    // state[0] = content
    // state[1] = setContent
    // let content = '내용입니다.'

    function onClickMember() {
        setContent('멤버 내용입니다.')
        setTitle('카카오톡 : 회원')

        // content = '멤버 내용입니다.'
        // Kakao() 화면 다시 그리는(렌더) 역할.
    }

    function onClickChat() {
        setContent(<Chatting />)
        setTitle('카카오톡 : 채팅')
    }

    function onClickGift() {
        setContent(<Gift />)
        setTitle('카카오톡 : 선물하기')
    }

    function onClickMore() {
        setContent('더보기 내용입니다.')
        setTitle('카카오톡 : 더보기')
    }

    return <>
        <Stack sx={{ height: '100vh' }}>
            <Stack direction="row" alignItems="center" sx={{ background: 'yellow', height: 50, px: 2 }}>
                <Box sx={{ flexGrow: 1, fontSize: 20, fontWeight: "Bold" }}>{title}</Box>
                <Button variant="outlined">설정</Button>
            </Stack>

            <Box sx={{ flexGrow: 1 }}>{content}</Box>

            <Stack direction="row" justifyContent="space-around" sx={{ height: 50, background: 'gray' }}>
                <Button sx={{ color: 'white' }} onClick={onClickMember} >회원</Button>
                <Button sx={{ color: 'white' }} onClick={onClickChat}>채팅</Button>
                <Button sx={{ color: 'white' }} onClick={onClickGift}>선물하기</Button>
                <Button sx={{ color: 'white' }} onClick={onClickMore}>더보기</Button>
            </Stack>
        </Stack>
    </>
}
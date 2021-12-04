import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Button, Stack } from "@mui/material"
import { setDefaultResultOrder } from "dns"
import { useRouter } from "next/router"
import styles from '../../styles/Home.module.css'
import React, { useState } from "react"
import Chatting from "./tap/chat"
import Gift from "./tap/gift"



export default function Kakao() {

    

    const [content, setContent] = useState<any>('홈 화면입니다.')
    const [title, setTitle] = useState<any>('카카오톡')
    const router = useRouter()
    const fontSize = localStorage.getItem('fontSize')

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

    function onClickSetting() {
        router.push('/kakao/setting')
    }

    return <>
        <Stack sx={{ height: '100vh' }}>
            <Stack direction="row" alignItems="center" sx={{ background: 'yellow', height: 50, px: 2 }}>
                <Box sx={{ flexGrow: 1, fontSize: {fontSize}, fontWeight: "Bold" }}><a href="">{title}</a></Box>
                <Button variant="outlined" onClick={onClickSetting}>회원설정</Button>
            </Stack>

            <main className={styles.main}>
                <h1 className={styles.title}>
                   <Box sx={{flexGrow: 1}}>{content}</Box>
                </h1>
            </main>

            <Stack direction="row" justifyContent="space-around" sx={{ height: 50, background: 'gray' }}>
                <Button sx={{ color: 'white' }} onClick={onClickMember} >회원</Button>
                <Button sx={{ color: 'white' }} onClick={onClickChat}>채팅</Button>
                <Button sx={{ color: 'white' }} onClick={onClickGift}>선물하기</Button>
                <Button sx={{ color: 'white' }} onClick={onClickMore}>더보기</Button>
            </Stack>
        </Stack>
    </>
}
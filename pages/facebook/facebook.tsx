import { Box, Button, Stack } from "@mui/material";
import { fontStyle } from "@mui/system";
import React, { useState } from "react";

export default function Kakao() {

    const [content, setContent] = useState('내용입니다.')
    // let content = '내용입니다.'

    function onClickHome() {
        console.log('member')
        setContent('홈 내용입니다.')

        // content = '멤버 내용입니다.'
        // Kakao() 화면 다시 그리는(렌더) 역할.
    }

    function onClickMember() {
        setContent('회원 내용입니다.')
    }

    function onClickGroup() {
        setContent('그룹 내용입니다.')
    }

    function onClickGaming() {
        setContent('게이밍 내용입니다.')
    }

    return <>
        <Stack sx={{ height: '100vh' }}>
            <Stack direction="row" alignItems="center" sx={{ background: 'blue', height: 50, px: 2 }}>
                <Box  color= 'white' sx={{ flexGrow: 1, fontSize: 20, fontWeight: "Bold" }}>FACEBOOK</Box>
                <Button variant="contained" sx={{ color: 'white' }}>설정</Button>
            </Stack>

            <Stack direction="row" justifyContent="space-around" sx={{ height: 50, background: 'gray' }}>
                <Button sx={{ color: 'white' }} onClick={onClickHome} >홈</Button>
                <Button sx={{ color: 'white' }} onClick={onClickMember}>회원</Button>
                <Button sx={{ color: 'white' }} onClick={onClickGroup}>그룹</Button>
                <Button sx={{ color: 'white' }} onClick={onClickGaming}>게이밍</Button>
            </Stack>

            <Box sx={{flexGrow: 1}}>{content}</Box>

        </Stack>
    </>
}
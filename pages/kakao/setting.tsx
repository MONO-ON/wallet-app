import { Box, Button, Stack, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Setting() {

    const [color, setColor] = useState('')
    const [fontSize, setfontSize] = useState(16)
    const router = useRouter()

    function onChangeColor(e: React.ChangeEvent<HTMLInputElement>) {
        // console.log(e.currentTarget.value)
        setColor(e.currentTarget.value)
    }

    function onChangeFontSize(e: React.ChangeEvent<HTMLInputElement>) {
        // console.log(e.currentTarget.value)
        setfontSize(Number(e.currentTarget.value))
    }

    function onClickSave() {
        localStorage.setItem('color', color)
        localStorage.setItem('fontSize', String(fontSize))
        router.back()
    }

    return <>
        <Stack direction="row" sx={{ height: 50, background: 'red' }}>
            <Box sx={{ flexGrow: 1 }}>설정</Box>
            <Button onClick={onClickSave}>저장</Button>
        </Stack>

        <TextField label="색깔" sx={{ m: 2 }} onChange={onChangeColor} />
        <TextField label="폰트 크기" sx={{ m: 2 }} onChange={onChangeFontSize} />
    </>
}
import { Box, Button, Stack } from "@mui/material";
import React from "react";

export default function Gift() {
    return <>
        <Box sx={{ flexGrow: 1 }}>
            <Stack direction="row">
                <Button>선물하기</Button>
                <Button>쇼핑하기</Button>
                <Button>쇼핑라이브</Button>
            </Stack>
        </Box>
    </>
}
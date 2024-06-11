import React from "react";
import { Stack, Button } from "react-bootstrap";

const Todo = () => {
    return (
        <>
            <Stack className="mt-5 mb-5" gap={3}>
                <Button className="w-75 m-auto" variant="light">
                    <p className="">やることリスト</p>
                </Button>
                <Button className="w-75 m-auto" variant="light">
                    <p className="fs-4">読書</p>
                </Button>
                <Button className="w-75 m-auto" variant="light">
                    <p className="">復習課題</p>
                </Button>
                <Button className="w-75 m-auto" variant="light">
                    <p className="">復習課題</p>
                </Button>
                <Button className="w-75 m-auto" variant="light">
                    <p className="">復習課題</p>
                </Button>
                <Button className="w-75 m-auto" variant="light">
                    <p className="">復習課題</p>
                </Button>
            </Stack>
        </>
    );
};

export default Todo;

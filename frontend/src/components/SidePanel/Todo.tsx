import React from "react";
import { Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Todo = () => {
    let EventList = [
        {
            titel: "ZeloPlus授業",
            user_id: "0000",
        },
        {
            titel: "読書",
            user_id: "0000",
        },
        {
            titel: "復習課題",
            user_id: "0000",
        },
    ];

    let user = "0000";

    // userとList内のuser_idが同じであればリストに表示
    const Users_Event = EventList.map((List) => {
        if (List.user_id == user) {
            return (
                <button type="button" className="button-css w-75 m-auto d-flex gap-3">
                    <div key={"default-checkbox"} className="ml-3 mb-3 ms-3 button-font">
                        <Form.Check type="checkbox" id={`default-checkbox`} />
                    </div>
                    <p className="button-font">{List.titel}</p>
                </button>
            );
        } else {
            return <></>;
        }
    });

    return (
        <>
            <Stack className="mt-5 mb-5" gap={3}>
                {Users_Event}
            </Stack>
        </>
    );
};

export default Todo;

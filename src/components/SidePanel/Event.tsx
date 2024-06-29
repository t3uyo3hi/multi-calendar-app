import React from "react";
import { Stack } from "react-bootstrap";

const Event = () => {
    let EventList = [
        {
            titel: "ZeloPlus授業",
            user_id: "000",
            start_datetime: "12:00",
            end_datetime: "14:00",
        },
        {
            titel: "読書",
            user_id: "0000",
            start_datetime: "14:00",
            end_datetime: "15:00",
        },
        {
            titel: "復習課題",
            user_id: "0000",
            start_datetime: "16:00",
            end_datetime: "18:00",
        },
    ];

    let user = "0000";

    // userとList内のuser_idが同じであればリストに表示
    const Users_Event = EventList.map((List) => {
        if (List.user_id == user) {
            return (
                <button className="button-css w-75 m-auto">
                    <span className="button-font datetime-font ms-3 ">
                        {List.start_datetime}-{List.end_datetime}
                    </span>
                    <p className="button-font ms-3 ">{List.titel}</p>
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

export default Event;

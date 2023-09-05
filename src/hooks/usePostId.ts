import { useParams } from "react-router-dom";

const usePostId = () => {
    const param = Number(useParams().id)
    const id  = Number.isNaN(param) ? 1 : param

    return id
};

export { usePostId }
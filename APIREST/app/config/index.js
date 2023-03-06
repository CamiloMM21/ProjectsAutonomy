import app from "../app"
import message from "./message";

const caseEntorno = () => {
    switch (process.env.NODE_ENV) {
        case "production":
            message(`Api lista en el puerto ${app.get("PORT")}`, "danger");
            break;
        case "develop":
            message(`Api lista en el puerto ${app.get("PORT")}`, "success");
            break;
        case "qa":
            message(`Api lista en el puerto ${app.get("PORT")}`, "warning");
            break;
        default:
            message(`Api lista en el puerto ${app.get("PORT")}`, "success");
            break;
    }
}

export default caseEntorno;
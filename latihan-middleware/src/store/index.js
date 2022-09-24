import { atom } from "recoil";

const autenticated = atom({
    key: "autenticated",
    default: {
        check: false,
        user: {
            name: "Soffan M. Hidayat",
        },
    },
});

export { autenticated };

import { IUser, IUserAdditionalShorts } from "@app/interface/user";

export const C_EMPTY_USER: IUser = {
    basicInfo: {
        name: '',
        birthday: '',
        lastname: '',
        gender: ''
    },
    contact: {
        email: '',
        phone: ''
    },
    address: {
        city: '',
        country: '',
        street: '',
        postalCode: ''
    },
    additionals: {
        description: '',
        hobbys: [],
        shortInfos: []
    }
}

export const C_SAMPLE_USER: IUser = {
    basicInfo: {
        name: "qwe",
        birthday: "2024-09-13",
        lastname: "",
        gender: "male"
    },
    contact: {
        email: "qdsa@asd",
        phone: ""
    },
    address: {
        city: "Bielsko-Biała",
        country: "Polska",
        street: "Michała Grażyńskiego 37",
        postalCode: "43-300"
    },
    additionals: {
        description: "qweasdzxcasdqwasd",
        hobbys: [
            "hobby1",
            "hobby2"
        ],
        shortInfos: [
            {
                title: "Is Visible?",
                answer: "Yes",
                visible: true
            },
            {
                title: "Is Visible",
                answer: "No!",
                visible: false
            }
        ]
    } 
}

export const SHORT_INFO: IUserAdditionalShorts = {
    title: '',
    answer: '',
    visible: true
}
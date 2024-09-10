import { IUser } from "@app/interface/user";

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
        shotrInfos: []
    }
}
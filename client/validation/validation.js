import * as yup from 'yup';

export const formSchema = yup.object({
    title: yup.string().required().min(3).max(50),
    image: yup.string().required(),
    homeType: yup.string().required(),
    price: yup.number().required(),
    yearBuilt: yup.number().required(),
    address: yup.string().required().min(10).max(50),
    description: yup.string().required().min(5),
})
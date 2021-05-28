/* Core */
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('почта должна быть настоящей')
        .required('*'),
    password: yup
        .string()
        .required('*'),
});

import { lorem, system } from 'faker';
import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина — ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина — ${max} символов';

export const schema = yup.object().shape({
    title: yup
        .string()
        .min(5, tooShortMessage)
        .max(40, tooLongMessage)
        .required('*'),
    preview: yup
        .string()
        .min(15, tooShortMessage)
        .max(200, tooLongMessage)
        .required('*'),
    body: yup
        .string()
        .min(200, tooShortMessage)
        .max(2500, tooLongMessage)
        .required('*'),
    tagId: yup.string().required('*'),
    name:  yup
        .string()
        .required('*'),
    email: yup
        .string()
        .required('*'),
    password: yup
        .string()
        .required('*'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Пароли должны совпадать')
        .required('*'),
});


export const getNewTipPlaceholder = () => {
    const version = system.semver();

    return {
        title:   `Повторение мать учения! v${version}`,
        preview: `Семь раз отмерь — один раз отрежь v${version}`,
        body:    lorem.words(35),
        tagId:   '',
    };
};

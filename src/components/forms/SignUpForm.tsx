import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignUp } from '../../hooks';
import { Input } from './elements';
import { schema } from './PublishTipForm';

export const SignUpForm = () => {
    const createData = useSignUp();
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const submitForm = form.handleSubmit(async (newData) => {
        // @ts-ignore
        await createData.mutateAsync(newData);
        form.reset();
    });

    return (
        <>
            <section className = 'publish-tip'>
                <form onSubmit = { submitForm }>
                    <fieldset>
                        <legend>Ваши контактные данные</legend>
                        <Input
                            label = 'Имя и фамилия'
                            placeholder = 'Имя и фамилия'
                            error = { form.formState.errors.name }
                            register = { form.register('name') } />
                        <Input
                            label = 'Электропочта'
                            error = { form.formState.errors.email }
                            placeholder = 'Электропочта'
                            register = { form.register('email') } />
                        <Input
                            label = 'Пароль'
                            error = { form.formState.errors.password }
                            placeholder = 'Пароль'
                            register = { form.register('password') } />
                        <Input
                            label = 'Подтверждение пароля'
                            error = { form.formState.errors.password }
                            placeholder = 'Пароль'
                            register = { form.register('confirmPassword') } />

                        <input type = 'submit' value = 'Обновить профиль' />
                    </fieldset>
                    <p>Поздравляем! Вы успешно прошли регистрацию. Теперь вы можете&nbsp;
                        <Link to = '/login'><span style = { { textDecoration: 'underline' } }>залогиниться</span></Link>
                        .
                    </p>
                </form>
            </section>
        </>
    );
};

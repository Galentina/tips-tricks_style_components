import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from '../../hooks';
import { Input } from './elements';
import { schema } from './PublishTipForm';

export const LoginForm = () => {
    const login = useLogin();
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const submitForm = form.handleSubmit(async (data) => {
        // @ts-ignore
        await login.mutateAsync(data);
        form.reset();
    });


    return (
        <>
            <section className = 'publish-tip'>
                <form onSubmit = { submitForm }>
                    <fieldset>
                        <legend>Залогиниться</legend>
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

                        <input type = 'submit' value = 'Войти' />
                    </fieldset>
                    <p>Если у вас до сих пор нет учётной записи, вы можете&nbsp;
                        <Link to = '/profile'><span style = { { textDecoration: 'underline' } }>зарегистрироваться</span></Link>
                        .
                    </p>
                </form>
            </section>
        </>
    );
};
